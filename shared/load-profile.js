(function(){
  const files=['shared/arcade-state.js','shared/arcade-profile.js'];
  const retired=['Hold Steady','Balance Test','Breathing Pacer'];
  function load(src){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s)})}
  function removeRetired(){
    const cards=document.querySelectorAll('.card');
    cards.forEach(function(card){
      const title=card.querySelector('h3');
      if(!title)return;
      const name=title.textContent.trim().toLowerCase();
      if(retired.some(function(x){return name===x.toLowerCase()}))card.remove();
    });
  }
  function startRemoval(){
    removeRetired();
    const grid=document.getElementById('hub-grid');
    if(!grid)return;
    const observer=new MutationObserver(removeRetired);
    observer.observe(grid,{childList:true,subtree:true});
    setTimeout(function(){observer.disconnect();removeRetired()},5000);
  }
  load(files[0]).then(()=>load(files[1])).then(()=>{
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',startRemoval);
    else startRemoval();
  }).catch(()=>{});
})();
