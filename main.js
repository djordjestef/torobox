window.onload = function () {
  $('.owl_one').owlCarousel({
    margin: 20,
    responsiveClass: true,
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
