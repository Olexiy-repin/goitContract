'use strict';

$('.owl-carousel').owlCarousel({
  nav: true,
  loop: false,
  margin: 10,
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 4
    }
  }
});
var tab = document.querySelectorAll('.slider-item');
var tabPanelAll = document.querySelectorAll('.tabpanel');

var tabClick = function tabClick(e) {
  e.preventDefault();
  var currentEvent = e.target.closest('.slider-item');
  var dataTab = currentEvent.dataset.tab;
  var tabPanel = document.querySelector("#".concat(dataTab));
  tabPanelAll.forEach(function (el) {
    el.classList.remove('tabpanel--active');
  });
  tab.forEach(function (el) {
    el.classList.remove('slider-item--active');
  });
  tabPanel.classList.add('tabpanel--active');
  currentEvent.classList.add('slider-item--active');
};

tab.forEach(function (el) {
  el.addEventListener('click', tabClick);
});