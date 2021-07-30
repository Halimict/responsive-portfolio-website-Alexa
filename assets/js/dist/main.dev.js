"use strict";

/*==================== MENU SHOW Y HIDDEN ====================*/
var navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/

/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navMenu.classList.add('show-menu');
  });
}
/*===== MENU HIDDEN =====*/

/* Validate if constant exists */


if (navClose) {
  navClose.addEventListener('click', function () {
    navMenu.classList.remove('show-menu');
  });
}
/*==================== REMOVE MENU MOBILE ====================*/


var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu'); //when we click on each nav__link, we remove the show menw class

  navMenu.classList.remove('show-menu');
}

navLink.forEach(function (n) {
  n.addEventListener('click', linkAction);
});
/*==================== ACCORDION SKILLS ====================*/
// const skillsContent = document.getElementsByClassName('skills__content'),
//   skillsHeader = document.querySelectorAll('.skills__header');
// function toggleSkills() {
//   let itemClass = this.parentNode.ClassName;
//   for (i = 0; i < skillsContent.length; i++) {
//     skillsContent[i].className = 'skills__content skills__close';
//   }
//   if (itemClass === 'skills__content skills__close') {
//     this.parentNode.className = 'skills__content skills__open';
//   }
// }
// skillsHeader.forEach((el) => {
//   el.addEventListener('click', toggleSkills);
// });

var skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
  var itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach(function (e) {
  e.addEventListener('click', toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/

var tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');
tabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var target = document.querySelector(tab.dataset.target);
    tabContent.forEach(function (tabContent) {
      tabContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');
    tabs.forEach(function (tab) {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});
/*==================== SERVICES MODAL ====================*/

var modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

var modal = function modal(modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach(function (modalBtn, i) {
  modalBtn.addEventListener('click', function () {
    modal(i);
  });
});
modalCloses.forEach(function (modalClose) {
  modalClose.addEventListener('click', function () {
    modalViews.forEach(function (modalView) {
      modalView.classList.remove('active-modal');
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/
// let swiper = new Swiper('.portfolio__container', {
//   cssMode: true,
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

var swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
/*==================== TESTIMONIAL ====================*/

var swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    568: {
      slidesPerView: 2
    }
  }
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

var sections = document.querySelectorAll('section[id]');

function scrollActive() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  var nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  var scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);
/*==================== DARK LIGHT THEME ====================*/

var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'uil-sun';
var selectedTheme = localStorage.getItem('selected-tTheme');
var selectedIcon = localStorage.getItem('selected-icon');

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

var getCurrentIcon = function getCurrentIcon() {
  return document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
};

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  document.body.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', function () {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selectedTheme', getCurrentTheme());
  localStorage.setItem('selectedIcon', getCurrentIcon());
});