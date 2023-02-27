window.onload = function () {
  $('.owl_one').owlCarousel({
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        dots: true,
      },
    },
  });
  //   $('.play').on('click',function(){
  //     $('.owl_one').trigger('play.owl.autoplay',[1000])
  // })
  // $('.stop').on('click',function(){
  //   $('.owl_one').trigger('stop.owl.autoplay')
  // })

  $('.owl_two').owlCarousel({
    margin: 20,
    responsiveClass: true,
    nav: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        // dots: true,
      },
    },
  });
  $('.owl-prev').html('<img src="assets/left_arrow.png" alt="" class="left_arrow">');
  $('.owl-next').html('<img src="assets/right_arrow.png" alt="" class="right_arrow">');
};

$('#item_large').click(function () {
  $('#item_large').toggleClass('active');
  $('#item_medium').removeClass('active');
  $('#item_small').removeClass('active');
  $('#item_mini').removeClass('active');
  if ($('#item_large').hasClass('active')) {
    $('.cube_large').animate(
      {
        opacity: 1,
        top: '-100',
      },
      300,
    );
    $('.cube_medium').animate(
      {
        opacity: 0.2,
        top: '173',
      },
      300,
    );
    $('.cube_small').animate(
      {
        opacity: 0.2,
        bottom: '-11',
      },
      300,
    );
    $('.cube_mini').animate(
      {
        opacity: 0.2,
        bottom: '-25',
      },
      300,
    );
  } else {
    $('.cube_large').animate(
      {
        opacity: 0.09,
        top: '0',
      },
      300,
    );
  }
});

$('#item_medium').click(function () {
  $('#item_medium').toggleClass('active');
  $('#item_large').removeClass('active');
  $('#item_small').removeClass('active');
  $('#item_mini').removeClass('active');
  if ($('#item_medium').hasClass('active')) {
    $('.cube_medium').animate(
      {
        opacity: 1,
        top: '73',
      },
      300,
    );
    $('.cube_large').animate(
      {
        opacity: 0.09,
        top: '0',
      },
      300,
    );
    $('.cube_small').animate(
      {
        opacity: 0.2,
        bottom: '-11',
      },
      300,
    );
    $('.cube_mini').animate(
      {
        opacity: 0.2,
        bottom: '-25',
      },
      300,
    );
  } else {
    $('.cube_medium').animate(
      {
        opacity: 0.2,
        top: '173',
      },
      300,
    );
  }
});

$('#item_small').click(function () {
  $('#item_small').toggleClass('active');
  $('#item_large').removeClass('active');
  $('#item_mini').removeClass('active');
  $('#item_medium').removeClass('active');
  if ($('#item_small').hasClass('active')) {
    $('.cube_small').animate(
      {
        opacity: 1,
        bottom: '89',
      },
      300,
    );
    $('.cube_large').animate(
      {
        opacity: 0.09,
        top: '0',
      },
      300,
    );
    $('.cube_medium').animate(
      {
        opacity: 0.2,
        top: '173',
      },
      300,
    );
    $('.cube_mini').animate(
      {
        opacity: 0.2,
        bottom: '-25',
      },
      300,
    );
  } else {
    $('.cube_small').animate(
      {
        opacity: 0.2,
        bottom: '-11',
      },
      300,
    );
  }
});

$('#item_mini').click(function () {
  $('#item_mini').toggleClass('active');
  $('#item_large').removeClass('active');
  $('#item_small').removeClass('active');
  $('#item_medium').removeClass('active');
  if ($('#item_mini').hasClass('active')) {
    $('.cube_mini').animate(
      {
        opacity: 1,
        bottom: '75',
      },
      300,
    );
    $('.cube_large').animate(
      {
        opacity: 0.09,
        top: '0',
      },
      300,
    );
    $('.cube_medium').animate(
      {
        opacity: 0.2,
        top: '173',
      },
      300,
    );
    $('.cube_small').animate(
      {
        opacity: 0.2,
        bottom: '-11',
      },
      300,
    );
  } else {
    $('.cube_mini').animate(
      {
        opacity: 0.2,
        bottom: '-25',
      },
      300,
    );
  }
});

