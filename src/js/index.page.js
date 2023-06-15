import $ from 'jquery';
import lottie from 'lottie-web';
import 'waypoints/lib/noframework.waypoints.min';
import 'slick-carousel';
import 'jquery-mousewheel';

// Global
var isPhone = window.innerWidth <= 576 ? true : false;
var isPortrait = isPhone || window.innerWidth / window.innerHeight < 1440 / 1024 ? true : false;
var pathPostfix = isPortrait ? '-rwd' : '';

// fold section
var isFirstView = localStorage.getItem('isFirstView');
isFirstView = isFirstView === null ? true : false;
localStorage.setItem('isFirstView', false);

document.querySelector('#exclamations>img').addEventListener(
  'animationend',
  function () {
    setTimeout(function () {
      $('#brand-logo').addClass('z-index-back');
    }, 1000);

    showing.play();
  },
  false
);

var showing = lottie.loadAnimation({
  container: document.getElementById('showing'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './assets/lottie/OP' + pathPostfix + '/data.json',
  rendererSettings: {
    // https://github.com/airbnb/lottie-web/issues/2718
    viewBoxOnly: true,
  },
});

showing.addEventListener('data_ready', function () {
  if (isPortrait) {
    $('#showing').addClass('phone');
  }
  $('#paint-logo')
    .delay(3500)
    .animate({ opacity: 1 }, 300, function () {
      $('#showing,#paint-logo').addClass('z-index-back');
      $(this).addClass('d-flex');
    });
});

if (!isFirstView) {
  $('#intro-anim').hide().addClass('normal');
}

var introAnim = loadIntroAnim();

function loadIntroAnim() {
  var wrapper = document.querySelector('#intro-anim');
  var introAnim = lottie.loadAnimation({
    container: wrapper,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/lottie/INTRO/data.json',
    rendererSettings: {
      // https://github.com/airbnb/lottie-web/issues/2718
      viewBoxOnly: true,
    },
  });

  introAnim.addEventListener('data_ready', function () {
    if (isPortrait) {
      $('#intro-anim').addClass('phone');
    }
    // attachScroll(introAnim, wrapper, 40);
    if (isFirstView) {
      $('body')
        .css('overflow', 'hidden')
        .mousewheel(function (event) {
          $('#intro-anim').css('transform', 'translateY(0%)');
          $(this).off('mousewheel');
        });
    }

    scrollAnim();
  });

  // 這個播放完畢的Event好像不會觸發，不知道為什麼
  introAnim.addEventListener('complete', function (e) {
    $('body').css('overflow', '');
    $('#intro-anim').fadeOut();
  });

  return introAnim;
}

function scrollAnim() {
  var wrapper = document.querySelector('#intro-anim');
  attachScroll(introAnim, wrapper, 200, function () {
    $('body').css('overflow', '');
    $('#intro-anim').fadeOut();
  });
}

function attachScroll(anim, contentid, speed, onCompleted) {
  anim.percentage = 0;
  var val = 0;
  var totalDuration = (anim.totalFrames / anim.frameRate) * 1000;
  $('#intro-anim').mousewheel(function (event) {
    event.preventDefault();
    var delta = Math.max(-1, Math.min(1, event.deltaY));
    if (delta < 0) {
      if (anim.percentage < totalDuration) {
        anim.percentage += speed; //(Math.abs(event.deltaY))*speed;
      }
    } else {
      if (anim.percentage > 0) {
        anim.percentage -= speed; //(Math.abs(event.deltaY))*speed;
      }
    }
    if (val >= 0) {
      //倒轉播放完畢也會觸發complete event,所以卡一個0在這邊，到frame0就不播放了
      anim.goToAndStop(anim.percentage);
    }

    // 觸發播放完畢Event
    if (anim.percentage === totalDuration) {
      if (onCompleted) onCompleted();
    }
  });
}

// about section

$('#about-dialog').mouseenter(function () {
  $('#about-content .company-info').addClass('ease-in');
});

$('#about-content .company-intro').mouseleave(function () {
  $('#about-content .company-info').removeClass('ease-in');
});

$('#play-button').click(function () {
  $('#intro-anim').fadeIn();
  introAnim.percentage = 0;
  introAnim.goToAndStop(0);
});

// serve section
var digitalProd = lottie.loadAnimation({
  container: document.querySelector('#digital-prod .lottie-anim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './assets/lottie/DIGITAL' + pathPostfix + '/data.json',
});

var serverAnim = {};
['serve1', 'serve2', 'serve3', 'serve4'].forEach(function (name, index) {
  var wrapper = document.querySelector('#' + name);
  serverAnim[name] = lottie.loadAnimation({
    container: wrapper,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/lottie/' + name + '/data.json',
  });
});

$('#serve1-cover,#serve3').hover(
  function () {
    var name = $(this).attr('id') === 'serve3' ? 'serve3' : 'serve1';
    serverAnim[name].setDirection(1);
    serverAnim[name].play();
  },
  function () {
    var name = $(this).attr('id') === 'serve3' ? 'serve3' : 'serve1';
    serverAnim[name].setDirection(-1);
    serverAnim[name].play();
  }
);

$('#serve2-cover,#serve4').hover(
  function () {
    var name = $(this).attr('id') === 'serve4' ? 'serve4' : 'serve2';
    serverAnim[name].setDirection(1);
    serverAnim[name].playSegments([15, 21], true);
  },
  function () {
    var name = $(this).attr('id') === 'serve4' ? 'serve4' : 'serve2';
    serverAnim[name].setDirection(-1);
    serverAnim[name].playSegments([21, 15], true);
  }
);

var ser = new Waypoint({
  element: document.getElementById('serve'),
  handler: function () {
    serverAnim['serve2'].playSegments([0, 15], true);
    serverAnim['serve4'].playSegments([0, 15], true);
    ser.disable();
  },
  offset: '20%',
});

$('#serve1-cover').click(function () {
  var slideHeight = $('#creative').height();
  var wrapper = $('#serve-main');
  wrapper.css('height', slideHeight);
  wrapper.addClass('slide-right');
  $('#creative').addClass('z-index-front');
});

$('#serve2-cover').click(function () {
  var slideHeight = $('#ads').height();
  var wrapper = $('#serve-main');
  wrapper.css('height', slideHeight);
  wrapper.addClass('slide-left');
  $('#ads .folding-block').addClass('play');
});

$('#serve4').click(function () {
  var slideHeight = $('#digital-prod').height();
  var wrapper = $('#serve-main');
  wrapper.css('height', slideHeight);
  wrapper.addClass('slide-right');
  digitalProd.play();
  $('#digital-prod').addClass('z-index-front');
});

$('#serve .back-arrow').click(function () {
  var id = $(this).closest('.serve-slide').attr('id');
  var slideDirection = id == 'ads' ? 'slide-left' : 'slide-right';
  var wrapper = $('#serve-main');
  wrapper.removeClass(slideDirection);
  wrapper.css('height', 'initial');
  if (slideDirection === 'slide-right') {
    $('#' + id).toggleClass('z-index-front');
  } else {
    //#ads
    $('#ads .folding-block').removeClass('play');
  }
});

// works section
$('.dialog-wrapper .dialog.small').mouseenter(function () {
  $(this).closest('.dialog-wrapper').addClass('active');
});

$('.dialog-wrapper .dialog.big').mouseleave(function () {
  $(this).closest('.dialog-wrapper').removeClass('active');
});

var cat_anim_right = lottie.loadAnimation({
  container: document.getElementById('cat-right'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/lottie/render cat r/data.json',
});

var cat_anim_left = lottie.loadAnimation({
  container: document.getElementById('cat-left'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/lottie/render cat/data.json',
});

// team section
$('#show-more-btn').click(function () {
  $('.group-member:not(.group-member-show)').slice(0, 4).addClass('group-member-show');
  if ($('.group-member:not(.group-member-show)').length == 0) {
    $(this).hide();
  }
});

// union section
var calligraphTop = new Waypoint({
  element: document.getElementById('calligraphy-top'),
  handler: function () {
    $('#calligraphy-top .growth-rect').addClass('grown');
  },
  offset: '40%',
});

var calligraphyBottom = new Waypoint({
  element: document.getElementById('calligraphy-top'),
  handler: function () {
    $('#calligraphy-bottom .growth-rect').addClass('grown');
  },
  offset: '40%',
});
