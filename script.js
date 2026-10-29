const P0=[
["Lionel Messi","🇦🇷","FW","Inter Miami","10","#75aadb","#1b3a6b"],
["Cristiano Ronaldo","🇵🇹","FW","Al Nassr","7","#c8102e","#4a0a14"],
["Neymar Jr","🇧🇷","FW","Santos","10","#f4c20d","#0b6b3a"],
["Kylian Mbappé","🇫🇷","FW","Real Madrid","9","#1f4fd8","#0a1a4d"],
["Erling Haaland","🇳🇴","FW","Manchester City","9","#6cabdd","#1c2c5b"],
["Luka Modrić","🇭🇷","MF","AC Milan","10","#e53935","#3b0d12"],
["Zinedine Zidane","🇫🇷","MF","Real Madrid","5","#e8e8f0","#5b5f80"],
["Ronaldinho","🇧🇷","FW","Barcelona","10","#a50044","#004d98"],
["Xavi Hernández","🇪🇸","MF","Barcelona","6","#004d98","#a50044"],
["Andrés Iniesta","🇪🇸","MF","Barcelona","8","#a50044","#1b2a5c"],
["Thierry Henry","🇫🇷","FW","Arsenal","14","#d4202c","#4a0b10"],
["Kaká","🇧🇷","MF","AC Milan","22","#d00027","#111"],
["Robert Lewandowski","🇵🇱","FW","Barcelona","9","#a50044","#162d6b"],
["Mohamed Salah","🇪🇬","FW","Liverpool","11","#c8102e","#5a0714"],
["Kevin De Bruyne","🇧🇪","MF","Napoli","17","#6cabdd","#12305e"],
["Harry Kane","🏴","FW","Bayern Munich","9","#dc052d","#4a0214"],
["Karim Benzema","🇫🇷","FW","Al Hilal","9","#1b6fd8","#071a45"],
["Zlatan Ibrahimović","🇸🇪","FW","AC Milan","11","#fecb00","#006aa7"],
["Wayne Rooney","🏴","FW","Man United","10","#da291c","#3b0a06"],
["Steven Gerrard","🏴","MF","Liverpool","8","#c8102e","#3d0610"],
["Frank Lampard","🏴","MF","Chelsea","8","#034694","#021a3a"],
["Andrea Pirlo","🇮🇹","MF","Juventus","21","#2a2a2a","#8a8a8a"],
["Gianluigi Buffon","🇮🇹","GK","Juventus","1","#3a3a3a","#0b0b0b"],
["Iker Casillas","🇪🇸","GK","Real Madrid","1","#7b5ee0","#25185a"],
["Virgil van Dijk","🇳🇱","DF","Liverpool","4","#c8102e","#2d0509"],
["Sergio Ramos","🇪🇸","DF","Real Madrid","4","#e0e0f0","#4a4f7a"],
["Son Heung-min","🇰🇷","FW","LAFC","7","#1a2a5e","#6b8cd8"],
["Vinícius Jr","🇧🇷","FW","Real Madrid","7","#e8e8f0","#6a5acd"],
["Jude Bellingham","🏴","MF","Real Madrid","5","#e8e8f0","#2b3a8a"],
["Ronaldo Nazário","🇧🇷","FW","Real Madrid","9","#f4c20d","#0b6b3a"]
].map(([n,f,pos,club,num,c1,c2])=>({n,f,pos,club,num,c1,c2}));

