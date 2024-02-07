const jsonEN =
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/torobox/index.html' ||
  window.location.pathname === '' ||
  window.location.pathname === '/torobox/'
    ? {
        storage_sub: ' We offer what everyone seems to be missing — space.',
        storage_tit_mobile: ' Rent storage units for your personal possessions.',
        storage_tit_desktop_1: ' Rent storage units for your',
        storage_tit_desktop_2: 'personal possessions.',
        storage_lang: 'Storage',
        company_lang: 'Company',
        blog_lang: 'Blog',
        contact_lang: 'Contact',
        storage_lang_footer: 'Storage',
        company_lang_footer: 'Company',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Contact',
        // login_lang: 'Login',
        // register_lang: 'Register',
        storage_lang_burger: 'Storage',
        company_lang_burger: 'Company',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Contact',
        // login_lang_burger: 'Login',
        // register_lang_burger: 'Register',
        desc_lang_title: 'Simple, safe & secure self-storage.',
        description_lang:
          ' Our units are made according to the highest quality standards so they can fulfill their role -to flawlessly keep your valuable belongings, following the Federation of European Self Storage Associations (FEDESSA)',
        // storage_lang_small: 'Storage',
        storage_lang_small_mobile: 'Storage',
        h2_lang_large: 'Large container',
        h2_lang_medium: 'Medium storage',
        h2_lang_small: 'Small space',
        h2_lang_mini: 'Mini vault',
        acc_description_large_one: `This storage container is suitable for those who need a lot of storage space, either for things from an apartment over 70 m\u00B2 or your company.`,
        acc_description_large_two:
          'Width: 2.5m | Height: 2.5m | Lenght: 6m Surface Area: 15m\u00B2 | Volume: 38m\u00B3',
        rent_large_btn: 'Rent for 170€ / mesečno',
        acc_description_medium_one:
          'This storage space is suitable for storing furniture and things from a normally furnished apartment from approx. 60 - 70 m\u00B2.',
        acc_description_medium_two:
          'Width: 3m | Height: 2.5m | Lenght: 2.5m Surface Area: 7.5m\u00B2 | Volume: 19m\u00B3',
        rent_medium_btn: 'Rent for 100€ / mont',
        acc_description_small_one:
          'Small storage box is suitable for storing the contents of a 1-room apartment or a normally furnished apartment of up to 30 - 35 m\u00B2.',
        acc_description_small_two:
          'Width: 1.5m | Height: 2.5m | Lenght: 2.5m Surface Area: 4m\u00B2 | Volume: 9m\u00B3',
        rent_small_btn: 'Rent for 70€ / mont',
        acc_description_mini_one:
          'Vault size box offers a little extra space. Here you can store items like documents, laptops and similar type of small valuable items.',
        acc_description_mini_two:
          'Width: 1m | Height: 2.5m | Lenght: 1m Surface Area: 1m\u00B2 | Volume: 2.5m\u00B3',
        rent_mini_btn: 'Rent for 50€ / mont',
        company_storage_title: 'We pack, move & store for you.',
        span_1:
          'Torobox provides a wide range of storage solutions to suit you and/or your business. Our storage units are',
        span_2: 'optionally',
        span_3: ', secured by an',
        span_4: ' and video',
        span_5: 'systems, staffed and',
        span_6: '',
        strong_1: 'fire and weather resistant,',
        strong_2: 'air conditioned',
        strong_3: 'alarm',
        strong_4: 'surveillance',
        strong_5: 'guarded 24/7.',
        adv_title_1: 'Easy access',
        adv_title_2: 'Secure facility',
        adv_title_3: 'Air conditioning',
        adv_title_4: 'Moving & packing',
        adv_title_5: 'Portable container',
        adv_title_6: 'Online payment',
        adv_decription_1: 'Our site presents wide driveways, easy access and parking space.',
        adv_decription_2: 'Secured entry monitored by CCTV cameras and patrols 24/7.',
        adv_decription_3: 'Optional air-conditioning for selected units.',
        adv_decription_4: 'We can do everything for you, packing, moving and storing your items.',
        adv_decription_5: 'Container at your location so you can pack stuff ready for transport.',
        adv_decription_6: '24/7 Online payment options with or without recurring subscription.',
        company_small: 'Company',
        company_small_mobile: 'Company',
        company_head: 'Torobox offers what everyone seems to be missing — space.',
        company_head_mobile: 'Torobox offers what everyone seems to be missing — space.',
        company_description:
          ' We’re a customer-service driven business and the only company in Serbi professionally managing this market segment. Our long-term experience leasing large commercial spaces and our expertise allow you to put your trust in us just as these clients have over the years: Eurobank, Sky Music, Dom Perignon, Emotion, Sorbon, and many others.',
        blog_small: 'Blog',
        blog_title_lang: 'Latest news',
        blog_index_lang_1: 'Storing Things',
        blog_index_lang_2: 'Packing and Storing Tips',
        blog_index_lang_3: '10 questions you should ask when renting self-storage unit',
        title_address_lang: 'Get space office@torobox.rs',
        address_lang: 'Address:',
        phone: 'Phone:',
        hours: 'Working hours:',
        days: 'Monday - Friday',
        privacy: 'Privacy policy',
        form_name: 'Name',
        form_email: 'Email',
        form_phone: 'Phone Number',
        form_comment: 'Message',
        form_optional: '',
        privacy_text: 'By clicking the Send button you agree to our Privacy Policy terms.',
        get_space_lang: 'Get space',
        get_space_lang_header_menu: 'Get space',
        blog_date_1: 'March 20.2024',
        blog_date_2: 'March 20.2024',
        blog_date_3: 'March 20.2024',
      }
    : window.location.pathname === '/blog.html' || window.location.pathname === '/torobox/blog.html'
    ? {
        storage_lang: 'Storage',
        company_lang: 'Company',
        blog_lang: 'Blog',
        contact_lang: 'Contact',
        storage_lang_footer: 'Storage',
        company_lang_footer: 'Company',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Contact',
        // login_lang: 'Login',
        // register_lang: 'Register',
        storage_lang_burger: 'Storage',
        company_lang_burger: 'Company',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Contact',

        get_space_lang: 'Get space',
        get_space_lang_header_menu: 'Get space',
        privacy: 'Privacy policy',
        blog_lang_1: 'Storing Things',
        blog_lang_2: 'Packing and Storing Tips',
        blog_lang_3: '10 questions you should ask when renting self-storage unit',
        blog_lang_4: 'Guide to Storage Made Simple: List of Things in Self-storage',
        blog_lang_4_desktop: 'Guide to Storage Made Simple: List of Things in Self-storage',
        blog_lang_5: 'Reasons for having self-storage unit',
        blog_lang_5_desktop: 'Reasons for having self-storage unit',
        blog_date_1: 'March 20.2024',
        blog_date_2: 'March 20.2024',
        blog_date_3: 'March 20.2024',
        blog_date_4: 'March 20.2024',
        blog_date_4_desktop: 'March 20.2024',
        blog_date_5: 'March 20.2024',
        blog_date_5_desktop: 'March 20.2024',
        blog_main_subtitle: 'Torobox makes storage simple',
        blog_main_title: 'Hints and tips to save you time and money',
      }
    : window.location.pathname === '/blog_1.html' ||
      window.location.pathname === '/torobox/blog_1.html'
    ? {
        storage_lang: 'Storage',
        company_lang: 'Company',
        blog_lang: 'Blog',
        contact_lang: 'Contact',
        storage_lang_footer: 'Storage',
        company_lang_footer: 'Company',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Contact',
        // login_lang: 'Login',
        // register_lang: 'Register',
        storage_lang_burger: 'Storage',
        company_lang_burger: 'Company',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Contact',
        get_space_lang: 'Get space',
        get_space_lang_header_menu: 'Get space',
        privacy: 'Privacy policy',
        blog_title_1: 'Storing Things',
        blog_single_small_1: '< Blog',
        blog_single_small_mobile_1: '< Blog',
        blog_single_head_mobile_1: 'Storing Things',
      }
    : window.location.pathname === '/blog_2.html' ||
      window.location.pathname === '/torobox/blog_2.html'
    ? {
        storage_lang: 'Storage',
        company_lang: 'Company',
        blog_lang: 'Blog',
        contact_lang: 'Contact',
        storage_lang_footer: 'Storage',
        company_lang_footer: 'Company',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Contact',
        // login_lang: 'Login',
        // register_lang: 'Register',
        storage_lang_burger: 'Storage',
        company_lang_burger: 'Company',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Contact',
        get_space_lang: 'Get space',
        get_space_lang_header_menu: 'Get space',
        privacy: 'Privacy policy',
        blog_title_2: 'Packing and Storing Tips',
        blog_single_small_2: '< Blog',
        blog_single_small_mobile_2: '< Blog',
        blog_single_head_mobile_2: 'Packing and Storing Tips',
      }
    : window.location.pathname === '/blog_3.html' ||
      window.location.pathname === '/torobox/blog_3.html'
    ? {
        storage_lang: 'Storage',
        company_lang: 'Company',
        blog_lang: 'Blog',
        contact_lang: 'Contact',
        storage_lang_footer: 'Storage',
        company_lang_footer: 'Company',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Contact',
        // login_lang: 'Login',
        // register_lang: 'Register',
        storage_lang_burger: 'Storage',
        company_lang_burger: 'Company',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Contact',
        get_space_lang: 'Get space',
        get_space_lang_header_menu: 'Get space',
        privacy: 'Privacy policy',
        blog_title_3: '10 questions you should ask when renting self-storage unit',
        blog_single_small_3: '< Blog',
        blog_single_small_mobile_3: '< Blog',
        blog_single_head_mobile_3: '10 questions you should ask when renting self-storage unit',
      }
    : window.location.pathname === '/blog_4.html' ||
      window.location.pathname === '/torobox/blog_4.html'
    ? {
        storage_lang: 'Storage',
        company_lang: 'Company',
        blog_lang: 'Blog',
        contact_lang: 'Contact',
        storage_lang_footer: 'Storage',
        company_lang_footer: 'Company',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Contact',
        // login_lang: 'Login',
        // register_lang: 'Register',
        storage_lang_burger: 'Storage',
        company_lang_burger: 'Company',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Contact',
        get_space_lang: 'Get space',
        get_space_lang_header_menu: 'Get space',
        privacy: 'Privacy policy',
        blog_title_4: 'Guide to Storage Made Simple: List of Things in Self-storage',
        blog_single_small_4: '< Blog',
        blog_single_small_mobile_4: '< Blog',
        blog_single_head_mobile_4: 'Guide to Storage Made Simple: List of Things in Self-storage',
      }
    : window.location.pathname === '/blog_5.html' ||
      window.location.pathname === '/torobox/blog_5.html'
    ? {
        storage_lang: 'Storage',
        company_lang: 'Company',
        blog_lang: 'Blog',
        contact_lang: 'Contact',
        storage_lang_footer: 'Storage',
        company_lang_footer: 'Company',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Contact',
        // login_lang: 'Login',
        // register_lang: 'Register',
        storage_lang_burger: 'Storage',
        company_lang_burger: 'Company',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Contact',
        get_space_lang: 'Get space',
        get_space_lang_header_menu: 'Get space',
        privacy: 'Privacy policy',
        blog_title_5: 'Reasons for having self-storage unit',
        blog_single_small_5: '< Blog',
        blog_single_small_mobile_5: '< Blog',
        blog_single_head_mobile_5: 'Reasons for having self-storage unit',
      }
    : {};

