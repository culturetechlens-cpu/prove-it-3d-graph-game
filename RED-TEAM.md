# RED-TEAM — Prove It! 3D Graph Game

**Date:** 2026-11-15 · **Reviewer:** Dion, at William Maxey's direction ("red team first") · **Gate:** this review ran *before* any GitHub push. The push stays held until the blockers below are fixed and the two owner decisions at the end are William's.
**Standards applied:** CTL's own — evidence before authority; grades never upgraded; unknowns never invented; no silent edits (fixes below are dated and stated); limitations stated in the work.

## Blockers found — and fixed 2026-11-15

### 1. CRITICAL — An invented verdict on the Sampson card
The first build stamped Henry Sampson **FALSE**. CTL-DR-TECH-001 published **no verdict word** for Sampson: his case is in the red-team challenge pass, *not* the 12-case table, and the pilot deck (04, card 13) prints only "MYTH." Assigning FALSE invented a grade — the exact violation the game itself teaches against.
**Fix:** verdict is now **MYTH** in `game.js` and `data/cards.json`, the receipt carries the note explaining why, and Sampson's node recolours grey (not FALSE-red).

### 2. MAJOR — Decorative lines were called "relationships"
The 14 node-to-node links and 13 hub lines were chosen by the builder for layout/navigation. The first README and in-game status called them "27 relationships shown" — a reader could cite them as CultureTechLens graph relationships. They are not sourced from the graph at all.
**Fix:** relabelled everywhere (README, in-game status, `data/cards.json` `linksNote`, code comment) as **game-layout connectors, not CTL graph relationships, not citable as such**.

### 3. MAJOR — Scoring silently diverged from the production kit
The kit's scoring is grade-weighted (VERIFIED 100 / SUPPORTED 75 / PROVISIONAL 50; disputed/unverifiable = bonus up to 50). The game scored flat 100 with no disclosure.
**Fix:** the adaptation is now stated in the help panel and README: Episode 1 cards carry verdicts, not those grades, so solo play scores flat — disclosed, not silent. The McCoy bonus (50) follows the kit's bonus ceiling.

### 4. MINOR — Played cards locked away their receipts
After playing a card, reopening it hid the result panel — the receipt (the whole point) couldn't be re-read.
**Fix:** results are stored per card and re-shown on reopen.

### 5. MINOR — Dragging to orbit also opened cards
Picking ran on `pointerdown`, so starting a rotate-drag on a node opened its card.
**Fix:** picking now runs on `pointerup` only when the pointer moved ≤6px.

### 6. MINOR — Mobile players lost the node list
The ≤820px CSS hid the whole help panel, leaving touch players with 3D tapping only.
**Fix:** help panel is now a compact top sheet on mobile; the card panel is a bottom sheet; the footer is hidden on small screens instead.

## Checked and passed

- **All other 12 verdicts** match the pilot kit exactly (FALSE ×4 besides the corrected card: Jackson, Carver, Emeagwali, Walker; EXAGGERATED ×6: Morgan ×2, Latimer, Banneker, Boykin, Woods; CONFIRMED: Johnson; UNVERIFIABLE: McCoy).
- **Patent numbers** on every receipt match the kit (1,475,024 / 1,113,675 / 252,386 / 2,972,726 / 4,591,071 / 129,843) — none added, none altered.
- **Branding:** Global Emblem globe (confirmed current mark, 2026-11-15), closed palette hexes exact in CSS, serif wordmark, both slogans present. No Orbit Africa (retired) imagery anywhere in the repo.
- **No funeral/homegoing material** in any card — per William's standing rule.
- **Logic test** (Node): 13 cards, `game.js` ↔ `data/cards.json` in sync, scoring verified — re-run after the fixes above.

## Known limitations (stated, not hidden)

- WebGL rendering has **not** been browser-verified; the Node test verifies data and logic only. First live check happens on the GitHub Pages URL.
- ~~The repo version loads Three.js from the unpkg CDN~~ **FIXED 2026-11-15 (William: "fix first"):** Three.js 0.187.0 is now vendored in `vendor/` with its MIT licence, the import map is local, and the Global Emblem is embedded in `index.html` as a data URI — the repo is now all text files (which also makes it pushable through the GitHub connector, whose snapshot route accepts UTF-8 files only, not binaries). The binary asset files were removed from the repo; masters remain in CTL's brand files.
- "No tracking" means the game code adds none; GitHub Pages itself sees ordinary request logs.
- The name "Prove It!" has a public-web collision check only (pilot kit file 06) — **not** a legal/trademark opinion.

## Decisions still William's (why the push is held, not just slow)

1. **Owner:** the connected GitHub account is the personal login **culturetechlens-cpu**, while CTL's flagship repos live under the **culturetechlens** org. Creating the repo under the wrong owner by default would be a one-face violation. William picks: personal account or org.
2. **GitHub Pages:** the GitHub connector tools available here cannot enable Pages — that toggle lives in the repo's web Settings. After the push, either William enables Pages (Settings → Pages → main / root) or authorizes a browser session for it. The game cannot be called "live" until that is done and the URL is opened and checked.

## Addendum — 8 cards added 2026-11-15 (William: "add 8 more, and add different colors")

Expansion red-team, same standards: the only fully sourced unplayed cards in the pilot kit were Episode 2's 6 Photo Cards and its 2 Story Check narratives — exactly 8. No card was written from scratch.
- **Photo Cards P-01–P-06:** questions, receipts, makers, rights lines (all Public Domain) and register IDs (‑001/‑002/‑003/‑005 CLEARED; P-04/P-06 publish no ID and the game says so) copied from the kit. The game does **not** reproduce the photographs — it links to the Cited Photo Archive; that limitation is stated in the README. P-03's published limit (no street address on its evidence card) is carried on its receipt.
- **Story Check T-01/T-02:** the kit marks their per-claim grades TO MINE. They are therefore played **only as bonus cards**, stamped with the dossier page's own published framing (NOT YET VERIFIED / DISPUTED), never as settled answers. If William later mines the full CTL-DR-PLACE-001 package, these two cards get their real grades by a dated correction, not a silent edit.
- **Colours:** node colour now encodes round — gold Patent Edition, sky Photo Card, paper Story Check — with a legend in the help panel; played nodes recolour by published verdict/status as before. Colour is never the only signal: every node is also labelled, listed by name, and its stamp is a word.

## Post-launch catch — 2026-11-15 (added after GitHub Pages verification)

The first live-browser verification of the published Pages site (2026-11-15, 1:12–1:22 AM CT) caught a launch-breaking defect the Node data tests could not: the vendored `vendor/three.module.js` is Three.js 0.187.0's **split build** and imports `./three.core.js`, which had not been vendored. The module import failed, `game.js` never ran, and the page sat on "Loading graph…" (header and branding rendered fine). The standalone preview was unaffected — its bundle inlines three.core.js. **Fix:** `vendor/three.core.js` (Three.js 0.187.0, matching build) added to the repo; `three.module.js` verified loading in Node (REVISION 187) before push. Lesson recorded: vendoring a library means vendoring its whole dependency closure, and only a real browser run verifies a WebGL page.
