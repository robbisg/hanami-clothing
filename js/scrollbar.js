$(window).scroll(function () {
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if ($(window).scrollTop() >= $("#page-title").position().top) {
          $("nav").css("background-color", "white");
          $("nav").css("opacity", 0.8);
          $(".dropdown-content").css("background-color", "white");
          $(".dropdown-content").css("opacity", 0.8);
        }
    else {
          $("nav").css("background-color", "transparent");
          $("nav").css("opacity", 1.);
          $(".dropdown-content").css("background-color", "transparent");
          $(".dropdown-content").css("opacity", 1.);
        }
});
