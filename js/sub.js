$(function () {


  function changeWhite() {
    $(".sub_header .gnb > li > a").css({ color: "white" });
    $(".sub_header h1 a img").attr("src", "../img/common/yamaha_white.png")
    $(".sub_header .util .mypage a").css({ background: "url(../img/common/mypage.png)" });
    $(".sub_header .util .btn_search button").css({ background: "url(../img/common/search.png)" });
    $(".sub_header .ham img").attr("src", "../img/common/ham.png");
  }
  function changePurple() {
    $(".sub_header .gnb > li > a").css({ color: "var(--main-color)" });
    $(".sub_header h1 a img").attr("src", "../img/common/yamaha_purple.png")
    $(".sub_header .util .mypage a").css({ background: "url(../img/common/mypage_p.png)" });
    $(".sub_header .util .btn_search button").css({ background: "url(../img/common/search_p.png)" });
    $(".sub_header .ham img").attr("src", "../img/common/ham_p.png");
  }
  //header fixed
  // sub_gnb
  $(".sub_header .gnb > li").mouseenter(function () {
    changeWhite();
  });
  $(".sub_header .gnb > li").mouseleave(function () {
    changePurple();
  });

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop >= 100) {
      $(".sub_header").css({ background: "#000", position: "fixed" });
      changeWhite();
      $(".sub_header .gnb li").mouseleave(function () {
        $(".sub_header").css({ background: "#000" })
        changeWhite();
      })
    } else {
      $(".sub_header").css({ background: "white", position: "static" })
      $(".sub_header .gnb > li").mouseenter(function () {
        $(".sub_header").css({ background: "#000" })
        changeWhite();
      });
      $(".sub_header .gnb > li").mouseleave(function () {
        $(".sub_header").css({ background: "#fff" });
        changePurple();
      });
      changePurple();
    }
  })


  // sub - map
  if (window.innerWidth > 1000) {
    $(".btn_open_close_lr").click(function () {
      $("#map .map_info").toggleClass("close");
      $(this).toggleClass("close");
    })
  }
  $(window).on("resize", function () {
    if (window.innerWidth < 1000) {
      $(".btn_open_close_ud").click(function () {
        $("#map .map_info").toggleClass("t_close");
        $(this).toggleClass("t_close");
        $("#map .map_info .map_list").toggleClass("t_close");
      })
    }
  })

  // sub04 service
  $("#faq .faq_list > li > .faq_tit").click(function () {
    $(this).siblings(".faq_a").slideToggle();
  })

})