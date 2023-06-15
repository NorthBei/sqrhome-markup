import $ from 'jquery';
import Shuffle from 'shufflejs';

var shuffleInstance = new Shuffle(document.querySelector('#media-blocks'), {
  itemSelector: '.media-block-wrapper',
});

$('#type-filter .dropdown-item').click(function (e) {
  e.preventDefault();
  $('#type-filter .dropdown-item').removeClass('active');
  $(this).addClass('active');

  shuffleInstance.filter($(this).data('filter'));
});
