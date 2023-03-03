const jsonEN = {
  storage_sub: ' We offer what everyone seems to be missing — space.',
  storage_tit: ' Rent storage units for your personal possessions.',
  storage_lang: 'Storage',
  company_lang: 'Company',
  blog_lang: 'Blog',
  contact_lang: 'Contact',
  login_lang: 'Login',
  register_lang: 'Register',
  storage_lang_burger: 'Storage',
  company_lang_burger: 'Company',
  blog_lang_burger: 'Blog',
  contact_lang_burger: 'Contact',
  login_lang_burger: 'Login',
  register_lang_burger: 'Register',
};

const jsonSR = {
  storage_sub: 'Nudimo ono što izgleda svima nedostaje - prostor',
  storage_tit: 'Iznajmite skladišne jedinice za svoje lične potrebe.',
  storage_lang: 'Skaldište',
  company_lang: 'Kompanija',
  blog_lang: 'Blog',
  contact_lang: 'Kontakt',
  login_lang: 'Login',
  register_lang: 'Registracija',
  storage_lang_burger: 'Skaldište',
  company_lang_burger: 'Kompanija',
  blog_lang_burger: 'Blog',
  contact_lang_burger: 'Kontakt',
  login_lang_burger: 'Login',
  register_lang_burger: 'Registracija',
};

$('.en').click(function () {
  //   document.cookie = 'en';
  localStorage.setItem('lang', 'en');
  location.reload();

  //   if (window.location.search.includes('?sr') || window.location.search === '') {

  //   }
  //   window.location.search = localStorage.getItem('lang');
});

$('.sr').click(function () {
  //   document.cookie = 'sr';
  localStorage.setItem('lang', 'sr');
  location.reload();

  //   if (window.location.search.includes('?en') || window.location.search === '') {

  //   }
  //   window.location.search = localStorage.getItem('lang');
});

$(document).ready(function () {
  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en');
    location.reload();
    // if (window.location.search === '' || !window.location.search.includes('en') || window.location.search !== '')
    //   window.location.search = localStorage.getItem('lang');
  } else {
    // document.getElementById(localStorage.getItem('lang'))?.classList.add('active');

    if (localStorage.getItem('lang') === 'sr') {
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
