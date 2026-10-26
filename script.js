(function(){
  const CHECKOUT_URL = 'https://pay.hotmart.com/O108188542S?checkoutMode=10';

  function injectOfferStyles(){
    if (document.getElementById('momento-offer-mobile-styles')) return;
    const style = document.createElement('style');
    style.id = 'momento-offer-mobile-styles';
    style.textContent = `
      #oferta{content-visibility:visible!important;scroll-margin-top:12px}
      #oferta .value-list.value-ladder{display:grid;gap:12px;margin:22px 0}
      #oferta .value-ladder .value-step{display:grid;grid-template-columns:42px 1fr;gap:12px;align-items:start;padding:15px 16px;border:1px solid rgba(255,255,255,.15);border-radius:16px;background:rgba(255,255,255,.075)}
      #oferta .value-ladder .value-step-num{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:#8de0d3;color:#17324d;font-weight:950;font-size:16px}
      #oferta .value-ladder small{display:block;color:#8de0d3;font-size:10px;line-height:1.2;letter-spacing:.09em;font-weight:900;margin-bottom:4px}
      #oferta .value-ladder b{display:block;color:#fff;font-size:17px;line-height:1.25;margin-bottom:4px}
      #oferta .value-ladder p{margin:0;color:#dce8ef;font-size:13px;line-height:1.45}
      #oferta .value-ladder .value-step-bonus{border-color:rgba(239,157,45,.42);background:rgba(239,157,45,.11)}
      #oferta .value-ladder .value-step-bonus .value-step-num{background:#fff1dc;color:#a9680c}
      #oferta .value-ladder .value-step-bonus small{color:#ffd89d}
      #oferta .offer-total{font-size:12px;font-weight:950;color:#247f75;letter-spacing:.08em;margin-bottom:4px}
      @media(max-width:560px){
        #oferta.section{padding-top:32px;padding-bottom:34px}
        #oferta .wrap.offer{padding:18px 13px;border-radius:22px;gap:16px}
        #oferta .offer-grid{gap:16px}
        #oferta h2{font-size:28px;line-height:1.06;margin:12px 0 10px}
        #oferta .muted{font-size:14.5px;line-height:1.42;margin-bottom:12px}
        #oferta .eyebrow{font-size:10px;padding:6px 8px}
        #oferta .value-list.value-ladder{gap:9px;margin:15px 0 13px}
        #oferta .value-ladder .value-step{grid-template-columns:34px 1fr;gap:10px;padding:11px 10px;border-radius:14px}
        #oferta .value-ladder .value-step-num{width:32px;height:32px;border-radius:10px;font-size:14px}
        #oferta .value-ladder small{font-size:9px;margin-bottom:3px}
        #oferta .value-ladder b{font-size:15px;margin-bottom:3px}
        #oferta .value-ladder p{font-size:12.25px;line-height:1.35}
        #oferta .note{font-size:12px;line-height:1.38;padding:10px 11px;margin:0}
        #oferta .price-box{padding:19px 13px;border-radius:18px}
        #oferta .offer-total{font-size:11px}
        #oferta .price-label{font-size:10.5px}
        #oferta .price{font-size:52px;margin:6px 0 8px}
        #oferta .price-box>p{font-size:13.5px;line-height:1.38;margin-bottom:11px}
        #oferta .scarcity-note{font-size:11.75px;line-height:1.34;margin:9px 0 12px;padding:10px}
        #oferta .price-box .btn{width:100%;min-height:56px;padding:15px 10px;font-size:14.5px;line-height:1.18}
        #oferta .micro{font-size:10.5px;margin-top:8px}
      }
    `;
    document.head.appendChild(style);
  }

  function enhanceOffer(){
    const offer = document.getElementById('oferta');
    if (!offer) return;

    offer.style.contentVisibility = 'visible';

    const list = offer.querySelector('.value-list');
    if (list && !list.classList.contains('value-ladder')) {
      list.classList.add('value-ladder');
      list.innerHTML = `
        <div class="value-step">
          <span class="value-step-num">1</span>
          <div><small>HERRAMIENTA PRINCIPAL</small><b>Selector Momento Patitas™</b><p>Elige ocasión, ingredientes y tiempo. Recibes 3 recomendaciones y abres la receta completa al instante.</p></div>
        </div>
        <div class="value-step">
          <span class="value-step-num">2</span>
          <div><small>BIBLIOTECA INCLUIDA</small><b>40 recetas completas</b><p>Ingredientes, cantidades, preparación, porción orientativa, conservación y tips.</p></div>
        </div>
        <div class="value-step">
          <span class="value-step-num">3</span>
          <div><small>FUNCIONES PRÁCTICAS</small><b>Favoritas + recetas preparadas</b><p>Guarda lo que le encantó y lleva registro de lo que ya probaron juntos.</p></div>
        </div>
        <div class="value-step value-step-bonus">
          <span class="value-step-num">🎁</span>
          <div><small>BONO 1</small><b>Ebook Cocina con Patitas</b><p>El recetario completo en PDF para descargar, guardar o imprimir.</p></div>
        </div>
        <div class="value-step value-step-bonus">
          <span class="value-step-num">🐾</span>
          <div><small>BONO 2</small><b>Club Momento Patitas™</b><p>Comunidad privada de WhatsApp para compartir recetas, fotos y logros.</p></div>
        </div>`;
    }

    const priceBox = offer.querySelector('.price-box');
    if (priceBox && !priceBox.querySelector('.offer-total')) {
      const total = document.createElement('div');
      total.className = 'offer-total';
      total.textContent = 'TODO ESTO HOY POR';
      priceBox.prepend(total);
    }

    const buyButton = offer.querySelector('.price-box .btn');
    if (buyButton) buyButton.href = CHECKOUT_URL;
  }

  function scrollToOffer(behavior){
    const offer = document.getElementById('oferta');
    if (!offer) return false;
    offer.style.contentVisibility = 'visible';
    const top = offer.getBoundingClientRect().top + window.pageYOffset - 8;
    window.scrollTo({top: Math.max(0, top), behavior: behavior || 'smooth'});
    return true;
  }

  function bindOfferCTA(){
    document.addEventListener('click', function(event){
      const link = event.target.closest('a[href="#oferta"], [data-scroll-to="oferta"]');
      if (!link) return;
      if (scrollToOffer('smooth')) {
        event.preventDefault();
        event.stopPropagation();
        try { history.replaceState(null, '', '#oferta'); } catch (_) {}
      }
    }, true);
  }

  function setupSticky(){
    const sticky = document.querySelector('.mobile-sticky');
    if (!sticky) return;
    const toggleSticky = function(){
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) : 0;
      if (window.innerWidth <= 900 && progress >= 0.25) sticky.classList.add('show');
      else sticky.classList.remove('show');
    };
    window.addEventListener('scroll', toggleSticky, {passive:true});
    window.addEventListener('resize', toggleSticky);
    toggleSticky();
  }

  function init(){
    injectOfferStyles();
    enhanceOffer();
    bindOfferCTA();
    setupSticky();

    if (location.hash === '#oferta') {
      setTimeout(function(){ scrollToOffer('auto'); }, 80);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
