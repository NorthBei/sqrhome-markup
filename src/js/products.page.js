import $ from 'jquery';
import 'slick-carousel/slick/slick.min';

$(document).ready(function () {
  var screenWidth = $(document).width();

  if (screenWidth < 768) {
    $('#box-wrapper').slick({
      infinite: false,
      prevArrow: '<img class="slide-arrow slide-arrow-left" src="./assets/img/arrow-left.png">',
      nextArrow: '<img class="slide-arrow slide-arrow-right" src="./assets/img/arrow-right.png">',
    });
  }
});
