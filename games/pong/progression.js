(function(){
  const original=window.finishMatch;
  if(typeof original!=='function')return;
  window.finishMatch=function(){
    original();
    const text=(document.getElementById('winnerText')?.textContent||'').toLowerCase();
    const score=(document.getElementById('pointsStat')?.textContent||'0');
    if(window.VitalsArcade)window.VitalsArcade.recordGame('neon-pong',Number(score)||0,text.includes('player wins'));
  };
})();
