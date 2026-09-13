/* Word Rush progression bridge for the existing game. */
(function(){
  window.VitalsWordProgress={record:function(correct,score){if(window.VitalsArcade)return VitalsArcade.recordGame('word-rush',Number(score||0),!!correct);}};
})();
