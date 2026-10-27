(function () {
  'use strict';

  const TRACKING_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'fbclid',
    'gclid',
    'ttclid'
  ];

  const STORAGE_PREFIX = 'mp_tracking_';
  const HOTMART_HOST = 'pay.hotmart.com';
  const HOTMART_CHECKOUT = 'https://pay.hotmart.com/O108188542S?checkoutMode=10';

  function safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {}
  }

  function readCurrentParams() {
    const params = new URLSearchParams(window.location.search);
    const data = {};

    TRACKING_KEYS.forEach(function (key) {
      const value = params.get(key);
      if (value) data[key] = value;
    });

    return data;
  }

  function saveAttribution(current) {
    TRACKING_KEYS.forEach(function (key) {
      if (current[key]) {
        safeSet(STORAGE_PREFIX + key, current[key]);
      }
    });

    const snapshot = {
      ...current,
      landing_page: window.location.href,
      referrer: document.referrer || '',
      timestamp: new Date().toISOString()
    };

    if (!safeGet(STORAGE_PREFIX + 'first_touch')) {
      safeSet(STORAGE_PREFIX + 'first_touch', JSON.stringify(snapshot));
    }

    safeSet(STORAGE_PREFIX + 'last_touch', JSON.stringify(snapshot));
  }

  function getTrackingData() {
    const data = {};

    TRACKING_KEYS.forEach(function (key) {
      const value = safeGet(STORAGE_PREFIX + key);
      if (value) data[key] = value;
    });

    return data;
  }

  function isHotmartCheckout(url) {
    return url.hostname === HOTMART_HOST;
  }

  function decorateHotmartUrl(rawUrl) {
    try {
      const url = new URL(rawUrl, window.location.href);
      if (!isHotmartCheckout(url)) return rawUrl;

      const tracking = getTrackingData();

      Object.keys(tracking).forEach(function (key) {
        if (!url.searchParams.has(key)) {
          url.searchParams.set(key, tracking[key]);
        }
      });

      return url.toString();
    } catch (_) {
      return rawUrl;
    }
  }

  function decorateHotmartLinks(root) {
    const scope = root && root.querySelectorAll ? root : document;

    scope.querySelectorAll('a[href]').forEach(function (link) {
      link.href = decorateHotmartUrl(link.href);
    });
  }

  function configureHeroCheckoutButton() {
    const heroButton = document.querySelector('.hero .hero-copy .btn');
    if (!heroButton) return;

    heroButton.href = HOTMART_CHECKOUT;
    heroButton.removeAttribute('onclick');
    heroButton.innerHTML = '<span style="display:block;width:100%;text-align:center;">QUIERO DESCUBRIR QUÉ PREPARARLE HOY POR US$9.99 🐶</span>';
    heroButton.style.setProperty('display', 'grid', 'important');
    heroButton.style.setProperty('place-items', 'center', 'important');
    heroButton.style.setProperty('width', '100%', 'important');
    heroButton.style.setProperty('text-align', 'center', 'important');

    const heroMicro = document.querySelector('.hero .hero-copy .micro');
    if (heroMicro) {
      heroMicro.style.setProperty('width', '100%', 'important');
      heroMicro.style.setProperty('text-align', 'center', 'important');
    }

    const heroProof = document.querySelector('.hero .hero-copy .mini-proof');
    if (heroProof) {
      heroProof.style.setProperty('display', 'flex', 'important');
      heroProof.style.setProperty('justify-content', 'center', 'important');
      heroProof.style.setProperty('align-items', 'center', 'important');
      heroProof.style.setProperty('width', '100%', 'important');
      heroProof.style.setProperty('text-align', 'center', 'important');

      heroProof.querySelectorAll('span').forEach(function (chip) {
        chip.style.setProperty('text-align', 'center', 'important');
      });
    }
  }

  // Expuesto para futuras integraciones (por ejemplo CRM/CAPI).
  window.getTrackingData = getTrackingData;
  window.decorateHotmartUrl = decorateHotmartUrl;

  const current = readCurrentParams();
  saveAttribution(current);

  function init() {
    configureHeroCheckoutButton();
    decorateHotmartLinks(document);

    // Respaldo: asegura que un enlace añadido dinámicamente también salga con atribución.
    document.addEventListener('click', function (event) {
      const link = event.target.closest && event.target.closest('a[href]');
      if (!link) return;

      try {
        const url = new URL(link.href, window.location.href);
        if (isHotmartCheckout(url)) {
          link.href = decorateHotmartUrl(link.href);
        }
      } catch (_) {}
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();