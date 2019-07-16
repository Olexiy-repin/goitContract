'use strict';

$('.owl-carousel').owlCarousel({
  nav: true,
  loop: false,
  margin: 10,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 4,
    },
  },
});

let tab = document.querySelectorAll('.slider-item');
let tabPanelAll = document.querySelectorAll('.tabpanel');

let tabClick = e => {
  e.preventDefault();
  let currentEvent = e.target.closest('.slider-item');
  let dataTab = currentEvent.dataset.tab;
  let tabPanel = document.querySelector(`#${dataTab}`);

  tabPanelAll.forEach(el => {
    el.classList.remove('tabpanel--active');
  });

  tab.forEach(el => {
    el.classList.remove('slider-item--active');
  });

  tabPanel.classList.add('tabpanel--active');
  currentEvent.classList.add('slider-item--active');
};

tab.forEach(el => {
  el.addEventListener('click', tabClick);
});
