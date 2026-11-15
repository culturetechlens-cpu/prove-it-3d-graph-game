import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Prove It! — data exactly as published in CTL-DR-TECH-001 pilot kit (2026-11-14). Verdicts never upgraded.
// Canonical copy also in data/cards.json — keep in sync.
export const CARDS = [
  {id:'jackson',name:'Shirley Ann Jackson',claim:'Dr. Shirley Ann Jackson invented caller ID, touch-tone phones, and fiber optics.',answer:'MYTH',verdict:'FALSE',receipt:'First Black woman to earn a physics PhD from MIT; former NRC chair; National Medal of Science honoree. She did not invent caller ID, touch-tone phones, or fiber optics — the honors are hers, the inventions are not.',sourceLine:'CTL-DR-TECH-001, red-team verdicts'},
  {id:'johnson',name:'Lonnie Johnson',claim:'Lonnie Johnson, a NASA engineer, invented the Super Soaker.',answer:'RECORD',verdict:'CONFIRMED',receipt:'U.S. Patent 4,591,071 (1986). The control case: the method confirms true stories too.',sourceLine:'CTL-DR-TECH-001, red-team §2 — U.S. Patent 4,591,071 (1986)'},
  {id:'morgan-traffic',name:'Garrett Morgan — Traffic Signal',claim:'Garrett Morgan invented the traffic light.',answer:'MYTH',verdict:'EXAGGERATED',receipt:'Morgan patented a 3-position T-signal, U.S. Patent 1,475,024 (1923). Traffic signals predated him (Lester Wire, 1912).',sourceLine:'CTL-DR-TECH-001 — U.S. Patent 1,475,024 (1923)'},
  {id:'carver',name:'George Washington Carver',claim:'George Washington Carver invented peanut butter.',answer:'MYTH',verdict:'FALSE',receipt:'Carver developed peanut products extensively. Peanut butter predates him; he held no patent for it.',sourceLine:'CTL-DR-TECH-001, red-team verdicts'},
  {id:'emeagwali',name:'Philip Emeagwali',claim:'Philip Emeagwali invented the Internet.',answer:'MYTH',verdict:'FALSE',receipt:'Real honor: 1989 Gordon Bell Prize for work on the CM-2 supercomputer. The "father of the Internet" claim is contradicted by Gordon Bell himself.',sourceLine:'CTL-DR-TECH-001, red-team verdicts'},
  {id:'mccoy',name:'Elijah McCoy',claim:"'The real McCoy' comes from Elijah McCoy — buyers demanded the genuine article.",answer:'BONUS',verdict:'UNVERIFIABLE',receipt:"McCoy's 50+ patents are real (lubricator, U.S. Patent 129,843, 1872). The phrase's origin has no evidence either way — so nobody wins this claim. Best-sourced argument wins the bonus.",sourceLine:'CTL-DR-TECH-001 — U.S. Patent 129,843 (1872)'},
  {id:'morgan-hood',name:'Garrett Morgan — Safety Hood',claim:'Garrett Morgan invented the gas mask.',answer:'MYTH',verdict:'EXAGGERATED',receipt:'Morgan patented a safety hood, U.S. Patent 1,113,675 (1914). Breathing apparatus predated him (Haslett, 1849).',sourceLine:'CTL-DR-TECH-001 — U.S. Patent 1,113,675 (1914)'},
  {id:'latimer',name:'Lewis Latimer',claim:"Lewis Latimer invented the light bulb's carbon filament.",answer:'MYTH',verdict:'EXAGGERATED',receipt:'Latimer patented a carbon-manufacturing process, U.S. Patent 252,386 (1882). Edison\u2019s team and Swan precede him on the filament.',sourceLine:'CTL-DR-TECH-001 — U.S. Patent 252,386 (1882)'},
  {id:'walker',name:'Madam C.J. Walker',claim:'Madam C.J. Walker invented the hot comb.',answer:'MYTH',verdict:'FALSE',receipt:'The hot comb predates her. Her documented record is bigger: entrepreneur, innovator, and builder of a hair-care empire.',sourceLine:'CTL-DR-TECH-001, red-team + role audit'},
  {id:'banneker',name:'Benjamin Banneker',claim:'Benjamin Banneker built the first American clock — he invented it.',answer:'MYTH',verdict:'EXAGGERATED',receipt:'Banneker built a striking clock c. 1753, documented via Thomas Jefferson. The "first in America" claim is unprovable.',sourceLine:'CTL-DR-TECH-001, red-team verdicts'},
  {id:'boykin',name:'Otis Boykin',claim:'Otis Boykin invented the pacemaker.',answer:'MYTH',verdict:'EXAGGERATED',receipt:'Boykin\u2019s precision resistors, U.S. Patent 2,972,726 (1961), were used in pacemakers. He did not invent the pacemaker.',sourceLine:'CTL-DR-TECH-001 — U.S. Patent 2,972,726 (1961)'},
  {id:'woods',name:'Granville Woods',claim:"Granville Woods, 'the Black Edison,' invented the third rail and dozens more.",answer:'MYTH',verdict:'EXAGGERATED',receipt:'Woods held dozens of real railway-telegraphy patents. Some attributions on circulating lists are inflated — the verdict corrects the list, not the man.',sourceLine:'CTL-DR-TECH-001, red-team verdicts'},
  {id:'sampson',name:'Henry Sampson',claim:'Henry Sampson invented the cell phone.',answer:'MYTH',verdict:'MYTH',receipt:'Sampson himself denied it while alive. The claim traces to a circular citation web — and his record carries his own denial. Note: CTL-DR-TECH-001 published no verdict word for this case (it is not in the 12-case table; the pilot deck prints only MYTH) — so the stamp shows MYTH, never an invented grade.',sourceLine:'CTL-DR-TECH-001, red-team challenge pass'},
  {id:'whitecity-1905',type:'photo',round:'Photo Card',name:'White City — Construction, c. 1905',claim:"What's being built here — and on what street?",options:['White City amusement park, 63rd Street','The Trianon Ballroom','A Sears store on 63rd Street'],answer:'White City amusement park, 63rd Street',verdict:'PUBLIC DOMAIN — CLEARED',receipt:'The entrance of White City amusement park, on 63rd Street, photographed under construction c. 1905. Photo: Chicago Daily News, Public Domain, via Wikimedia Commons. Register CTL-MEDUSA-CHI-000001-001, held CLEARED in the Cited Photo Archive.',sourceLine:'CTL-DR-PLACE-001 / Cited Photo Archive record, 2026-10-15',sourceUrl:'https://culturetechlens.com/research/63rd-street/'},
  {id:'whitecity-1916',type:'photo',round:'Photo Card',name:'White City at Night, 1916',claim:'Same place as the construction card — eleven years later. What is it, and what year?',options:['White City at night, 1916','White City at night, 1905','The Trianon Ballroom, 1924'],answer:'White City at night, 1916',verdict:'PUBLIC DOMAIN — CLEARED',receipt:'White City at night, 1916 — the built park in operation, paired against the c. 1905 construction shot: two evidence cards, one entity, a decade apart. Photo: Chicago Daily News, Public Domain. Register CTL-MEDUSA-CHI-000001-002, CLEARED.',sourceLine:'CTL-DR-PLACE-001 / Cited Photo Archive record, 2026-10-15',sourceUrl:'https://culturetechlens.com/research/63rd-street/'},
  {id:'trianon-1924',type:'photo',round:'Photo Card',name:'The Trianon Ballroom, 1924',claim:'Name this room.',options:['The Trianon Ballroom','The White City entrance','A 63rd Street jazz club'],answer:'The Trianon Ballroom',verdict:'PUBLIC DOMAIN — CLEARED',receipt:'The Trianon Ballroom, as its 1924 postcard sold it. Photo: postcard, publisher unknown, Public Domain. Register CTL-MEDUSA-CHI-000001-003, CLEARED. Honest limit, as published: the evidence card does not state a street address for the Trianon, so the game does not claim one.',sourceLine:'CTL-DR-PLACE-001 / Cited Photo Archive record, 2026-10-15',sourceUrl:'https://culturetechlens.com/research/63rd-street/'},
  {id:'bus-1973',type:'photo',round:'Photo Card',name:'Bus Riders on 63rd Street, 1973',claim:'Which street — and which year?',options:['63rd Street, 1973','63rd Street, 1916','State Street, 1973'],answer:'63rd Street, 1973',verdict:'PUBLIC DOMAIN',receipt:'Riders using bus transportation on 63rd Street, 1973, photographed by John H. White for the U.S. EPA DOCUMERICA project. Photo: Public Domain, via National Archives / Wikimedia Commons. No register ID is published on this record — cited by archive title and record date, as published.',sourceLine:'CTL-DR-PLACE-001 / Cited Photo Archive record, 2026-10-14',sourceUrl:'https://culturetechlens.com/research/63rd-street/'},
  {id:'thoroughfare-1973',type:'photo',round:'Photo Card',name:'63rd Street, July 1973',claim:'Same street, same year as the bus card. What can this photo actually prove?',options:["The street's documented state in July 1973",'Why the street changed','That the golden-age story is verified'],answer:"The street's documented state in July 1973",verdict:'PUBLIC DOMAIN — CLEARED',receipt:'The photo documents the street in July 1973. Why it changed is a separate claim, graded separately — and parts of that story are not yet verified (see the Story Check cards). Photo: John H. White, EPA DOCUMERICA, National Archives, Public Domain. Register CTL-MEDUSA-CHI-000001-005, CLEARED.',sourceLine:'CTL-DR-PLACE-001 / Cited Photo Archive record, 2026-10-15',sourceUrl:'https://culturetechlens.com/research/63rd-street/'},
  {id:'white-camera',type:'photo',round:'Photo Card',name:'Whose Camera? — 63rd Street, 1973',claim:"You've seen his street all night. Whose camera is this?",options:['John H. White','The Chicago Daily News','An unknown postcard publisher'],answer:'John H. White',verdict:'PUBLIC DOMAIN',receipt:'John H. White — Blacks using bus transportation on 63rd Street, Chicago, 1973, for U.S. EPA DOCUMERICA. Photo: Public Domain, via Wikimedia Commons. No register ID is published on this record — cited by archive title and record date, as published.',sourceLine:'CTL-DR-PLACE-001 / Cited Photo Archive record, 2026-10-15',sourceUrl:'https://culturetechlens.com/research/63rd-street/'},
  {id:'golden-age',type:'bonus',round:'Story Check',name:'Story Check — The Golden Age',claim:"Everybody knows it: 63rd Street's golden age made it Chicago's second-busiest commercial district. Settled fact — Myth or Record?",answer:'BONUS',verdict:'NOT YET VERIFIED',receipt:'The 63rd Street dossier itself flags this one: the commercial golden-age narrative rests on credible but single or conflicting sources — plausible and widely repeated, not yet verified. The pilot kit marks the exact per-claim grade TO MINE from the full package, so this card plays as a bonus only, never as a settled answer.',sourceLine:'CTL-DR-PLACE-001, dossier framing as published',sourceUrl:'https://culturetechlens.com/research/63rd-street/'},
  {id:'sears-date',type:'bonus',round:'Story Check',name:'Story Check — The Sears Date',claim:'The Sears on 63rd Street opened in 1929. Everybody agrees on the date — Myth or Record?',answer:'BONUS',verdict:'DISPUTED',receipt:'The dossier names this anchor date — Sears, 1929 vs. 1934 — as resting on conflicting sources. A disputed date is played as disputed: bonus round, best-sourced argument wins, nobody settles it by voting.',sourceLine:'CTL-DR-PLACE-001, dossier framing as published',sourceUrl:'https://culturetechlens.com/research/63rd-street/'}

];
export const LINKS = [['jackson','johnson'],['johnson','sampson'],['morgan-traffic','morgan-hood'],['morgan-traffic','woods'],['latimer','woods'],['latimer','jackson'],['carver','banneker'],['emeagwali','johnson'],['mccoy','woods'],['walker','carver'],['boykin','johnson'],['banneker','latimer'],['sampson','emeagwali'],['mccoy','morgan-hood'],['whitecity-1905','whitecity-1916'],['whitecity-1916','trianon-1924'],['bus-1973','thoroughfare-1973'],['bus-1973','white-camera'],['thoroughfare-1973','golden-age'],['golden-age','sears-date'],['trianon-1924','golden-age']];

