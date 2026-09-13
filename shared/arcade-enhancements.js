/* Shared Vitals Arcade meta-progression */
(function(){
  const KEY='vitalsArcadeProgress';
  const ACH=[
    ['first-play','First Play','Play your first game',1],
    ['five-solves','Warm Up','Solve 5 challenges',5],
    ['ten-streak','On Fire','Reach a 10-game streak',10],
    ['hundred-xp','Getting Sharp','Earn 100 XP',100],
    ['thousand-xp','Arcade Regular','Earn 1,000 XP',1000]
  ];
  function get(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}}
  function level(xp){return Math.floor(Math.max(0,Number(xp||0))/250)+1}
  function unlocked(s){return ACH.filter(a=>{if(a[0]==='first-play')return (s.plays||0)>=1;if(a[0]==='five-solves')return (s.solves||0)>=5;if(a[0]==='ten-streak')return (s.bestStreak||0)>=10;return (s.xp||0)>=a[3]}).map(a=>a[0])}
  window.VitalsArcadeMeta={
    level,
    achievements:function(){return ACH.map(a=>({id:a[0],name:a[1],description:a[2],unlocked:unlocked(get()).includes(a[0])}))},
    daily:function(){const d=new Date();const key=`${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()}`;return {key,challenge:'Solve 5 quick puzzles today',target:5}},
    snapshot:function(){const s=get();return {xp:s.xp||0,level:level(s.xp),streak:s.streak||0,bestStreak:s.bestStreak||0,plays:s.plays||0,solves:s.solves||0,achievements:unlocked(s)}}
  };
})();