const CL={
  'Man City':['#6cabdd','#12305e'],
  'Real Madrid':['#e8e8f0','#5a5f8a'],
  Barcelona:['#a50044','#004d98'],
  'Man United':['#da291c','#3b0a06'],
  Liverpool:['#c8102e','#3d0610'],
  Chelsea:['#034694','#021a3a'],
  Arsenal:['#d4202c','#4a0b10'],
  Juventus:['#2a2a2a','#8a8a8a'],
  'AC Milan':['#d00027','#111'],
  Napoli:['#6cabdd','#12305e'],
  Bayern:['#dc052d','#4a0214'],
  PSG:['#1b6fd8','#071a45'],
  Inter:['#3a3a3a','#0b0b0b'],
  Atletico:['#e11d48','#1f2937'],
  'Atletico Madrid':['#e11d48','#1f2937'],
  'Bayern Munich':['#dc052d','#4a0214'],
  'Inter Miami':['#75aadb','#1b3a6b'],
  'Al Nassr':['#c8102e','#4a0a14'],
  Santos:['#f4c20d','#0b6b3a'],
  'LAFC':['#1a2a5e','#6b8cd8'],
  'Al Hilal':['#1b6fd8','#071a45'],
  Valencia:['#e8e8f0','#0f172a'],
  'Boca Juniors':['#1d4ed8','#0f172a'],
  'Leicester':['#0d5a49','#1f2937'],
  'Tottenham':['#0a2a55','#d9d9d9'],
  'Aston Villa':['#7c2d12','#f5f5f5'],
  'Brentford':['#ef4444','#0f172a'],
  'Crystal Palace':['#1d4ed8','#0f172a'],
  Everton:['#0f172a','#d6d3d1'],
  'West Ham':['#7c3aed','#0f172a'],
  'Newcastle':['#0b1d3a','#d4af37']
};

const FL={
  ar:'🇦🇷', br:'🇧🇷', fr:'🇫🇷', es:'🇪🇸', pt:'🇵🇹', it:'🇮🇹', de:'🇩🇪', en:'🏴', wa:'🏴', nl:'🇳🇱', be:'🇧🇪', no:'🇳🇴', hr:'🇭🇷', pl:'🇵🇱', eg:'🇪🇬', se:'🇸🇪', ko:'🇰🇷', ma:'🇲🇦', cl:'🇨🇱', ur:'🇺🇾', ca:'🇨🇦', cs:'🇨🇿', sn:'🇸🇳', tg:'🇹🇬', ga:'🇬🇦', gh:'🇬🇭', cm:'🇨🇲', ci:'🇨🇮', ua:'🇺🇦', ar:'🇦🇷', co:'🇨🇴', dz:'🇩🇿', sn:'🇸🇳', ng:'🇳🇬', ge:'🇬🇪', ro:'🇷🇴', bg:'🇧🇬', rs:'🇷🇸', si:'🇸🇮', is:'🇮🇸', at:'🇦🇹', tr:'🇹🇷', hu:'🇭🇺', fi:'🇫🇮'
};

