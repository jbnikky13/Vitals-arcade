/* Pong progression bridge. Include after the game's own script. */
(function(){
  function record(win,score){if(window.VitalsArcade) return VitalsArcade.recordGame('neon-pong',Number(score||0),!!win);}
  window.VitalsPongProgress={record};
})();
