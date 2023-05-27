window.onload = function () {
  var viewport_width = window.innerWidth;
  var owl_one = $('.owl_one');
  var owl_two = $('.owl_two');
  owl_one.owlCarousel({
    margin: viewport_width > 992 ? 20 : 0,
    responsiveClass: true,
    autoplay: viewport_width > 992 ? true : false,
    autoplayTimeout: 2000,
    autoplayHoverPause: viewport_width > 992 ? true : false,
    loop: true,
    smartSpeed: 800,
    responsive: {
      0: {
        items: 1,
        dots: false,
        center: false,
        stagePadding: 40,
        margin: 0,
      },

      992: {
        items: 1,
        dots: true,
        stagePadding: 0,
        center: false,
      },
    },
  });

  owl_two.owlCarousel({
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
      },
    },
  });
  $('.owl-prev').html('<img src="assets/left_arrow.png" alt="" class="left_arrow">');
  $('.owl-next').html('<img src="assets/right_arrow.png" alt="" class="right_arrow">');
};

$('#item_large').dblclick(function () {
  setTimeout(() => {
    if ($('.accordion-collapse').hasClass('show')) {
      $('.accordion-collapse').removeClass('show');
      $('.arr_large').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
      $('#item_large').find('.accordion-button').addClass('collapsed');
    } else {
      $('#flush-collapseOne').addClass('show');
      $('.arr_large').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
      $('#item_large').find('.accordion-button').removeClass('collapsed');
    }
  }, 300);
});

$('#item_medium').dblclick(function () {
  setTimeout(() => {
    if ($('.accordion-collapse').hasClass('show')) {
      $('.accordion-collapse').removeClass('show');
      $('.arr_medium').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
      $('#item_medium').find('.accordion-button').addClass('collapsed');
    } else {
      $('#flush-collapseTwo').addClass('show');
      $('.arr_medium').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
      $('#item_medium').find('.accordion-button').removeClass('collapsed');
    }
  }, 300);
});

$('#item_small').dblclick(function () {
  setTimeout(() => {
    if ($('.accordion-collapse').hasClass('show')) {
      $('.accordion-collapse').removeClass('show');
      $('.arr_small').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
      $('#item_small').find('.accordion-button').addClass('collapsed');
    } else {
      $('#flush-collapseThree').addClass('show');
      $('.arr_small').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
      $('#item_small').find('.accordion-button').removeClass('collapsed');
    }
  }, 300);
});

$('#item_mini').dblclick(function () {
  setTimeout(() => {
    if ($('.accordion-collapse').hasClass('show')) {
      $('.accordion-collapse').removeClass('show');
      $('.arr_mini').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
      $('#item_mini').find('.accordion-button').addClass('collapsed');
    } else {
      $('#flush-collapseFour').addClass('show');
      $('.arr_mini').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
      $('#item_mini').find('.accordion-button').removeClass('collapsed');
    }
  }, 300);
});

$('#item_large').click(function () {
  $('#item_large').toggleClass('active');
  $('#item_medium').removeClass('active');
  $('#item_small').removeClass('active');
  $('#item_mini').removeClass('active');
  if ($('#item_large').hasClass('active')) {
    $('.arr_large').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
    $('.arr_medium').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_small').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_mini').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    $('.arr_large').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    $('.arr_medium').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
    $('.arr_large').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_small').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_mini').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    $('.arr_medium').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    $('.arr_small').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
    $('.arr_medium').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_large').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_mini').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    $('.arr_small').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    $('.arr_mini').css({ transform: 'rotate(' + 0 + 'deg)', opacity: 1 });
    $('.arr_medium').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_small').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
    $('.arr_large').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    $('.arr_mini').css({ transform: 'rotate(' + 180 + 'deg)', opacity: 0.3 });
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
    if (!$('#flush-collapseOne').hasClass('show')) {
      $('.cube_large').animate(
        {
          opacity: 0.5,
        },
        200,
      );
    }
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
    if (!$('#flush-collapseTwo').hasClass('show')) {
      $('.cube_medium').animate(
        {
          opacity: 0.5,
        },
        200,
      );
    }
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
    if (!$('#flush-collapseThree').hasClass('show')) {
      $('.cube_small').animate(
        {
          opacity: 0.5,
        },
        200,
      );
    }
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
    if (!$('#flush-collapseFour').hasClass('show')) {
      $('.cube_mini').animate(
        {
          opacity: 0.5,
        },
        200,
      );
    }
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

  return false;
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
    smartphone: { smooth: true },
    getDirection: true,
    reloadOnContextChange: true,
  });

  $('.storage_link').on('click', function () {
    const slider = document.getElementById('storage_type');
    scroller.scrollTo(slider, -200);
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
    const advantages = document.querySelectorAll('.advantages_animation');
    const titleAnimation = document.querySelectorAll('.title_animation');
    // const isMobile = window.innerWidth <= 992;

    titleAnimation.forEach((advantage) => {
      const rect = advantage.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      const isAnimated = advantage.getAttribute('data-animated') === 'true';

      if (isVisible && !isAnimated) {
        advantage.setAttribute('data-animated', 'true');
        advantage.style.opacity = '0';
        advantage.style.transform = 'translateY(100%)';

        const startOpacity = 0;
        const endOpacity = 1;
        const startTranslateY = 100;
        const endTranslateY = 0;
        const duration = 800; // Animation duration in milliseconds
        const startTime = Date.now();
        let animationFrame;

        function lerp(start, end, progress) {
          return start * (1 - progress) + end * progress;
        }

        function animate() {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const opacity = lerp(startOpacity, endOpacity, progress);
          const translateY = lerp(startTranslateY, endTranslateY, progress);

          advantage.style.opacity = opacity;
          advantage.style.transform = `translateY(${translateY}%)`;

          if (progress < 1) {
            // Continue the animation until it's complete
            animationFrame = requestAnimationFrame(animate);
          }
        }

        // Start the animation
        animate();
      }
    });

    // if (!isMobile) {
    advantages.forEach((advantage) => {
      const rect = advantage.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      const isAnimated = advantage.getAttribute('data-animated') === 'true';

      if (isVisible && !isAnimated) {
        advantage.setAttribute('data-animated', 'true');
        advantage.style.transform = 'scale(0.5)';

        const startScale = 0.5;
        const endScale = 1;
        const duration = 500; // Animation duration in milliseconds
        const startTime = Date.now();
        let animationFrame;

        function lerp(start, end, t) {
          return start + (end - start) * t;
        }

        function animate() {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const scale = lerp(startScale, endScale, progress);
          advantage.style.transform = `scale(${scale})`;

          if (progress < 1) {
            // Continue the animation until it's complete
            animationFrame = requestAnimationFrame(animate);
          }
        }

        // Start the animation
        animate();
      }
    });
    // }

    // function lerp(start, end, progress) {
    //   return start * (1 - progress) + end * progress;
    // }

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
      $('.header').removeClass('unpinned');
      $('.header').addClass('pinned');
      hidden = false;
    }

    if (
      ((rect2.top < 68.41444396972656 && rect2.bottom > 27.796875) || rect.top < 69) &&
      obj.direction === 'down'
    ) {
      $('.logo_header').css('z-index', 0);
      $('.get_space').css('z-index', 0);
    } else {
      setTimeout(() => {
        $('.logo_header').css('z-index', 1);
        $('.get_space').css('z-index', 1);
      }, 500);
    }
  });
});

$('.login').on('click', function () {
  checkbox.checked = false;
});

$('.register').on('click', function () {
  checkbox.checked = false;
});
