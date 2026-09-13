/* Vitals Arcade shared progression state */
(function(){
  const KEY='vitalsArcadeProgress';
  const defaults={xp:0,streak:0,bestStreak:0,plays:0,solves:0,bestScores:{}};
  function read(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return {...defaults}}}
  function write(s){localStorage.setItem(KEY,JSON.stringify(s));return s}
  window.VitalsArcade={
    getProgress:read,
    recordGame:function(game,score,solved){const before=read();const s=before;s.plays++;if(solved){s.solves++;s.streak++;s.bestStreak=Math.max(s.bestStreak,s.streak);s.xp+=Math.max(10,Math.round(score||0));}else{s.streak=0;}s.bestScores[game]=Math.max(Number(s.bestScores[game]||0),Number(score||0));write(s);window.dispatchEvent(new CustomEvent('vitals:progress',{detail:{game,score:Number(score||0),solved:!!solved,before,after:s}}));return s},
    resetStreak:function(){const s=read();s.streak=0;return write(s)}
  };
})();
