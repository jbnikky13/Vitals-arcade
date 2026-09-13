(function(){
  const files=['shared/arcade-state.js','shared/arcade-profile.js'];
  function load(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s)})}
  load(files[0]).then(()=>load(files[1])).catch(()=>{});
})();