const jsonSR =
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/' ||
  window.location.pathname === '/torobox/index.html' ||
  window.location.pathname === '' ||
  window.location.pathname === '/torobox/'
    ? {
        storage_sub: 'Mi imamo ono što svima nedostaje - prostor.',
        storage_tit_mobile: 'Iznajmljivanje skladišnih jedinica za vaše stvari.',
        storage_tit_desktop_1: ' Iznajmljivanje skladišnih',
        storage_tit_desktop_2: 'jedinica za vaše stvari.',
        storage_lang: 'Skaldište',
        company_lang: 'Kompanija',
        blog_lang: 'Blog',
        contact_lang: 'Kontakt',
        storage_lang_footer: 'Skaldište',
        company_lang_footer: 'Kompanija',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Kontakt',
        // login_lang: 'Login',
        // register_lang: 'Registracija',
        storage_lang_burger: 'Skaldište',
        company_lang_burger: 'Kompanija',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Kontakt',
        // login_lang_burger: 'Login',
        // register_lang_burger: 'Registracija',
        desc_lang_title: 'Jednostavno, bezbedno i sigurno skladištenje.',
        description_lang:
          'Naša skladišta su izrađena prema najvišim standardima kvaliteta kako bi besprekorno čuvali vaše dragocene stvari, u skladu sa Savezom evropskih udruženja za samo-skladištenje (FEDESSA).',
        // storage_lang_small: 'Skaldište',
        storage_lang_small_mobile: 'Skaldište',
        h2_lang_large: 'Veliki kontejner',
        h2_lang_medium: 'Srednje skladište',
        h2_lang_small: 'Mala jedinica',
        h2_lang_mini: 'Mini sef',
        acc_description_large_one:
          'Ovaj kontejner za skladištenje je pogodan za sve koji trebaju puno skladišnog prostora, bilo za stvari iz stana preko 70 m\u00B2 ili za vašu kompaniju.',
        acc_description_large_two:
          'Širina: 2.5m | Visina: 2.5m | Dužina: 6m Površina: 15m\u00B2 | Zapremina: 38m\u00B3',
        rent_large_btn: 'Iznajmi za 170€ / mesečno',
        acc_description_medium_one:
          'Ovaj prostor za skladištenje je pogodan za čuvanje nameštaja i stvari iz standardno opremljenog stana od približno 60 - 70 m\u00B2.',
        acc_description_medium_two:
          'Širina: 3m | Visina: 2.5m | Dužina: 2.5m Površina: 7.5m\u00B2 | Zapremina: 19m\u00B3',
        rent_medium_btn: 'Iznajmi za 100€ / mesečno',
        acc_description_small_one:
          'Mala skladišna jedinica je pogodna za čuvanje sadržaja stana sa jednom sobom ili standardno opremljenog stana veličine do 30 - 35 m\u00B2.',
        acc_description_small_two:
          'Širina: 1.5m | Visina: 2.5m | Dužina: 2.5m Površina: 4m\u00B2 | Zapremina: 9m\u00B3',
        rent_small_btn: 'Iznajmi za 70€ / mesečno',
        acc_description_mini_one:
          'Box veličine sefa nudi malo dodatnog prostora. Ovde možete čuvati predmete poput dokumenata, laptopova i sličnih vrednih stvari.',
        acc_description_mini_two:
          'Širina: 1m | Visina: 2.5m | Dužina: 1m Površina: 1m\u00B2 | Zapremina: 2.5m\u00B3',
        rent_mini_btn: 'Iznajmi za 50€ / mesečno',
        company_storage_title: 'Skladištimo i selimo vaše stvari.',
        span_1:
          'Torobox pruža širok spektar rešenja za skladištenje vama i/ili vašem poslovanju. Naše skladišne jedinice su',
        span_2: 'opciono',
        span_3: 'osigurane',
        span_4: 'sistemima, sistemima',
        span_5: '',
        span_6: '',
        strong_1: 'otporne na požar i vremenske nepogode,',
        strong_2: 'klimatizovane,',
        strong_3: 'alarmnim',
        strong_4: 'video nadzora',
        strong_5: 'i obezbeđene i čuvane 24/7.',
        adv_title_1: 'Jednostavan pristup',
        adv_title_2: 'Video nadzor',
        adv_title_3: 'Klimatizavano',
        adv_title_4: 'Pakovanje i selidba',
        adv_title_5: 'Pokretni kontejner',
        adv_title_6: 'Onlajn plaćanje',
        adv_decription_1: 'Naš prostor nudi jednostavan pristup, širok prolaz i parking.',
        adv_decription_2: 'Bezbedan prostor pod nadzorom CCTV kamera i patrola 24/7.',
        adv_decription_3: 'Opciona klimatizacija za odabrane skladišne jedinice.',
        adv_decription_4: 'Pakovanje, selidbu i čuvanje vaših stvari možemo obaviti umesto vas.',
        adv_decription_5: 'Portabl kontejner na vašoj lokaciji za transport spakovanih stvari.',
        adv_decription_6: 'Opcije za onlajn plaćanje dostupne 24/7, sa ili bez mesečne pretplate.',
        company_small: 'Kompanija',
        company_small_mobile: 'Kompanija',
        company_head: 'Mi imamo ono što svima nedostaje - prostor.',
        company_head_mobile: 'Mi imamo ono što svima nedostaje - prostor.',
        company_description:
          'Mi smo korisnički orijentisan poslovni subjekt i jedina firma u Srbiji koja profesionalno upravlja ovim segmentom tržišta. Naše dugogodišnje iskustvo i stručnost u iznajmljivanju velikih komercijalnih prostora omogućavaju nam da izađemo u susret, kako našim starim klijentima: Eurobanka, Sky Music, Dom Perignon, Emotion, Sorbon, tako i vama.',
        blog_small: 'Blog',
        blog_title_lang: 'Poslednje vesti',
        blog_index_lang_1: 'Skladištenje stvari',
        blog_index_lang_2: 'Saveti za pakovanje i skladištenje',
        blog_index_lang_3: '10 pitanja koja treba da postavite kada iznajmljujete mini skladište',
        title_address_lang: 'Iznajmi prostor office@torobox.rs',
        address_lang: 'Adresa:',
        phone: 'Telefon:',
        hours: 'Radno vreme:',
        days: 'Ponedeljak - Petak',
        privacy: 'Politika privatnosti',
        form_name: 'Ime',
        form_email: 'Email',
        form_phone: 'Broj Telefona',
        form_comment: 'Poruka',
        form_optional: '',
        privacy_text: 'Klikom na dugme "Pošalji" se slažete sa uslovima naše Politike privatnosti.',
        get_space_lang: 'Iznajmi',
        get_space_lang_header_menu: 'Iznajmi',
        blog_date_1: 'Mart 20.2024',
        blog_date_2: 'Mart 20.2024',
        blog_date_3: 'Mart 20.2024',
      }
    : window.location.pathname === '/blog.html' || window.location.pathname === '/torobox/blog.html'
    ? {
        storage_lang: 'Skaldište',
        company_lang: 'Kompanija',
        blog_lang: 'Blog',
        contact_lang: 'Kontakt',
        storage_lang_footer: 'Skaldište',
        company_lang_footer: 'Kompanija',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Kontakt',
        // login_lang: 'Login',
        // register_lang: 'Registracija',
        storage_lang_burger: 'Skaldište',
        company_lang_burger: 'Kompanija',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Kontakt',

        privacy: 'Politika privatnosti',
        get_space_lang: 'Iznajmi',
        get_space_lang_header_menu: 'Iznajmi',
        blog_lang_1: 'Skladištenje stvari',
        blog_lang_2: 'Saveti za pakovanje i skladištenje',
        blog_lang_3: '10 pitanja koja treba da postavite kada iznajmljujete mini skladište',
        blog_lang_4: 'Spisak stvari u mini skladištu (jednostavan vodič)',
        blog_lang_4_desktop: 'Spisak stvari u mini skladištu (jednostavan vodič)',
        blog_lang_5: 'Zašto vam je potrebno mini skladište',
        blog_lang_5_desktop: 'Zašto vam je potrebno mini skladište',
        blog_date_1: 'Mart 20.2024',
        blog_date_2: 'Mart 20.2024',
        blog_date_3: 'Mart 20.2024',
        blog_date_4: 'Mart 20.2024',
        blog_date_4_desktop: 'Mart 20.2024',
        blog_date_5: 'Mart 20.2024',
        blog_date_5_desktop: 'Mart 20.2024',
        blog_main_subtitle: 'Torobox čini skladištenje jednostavnim',
        blog_main_title: 'Saveti za uštedu vremena i novca',
      }
    : window.location.pathname === '/blog_1.html' ||
      window.location.pathname === '/torobox/blog_1.html'
    ? {
        storage_lang: 'Skaldište',
        company_lang: 'Kompanija',
        blog_lang: 'Blog',
        contact_lang: 'Kontakt',
        storage_lang_footer: 'Skaldište',
        company_lang_footer: 'Kompanija',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Kontakt',
        // login_lang: 'Login',
        // register_lang: 'Registracija',
        storage_lang_burger: 'Skaldište',
        company_lang_burger: 'Kompanija',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Kontakt',
        privacy: 'Politika privatnosti',
        get_space_lang: 'Iznajmi',
        get_space_lang_header_menu: 'Iznajmi',
        blog_title_1: 'Skladištenje stvari',
        blog_single_small_1: '< Blog',
        blog_single_small_mobile_1: '< Blog',
        blog_single_head_mobile_1: 'Skladištenje stvari',
      }
    : window.location.pathname === '/blog_2.html' ||
      window.location.pathname === '/torobox/blog_2.html'
    ? {
        storage_lang: 'Skaldište',
        company_lang: 'Kompanija',
        blog_lang: 'Blog',
        contact_lang: 'Kontakt',
        storage_lang_footer: 'Skaldište',
        company_lang_footer: 'Kompanija',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Kontakt',
        // login_lang: 'Login',
        // register_lang: 'Registracija',
        storage_lang_burger: 'Skaldište',
        company_lang_burger: 'Kompanija',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Kontakt',
        privacy: 'Politika privatnosti',
        get_space_lang: 'Iznajmi',
        get_space_lang_header_menu: 'Iznajmi',
        blog_title_2: 'Saveti za pakovanje i skladištenje',
        blog_single_small_2: '< Blog',
        blog_single_small_mobile_2: '< Blog',
        blog_single_head_mobile_2: 'Saveti za pakovanje i skladištenje',
      }
    : window.location.pathname === '/blog_3.html' ||
      window.location.pathname === '/torobox/blog_3.html'
    ? {
        storage_lang: 'Skaldište',
        company_lang: 'Kompanija',
        blog_lang: 'Blog',
        contact_lang: 'Kontakt',
        storage_lang_footer: 'Skaldište',
        company_lang_footer: 'Kompanija',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Kontakt',
        // login_lang: 'Login',
        // register_lang: 'Registracija',
        storage_lang_burger: 'Skaldište',
        company_lang_burger: 'Kompanija',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Kontakt',
        privacy: 'Politika privatnosti',
        get_space_lang: 'Iznajmi',
        get_space_lang_header_menu: 'Iznajmi',
        blog_title_3: '10 pitanja koja treba da postavite kada iznajmljujete mini skladište',
        blog_single_small_3: '< Blog',
        blog_single_small_mobile_3: '< Blog',
        blog_single_head_mobile_3:
          '10 pitanja koja treba da postavite kada iznajmljujete mini skladište',
      }
    : window.location.pathname === '/blog_4.html' ||
      window.location.pathname === '/torobox/blog_4.html'
    ? {
        storage_lang: 'Skaldište',
        company_lang: 'Kompanija',
        blog_lang: 'Blog',
        contact_lang: 'Kontakt',
        storage_lang_footer: 'Skaldište',
        company_lang_footer: 'Kompanija',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Kontakt',
        // login_lang: 'Login',
        // register_lang: 'Registracija',
        storage_lang_burger: 'Skaldište',
        company_lang_burger: 'Kompanija',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Kontakt',
        privacy: 'Politika privatnosti',
        get_space_lang: 'Iznajmi',
        get_space_lang_header_menu: 'Iznajmi',
        blog_title_4: 'Spisak stvari u mini skladištu (jednostavan vodič)',
        blog_single_small_4: '< Blog',
        blog_single_small_mobile_4: '< Blog',
        blog_single_head_mobile_4: 'Spisak stvari u mini skladištu (jednostavan vodič)',
      }
    : window.location.pathname === '/blog_5.html' ||
      window.location.pathname === '/torobox/blog_5.html'
    ? {
        storage_lang: 'Skaldište',
        company_lang: 'Kompanija',
        blog_lang: 'Blog',
        contact_lang: 'Kontakt',
        storage_lang_footer: 'Skaldište',
        company_lang_footer: 'Kompanija',
        blog_lang_footer: 'Blog',
        contact_lang_footer: 'Kontakt',
        // login_lang: 'Login',
        // register_lang: 'Registracija',
        storage_lang_burger: 'Skaldište',
        company_lang_burger: 'Kompanija',
        blog_lang_burger: 'Blog',
        contact_lang_burger: 'Kontakt',
        privacy: 'Politika privatnosti',
        get_space_lang: 'Iznajmi',
        get_space_lang_header_menu: 'Iznajmi',
        blog_title_5: 'Zašto vam je potrebno mini skladište',
        blog_single_small_5: '< Blog',
        blog_single_small_mobile_5: '< Blog',
        blog_single_head_mobile_5: 'Zašto vam je potrebno mini skladište',
      }
    : {};

