// navlinks stay
document.addEventListener('DOMContentLoaded', function () {
  let navLinks = document.querySelectorAll('.nav-link');
  let currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
// index swiper slide change
// Initialize WOW.js
new WOW().init();

// Initialize Swiper
let fadeSwiper = new Swiper('.fadeSwiper', {
  loop: true,
  effect: '',
  slidesPerView: 1, // Ensure only one slide is shown at a time
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 1
    }
  },
  on: {
    slideChangeTransitionStart: function () {
      new WOW().init(); // Reinitialize WOW.js on each slide change
    }
  }
});

// second swiper
var scrollSwiper = new Swiper('.scrollSwiper', {
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  freeMode: true,
  freeModeMomentum: false,
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 10,
  breakpoints: {
    320: {slidesPerView: 1.5, spaceBetween: 10},
    576: {slidesPerView: 2.5, spaceBetween: 15},
    768: {slidesPerView: 3.5, spaceBetween: 20},
    992: {slidesPerView: 4.5, spaceBetween: 20},
    1200: {slidesPerView: 5.5, spaceBetween: 25}
  }
});
// counter
var counted = 0;
$(window).scroll(function () {
  if ($('.counter').length > 0) {
    var oTop = $('.counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate(
          {
            countNum: countTo
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          }
        );
      });
      counted = 1;
    }
  }
});
// product swiper
var thirdSwiper = new Swiper('.thirdSwiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {slidesPerView: 2},
    1024: {slidesPerView: 3}
  }
});
// products page filter
$(document).ready(function () {
  $('.category-link').on('click', function (e) {
    // e.preventDefault();

    let category = $(this).data('category'); // Get clicked category

    $('.product-card').fadeOut(200, function () {
      if (category === 'all') {
        $('.product-card').fadeIn(200); // Show all products
      } else {
        $('.product-card').each(function () {
          if ($(this).data('category') === category) {
            $(this).fadeIn(200);
          }
        });
      }
    });
  });
});
