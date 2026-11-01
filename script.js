/* DEV EXPERIENCE 2.0 — JavaScript puro. Textos vêm de data.js */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const K={lab:'devx:lab:project',ed:'devx:editor:site',home:'devx:presenter:home'};
const ld=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v&&typeof v==='object'?v:d}catch{return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2500)}

/* ---------- Navegação ---------- */
const NAV=[['inicio','Início'],['editor','Editor Visual'],['dev-lab','DEV LAB'],['game','Game'],['aprenda','Aprenda'],['bastidores','Bastidores'],['apresentador','Apresentador']];
$('#nav').innerHTML=NAV.map(([h,l])=>`<li><a href="#${h}">${l}</a></li>`).join('');
function route(){let h=location.hash.slice(1);if(!NAV.some(n=>n[0]===h))h='inicio';
  $$('.view').forEach(v=>v.hidden=v.id!=='v-'+h);
  $$('#nav a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+h));
  $('#menu').classList.remove('open');$('#menu-btn').setAttribute('aria-expanded','false');scrollTo(0,0)}
addEventListener('hashchange',route);
$('#menu-btn').onclick=()=>{const o=$('#menu').classList.toggle('open');$('#menu-btn').setAttribute('aria-expanded',o)};

/* ---------- Início ---------- */
let home=Object.assign({},DEFAULT_HOME,ld(K.home,{}));
const renderHome=()=>$$('[data-h]').forEach(e=>e.textContent=home[e.dataset.h]);
$('#cards').innerHTML=[['editor','🧩','Editor Visual','Monte um site sem código e veja a prévia ao vivo.'],['dev-lab','⌨️','DEV LAB','Escreva HTML, CSS e JavaScript de verdade e execute.'],['game','🎮','Game','4 fases de desafios para testar seu raciocínio.'],['aprenda','📖','Aprenda','Lições rápidas sobre front-end, back-end e mais.'],['bastidores','🧱','Bastidores','Veja como um site funciona por dentro.']]
  .map(([h,i,t,x])=>`<li><a class="surface" href="#${h}"><i>${i}</i><b>${t}</b><span>${x}</span><em>Abrir →</em></a></li>`).join('');

/* ---------- Editor Visual ---------- */
const fromT=t=>({template:t.id,company:t.company,title:t.title,description:t.description,button:t.button,bg:t.bg,text:t.text,btn:t.btn,image:t.id});
const FIELDS={company:'e-company',title:'e-title',description:'e-desc',button:'e-button',bg:'e-bg',text:'e-text',btn:'e-btn'};
let S=Object.assign(fromT(DEFAULT_TEMPLATES[0]),ld(K.ed,{})),dev='desk';
const IMGS=[['loja','Produtos'],['portfolio','Mesa de design'],['empresa','Reunião de equipe']];
function fill(){for(const k in FIELDS)$('#'+FIELDS[k]).value=S[k]}
function pickers(){
  $('#tpls').innerHTML=DEFAULT_TEMPLATES.map(t=>`<button type="button" class="pick" data-t="${t.id}" aria-pressed="${S.template===t.id}">${t.label}</button>`).join('');
  $('#imgs').innerHTML=IMGS.map(([id,l])=>`<button type="button" class="pick thumb" data-i="${id}" aria-label="${l}" aria-pressed="${S.image===id}"><img src="assets/tpl-${id}.jpg" alt=""></button>`).join('');
}
function pv(){
  const m=dev==='mob',b=`background:${esc(S.btn)};color:#fff;border:0;border-radius:8px;padding:10px 18px;font-weight:600;cursor:pointer`;
  const it=S.template==='loja'?[['Tênis Aero','R$ 299'],['Fone Wave','R$ 189'],['Mochila Go','R$ 149']]:S.template==='portfolio'?[['App de finanças','UI/UX'],['Site de café','Web'],['Dashboard escolar','Front-end']]:[['Estratégia','Planejamento'],['Tecnologia','Sistemas'],['Pessoas','Treinamento']];
  const box=$('#pvbox');box.style.width=m?'375px':'100%';box.style.minWidth=m?'':'min(100%,900px)';
  box.innerHTML=`<div style="background:${esc(S.bg)};color:${esc(S.text)};font-family:system-ui,sans-serif">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-bottom:1px solid ${esc(S.text)}22"><strong>${esc(S.company||'Sua empresa')}</strong>${m?'':'<span style="opacity:.7;font-size:14px">Início · Sobre · Contato</span>'}</div>
  <div style="display:grid;grid-template-columns:${m?'1fr':'1.1fr 1fr'};gap:24px;padding:${m?20:40}px;align-items:center"><div>
    <h2 style="font-size:${m?26:38}px;line-height:1.15;font-weight:800;margin:0">${esc(S.title)}</h2>
    <p style="opacity:.8;margin-top:12px">${esc(S.description)}</p>
    <button style="${b};margin-top:18px">${esc(S.button)}</button></div>
    <img src="assets/tpl-${esc(S.image)}.jpg" alt="Imagem do site" style="width:100%;border-radius:12px;aspect-ratio:16/10;object-fit:cover"></div>
  <div style="display:grid;grid-template-columns:${m?'1fr':'repeat(3,1fr)'};gap:14px;padding:${m?'0 20px 24px':'0 40px 40px'}">${it.map(([a,c])=>`<div style="border:1px solid ${esc(S.text)}22;border-radius:12px;padding:16px"><strong>${a}</strong><p style="opacity:.7;margin:4px 0 10px">${c}</p><button style="${b};padding:6px 12px;font-size:13px">${S.template==='loja'?'Adicionar':'Ver mais'}</button></div>`).join('')}</div></div>`;
}
$('#pvbox').onclick=e=>{const b=e.target.closest('button');if(b)toast(`Demonstração: “${b.textContent}” clicado.`)};
const saveEd=()=>{sv(K.ed,S);pv()};
for(const k in FIELDS)$('#'+FIELDS[k]).oninput=e=>{S[k]=e.target.value;saveEd()};
$('#tpls').onclick=e=>{const t=e.target.closest('[data-t]');if(!t)return;S=fromT(DEFAULT_TEMPLATES.find(x=>x.id===t.dataset.t));fill();pickers();saveEd()};
$('#imgs').onclick=e=>{const t=e.target.closest('[data-i]');if(!t)return;S.image=t.dataset.i;pickers();saveEd()};
$('#e-reset').onclick=()=>{if(!confirm('Restaurar padrão? As personalizações deste modelo serão substituídas pelos valores originais.'))return;S=fromT(DEFAULT_TEMPLATES.find(x=>x.id===S.template));fill();pickers();saveEd()};
const setDev=d=>{dev=d;[['desk','#d-desk'],['mob','#d-mob']].forEach(([k,id])=>{$(id).className='btn sm '+(k===d?'sec':'gh');$(id).setAttribute('aria-pressed',k===d)});pv()};
$('#d-desk').onclick=()=>setDev('desk');$('#d-mob').onclick=()=>setDev('mob');
const fullToggle=f=>{const on=$('#pvsec').classList.toggle('full',f);$('#e-full').textContent=on?'Sair da tela cheia':'⛶ Tela cheia'};
$('#e-full').onclick=()=>fullToggle();
addEventListener('keydown',e=>e.key==='Escape'&&fullToggle(false));

/* ---------- DEV LAB ---------- */
const EX={html:`<h1>Olá, futuro dev!</h1>\n<p>Cliques: <span id="n">0</span></p>\n<button id="b">Clique aqui</button>`,css:`body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; }\nbutton { background: #168BFF; color: white; border: 0; padding: 10px 18px; border-radius: 8px; cursor: pointer; }`,js:`let cliques = 0;\ndocument.getElementById('b').onclick = () => {\n  cliques++;\n  document.getElementById('n').textContent = cliques;\n};`};
const MAX=50000;let proj=Object.assign({},EX,ld(K.lab,{})),tab='html',ran=null;
const buildDoc=p=>`<!doctype html><html><head><meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: blob:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; form-action 'none'">
<script>window.onerror=function(m,s,l){parent.postMessage({devx:'error',msg:String(m),line:l},'*')};<\/script>
<style>${p.css}</style></head><body>${p.html}<script>try{${p.js.replace(/<\/script/gi,'<\\/script')}\n}catch(e){parent.postMessage({devx:'error',msg:e.message},'*')}<\/script></body></html>`;
function labUI(){
  $('#tabs').innerHTML=['html','css','js'].map(t=>`<button class="btn sm ${tab===t?'sec':'gh'}" role="tab" aria-selected="${tab===t}" data-t="${t}">${t.toUpperCase()}</button>`).join('');
  $('#l-code').value=proj[tab];labSt();
}
function labSt(){const big=proj.html.length+proj.css.length+proj.js.length>MAX,dirty=!ran||['html','css','js'].some(k=>ran[k]!==proj[k]);
  $('#l-run').disabled=big;$('#l-st').textContent=big?'Código muito grande (limite de 50 mil caracteres).':dirty?'● Alterações ainda não executadas':'✓ Prévia atualizada'}
$('#tabs').onclick=e=>{const t=e.target.closest('[data-t]');if(t){tab=t.dataset.t;labUI()}};
$('#l-code').oninput=e=>{proj[tab]=e.target.value;sv(K.lab,proj);labSt()};
$('#l-run').onclick=()=>{$('#l-err').textContent='nenhum';$('#l-err').className='mut';ran={...proj};$('#l-frame').srcdoc=buildDoc(ran);labSt()};
$('#l-ex').onclick=()=>{if(confirm('Restaurar exemplo? Seu código atual será substituído pelo exemplo inicial.')){proj={...EX};sv(K.lab,proj);labUI()}};
$('#l-clr').onclick=()=>{if(confirm('Limpar tudo? HTML, CSS e JavaScript ficarão vazios.')){proj={html:'',css:'',js:''};sv(K.lab,proj);labUI()}};
$('#l-frame').srcdoc="<p style='font-family:sans-serif;color:#64748b;padding:20px'>Clique em Executar para ver o resultado.</p>";
addEventListener('message',e=>{if(e.source!==$('#l-frame').contentWindow||!e.data||e.data.devx!=='error')return;
  const o=$('#l-err');o.className='';o.innerHTML=(o.textContent==='nenhum'?'':o.innerHTML)+`<p class="mono">${esc(e.data.msg)}${e.data.line?` (linha ${e.data.line})`:''}</p>`});

/* ---------- Game ---------- */
const P=DEFAULT_GAME,TOT=P.reduce((n,p)=>n+p.questions.length,0),PTS=10;
let G={p:0,i:0,sc:0,h:0,pk:null,done:0,on:0};
$('#g-lead').textContent=`${P.length} fases, ${TOT} desafios. Cada acerto vale ${PTS} pontos.`;
const gStart=()=>{G={p:0,i:0,sc:0,h:0,pk:null,done:0,on:1};game()};
function gPick(i){if(G.pk!==null)return;G.pk=i;if(i===P[G.p].questions[G.i].answer){G.sc+=PTS;G.h++}game();$('#g-next').focus()}
function gNext(){G.pk=null;if(G.i+1<P[G.p].questions.length)G.i++;else if(G.p+1<P.length){G.p++;G.i=0}else G.done=1;game()}
function game(){const b=$('#gbox');
  if(!G.on){b.innerHTML=`<div class="surface" style="padding:2rem;text-align:center"><ol class="mut" style="list-style:none;padding:0;max-width:28rem;margin:0 auto;text-align:left;font-size:.875rem">${P.map(p=>`<li>• <strong style="color:#fff">${esc(p.title)}</strong> — ${esc(p.goal)}</li>`).join('')}</ol><button class="btn hero lg" style="margin-top:1.5rem" onclick="gStart()">Começar o jogo</button></div>`;return}
  if(G.done){const r=G.h/TOT;b.innerHTML=`<div class="surface glow" style="padding:2rem;text-align:center" role="status"><div style="font-size:3.5rem">🏆</div><h2 style="font-size:2rem;margin-top:1rem">Fim de jogo!</h2><p style="font-size:1.125rem;margin-top:.5rem">Você fez <strong class="grad">${G.sc} pontos</strong></p><p class="mut">${G.h} de ${TOT} acertos</p><p style="margin-top:1rem">${r>=.8?'Incrível! Você pensa como um dev 🚀':r>=.5?'Muito bem! Continue praticando.':'Todo dev começou do zero. Tente de novo!'}</p><button class="btn hero lg" style="margin-top:1.5rem" onclick="gStart()">↺ Jogar novamente</button></div>`;return}
  const ph=P[G.p],q=ph.questions[G.i],pk=G.pk,done=P.slice(0,G.p).reduce((n,x)=>n+x.questions.length,0)+G.i+(pk!==null?1:0),last=G.i+1>=ph.questions.length;
  b.innerHTML=`<div class="surface" style="padding:1.5rem 2rem">
  <div class="row" style="justify-content:space-between;font-size:.875rem"><span style="background:var(--acc);padding:.25rem .75rem;border-radius:99px;font-weight:500">${esc(ph.title)}</span><span aria-live="polite">Pontos: <strong class="cy">${G.sc}</strong></span></div>
  <div class="seg4" aria-label="Fase ${G.p+1} de ${P.length}">${P.map((_,k)=>`<i class="${k<G.p?'d':k===G.p?'c':''}"></i>`).join('')}</div>
  <div class="pbar" role="progressbar" aria-label="Progresso geral" aria-valuenow="${Math.round(done/TOT*100)}"><i style="width:${done/TOT*100}%"></i></div>
  <p class="mut" style="margin-top:1.5rem;font-size:.75rem">Desafio ${G.i+1} de ${ph.questions.length} · ${esc(ph.goal)}</p>
  <h2 style="font-size:1.25rem;font-weight:600;margin-top:.25rem">${esc(q.q)}</h2>
  ${q.code?`<pre class="c">${esc(q.code)}</pre>`:''}
  ${q.options.map((o,i)=>`<button class="opt ${pk===null?'':i===q.answer?'ok':i===pk?'no':''}" ${pk!==null?'disabled':''} onclick="gPick(${i})"><span class="mono mut" style="margin-right:.5rem">${String.fromCharCode(65+i)}.</span>${esc(o)}</button>`).join('')}
  ${pk!==null?`<div class="fb" role="status"><p style="font-weight:600">${pk===q.answer?`✅ Certo! +${PTS}`:'❌ Não foi dessa vez'}</p><p class="mut" style="font-size:.875rem;margin-top:.25rem">${esc(q.explain)}</p><button class="btn" id="g-next" style="margin-top:1rem" onclick="gNext()">${!last?'Próximo desafio':G.p+1<P.length?'Próxima fase':'Ver resultado'}</button></div>`:''}</div>`}

/* ---------- Aprenda ---------- */
const LI={user:'👤',monitor:'🖥️',server:'🗄️',code:'💻',palette:'🎨',zap:'⚡',database:'🛢️',cloud:'☁️',rocket:'🚀',briefcase:'💼'};
let li=0;
function lessons(){const L=DEFAULT_LESSONS,l=L[li];
  $('#l-nav').innerHTML=L.map((x,k)=>`<li><button ${k===li?'aria-current="step"':''} onclick="li=${k};lessons()"><span class="mono cy" style="font-size:.75rem;margin-right:.5rem">${String(k+1).padStart(2,'0')}</span>${esc(x.title)}</button></li>`).join('');
  $('#l-art').innerHTML=`<span class="ico">${LI[l.icon]||'💻'}</span><p class="mono mut" style="margin-top:1.25rem;font-size:.75rem">Lição ${li+1} de ${L.length}</p><h2 style="font-size:1.75rem;margin-top:.25rem">${esc(l.title)}</h2><p class="mut" style="font-size:1.125rem;margin-top:1rem">${esc(l.text)}</p><h3 class="cy" style="margin-top:1.5rem;font-size:.875rem;text-transform:uppercase;letter-spacing:.05em">Exemplo</h3><pre class="c" style="color:#fff;margin-top:.5rem">${esc(l.example)}</pre><div class="row" style="justify-content:space-between;margin-top:2rem"><button class="btn out" ${li===0?'disabled':''} onclick="li--;lessons()">‹ Voltar</button><button class="btn" ${li===L.length-1?'disabled':''} onclick="li++;lessons()">Avançar ›</button></div>`}

/* ---------- Bastidores ---------- */
const NODES=[['front','🖥️','Front-end','Interface e interação','Tudo o que aparece no navegador: telas, botões, formulários. Feito com HTML, CSS e JavaScript.','Você clica em “Comprar” na loja virtual.'],['back','⚙️','Back-end','Regras e processamento','Recebe o pedido do front-end, aplica as regras (tem estoque? o preço está certo?) e decide a resposta.','O sistema confere se o tênis tamanho 40 ainda está disponível.'],['db','🛢️','Banco de dados','Armazenamento','Guarda as informações de forma organizada e permanente: produtos, usuários, pedidos.','Registra o pedido nº 1024 com nome, endereço e itens.'],['server','☁️','Servidor','Disponibilização','Computador ligado 24h na internet que hospeda o site e o entrega para qualquer pessoa que acessa o endereço.','Mantém novashop.com.br no ar para milhares de visitantes ao mesmo tempo.']];
const FLOW=['front','back','db','back','front'],FT=['Você clica em Comprar','Back-end recebe e valida','Banco salva o pedido','Back-end prepara a resposta','Tela mostra “Pedido confirmado!”'];
let sel='front',st=-1,tm;
function bast(){const n=NODES.find(x=>x[0]===sel);
  $('#b-nodes').innerHTML=NODES.map(x=>`<button class="node" aria-pressed="${sel===x[0]}" onclick="clearTimeout(tm);st=-1;sel='${x[0]}';bast()"><span aria-hidden="true">${x[1]}</span><b>${x[2]}</b><small>${x[3]}</small></button>`).join('');
  $('#b-det').innerHTML=`<div><h2 style="font-size:1.25rem"><span class="cy">${n[1]}</span> ${n[2]}</h2><p class="mut" style="margin-top:.5rem">${n[4]}</p><p style="margin-top:.75rem;font-size:.875rem"><strong class="cy">Exemplo:</strong> ${n[5]}</p></div><div><button class="btn hero" ${st>=0?'disabled':''} onclick="sim(0)">▶ Simular um pedido</button><ol>${FT.map((t,k)=>`<li class="${k===st?'now':k<st||st===-2?'past':''}">${k+1}. ${t}</li>`).join('')}</ol></div>`}
function sim(n){clearTimeout(tm);st=n;if(n>=0){sel=FLOW[n];tm=setTimeout(()=>sim(n+1<FLOW.length?n+1:-2),1400)}bast()}

/* ---------- Apresentador ---------- */
const HL={badge:'Selo',headline:'Título principal',intro:'Introdução',quote:'Frase de destaque'};
function pres(){$('#p-home').innerHTML=Object.keys(HL).map(k=>`<div><label for="h-${k}">${HL[k]}</label><textarea id="h-${k}"></textarea></div>`).join('');
  Object.keys(HL).forEach(k=>{const t=$('#h-'+k);t.value=home[k];t.oninput=()=>{home[k]=t.value;sv(K.home,home);renderHome()}})}
$('#p-reset').onclick=()=>{if(confirm('Restaurar conteúdo original? Todos os textos editados aqui voltarão ao padrão.')){home={...DEFAULT_HOME};sv(K.home,home);renderHome();pres()}};

/* ---------- Início ---------- */
renderHome();fill();pickers();pv();labUI();game();lessons();bast();pres();route();
