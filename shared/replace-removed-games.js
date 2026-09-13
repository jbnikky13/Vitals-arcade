/* Safe hub integration for the three replacement games. */
(function(){
 function mount(){
  if(!window.VitalsGameCatalog||document.getElementById('replacement-games'))return;
  const host=document.querySelector('#games,.games,.game-grid,.game-list')||document.querySelector('main')||document.body;
  const section=document.createElement('section');section.id='replacement-games';section.style.cssText='margin:18px 0';
  section.innerHTML='<h2 style="margin:0 0 10px">NEW GAMES</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">'+window.VitalsGameCatalog.map(g=>`<a href="${g.url}" style="display:block;padding:16px;border:1px solid #24455c;border-radius:14px;background:#12293b;color:inherit;text-decoration:none"><div style="font-size:28px">${g.icon}</div><b>${g.title}</b><p style="margin:6px 0 0;color:#7f98a3;font-size:12px">${g.description}</p></a>`).join('')+'</div>';
  host.appendChild(section);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