const P=P0.concat(`Luis Suárez,uy,FW,Barcelona,9
Sergio Agüero,ar,FW,Man City,10
Didier Drogba,ci,FW,Chelsea,11
Samuel Eto'o,cm,FW,Barcelona,9
David Villa,es,FW,Valencia,7
Fernando Torres,es,FW,Liverpool,9
Raúl,es,FW,Real Madrid,7
Ruud van Nistelrooy,nl,FW,Man United,10
Robin van Persie,nl,FW,Arsenal,10
Andriy Shevchenko,ua,FW,AC Milan,7
Gabriel Batistuta,ar,FW,Roma,18
Francesco Totti,it,FW,Roma,10
Alessandro Del Piero,it,FW,Juventus,10
Filippo Inzaghi,it,FW,AC Milan,9
Miroslav Klose,de,FW,Lazio,11
Thomas Müller,de,FW,Bayern,25
Antoine Griezmann,fr,FW,Atlético,7
Olivier Giroud,fr,FW,AC Milan,9
Edinson Cavani,uy,FW,PSG,9
Gonzalo Higuaín,ar,FW,Real Madrid,9
Carlos Tevez,ar,FW,Man City,32
Radamel Falcao,co,FW,Monaco,9
Sadio Mané,sn,FW,Liverpool,10
Roberto Firmino,br,FW,Liverpool,9
Gabriel Jesus,br,FW,Arsenal,9
Rafael Leão,pt,FW,AC Milan,10
Victor Osimhen,ng,FW,Napoli,9
Lautaro Martínez,ar,FW,Inter,10
Marcus Rashford,en,FW,Man United,10
Raheem Sterling,en,FW,Man City,7
Bukayo Saka,en,FW,Arsenal,7
Phil Foden,en,FW,Man City,47
Michael Owen,en,FW,Liverpool,10
Jamie Vardy,en,FW,Leicester,9
Ángel Di María,ar,FW,Benfica,11
Arjen Robben,nl,FW,Bayern,10
Franck Ribéry,fr,FW,Bayern,7
Eden Hazard,be,FW,Chelsea,10
Romelu Lukaku,be,FW,Inter,9
Gareth Bale,wa,FW,Real Madrid,11
Luís Figo,pt,FW,Real Madrid,10
Rivaldo,br,FW,Barcelona,11
Pedri,es,MF,Barcelona,8
Frenkie de Jong,nl,MF,Barcelona,21
Rodri,es,MF,Man City,16
Declan Rice,en,MF,Arsenal,41
Jamal Musiala,de,MF,Bayern,42
Bastian Schweinsteiger,de,MF,Bayern,31
Toni Kroos,de,MF,Real Madrid,8
Casemiro,br,MF,Real Madrid,14
Paul Pogba,fr,MF,Juventus,10
N'Golo Kanté,fr,MF,Chelsea,7
Claude Makélélé,fr,MF,Chelsea,4
Xabi Alonso,es,MF,Liverpool,14
Sergio Busquets,es,MF,Barcelona,5
Roy Keane,ie,MF,Man United,16
Wesley Sneijder,nl,MF,Inter,10
Marco Verratti,it,MF,PSG,6
Thiago Alcântara,es,MF,Liverpool,6
Paolo Maldini,it,DF,AC Milan,3
Fabio Cannavaro,it,DF,Juventus,5
Carles Puyol,es,DF,Barcelona,5
Gerard Piqué,es,DF,Barcelona,3
John Terry,en,DF,Chelsea,26
Rio Ferdinand,en,DF,Man United,5
Nemanja Vidić,rs,DF,Man United,15
Philipp Lahm,de,DF,Bayern,21
Marcelo,br,DF,Real Madrid,12
Roberto Carlos,br,DF,Real Madrid,3
Cafu,br,DF,AC Milan,2
Lúcio,br,DF,Bayern,3
Thiago Silva,br,DF,Chelsea,6
Giorgio Chiellini,it,DF,Juventus,3
Leonardo Bonucci,it,DF,Juventus,19
Trent Alexander-Arnold,en,DF,Liverpool,66
Achraf Hakimi,ma,DF,PSG,2
Kyle Walker,en,DF,Man City,2
Rúben Dias,pt,DF,Man City,3
Alphonso Davies,ca,DF,Bayern,19
David Alaba,at,DF,Real Madrid,4
Antonio Rüdiger,de,DF,Real Madrid,22
Manuel Neuer,de,GK,Bayern,1
Petr Čech,cz,GK,Chelsea,1
Edwin van der Sar,nl,GK,Man United,1
Oliver Kahn,de,GK,Bayern,1
Thibaut Courtois,be,GK,Real Madrid,1
Alisson,br,GK,Liverpool,1
Ederson,br,GK,Man City,31
Gianluigi Donnarumma,it,GK,PSG,99
Jan Oblak,si,GK,Atlético,13`).split('\n').map(l=>{const [n,c,pos,club,num]=l.split(','); const [c1,c2]=CL[club]||[`hsl(${hs(club)} 55% 38%)`,`hsl(${(hs(club)+30)%360} 60% 16%)`]; return {n, f:FL[c]||'🏳️', pos, club, num, c1, c2}; }));

const UW = new Set([
  'Lionel Messi','Cristiano Ronaldo','Neymar Jr','Erling Haaland','Luka Modrić','Zinedine Zidane','Ronaldinho','Xavi Hernández','Andrés Iniesta','Thierry Henry','Kaká','Robert Lewandowski','Mohamed Salah','Kevin De Bruyne','Harry Kane','Karim Benzema','Wayne Rooney','Steven Gerrard','Frank Lampard','Andrea Pirlo','Gianluigi Buffon','Virgil van Dijk','Sergio Ramos','Sergio Ramos','Son Heung-min','Vinícius Jr','Jude Bellingham'
]);
P.forEach(p=>p.ucl = UW.has(p.n));
const hs = s => [...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7)%360;
const seen = new Set(P.map(p=>p.n));

