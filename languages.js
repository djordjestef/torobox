const jsonEN = {
  storage_sub: ' We offer what everyone seems to be missing — space.',
  storage_tit:' Rent storage units for your personal possessions.',
  storage_link:'Storage'
};

const jsonSR = {
  storage_sub: 'Nudimo ono što izgleda svima nedostaje - prostor',
  storage_tit:'Iznajmite skladišne jedinice za svoje lične potrebe.',
  storage_link:'Skaldište'
};

$('.en').click(function () {
    document.documentElement.setAttribute("lang", 'en');
    $('.en').removeClass('active')
    $('.sr').addClass('active')
  for (let key in jsonEN) {
    document.querySelector('.' + key).textContent = jsonEN[key];
  }
});

$('.sr').click(function () {
    document.documentElement.setAttribute("lang", 'sr');
    $('.sr').removeClass('active')
    $('.en').addClass('active')
  for (let key in jsonSR) {
    document.querySelector('.' + key).textContent = jsonSR[key];
  }
});

// window.onload = function () {
//     for (let key in jsonSR) {
//         document.querySelector('.' + key).textContent = jsonSR[key];
//       }
// }




// fetch('https://reqbin.com/echo/get/json', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// })
//    .then(response => response.json())
//    .then(response => console.log(JSON.stringify(response)))
