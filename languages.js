const jsonEN = {
  storage_sub: ' We offer what everyone seems to be missing — space.',
  storage_tit: ' Rent storage units for your personal possessions.',
  storage_lang: 'Storage',
  company_lang:'Company',
  blog_lang:'Blog',
  contact_lang:'Contact',
  login_lang:'Login',
  register_lang:'Register',
  storage_lang_burger: 'Storage',
  company_lang_burger:'Company',
  blog_lang_burger:'Blog',
  contact_lang_burger:'Contact',
  login_lang_burger:'Login',
  register_lang_burger:'Register'
};

const jsonSR = {
  storage_sub: 'Nudimo ono što izgleda svima nedostaje - prostor',
  storage_tit: 'Iznajmite skladišne jedinice za svoje lične potrebe.',
  storage_lang: 'Skaldište',
  company_lang:'Kompanija',
  blog_lang:'Blog',
  contact_lang:'Kontakt',
  login_lang:'Login',
  register_lang:'Registracija',
  storage_lang_burger: 'Skaldište',
  company_lang_burger:'Kompanija',
  blog_lang_burger:'Blog',
  contact_lang_burger:'Kontakt',
  login_lang_burger:'Login',
  register_lang_burger:'Registracija'
};

$('.en').click(function () {
  document.cookie = 'en';
  console.log('radi');

  if (window.location.search.includes('?sr') || window.location.search === '') {
    window.location.search = document.cookie;
  }

});

$('.sr').click(function () {
  document.cookie = 'sr';

  if (window.location.search.includes('?en') || window.location.search === '') {
    window.location.search = document.cookie;
  }
});

$(document).ready(function () {
  if (document.cookie === '') {
    document.cookie = 'en';
    if (window.location.search === '') window.location.search = document.cookie;
  } else {
    document.getElementById(document.cookie)?.classList.add('active');

    console.log('document.cookie', document.cookie);
    if (document.cookie === 'sr') {
      for (let key in jsonSR) {
        document.querySelector('.' + key).textContent = jsonSR[key];
      }
    } else {
      for (let key in jsonEN) {
        document.querySelector('.' + key).textContent = jsonEN[key];
      }
    }
  }
});