const CRICKET_POS = {All:'All', BAT:'Batters', BOWL:'Bowlers', AR:'All-rounders', WK:'Wicketkeepers'};
const CRICKET_PLAYERS = [
  ['Virat Kohli','🇮🇳','BAT','India','18','#f44336','#8b0f1d',true],
  ['Rohit Sharma','🇮🇳','BAT','India','45','#ff9f1c','#7a2d00',true],
  ['MS Dhoni','🇮🇳','WK','India','7','#f6d365','#d93f2d',true],
  ['Jasprit Bumrah','🇮🇳','BOWL','India','93','#1b4f9c','#0a1730',true],
  ['Pat Cummins','🇦🇺','BOWL','Australia','20','#f3c623','#0a0a0a',true],
  ['Ben Stokes','🏴','AR','England','55','#1e2a38','#8f1d17',true],
  ['Jos Buttler','🏴','WK','England','63','#0b1f4d','#7db0ff',true],
  ['Shubman Gill','🇮🇳','BAT','India','77','#1a6dff','#0d1d45',false],
  ['KL Rahul','🇮🇳','WK','India','1','#1d6f6d','#082f31',false],
  ['Hardik Pandya','🇮🇳','AR','India','33','#f9c74f','#8d2f1f',true],
  ['Ravindra Jadeja','🇮🇳','AR','India','8','#f7b801','#0a4d8a',true],
  ['Travis Head','🇦🇺','BAT','Australia','62','#1f5bb5','#07192b',true],
  ['Kagiso Rabada','🇿🇦','BOWL','South Africa','25','#0b7a75','#082d2f',false],
  ['Joe Root','🏴','BAT','England','66','#f1f1f1','#2d2d2d',true],
  ['David Warner','🇦🇺','BAT','Australia','31','#e26310','#4a1200',true],
  ['Bhuvneshwar Kumar','🇮🇳','BOWL','India','13','#1d7a64','#0c2620',true],
  ['Andre Russell','🇧🇩','AR','West Indies','12','#e62b2b','#2a0a0d',true],
  ['Kuldeep Yadav','🇮🇳','BOWL','India','23','#1a73b8','#0b2342',true],
  ['Steve Smith','🇦🇺','BAT','Australia','49','#1b5fbf','#0b1220',true],
  ['Mitchell Starc','🇦🇺','BOWL','Australia','56','#0ea5e9','#0f172a',true],
  ['Kane Williamson','🇳🇿','BAT','New Zealand','22','#0c5f7a','#d3f0ff',true],
  ['Rashid Khan','🇦🇫','BOWL','Afghanistan','19','#0a2e4b','#a5d6ff',true],
  ['Shaheen Afridi','🇵🇰','BOWL','Pakistan','10','#0c4a6e','#d8f3ff',false],
  ['Mohammed Siraj','🇮🇳','BOWL','India','13','#4372ff','#0d1b3c',true],
  ['Dale Steyn','🇿🇦','BOWL','South Africa','8','#0ea5e9','#0f172a',false],
  ['Moeen Ali','🏴','AR','England','18','#fbbf24','#0f172a',true],
  ['Stuart Broad','🏴','BOWL','England','8','#fca5a5','#1f2937',true],
  ['James Anderson','🏴','BOWL','England','20','#bfdbfe','#0f172a',true],
  ['Chris Gayle','🇯🇲','BAT','West Indies','45','#7f1d1d','#facc15',true],
  ['Sunil Narine','🇹🇹','BOWL','West Indies','27','#d4d4d8','#1f2937',true],
  ['Kumar Sangakkara','🇱🇰','WK','Sri Lanka','11','#dbeafe','#1f2937',true],
  ['Muttiah Muralitharan','🇱🇰','BOWL','Sri Lanka','8','#9fe870','#1d4d3b',true],
  ['Lasith Malinga','🇱🇰','BOWL','Sri Lanka','99','#e1b12c','#0f172a',true],
  ['Brendon McCullum','🇳🇿','WK','New Zealand','42','#0066cc','#fff6e5',true],
  ['Martin Guptill','🇳🇿','BAT','New Zealand','31','#5eead4','#0f172a',false],
  ['Temba Bavuma','🇿🇦','BAT','South Africa','13','#fbbf24','#1f2937',false],
  ['Hashim Amla','🇿🇦','BAT','South Africa','81','#4ade80','#0f172a',false],
  ['AB de Villiers','🇿🇦','WK','South Africa','17','#94a3b8','#111827',false],
  ['Brian Lara','🇹🇹','BAT','West Indies','9','#f59e0b','#0f172a',false],
  ['Shivnarine Chanderpaul','🇬🇾','BAT','West Indies','45','#00c2a8','#0f172a',false],
  ['Babar Azam','🇵🇰','BAT','Pakistan','56','#0f766e','#d1fae5',false],
  ['Mohammad Rizwan','🇵🇰','WK','Pakistan','75','#93c5fd','#0f172a',false],
  ['Shakib Al Hasan','🇧🇩','AR','Bangladesh','75','#f59e0b','#0f172a',false],
  ['Mustafizur Rahman','🇧🇩','BOWL','Bangladesh','90','#e879f9','#0f172a',false],
  ['Tamim Iqbal','🇧🇩','BAT','Bangladesh','27','#60a5fa','#111827',false],
  ['Mushfiqur Rahim','🇧🇩','WK','Bangladesh','15','#4f46e5','#0f172a',false],
  ['Mohammad Nabi','🇦🇫','AR','Afghanistan','20','#86efac','#0f172a',false],
  ['Ibrahim Zadran','🇦🇫','BAT','Afghanistan','2','#22d3ee','#0f172a',false],
  ['Naseem Shah','🇵🇰','BOWL','Pakistan','7','#ef4444','#0f172a',false],
  ['Adam Zampa','🇦🇺','BOWL','Australia','18','#a1d6ff','#1d3f64',true],
  ['Sam Curran','🏴','AR','England','3','#1a3b85','#e7b10c',false],
  ['Liam Livingstone','🏴','AR','England','8','#b3d5ff','#1a2448',false],
  ['Rachin Ravindra','🇳🇿','AR','New Zealand','8','#4ade80','#0f172a',true],
  ['Tim Southee','🇳🇿','BOWL','New Zealand','38','#60a5fa','#0f172a',true]
].map(([n,f,pos,club,num,c1,c2,trophy]) => ({n,f,pos,club,num,c1,c2,trophy}));

