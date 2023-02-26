const jsonEN = {
  storage_sub: ' We offer what everyone seems to be missing — space.',
  storage_tit: ' Rent storage units for your personal possessions.',
  storage_en: 'Storage',
  storage_en_burger: 'Storage',
};

const jsonSR = {
  storage_sub: 'Nudimo ono što izgleda svima nedostaje - prostor',
  storage_tit: 'Iznajmite skladišne jedinice za svoje lične potrebe.',
  storage_en: 'Skaldište',
  storage_en_burger: 'Skaldište',
};

$('.en').click(function () {
  document.cookie = 'en';
  console.log('radi');

  if (window.location.search === '?sr' || window.location.search === '') {
    window.location.search = document.cookie;
  }

});

$('.sr').click(function () {
  document.cookie = 'sr';

  if (window.location.search === '?en' || window.location.search === '') {
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
