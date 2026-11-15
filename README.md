# Prove It! — The CultureTechLens Game · 3D Graph

**An Afro-American game inside a 3D knowledge graph, built with Three.js.**
*Don't just know it. Prove it.*

A visual institution for the African American community and the entire African diaspora. We lead with media.

The Global Emblem is embedded directly in `index.html` (base64) so the page carries its own branding with no external image file.

## Play it

- **GitHub Pages:** enable Pages for this repo (Settings → Pages → Deploy from branch → `main` / root), then open the published URL.
- **Locally:** serve the folder, don't open as a file (ES modules need http):
  ```bash
  npx serve .   # or: python3 -m http.server 8000
  ```
  Then open http://localhost:8000

## How to play — Myth or Record?

1. Drag to orbit the 3D graph, scroll to zoom. Gold nodes are unplayed cards; the gold hub is the source package.
2. Click a node (or pick a name in the left panel) and play its card. **21 cards, 3 rounds, 3 node colours:** gold = Patent Edition, sky = Photo Card, paper = Story Check.
3. Call it **MYTH** or **RECORD**. The Elijah McCoy card is **UNVERIFIABLE** — call Bonus there.
4. The sequence never changes, per the Prove It! production kit: claim → vote locks → **GRADE STAMP** → receipt → points.
   - Correct call: **100 points** · Wrong: 0 · McCoy bonus: 50
5. After the reveal, the node recolours by its published verdict — green CONFIRMED, red FALSE, orange EXAGGERATED, purple UNVERIFIABLE. Colour is decoration; the stamp word carries the meaning.

## Branding — applied exactly, nothing invented

- **Mark:** the Global Emblem globe — black globe in a thin gold orbit ring, facing the Americas and Africa (North America in Pan-African red/black/green, South America in Brazil's colours, Africa in Ghana's red/gold/green with the black star). Confirmed by William Maxey, 2026-11-15, as the current CultureTechLens logo. Orbit Africa is retired and is **not** used.
- **Closed palette:** Ink `#16150F` · Paper `#F7F2E7` · Gold `#C9A227` (on-light `#AC8511`) · Red `#B3282D`
- **Wordmark:** CultureTechLens in a serif face (DejaVu Serif / Georgia), "Lens" in gold
- **Master slogan:** *Culture, Clearly Seen.*
- **Game tagline:** *Don't just know it. Prove it.*
- **Motto:** *Every claim graded. Every source named. Every correction public.*

## Sources & standards

All 21 cards come **only** from published CultureTechLens packages — no facts were added for the game. The 8 added 2026-11-15 are the Episode 2 pilot's 6 Photo Cards (all Public Domain, rights lines published; the game shows their questions and receipts in text — the photographs themselves live in the Cited Photo Archive) and its 2 Story Check narratives, which play **only as bonus cards** under the dossier's own published framing (not yet verified / conflicting sources); their per-claim grades remain TO MINE in the pilot kit and none was invented here. Photo cards are multiple-choice (correct = 100); Story Check and McCoy are bonus (50). Maximum score: 1,950.

- **Sources (2 packages):** CTL-DR-TECH-001 — *Black Technology* (13 Patent cards) https://culturetechlens.com/research/black-technology/ · DOI: [10.5281/zenodo.23173961](https://doi.org/10.5281/zenodo.23173961) — and CTL-DR-PLACE-001 — *63rd Street* (6 Photo + 2 Story Check cards, added 2026-11-15) https://culturetechlens.com/research/63rd-street/ · DOI: [10.5281/zenodo.23353793](https://doi.org/10.5281/zenodo.23353793)
- **Snapshot:** Prove It! pilot cards, checked 2026-11-14 (13 Patent cards: 12 red-team myth adjudications + the Sampson case; plus Episode 2's 6 Photo Cards + 2 Story Check framings)
- Verdicts are reproduced **exactly as published** (FALSE / EXAGGERATED / CONFIRMED / UNVERIFIABLE) and are never upgraded for presentation.
- Canonical card data: [`data/cards.json`](data/cards.json) — the game embeds the same data in `game.js`; keep them in sync.
- Graph in this game: 13 game nodes + 1 source hub. The lines between them (14 node-to-node + 13 hub lines) are **game-layout connectors** chosen for navigation and visual grouping — they are **not** CultureTechLens graph relationships and must not be cited as such (red-team fix, 2026-11-15; the first draft wrongly called them "relationships"). This is a game lens on one published package, not a new graph — it splits no citations.
- Scoring is a stated adaptation: the live Prove It! show scores by evidence grade (VERIFIED 100 / SUPPORTED 75 / PROVISIONAL 50, bonus up to 50), but Episode 1 cards carry published *verdicts*, not those grades, so solo digital play scores a flat 100 for a correct Myth/Record call, 0 for a wrong call, and a fixed 50 for calling the McCoy card UNVERIFIABLE.

## Tech

- [Three.js](https://threejs.org/) 0.187.0 **vendored in this repo** (`vendor/three.module.js` + OrbitControls, MIT licence in `vendor/THREE-LICENSE.txt`) via a local import map — no CDN, so the page cannot be blanked by a CDN outage (fix applied 2026-11-15, after the red team flagged the unpkg dependency).
- No build step, no backend, no tracking. Static site — ideal for GitHub Pages.
- `game.js` also exports `CARDS`, `LINKS`, and `scoreFor()` so the logic can be tested in Node without a browser.

## Files

| File | What it is |
|---|---|
| `index.html` | The game page (branding, HUD, panels, import map) |
| `game.js` | Three.js 3D graph + game logic + embedded card data |
| `data/cards.json` | Canonical, citable copy of the 21 cards |
| `vendor/` | Vendored Three.js 0.187.0 + OrbitControls + its MIT licence |
| `RED-TEAM.md` | The pre-push red-team report, 2026-11-15, with dated fixes |

## Status / limitations

- Pilot build, 2026-11-15. WebGL rendering is verified by opening the page in a browser; the card/scoring logic is Node-tested.
- "Prove It!" name: a public-web name check was done for the pilot kit (2026-11-14) — it is **not** a legal/trademark opinion. USPTO/counsel clearance remains William's step before any launch spend.
- The emblem image embedded in `index.html` is the live YouTube avatar file (2026-11-14), base64-encoded; the master remains in CTL's brand files.
- Licence: code and card text are CultureTechLens NFP material — ask before reusing commercially. The underlying facts are cited to CTL-DR-TECH-001.

## Test the logic (no browser needed)

```bash
npm install
npm test   # verifies 13 cards, 14 links, game.js ↔ cards.json sync, and scoring
```
