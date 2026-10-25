(function(){
  const sticky = document.querySelector('.mobile-sticky');
  if(!sticky) return;
  const toggleSticky = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) : 0;
    if (window.innerWidth <= 900 && progress >= 0.25) {
      sticky.classList.add('show');
    } else {
      sticky.classList.remove('show');
    }
  };
  window.addEventListener('scroll', toggleSticky, {passive:true});
  window.addEventListener('resize', toggleSticky);
  document.addEventListener('DOMContentLoaded', toggleSticky);
  toggleSticky();
})();
