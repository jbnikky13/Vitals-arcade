/* Vitals Arcade profile + daily challenge UI */
(function(){
  function state(){return window.VitalsArcade?.getProgress?.()||{xp:0,streak:0,bestStreak:0,plays:0,solves:0,bestScores:{}}}
  function mount(){
    if(document.getElementById('arcade-profile'))return;
    const s=state(); const level=Math.floor((s.xp||0)/250)+1;
    const el=document.createElement('section');el.id='arcade-profile';el.style.cssText='margin:16px 0;padding:16px;border:1px solid #24455c;border-radius:14px;background:linear-gradient(180deg,#17324a,#12293b);color:#eaf2f2;font-family:Inter,system-ui';
    el.innerHTML='<div style="display:flex;justify-content:space-between;align-items:center"><div><b>YOUR ARCADE</b><div style="color:#7f98a3;font-size:12px;margin-top:4px">Level '+level+' · '+(s.xp||0)+' XP</div></div><div style="color:#8fe3c1;font:700 12px monospace">🔥 '+(s.streak||0)+'</div></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px"><div style="padding:9px;border:1px solid #24455c;border-radius:9px"><small>BEST</small><br><b>'+(s.bestStreak||0)+'</b></div><div style="padding:9px;border:1px solid #24455c;border-radius:9px"><small>SOLVED</small><br><b>'+(s.solves||0)+'</b></div><div style="padding:9px;border:1px solid #24455c;border-radius:9px"><small>PLAYED</small><br><b>'+(s.plays||0)+'</b></div></div><div style="margin-top:12px;padding:11px;border:1px solid #24455c;border-radius:9px;color:#f2a93b;font-size:12px">⚡ DAILY CHALLENGE<br><b>Complete 5 quick puzzles today.</b></div>';
    const app=document.querySelector('#app');if(app)app.prepend(el);else document.body.prepend(el);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
