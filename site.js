(() => {
  let lang = 'en';
  try { if (localStorage.getItem('direk-site-language') === 'tr') lang = 'tr'; } catch (_) {}
  function show(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-language]').forEach(el => { el.hidden = el.dataset.language !== lang; });
    document.querySelectorAll('[data-en][data-tr]').forEach(el => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('[data-toggle-language]').forEach(el => {
      el.textContent = lang === 'en' ? 'Türkçe' : 'English';
      el.setAttribute('aria-label', lang === 'en' ? 'Switch to Turkish' : 'İngilizceye geç');
    });
  }
  document.querySelectorAll('[data-toggle-language]').forEach(el => el.addEventListener('click', () => {
    show(lang === 'en' ? 'tr' : 'en');
    try { localStorage.setItem('direk-site-language', lang); } catch (_) {}
  }));
  show(lang);
})();
