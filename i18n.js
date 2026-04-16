const TRANSLATIONS = {
  en: {
    'header-subtitle': 'Lead Software Engineer at Symphony · Paris, France',
    'about-heading': 'About Me',
    'about-p1': 'Lead Software Engineer with 12+ years of experience, from Thales to <a href="https://symphony.com" rel="noopener">Symphony</a>. I specialise in backend engineering with <strong>Java</strong> and <strong>Go</strong>, API-First design with <strong>OpenAPI</strong>, containerisation with <strong>Docker</strong>, and building secure, scalable distributed systems.',
    'about-p2': 'At Symphony — an end-to-end encrypted communication platform used by the world\'s largest financial institutions — I drive technical direction and engineering excellence across the platform. I am deeply committed to <strong>open-source</strong> and actively contribute to projects in the Java and Go ecosystems.',
    'about-p3': 'Based in <strong>Paris, France</strong>. Available for speaking, open-source collaboration, and technical discussions.',
    'img-alt': 'Thibault Pensec — Lead Software Engineer based in Paris',
    'aria-about': 'About Thibault Pensec',
    'aria-github': 'Thibault Pensec on GitHub',
    'aria-linkedin': 'Thibault Pensec on LinkedIn',
    'aria-email': 'Send an email to Thibault Pensec',
    'meta-title': 'Thibault Pensec — Lead Software Engineer · Java, Go & OpenAPI · Paris',
    'meta-desc': 'Thibault Pensec is a Lead Software Engineer based in Paris with 12+ years of experience in Java, Go, Docker and API-First design. Currently at Symphony.'
  },
  fr: {
    'header-subtitle': 'Ingénieur Logiciel Lead chez Symphony · Paris, France',
    'about-heading': 'À propos',
    'about-p1': 'Ingénieur Logiciel Lead avec plus de 12 ans d\'expérience, de Thales à <a href="https://symphony.com" rel="noopener">Symphony</a>. Je me spécialise dans le développement backend avec <strong>Java</strong> et <strong>Go</strong>, la conception API-First avec <strong>OpenAPI</strong>, la conteneurisation avec <strong>Docker</strong>, et la construction de systèmes distribués sécurisés et scalables.',
    'about-p2': 'Chez Symphony — une plateforme de communication chiffrée de bout en bout utilisée par les plus grandes institutions financières mondiales — je pilote la direction technique et l\'excellence ingénierie de la plateforme. Je suis profondément engagé dans l\'<strong>open-source</strong> et contribue activement à des projets dans les écosystèmes Java et Go.',
    'about-p3': 'Basé à <strong>Paris, France</strong>. Disponible pour des conférences, des collaborations open-source et des discussions techniques.',
    'img-alt': 'Thibault Pensec — Ingénieur Logiciel Lead basé à Paris',
    'aria-about': 'À propos de Thibault Pensec',
    'aria-github': 'Thibault Pensec sur GitHub',
    'aria-linkedin': 'Thibault Pensec sur LinkedIn',
    'aria-email': 'Envoyer un e-mail à Thibault Pensec',
    'meta-title': 'Thibault Pensec — Ingénieur Logiciel Lead · Java, Go & OpenAPI · Paris',
    'meta-desc': 'Thibault Pensec est Ingénieur Logiciel Lead basé à Paris avec 12+ ans d\'expérience en Java, Go, Docker et conception API-First. Actuellement chez Symphony.'
  }
};

function detectLang() {
  return localStorage.getItem('lang')
    || (navigator.language.startsWith('fr') ? 'fr' : 'en');
}

function applyLang(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.innerHTML = TRANSLATIONS[lang][el.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function(el) {
    var parts = el.dataset.i18nAttr.split(':');
    el.setAttribute(parts[0], TRANSLATIONS[lang][parts[1]]);
  });

  document.title = TRANSLATIONS[lang]['meta-title'];
  document.querySelector('meta[name="description"]').content = TRANSLATIONS[lang]['meta-desc'];

  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyLang(lang);
}

document.addEventListener('DOMContentLoaded', function() {
  applyLang(detectLang());
});
