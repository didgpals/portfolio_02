$(function () {
  // depth2
  $(".gnb > li").mouseenter(function () {
    let i = $(this).index();
    if (i === 1) {
      $(this).find(".depth2").stop().fadeIn();
      $(".gnb_bg").css({ height: 252 });
      $(".gnb_bg").stop().fadeIn();
    } else if (i === 6) {
      $(this).find(".depth2").stop().fadeIn();
      $(".gnb_bg").css({ height: 75 });
      $(".gnb_bg").stop().fadeIn();
    }
    $("header").addClass("active");
  })
  $(".gnb > li").mouseleave(function () {
    let i = $(this).index();
    if (i === 1) {
      $(this).find(".depth2").stop().fadeOut();
      $(".gnb_bg").stop().fadeOut();
    } else if (i === 6) {
      $(this).find(".depth2").stop().fadeOut();
      $(".gnb_bg").stop().fadeOut();
    }
    $("header").removeClass("active");
  })
  // m_menu
  $(".ham").click(function () {
    $(".m_menu").fadeIn();
  })
  $(".close").click(function () {
    $(".m_menu").fadeOut();
  })

  $(".m_gnb > li").click(function () {
    $(this).find(".m_depth2").fadeToggle();
  })

})
