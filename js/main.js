$(function () {
  //header fixed
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop >= 100) {
      $("#header").css({ background: "#000", position: "fixed" })
    } else {
      $("#header").css({ background: "transparent" })
      $("#header .gnb > li").mouseenter(function () {
        $("#header").css({ background: "#000" })
      });
      $("#header .gnb > li").mouseleave(function () {
        $("header").css({ background: "transparent" })
      })
    }
  })

  // MV
  const mv = new Swiper(".mv", {
    pagination: {
      el: "#main_visual .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".mv_control .swiper-button-next",
      prevEl: ".mv_control .swiper-button-prev"
    },
    autoplay: true,
    loop: true,
    speed: 3000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  })

  const pdt = new Swiper(".pdt", {
    slidesPerView: 1,
    grid: {
      rows: 1,
    },
    slidesPerGroup: 1,
    breakpoints: {
      710: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
        slidesPerGroup: 2,
      },
      1210: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        slidesPerGroup: 6,
      }
    },
    spaceBetween: 28,
  })
})