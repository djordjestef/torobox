const jsonEN = {
  storage_sub: ' We offer what everyone seems to be missing — space.',
  storage_tit:' Rent storage units for your personal possessions.'
};

const jsonSR = {
  storage_sub: 'Nudimo ono što izgleda svima nedostaje - prostor',
  storage_tit:'Iznajmite skladišne jedinice za svoje lične potrebe.'
};

$('.en').click(function () {
    $('.en').removeClass('active')
    $('.sr').addClass('active')
  for (let key in jsonEN) {
    document.querySelector('.' + key).textContent = jsonEN[key];
  }
});

$('.sr').click(function () {
    $('.sr').removeClass('active')
    $('.en').addClass('active')
  for (let key in jsonSR) {
    document.querySelector('.' + key).textContent = jsonSR[key];
  }
});
