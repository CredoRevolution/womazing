// PRELOADER/////////////



// STICKY HEADER////////////

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// SHOP TABS////////////////////

if (window.jQuery) {
  // jQuery подключен к странице
  console.log('jQuery is ready to serve my lord');
}


$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
      contenttab = $('.js-tab-trigger[data-tab="'+ id +'"]');
  
  $('.js-tab-trigger').removeClass('active'); // 1
  contenttab.addClass('active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4

  // console.log($(this).attr('data-tab'))

  if ($(this).attr('data-tab') == 1) {
    $('.js-tab-content').addClass('active');
  }

  if ($(this).attr('data-tab') !== 1) {
    $('.tab-breadcrums').removeClass('active');
    var content2 = $('.tab-breadcrums[data-tab="2"]');
    content2.addClass('active');
    // console.log($('.tab-breadcrums').attr('data-tab'))
  } 
  if ($(this).attr('data-tab') == 1) {
    $('.tab-breadcrums').removeClass('active');
    var content2 = $('.tab-breadcrums[data-tab="1"]');
    content2.addClass('active');
  } 

 
});
//MAIN PAGE FORMS/////////////////////

$.validator.addMethod('regex', function (value, element, regexp) {
  let regExsp = new RegExp(regexp);
  return this.optional(element) || regExsp.test(value)
}, 'please check ur input')

$('.phone-img').click(function(){
  // console.log($(this));
  $('.overlay').fadeIn();
  $('.feedback').fadeIn();
})

$('.overlay').click(function(){
  // console.log($(this));
  $('.overlay').fadeOut();
  $('.feedback-success').fadeOut();
  $('.feedback').fadeOut();
})

$('.feedback').validate({
  rules: {
    name: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    email: {
      required: true
    },
    phone: {
      required: true,
      // digits: true,
      minlength: 12,
      maxlength: 13,
      regex: "[0-9]+",
    }
  },
  // messages: {
  //   name: 'invalid'
  // },
  submitHandler: function(){
    $('.feedback').click(function(){
      // console.log($(this));
      $('.feedback').fadeOut();
      $('.feedback-success').fadeIn();
    })
  }
});

$('.contacts__form').validate({
  rules: {
    name: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    email: {
      required: true
    },
    phone: {
      required: true,
      // digits: true,
      minlength: 12,
      maxlength: 13,
      regex: "[0-9]+",
    }
  },
  submitHandler: function(){
    $('.success-alert').toggle();
  }
});

$('.checkout-page-form').validate({
  rules: {
    name: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    country: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    city: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    street: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    house: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    flat: {
      required: true,
      regex: "[А-Яа-яA-Za-z]{1,32}"
    },
    email: {
      required: true
    },
    payment:{
      required: true
    },
    phone: {
      required: true,
      // digits: true,
      minlength: 12,
      maxlength: 13,
      regex: "[0-9]+",
    }
  },
  submitHandler: function(){
    window.location.href = "success.html";
  }
});



$('.feedback-success__btn').click(function(){
  // console.log($(this));
  $('.feedback-success').fadeOut();
  $('.overlay').fadeOut();
})



////VALIDATE/////////////

// $.validator.addMethod('regex', function (value, element, regexp) {
//   let regExsp = new RegExp(regexp);
//   return this.optional(element) || regExsp.test(value)
// }, 'please check ur input')
// $('#form-cover').validate({
//   rules: {
//     name: {
//       required: true,
//       regex: "[A-Za-z]{1,32}"
//     },
//     email: {
//       required: true
//     },
//     phone: {
//       required: true,
//       // digits: true,
//       minlength: 12,
//       maxlength: 13,
//       regex: "[0-9]+",
//     }
//   },
//   messages: {
//     name: 'incorrect'
//   }
// })


//////

$('.mobile div').on('click', () => {
  $('.mobile div').toggleClass('active');
  $('.mobile nav').toggleClass('open');
  $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){ 
  $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}
/// SHOP PAGES

$('.page-btn').click(function(){
  $('html, body').animate({scrollTop: '0px'}, 0);
  var idpage = $(this).attr('data-page'),
  contentpage = $('.tabs-shop[data-page="'+ idpage +'"]');
  contentbtn = $('.page-btn[data-page="'+ idpage +'"]');
  $('.page-btn').removeClass('active');
  console.log(contentbtn)
  contentbtn.addClass('active');
  $('.tabs-shop.active').removeClass('active'); // 1

  contentpage.addClass('active'); // 2
})

$('.next-page-arrow').on('click' , function (event) {
  event.preventDefault();
  $('.page-btn').removeClass("active", 1000, "easeOutBounce" );
  $('.page-btn').next().addClass('active');
});

// COLOR AND SIZE SELECTOR/////////////


$('.size_btn').click(function(){
  // console.log($(this));
  $('.size_btn').removeClass('active');
  $(this).addClass('active');
})

$('.color_btn').click(function(){
  // console.log($(this));
  $('.color_btn').removeClass('active');
  $(this).addClass('active');
})






// SLIDER///////////////

var swiper1 = new Swiper('.swiper_offer', {
    loop: true,
    effect: "flip",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".bullets-wrapper",
        clickable: true,
        bulletActiveClass: "bullet_active",
        bulletClass: "bullet",
        type: "bullets",
      },
      slidesPerView: 1,
      direction: 'horizontal',
});



var swiper2 = new Swiper(".swiper_team", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      direction: 'horizontal',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiperNext",
        prevEl: ".swiperPrev",
      },
});

const swiperPrev = document.getElementById('swiperPrev');
const swiperNext = document.getElementById('swiperNext');

swiperPrev.addEventListener('click', () => {
  swiper2.slidePrev();
})
swiperNext.addEventListener('click', () => {
  swiper2.slideNext();
});


