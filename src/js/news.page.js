import $ from 'jquery';
import Shuffle from 'shufflejs';
import * as Select from 'scroll-select';
import 'slick-carousel';

$('.news-block').slick({
  infinite: true,
  vertical: true,
  speed: 400,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
});

$('.news-block').hover(
  function () {
    var slide = $(this);
    var currentSlide = slide.slick('slickCurrentSlide');
    if (currentSlide == 0) {
      slide.slick('slickNext');
    }
    slide.slick('slickPause');
  },
  function () {
    $(this).slick('slickPlay');
  }
);

var el = document.getElementById('select');
var select = new Select(el, {
  data: getData(),
});

select.on('change', function (v) {
  $('#type-filter .dropdown-item[data-name=' + v + ']').click();
});

$('#prev').click(function () {
  select.prev();
});

$('#next').click(function () {
  select.next();
});

function getData() {
  var data = [];
  $('#type-filter .dropdown-item').each(function () {
    var item = $(this);
    data.push({
      id: String(item.data('name')),
      text: String(item.text()),
    });
  });
  return data;
}

/*dropdown selector */
var shuffleInstance = new Shuffle(document.querySelector('#news-section'), {
  itemSelector: '.news-info',
});

$('#type-filter .dropdown-item').click(function (e) {
  e.preventDefault();
  $('#type-filter .dropdown-item').removeClass('active');
  $(this).addClass('active');

  shuffleInstance.filter($(this).data('filter'));
});
