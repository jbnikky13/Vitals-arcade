/* Drop-in progression panel for the arcade hub */
(function(){
  function mount(){
    if(!window.VitalsArcadeMeta||document.getElementById('arcade-progress'))return;
    const s=VitalsArcadeMeta.snapshot(),d=VitalsArcadeMeta.daily();
    const el=document.createElement('section');el.id='arcade-progress';el.style.cssText='margin:16px 0;padding:16px;border:1px solid #24455c;border-radius:14px;background:linear-gradient(180deg,#17324a,#12293b);font-family:Inter,system-ui;color:#eaf2f2';
    el.innerHTML=`<div style="display:flex;justify-content:space-between;gap:12px;align-items:center"><div><b>YOUR ARCADE</b><div style="color:#7f98a3;font-size:12px;margin-top:4px">Level ${s.level} · ${s.xp} XP</div></div><div style="text-align:right;color:#8fe3c1;font:700 12px monospace">🔥 ${s.streak} STREAK</div></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px"><div style="padding:10px;border:1px solid #24455c;border-radius:9px"><small>BEST</small><br><b>${s.bestStreak}</b></div><div style="padding:10px;border:1px solid #24455c;border-radius:9px"><small>SOLVED</small><br><b>${s.solves}</b></div><div style="padding:10px;border:1px solid #24455c;border-radius:9px"><small>PLAYED</small><br><b>${s.plays}</b></div></div><div style="margin-top:12px;padding:10px;border:1px solid #24455c;border-radius:9px;color:#f2a93b;font-size:12px">⚡ DAILY: ${d.challenge}</div><div style="margin-top:10px;color:#7f98a3;font-size:11px">Achievements unlocked: ${s.achievements.length}/5</div>`;
    const app=document.querySelector('#app');if(app)app.prepend(el);else document.body.prepend(el);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