export function scoreFor(card, call){
  if(card.answer==='BONUS') return call==='BONUS' ? 50 : 0;
  return call===card.answer ? 100 : 0;
}
export function scoreForPhoto(card, choice){ return choice===card.answer ? 100 : 0; }
export const MAX_SCORE = CARDS.reduce((sum,c)=>sum+(c.answer==='BONUS'?50:100),0);

// LINKS above are game-layout connectors for navigation/visual grouping only.
// They are NOT CultureTechLens graph relationships and must not be cited as such (red-team fix, 2026-11-15).

// --- Browser game (skipped in Node tests when no document) ---
if (typeof document !== 'undefined') {
  const VERDICT_COLORS = { CONFIRMED:0x2ecc71, FALSE:0xb3282d, EXAGGERATED:0xe67e22, UNVERIFIABLE:0x9b59b6, MYTH:0x95a5a6 };
  const GOLD = 0xc9a227;
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x16150f);
  const camera = new THREE.PerspectiveCamera(58, innerWidth/innerHeight, 0.1, 1000); camera.position.set(0,8,36);
  const renderer = new THREE.WebGLRenderer({antialias:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setSize(innerWidth, innerHeight); document.getElementById('scene').appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true;
  scene.add(new THREE.AmbientLight(0xffffff,0.95));
  const dir = new THREE.DirectionalLight(0xffffff,1.4); dir.position.set(12,20,10); scene.add(dir);
  const group = new THREE.Group(); scene.add(group);

  // Two hubs: the two source packages. Node colour = round (see legend in the help panel).
  const ROUND_COLORS = { 'Patent Edition': GOLD, 'Photo Card': 0x56ccf2, 'Story Check': 0xf7f2e7 };
  function makeHub(y){
    const h = new THREE.Mesh(new THREE.SphereGeometry(1.7,32,32), new THREE.MeshStandardMaterial({color:GOLD, roughness:0.25, metalness:0.35}));
    h.position.set(0,y,0); group.add(h); return h;
  }
  makeHub(4.2); makeHub(-4.2);
  function label(text, pos, scale=8){
    const c=document.createElement('canvas'); c.width=512; c.height=80; const x=c.getContext('2d');
    x.font='bold 34px Georgia, serif'; x.textAlign='center'; x.fillStyle='#f7f2e7'; x.fillText(text,256,50);
    const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c), transparent:true}));
    s.scale.set(scale, scale*0.156, 1); s.position.copy(pos); group.add(s); return s;
  }
  label('Black Technology', new THREE.Vector3(0,7.0,0), 9);
  label('63rd Street', new THREE.Vector3(0,-1.4,0), 9);

  const pos=new Map([['__hubTech', new THREE.Vector3(0,4.2,0)],['__hubPlace', new THREE.Vector3(0,-4.2,0)]]); const meshes=[];
  CARDS.forEach((card,i)=>{
    const a=(i/CARDS.length)*Math.PI*2; const y=Math.sin(i*2.3)*3.6;
    const v=new THREE.Vector3(Math.cos(a)*15, y, Math.sin(a)*15); pos.set(card.id,v);
    const m=new THREE.Mesh(new THREE.SphereGeometry(0.95,32,32), new THREE.MeshStandardMaterial({color:ROUND_COLORS[card.round||'Patent Edition']||GOLD, roughness:0.3, metalness:0.2}));
    m.position.copy(v); m.userData.card=card; group.add(m); meshes.push(m);
    label(card.name.split(' — ')[0], v.clone().add(new THREE.Vector3(0,1.7,0)), 7.5);
  });
  const pts=[]; LINKS.forEach(([a,b])=>pts.push(pos.get(a),pos.get(b)));
  CARDS.forEach(c=>pts.push(pos.get((c.round==='Photo Card'||c.round==='Story Check')?'__hubPlace':'__hubTech'), pos.get(c.id)));
  group.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({color:0xc9a227, transparent:true, opacity:0.55})));

  // Game state / UI
  let score=0, played=new Set(), current=null;
  const $=id=>document.getElementById(id);
  function updateHud(){ $('score').textContent=score; $('played').textContent=played.size; $('total').textContent=CARDS.length;
    if(played.size===CARDS.length){ $('final').hidden=false; $('finalScore').textContent=score; $('finalMax').textContent=MAX_SCORE; } }
  const results=new Map();
  function showResult(card){
    const r=results.get(card.id); if(!r) return;
    $('stamp').textContent=card.verdict; $('receipt').textContent=card.receipt; $('sourceLine').textContent='Source: '+card.sourceLine+' · '+(card.sourceUrl||'https://culturetechlens.com/research/black-technology/');
    $('points').textContent=r.pts>0?('+'+r.pts+' points — receipt shown before points, always.'):'0 points — the receipt is the lesson.';
    $('result').hidden=false;
  }
  function openCard(card){
    current=card; $('cardPanel').hidden=false; $('person').textContent=card.name; $('claim').textContent='\u201C'+card.claim+'\u201D';
    $('result').hidden=true; $('stamp').textContent=''; document.querySelectorAll('.call-btn').forEach(b=>b.disabled=played.has(card.id));
    $('already').hidden=!played.has(card.id);
    if(played.has(card.id)) showResult(card); // red-team fix: a played card's receipt must stay re-readable
    const isPhoto = card.type==='photo';
    $('mythButtons').style.display = isPhoto ? 'none' : '';
    const ob=$('optionButtons'); ob.innerHTML='';
    if(isPhoto){ card.options.forEach(opt=>{ const b=document.createElement('button'); b.className='opt-btn'; b.textContent=opt; b.disabled=played.has(card.id);
      b.addEventListener('click',()=>{ if(played.has(current.id))return; const ptsEarned=scoreForPhoto(current,opt); score+=ptsEarned; played.add(current.id); results.set(current.id,{pts:ptsEarned,call:opt});
        const mesh=meshes.find(m=>m.userData.card.id===current.id); if(mesh) mesh.material.color.setHex(0x2ecc71);
        showResult(current); ob.querySelectorAll('button').forEach(x=>x.disabled=true); updateHud(); });
      ob.appendChild(b); }); }
  }
  window.__openCard=openCard;
  document.querySelectorAll('.call-btn').forEach(btn=>btn.addEventListener('click',()=>{
    if(!current||played.has(current.id))return;
    const ptsEarned=scoreFor(current, btn.dataset.call); score+=ptsEarned; played.add(current.id); results.set(current.id,{pts:ptsEarned,call:btn.dataset.call});
    const mesh=meshes.find(m=>m.userData.card.id===current.id); if(mesh) mesh.material.color.setHex(current.type==='photo'?0x2ecc71:(VERDICT_COLORS[current.verdict]||GOLD));
    showResult(current); document.querySelectorAll('.call-btn').forEach(b=>b.disabled=true); updateHud();
  }));
  $('restart').addEventListener('click',()=>location.reload());
  // Node list (accessible way to play without clicking 3D)
  const list=$('nodeList'); CARDS.forEach(c=>{const b=document.createElement('button'); b.textContent=c.name; b.className='node-btn'; b.addEventListener('click',()=>openCard(c)); list.appendChild(b);});
  // Raycast picking
  const ray=new THREE.Raycaster(), mouse=new THREE.Vector2(); let downX=0, downY=0;
  renderer.domElement.addEventListener('pointerdown',e=>{ downX=e.clientX; downY=e.clientY; });
  renderer.domElement.addEventListener('pointerup',e=>{ // red-team fix: a drag to orbit must not open a card
    if(Math.hypot(e.clientX-downX, e.clientY-downY)>6) return;
    mouse.x=(e.clientX/innerWidth)*2-1; mouse.y=-(e.clientY/innerHeight)*2+1; ray.setFromCamera(mouse,camera);
    const hit=ray.intersectObjects(meshes)[0]; if(hit) openCard(hit.object.userData.card); });
  renderer.setAnimationLoop(()=>{ group.rotation.y+=0.0016; controls.update(); renderer.render(scene,camera); });
  addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight);});
  updateHud();
  const st=document.getElementById('status'); if(st) st.textContent='Graph loaded: '+CARDS.length+' game nodes + 2 source hubs. Colours: gold = Patent Edition, sky = Photo Card, paper = Story Check. The lines are game-layout connectors, not CTL graph relationships. Snapshots: CTL-DR-TECH-001 + CTL-DR-PLACE-001 pilot cards, 2026-11-14';
}