const $ = id => document.getElementById(id);
const stage = $('stage'), track = $('track');
let list = P, i = 0, picked = null, drag = null, busy = false, sportMode = 'football';
const POS = { All:'All', FW:'Forwards', MF:'Midfield', DF:'Defenders', GK:'Keepers' };
const ini = n => n.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();

function getLabels(mode) { return mode === 'football' ? POS : CRICKET_POS; }
function getSource(mode) { return mode === 'football' ? P : CRICKET_PLAYERS; }

function updateFilterButtons(mode) {
  const labels = getLabels(mode);
  $('filters').innerHTML = Object.entries(labels)
    .map(([key, label]) => `<button class="chip${key === 'All' ? ' on' : ''}" data-k="${key}">${label}</button>`)
    .join('');
}

function setSportMode(mode) {
  sportMode = mode;
  list = getSource(mode).slice();
  i = 0;
  picked = null;
  busy = false;
  updateFilterButtons(mode);
  render();
  const modal = $('sportModal');
  if (modal) modal.classList.remove('show');
}

function render() {
  const labels = getLabels(sportMode);
  track.innerHTML = list.map((p, k) => `
    <div class="card${picked === p ? ' picked' : ''}" data-k="${k}" style="--c1:${p.c1};--c2:${p.c2};animation-delay:${Math.min(k*40,400)}ms">
      <div class="num">${p.num}</div>
      <div class="ini">${ini(p.n)}</div>
      <div class="flag">${p.f}</div>
      <div class="content">
        <h3>${p.n}</h3>
        <p>${p.club}</p>
        <span class="tag">${labels[p.pos]}</span>
      </div>
    </div>
  `).join('');
  update(true);
}

function offset() {
  const c = track.children[i];
  if (!c) return 0;
  return stage.clientWidth / 2 - (c.offsetLeft + c.offsetWidth / 2);
}

function update(instant) {
  [...track.children].forEach((c, k) => c.classList.toggle('active', k === i));
  if (instant) track.style.transition = 'none';
  track.style.transform = `translateX(${offset()}px)`;
  if (instant) { track.offsetWidth; track.style.transition = ''; }
  const p = list[i];
  if (p) {
    document.body.style.setProperty('--glow', `color-mix(in srgb, ${p.c1} 27%, transparent)`);
  }
  $('count').textContent = list.length ? `${i + 1} / ${list.length}` : '';
}

