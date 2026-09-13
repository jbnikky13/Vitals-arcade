(function(){
  function get(){try{return JSON.parse(localStorage.getItem('vitalsArcadeProgress')||'{}')}catch(e){return {}}}
  function mount(){
    if(document.getElementById('va-stats')) return;
    var s=get();
    var el=document.createElement('section');el.id='va-stats';
    el.style.cssText='margin:16px 2px;padding:15px;border:1px solid #24455c;border-radius:14px;background:linear-gradient(180deg,#17324a,#12293b);font-family:Inter,system-ui,sans-serif;color:#eaf2f2';
    el.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><b style="font-size:13px">YOUR ARCADE</b><span style="font-size:10px;color:#7f98a3;letter-spacing:1px">LOCAL PROGRESS</span></div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;text-align:center"><div><b id="va-xp">'+(s.xp||0)+'</b><small style="display:block;color:#7f98a3;font-size:10px">XP</small></div><div><b id="va-streak">'+(s.streak||0)+'</b><small style="display:block;color:#7f98a3;font-size:10px">STREAK</small></div><div><b id="va-best">'+(s.bestStreak||0)+'</b><small style="display:block;color:#7f98a3;font-size:10px">BEST</small></div><div><b id="va-plays">'+(s.plays||0)+'</b><small style="display:block;color:#7f98a3;font-size:10px">PLAYS</small></div></div>';
    var root=document.querySelector('.hub-intro')||document.querySelector('#app');
    if(root) root.insertAdjacentElement('afterend',el);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount); else mount();
})();
