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
  desc_lang_title:'Simple, safe & secure self-storage.',
  description_lang:' Our units are made according to the highest quality standards so they can fulfill their role –to flawlessly keep your valuable belongings, following the Federation of European Self Storage Associations (FEDESSA)',
  storage_lang_small:'Storage',
  h2_lang_large:'Large',
  h2_lang_medium:'Medium',
  h2_lang_small:'Small',
  h2_lang_mini:'Mini',
  acc_description_large_one:'Large storage box is suitable for you who need a lot of space, either for decoration from an apartment over 70 m2 or for your company.',
  acc_description_large_two:'Width: 2.5m | Height: 2.5m | Lenght: 6m Surface Area: 15m2 | Volume: 38m3',
  rent_large_btn:'Rent for 170€ / month',
  acc_description_medium_one:'This storage box is suitable for furniture and things from a normally furnished apartment from approx. 60 - 70 m2.',
  acc_description_medium_two:'Width: 3m | Height: 2.5m | Lenght: 2.5m Surface Area: 7.5m2 | Volume: 19m3',
  rent_medium_btn:"Rent for 100€ / mont",
  acc_description_small_one:'Small warehouse is suitable for storing the contents of a 1-room apartment or a normally furnished apartment of up to 30 - 35 m2.',
  acc_description_small_two:'Width: 1.5m | Height: 2.5m | Lenght: 2.5m Surface Area: 4m2 | Volume: 9m3',
  rent_small_btn:"Rent for 70€ / mont",
  acc_description_mini_one:'This box size offers a little extra space. Here you can store items like documents, laptops and similar type of smaller items.',
  acc_description_mini_two:'Width: 0.5m | Height: 0.5m | Lenght: 0.5m Surface Area: 1.5m2 | Volume: 0.125m3',
  rent_mini_btn:"Rent for 50€ / mont",
  company_storage_title:'We pack, move & store for you.',
  span_1:'Torobox provides a wide range of storage solutions to suit you and/or your business. Our storage units are',
  span_2:'optionally',
  span_3:', secured by an',
  span_4:' and video',
  span_5:'systems, staffed and',
  span_6:'24/7.',
  strong_1:'fire and weather resistant,',
  strong_2:'air conditioned',
  strong_3:'alarm',
  strong_4:'surveillance',
  strong_5:'guarded',
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
  register_lang_burger: 'Registracija',//from this line i have to translate
  desc_lang_title:'Simple, safe & secure self-storage.',
  description_lang:' Our units are made according to the highest quality standards so they can fulfill their role –to flawlessly keep your valuable belongings, following the Federation of European Self Storage Associations (FEDESSA)',
  storage_lang_small:'Storage',
  h2_lang_large:'Large',
  h2_lang_medium:'Medium',
  h2_lang_small:'Small',
  h2_lang_mini:'Mini',
  acc_description_large_one:'Large storage box is suitable for you who need a lot of space, either for decoration from an apartment over 70 m2 or for your company.',
  acc_description_large_two:'Width: 2.5m | Height: 2.5m | Lenght: 6m Surface Area: 15m2 | Volume: 38m3',
  rent_large_btn:'Rent for 170€ / month',
  acc_description_medium_one:'This storage box is suitable for furniture and things from a normally furnished apartment from approx. 60 - 70 m2.',
  acc_description_medium_two:'Width: 3m | Height: 2.5m | Lenght: 2.5m Surface Area: 7.5m2 | Volume: 19m3',
  rent_medium_btn:"Rent for 100€ / mont",
  acc_description_small_one:'Small warehouse is suitable for storing the contents of a 1-room apartment or a normally furnished apartment of up to 30 - 35 m2.',
  acc_description_small_two:'Width: 1.5m | Height: 2.5m | Lenght: 2.5m Surface Area: 4m2 | Volume: 9m3',
  rent_small_btn:"Rent for 70€ / mont",
  acc_description_mini_one:'This box size offers a little extra space. Here you can store items like documents, laptops and similar type of smaller items.',
  acc_description_mini_two:'Width: 0.5m | Height: 0.5m | Lenght: 0.5m Surface Area: 1.5m2 | Volume: 0.125m3',
  rent_mini_btn:"Rent for 50€ / mont",
  company_storage_title:'We pack, move & store for you.',
  span_1:'Torobox provides a wide range of storage solutions to suit you and/or your business. Our storage units are',
  span_2:'optionally',
  span_3:', secured by an',
  span_4:' and video',
  span_5:'systems, staffed and',
  span_6:'24/7.',
  strong_1:'fire and weather resistant,',
  strong_2:'air conditioned',
  strong_3:'alarm',
  strong_4:'surveillance',
  strong_5:'guarded',







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
