/**
 * Language switcher for bilingual (EN / JA) profile page.
 * Sets the `lang` attribute on <html> and updates the toggle button label.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'preferredLang';
  var DEFAULT_LANG = 'en';

  function setLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'en' ? '日本語' : 'English';
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Japanese' : 'Switch to English');
    }
  }

  function toggleLang() {
    var current = document.documentElement.getAttribute('lang') || DEFAULT_LANG;
    setLang(current === 'en' ? 'ja' : 'en');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    setLang(saved);

    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', toggleLang);
    }
  });
}());
