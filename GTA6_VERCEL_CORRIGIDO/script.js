(function(){
  const cfg = window.GTA_PACK_CONFIG || {};
  document.querySelectorAll('[data-price]').forEach(el => {
    const key = el.dataset.price;
    if (cfg.prices && cfg.prices[key]) el.textContent = cfg.prices[key];
  });
  document.querySelectorAll('.checkout-link').forEach(link => {
    const key = link.dataset.plan;
    const url = cfg.checkout && cfg.checkout[key];
    if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else {
      link.href = '#oferta';
      link.addEventListener('click', function(e){
        if (!(cfg.checkout && cfg.checkout[key])) {
          e.preventDefault();
          const note = document.querySelector('.offer-disclaimer');
          if (note) { note.classList.add('notice-pulse'); note.scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(()=>note.classList.remove('notice-pulse'),1800); }
        }
      });
    }
  });
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('.faq-list details').forEach(item => item.addEventListener('toggle', () => {
    const sign = item.querySelector('summary span'); if (sign) sign.textContent = item.open ? '−' : '+';
  }));
})();