$('#item_large').hover(
  function () {
    $('.cube_large').animate(
      {
        opacity: 0.5,
      },
      200,
    );
  },
  function () {
    if (!$('#item_large').hasClass('active')) {
      $('.cube_large').animate(
        {
          opacity: 0.09,
        },
        200,
      );
    }
  },
);

$('#item_medium').hover(
  function () {
    $('.cube_medium').animate(
      {
        opacity: 0.5,
      },
      200,
    );
  },
  function () {
    if (!$('#item_medium').hasClass('active')) {
      $('.cube_medium').animate(
        {
          opacity: 0.09,
        },
        200,
      );
    }
  },
);

$('#item_small').hover(
  function () {
    $('.cube_small').animate(
      {
        opacity: 0.5,
      },
      200,
    );
  },
  function () {
    if (!$('#item_small').hasClass('active')) {
      $('.cube_small').animate(
        {
          opacity: 0.09,
        },
        200,
      );
    }
  },
);

$('#item_mini').hover(
  function () {
    $('.cube_mini').animate(
      {
        opacity: 0.5,
      },
      200,
    );
  },
  function () {
    if (!$('#item_mini').hasClass('active')) {
      $('.cube_mini').animate(
        {
          opacity: 0.09,
        },
        200,
      );
    }
  },
);

//form

document.addEventListener('change', function (event) {
  let element = event.target;
  if (element && element.matches('.form-element-field')) {
    element.classList[element.value ? 'add' : 'remove']('-hasvalue');
  }
});

function getFormData() {
  const data = $('form').serializeArray();
  var obj = {};
  for (var a = 0; a < data.length; a++) obj[data[a].name] = data[a].value;
  console.log('obj', obj);

  return obj;
}

//locomotive scroll
let checkbox = document.getElementById('checkbox');
let el = document.querySelector('#contact');
let el2 = document.querySelector('#storage_type');
let headerEl = document.querySelector('#header');
let scroller;
window.addEventListener('load', function (event) {
  scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getSpeed: true,
    smoothMobile: true,
    getDirection: true,
    reloadOnContextChange: true,
  });

  $('.storage_link').on('click', function () {
    const slider = document.getElementById('storage_type');
    scroller.scrollTo(slider);
    checkbox.checked = false;
  });

  $('.company_link').on('click', function () {
    const slider = document.getElementById('company');
    scroller.scrollTo(slider);
    checkbox.checked = false;
  });

  $('.contact_link').on('click', function () {
    const slider = document.getElementById('contact');
    scroller.scrollTo(slider);
    checkbox.checked = false;
  });

  $('.blog_link').on('click', function () {
    const slider = document.getElementById('blog');
    scroller.scrollTo(slider);
    checkbox.checked = false;
  });
  let hidden = false,
    static = true;

  scroller.on('scroll', (obj) => {
    var rect = el.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();
    var headerHeight = headerEl.getBoundingClientRect().height;

    if (obj.direction === 'down' && static) {
      if (obj.scroll.y > headerHeight) {
        $('.header').addClass('pinned');
        static = false;
      }
    }
    if (obj.direction === 'up' && !static) {
      if (obj.scroll.y <= headerHeight) {
        $('.header').removeClass('pinned');
        static = true;
      }
    }
    if (obj.direction === 'down' && !hidden) {
      if (obj.scroll.y > headerHeight + 200) {
        $('.header').removeClass('pinned');
        $('.header').addClass('unpinned');
        hidden = true;
      }
    }
    if (obj.direction === 'up' && hidden) {
      //console.log('show');
      $('.header').removeClass('unpinned');
      $('.header').addClass('pinned');
      hidden = false;
    }

    if (rect2.top < 68.41444396972656 && rect2.bottom > 27.796875) {
      $('.logo_header').css('z-index', 0);
      $('.get_space').css('z-index', 0);
    } else {
      $('.logo_header').css('z-index', 1);
      $('.get_space').css('z-index', 1);
    }
    if (rect.top < 69) {
      $('.logo_header').css('z-index', 0);
      $('.get_space').css('z-index', 0);
    }
  });
});

// checkbox.addEventListener( "change", () => {
//   if ( checkbox.checked ) {
//     $('body').css('overflow','hidden')
//   } else {
//     $('body').css('overflow','scroll')
//   }
// });
$('.login').on('click', function () {
  checkbox.checked = false;
});

$('.register').on('click', function () {
  checkbox.checked = false;
});
