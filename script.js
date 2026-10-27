(function(){
  const CHECKOUT_URL = 'https://pay.hotmart.com/O108188542S?checkoutMode=10';
  const DEMO_IMAGE_URL = 'https://cdn.shopify.com/s/files/1/0697/0605/5728/files/momento-patitas-demo.webp?v=1793080341';

  function injectOfferStyles(){
    if (document.getElementById('momento-offer-mobile-styles')) return;
    const style = document.createElement('style');
    style.id = 'momento-offer-mobile-styles';
    style.textContent = `
      #oferta{content-visibility:visible!important;scroll-margin-top:0}
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
      #oferta .cro-price-reframe{margin:13px 0 4px;padding:12px 13px;border-radius:13px;background:#fff8ed;border:1px solid #f0dbbb;color:#63491f;font-size:13px;line-height:1.42;text-align:left}
      #oferta .cro-price-reframe b{color:#17324d}

      #demo-real{background:linear-gradient(180deg,#fff,#fff9ef)}
      #demo-real .cro-demo-grid{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(0,1.2fr);gap:46px;align-items:center}
      #demo-real .cro-demo-device{max-width:370px;margin:0 auto;padding:10px;background:#17324d;border-radius:30px;box-shadow:0 24px 70px rgba(24,50,77,.2)}
      #demo-real .cro-demo-device img{display:block;width:100%;height:auto;border-radius:22px;background:#fff}
      #demo-real .cro-demo-proof{display:inline-flex;align-items:center;gap:7px;margin-top:12px;padding:8px 11px;border-radius:999px;background:#eaf7f4;color:#247f75;font-size:12px;font-weight:900}
      #demo-real .cro-demo-sequence{display:grid;gap:10px;margin:22px 0}
      #demo-real .cro-demo-step{display:flex;gap:12px;align-items:flex-start;padding:13px 14px;background:#fff;border:1px solid #e9e3d8;border-radius:14px}
      #demo-real .cro-demo-step span{min-width:30px;height:30px;display:grid;place-items:center;border-radius:9px;background:#eaf7f4;color:#247f75;font-weight:950}
      #demo-real .cro-demo-step b{display:block;margin-bottom:2px}
      #demo-real .cro-demo-step small{font-size:13px;color:#536675;line-height:1.4}
      #demo-real .cro-demo-cta{margin-top:4px}

      #despues-de-pagar{background:#fbfaf7}
      #despues-de-pagar .cro-after-head{text-align:center;max-width:780px;margin:0 auto 28px}
      #despues-de-pagar .cro-after-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;max-width:960px;margin:0 auto}
      #despues-de-pagar .cro-after-step{position:relative;background:#fff;border:1px solid #e9e3d8;border-radius:20px;padding:22px;box-shadow:0 10px 30px rgba(24,50,77,.05)}
      #despues-de-pagar .cro-after-num{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:#17324d;color:#fff;font-weight:950;margin-bottom:14px}
      #despues-de-pagar .cro-after-step h3{font-size:19px;margin-bottom:8px}
      #despues-de-pagar .cro-after-step p{font-size:14px;color:#536675;margin:0}
      #despues-de-pagar .cro-after-note{text-align:center;margin:18px auto 0;font-size:13px;color:#536675;font-weight:750}

      @media(max-width:900px){
        .section{content-visibility:visible!important;contain-intrinsic-size:auto!important}
        #demo-real .cro-demo-grid{grid-template-columns:minmax(0,1fr);gap:26px}
        #demo-real .cro-demo-copy{text-align:center}
        #demo-real .cro-demo-sequence{text-align:left;max-width:620px;margin:20px auto}
        #despues-de-pagar .cro-after-grid{grid-template-columns:minmax(0,1fr);max-width:620px}
      }
      @media(max-width:560px){
        #oferta.section{padding-top:24px;padding-bottom:34px}
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
        #oferta .cro-price-reframe{font-size:12px;padding:10px 11px}
        #demo-real.section{padding-top:38px;padding-bottom:42px}
        #demo-real .cro-demo-device{max-width:310px;padding:8px;border-radius:25px}
        #demo-real .cro-demo-device img{border-radius:18px}
        #demo-real h2{font-size:31px}
        #demo-real .cro-demo-step{padding:11px 12px}
        #despues-de-pagar.section{padding-top:40px;padding-bottom:40px}
        #despues-de-pagar .cro-after-step{padding:17px}
      }
    `;
    document.head.appendChild(style);
  }

  function insertRealDemo(){
    if (document.getElementById('demo-real')) return;
    const scenario = document.querySelector('.scenario');
    const emotionalSection = scenario && scenario.closest('section');
    if (!emotionalSection) return;

    emotionalSection.insertAdjacentHTML('afterend', `
      <section class="section" id="demo-real">
        <div class="wrap cro-demo-grid">
          <div class="cro-demo-device">
            <img src="${DEMO_IMAGE_URL}" loading="lazy" decoding="async" alt="Demostración real de Momento Patitas eligiendo momento, ingredientes y tiempo hasta abrir una receta completa">
          </div>
          <div class="cro-demo-copy">
            <span class="eyebrow">MIRA CÓMO FUNCIONA DE VERDAD</span>
            <h2 style="margin-top:14px">De lo que tienes en casa a una receta lista para seguir.</h2>
            <p class="lead">Este es un recorrido real dentro de Momento Patitas™. No tienes que imaginar cómo funciona: aquí puedes verlo.</p>
            <div class="cro-demo-sequence">
              <div class="cro-demo-step"><span>1</span><div><b>Eliges el momento</b><small>Por ejemplo: quiero refrescarlo.</small></div></div>
              <div class="cro-demo-step"><span>2</span><div><b>Marcas tus ingredientes y tu tiempo</b><small>El selector filtra las opciones por ti.</small></div></div>
              <div class="cro-demo-step"><span>3</span><div><b>Recibes una recomendación y abres la receta</b><small>Ingredientes, cantidades, preparación, conservación y tips en la misma herramienta.</small></div></div>
            </div>
            <span class="cro-demo-proof">✓ Demostración real · menos de 15 segundos</span><br>
            <a class="btn cro-demo-cta" href="${CHECKOUT_URL}">QUIERO ELEGIR SU RECETA HOY — US$9.99</a>
          </div>
        </div>
      </section>`);

    const secondary = document.querySelector('.hero .secondary-link');
    if (secondary) secondary.setAttribute('href', '#demo-real');
  }

  function insertAfterPurchaseFlow(){
    if (document.getElementById('despues-de-pagar')) return;
    const offer = document.getElementById('oferta');
    if (!offer) return;

    offer.insertAdjacentHTML('beforebegin', `
      <section class="section alt" id="despues-de-pagar">
        <div class="wrap">
          <div class="cro-after-head">
            <span class="eyebrow">¿QUÉ PASA DESPUÉS DE PAGAR?</span>
            <h2 style="margin-top:14px">De tu compra a tu primera receta, sin complicaciones.</h2>
            <p class="lead" style="margin-left:auto;margin-right:auto">Sabes exactamente qué ocurre antes de tocar el botón de compra.</p>
          </div>
          <div class="cro-after-grid">
            <div class="cro-after-step"><div class="cro-after-num">1</div><h3>Pagas en Hotmart</h3><p>El checkout seguro de Hotmart procesa tu pago. Esta landing no almacena los datos de tu tarjeta.</p></div>
            <div class="cro-after-step"><div class="cro-after-num">2</div><h3>Recibes tu acceso digital</h3><p>Con tu compra recibes el acceso a Momento Patitas™ y al contenido incluido.</p></div>
            <div class="cro-after-step"><div class="cro-after-num">3</div><h3>Eliges qué prepararle</h3><p>Abres Momento Patitas™, marcas el momento, tus ingredientes y el tiempo, y eliges su primera receta.</p></div>
          </div>
          <div class="cro-after-note">🔒 Pago seguro por Hotmart · 🛡️ Garantía de 7 días</div>
        </div>
      </section>`);
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
    if (priceBox) {
      if (!priceBox.querySelector('.offer-total')) {
        const total = document.createElement('div');
        total.className = 'offer-total';
        total.textContent = 'ACCESO COMPLETO POR';
        priceBox.prepend(total);
      }

      if (!priceBox.querySelector('.cro-price-reframe')) {
        const reframe = document.createElement('p');
        reframe.className = 'cro-price-reframe';
        reframe.innerHTML = '<b>US$9.99 no es pagar por una receta.</b> Es dejar resuelta una pregunta que vuelve cada vez que quieres consentirlo: “¿qué le preparo hoy?”.';
        const scarcity = priceBox.querySelector('.scarcity-note');
        if (scarcity) scarcity.insertAdjacentElement('afterend', reframe);
        else priceBox.appendChild(reframe);
      }
    }

    const buyButton = offer.querySelector('.price-box .btn');
    if (buyButton) buyButton.href = CHECKOUT_URL;
  }

  function prepareLayoutForOffer(){
    document.querySelectorAll('.section').forEach(function(section){
      section.style.contentVisibility = 'visible';
      section.style.containIntrinsicSize = 'auto';
    });
    void document.documentElement.offsetHeight;
  }

  function exactOfferTop(){
    const offer = document.getElementById('oferta');
    if (!offer) return null;
    return Math.max(0, Math.round(offer.getBoundingClientRect().top + window.pageYOffset));
  }

  function correctOfferPosition(){
    const top = exactOfferTop();
    if (top === null) return;
    if (Math.abs(window.pageYOffset - top) > 3) {
      window.scrollTo({top: top, behavior: 'auto'});
    }
  }

  function scrollToOffer(){
    const offer = document.getElementById('oferta');
    if (!offer) return false;

    prepareLayoutForOffer();
    enhanceOffer();
    void document.documentElement.offsetHeight;

    const top = exactOfferTop();
    if (top === null) return false;

    window.scrollTo({top: top, behavior: 'smooth'});

    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        setTimeout(correctOfferPosition, 350);
        setTimeout(correctOfferPosition, 800);
      });
    });

    return true;
  }

  function bindOfferCTA(){
    document.addEventListener('click', function(event){
      const link = event.target.closest('a[href="#oferta"], [data-scroll-to="oferta"]');
      if (!link) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (scrollToOffer()) {
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
    insertRealDemo();
    insertAfterPurchaseFlow();
    enhanceOffer();
    bindOfferCTA();
    setupSticky();

    if (window.decorateHotmartUrl) {
      document.querySelectorAll('a[href*="pay.hotmart.com"]').forEach(function(link){
        link.href = window.decorateHotmartUrl(link.href);
      });
    }

    if (location.hash === '#oferta') {
      prepareLayoutForOffer();
      setTimeout(function(){
        correctOfferPosition();
        setTimeout(correctOfferPosition, 400);
      }, 100);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