$('.en').click(function () {
  localStorage.setItem('lang', 'en');
  location.reload();
});

$('.sr').click(function () {
  localStorage.setItem('lang', 'sr');
  location.reload();
});

$(document).ready(function () {
  const isMobileTablet = window.innerWidth < 992;

  if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en');
    if (isMobileTablet) {
      $('.get_space_en').removeClass('active');
      $('.get_space_mobile_en').addClass('active');
    } else {
      $('.get_space_en').addClass('active');
      $('.get_space_mobile_en').removeClass('active');
    }

    $('.blog_1_en').addClass('active');
    $('.blog_2_en').addClass('active');
    $('.blog_3_en').addClass('active');
    $('.blog_4_en').addClass('active');
    $('.blog_5_en').addClass('active');

    $('.sr').addClass('active');

    location.reload();
  } else {
    if (localStorage.getItem('lang') === 'sr') {
      $('.blog_1_sr').addClass('active');
      $('.blog_2_sr').addClass('active');
      $('.blog_3_sr').addClass('active');
      $('.blog_4_sr').addClass('active');
      $('.blog_5_sr').addClass('active');

      $('.en').addClass('active');
      if (isMobileTablet) {
        $('.get_space_mobile_sr').addClass('active');
        $('.get_space_sr').removeClass('active');
      } else {
        $('.get_space_sr').addClass('active');
        $('.get_space_mobile_sr').removeClass('active');
      }
      for (let key in jsonSR) {
        document.querySelector('.' + key).textContent = jsonSR[key];
        $('.form_btn_lang').attr('value', 'Pošalji');
      }
    } else {
      $('.blog_1_en').addClass('active');
      $('.blog_2_en').addClass('active');
      $('.blog_3_en').addClass('active');
      $('.blog_4_en').addClass('active');
      $('.blog_5_en').addClass('active');

      $('.sr').addClass('active');
      if (isMobileTablet) {
        $('.get_space_mobile_en').addClass('active');
        $('.get_space_en').removeClass('active');
      } else {
        $('.get_space_en').addClass('active');
        $('.get_space_mobile_en').removeClass('active');
      }

      for (let key in jsonEN) {
        document.querySelector('.' + key).textContent = jsonEN[key];
        $('.form_btn_lang').attr('value', 'Send');
      }
    }
  }
});
