import $ from 'jquery';
// header

//- animation ref to http://www.ranadesign.com/recruit/changethework/
var isCollapse = true;

$(document).ready(function () {
  var nav = $('#nav-bar');
  $('#nav-phone-cover').click(function () {
    var w = isCollapse ? '100%' : '44px';
    var h = isCollapse ? $('#nav-bar>.navbar-nav').outerHeight() : '44px';
    $(this).toggleClass('collapse');

    if (isCollapse) {
      nav.animate({ width: w }, 300).animate({ height: h }, 300);
    } else {
      nav.animate({ height: h }, 300).animate({ width: w }, 300);
    }
    isCollapse = !isCollapse;
  });

  $('.nav-link').click(function (e) {
    var anchorID = $(this).data('link');
    if (anchorID != undefined && $('#intro-anim').length > 0) {
      e.preventDefault();
      $('html,body').animate(
        {
          scrollTop: $(anchorID).offset().top,
        },
        300
      );
    }
  });
});

// footer
$(document).ready(function () {
  $('#footer-totop > .button').click(function () {
    $('html,body').animate({ scrollTop: 0 });
  });
});