function choose() {
  const p = list[i];
  if (!p) return;
  picked = p;
  document.querySelectorAll('.card').forEach((c, k) => c.classList.toggle('picked', k === i));
  const panel = $('panel');
  panel.style.setProperty('--c1', p.c1);
  panel.style.setProperty('--c2', p.c2);
  $('pb').textContent = p.num;
  $('pn').textContent = `${p.n} ${p.f}`;
  $('pd').textContent = `${getLabels(sportMode)[p.pos]} · ${p.club}`;
  const u = $('pu');
  if (sportMode === 'football') {
    u.textContent = p.ucl ? '🏆 Champions League winner' : 'No Champions League title';
    u.style.color = p.ucl ? 'var(--accent)' : '#dce7ff';
  } else {
    u.textContent = p.trophy ? '🏆 ICC trophy winner' : 'No ICC trophy';
    u.style.color = p.trophy ? 'var(--accent)' : '#dce7ff';
  }
  u.style.fontWeight = '600';
  panel.classList.remove('pop');
  panel.offsetWidth;
  panel.classList.add('show', 'pop');
}

function rand() {
  if (busy || list.length < 2) return;
  busy = true;
  ['pick', 'rand'].forEach(id => $(id).disabled = true);
  let t; do { t = Math.floor(Math.random()*list.length); } while (Math.abs(t - i) < Math.min(8, Math.floor(list.length / 2)));
  $('panel').classList.remove('show');
  document.querySelectorAll('.card.active').forEach(c => c.classList.remove('active'));
  track.classList.add('spin');
  i = t;
  track.style.transform = `translateX(${offset()}px)`;
  setTimeout(() => {
    track.classList.remove('spin');
    update();
    setTimeout(() => {
      busy = false;
      ['pick', 'rand'].forEach(id => $(id).disabled = false);
      choose();
    }, 700);
  }, 3900);
}

const go = d => {
  if (busy) return;
  i = Math.max(0, Math.min(list.length - 1, i + d));
  update();
};

$('next').onclick = () => go(1);
$('prev').onclick = () => go(-1);
$('rand').onclick = rand;
$('pick').onclick = choose;

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') go(1);
  if (e.key === 'ArrowLeft') go(-1);
  if (e.key === 'Enter') choose();
  if (e.key === 'r' || e.key === 'R') rand();
});
window.addEventListener('resize', () => update(true));

stage.addEventListener('pointerdown', e => {
  if (busy) return;
  drag = { x: e.clientX, dx: 0, id: e.pointerId };
});
stage.addEventListener('pointermove', e => {
  if (!drag) return;
  drag.dx = e.clientX - drag.x;
  if (Math.abs(drag.dx) > 6) {
    stage.classList.add('drag');
    track.style.transform = `translateX(${offset() + drag.dx}px)`;
  }
});
const end = () => {
  if (!drag) return;
  const dx = drag.dx;
  drag = null;
  stage.classList.remove('drag');
  if (Math.abs(dx) > 6) {
    const step = Math.round(-dx / 250);
    go(step || (dx < 0 ? 1 : -1));
  } else {
    update();
  }
};
stage.addEventListener('pointerup', end);
stage.addEventListener('pointerleave', end);
stage.addEventListener('pointercancel', end);

track.addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (busy || !c || Math.abs(drag?.dx || 0) > 6) return;
  const k = +c.dataset.k;
  if (k !== i) {
    i = k;
    update();
  } else {
    choose();
  }
});

stage.addEventListener('wheel', e => {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
    e.preventDefault();
    go(e.deltaX > 0 ? 1 : -1);
  }
}, { passive: false });

$('filters').onclick = e => {
  const b = e.target.closest('.chip');
  if (!b) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === b));
  const source = getSource(sportMode);
  list = b.dataset.k === 'All' ? source.slice() : source.filter(p => p.pos === b.dataset.k);
  i = 0;
  render();
};

document.querySelectorAll('.sport-btn').forEach(button => {
  button.addEventListener('click', () => setSportMode(button.dataset.sport));
});

updateFilterButtons('football');
render();
$('sportModal').classList.add('show');
