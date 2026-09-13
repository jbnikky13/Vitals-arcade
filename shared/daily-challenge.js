/* Deterministic daily challenge shared by Vitals Arcade */
(function(){
 const KEY='vitalsArcadeDaily';
 const puzzles=[
  {q:'2, 4, 8, 16, ?',a:'32',kind:'Number Sprint'},
  {q:'12 ÷ 3 + 5 = ?',a:'9',kind:'Quick Math'},
  {q:'5, 8, 13, 21, ?',a:'34',kind:'Pattern Rush'},
  {q:'Odd number. Remove one letter and become even: ?',a:'seven',kind:'Word Logic'},
  {q:'7 × 6 − 4 = ?',a:'38',kind:'Quick Math'},
  {q:'3, 6, 10, 15, ?',a:'21',kind:'Number Sprint'},
  {q:'If CAT becomes DBU, DOG becomes ?',a:'eph',kind:'Word Logic'}
 ];
 function key(){const d=new Date();return `${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()}`}
 function hash(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h}
 function challenge(){const k=key(),p=puzzles[hash(k)%puzzles.length];let s;try{s=JSON.parse(localStorage.getItem(KEY)||'null')}catch{};if(!s||s.key!==k)s={key:k,attempts:0,completed:false,correct:false};return {...s,puzzle:p}}
 function norm(x){return String(x||'').trim().toLowerCase().replace(/[₦,$,\s,°]/g,'')}
 window.VitalsDaily={get:challenge,submit:function(answer){const s=challenge();if(s.completed)return s; s.attempts++;s.correct=norm(answer)===norm(s.puzzle.a);if(s.correct){s.completed=true;try{localStorage.setItem(KEY,JSON.stringify({key:s.key,attempts:s.attempts,completed:true,correct:true}))}catch{};if(window.VitalsArcade)window.VitalsArcade.recordGame('daily-challenge',100,true)}return {...s,puzzle:s.puzzle}}};
})();
