$(document).ready(function() {
    var header = $("header");
    function updateHeaderStyle() {
      if ($(window).scrollTop() > 0) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }
    updateHeaderStyle();
    $(window).scroll(function() {
      updateHeaderStyle();
    });
  });
  