// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.menu-link, .button-menu-mobile');
  const backdrop = document.querySelector('.backdrop');
  const menuMobile = document.querySelector('.menu-mobile');
  const menuButton = document.querySelector('.btn-menu');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      menuMobile.classList.remove('is-open');
      backdrop.classList.remove('is-open');
    });
  });
  menuButton.addEventListener('click', function () {
    const isOpen = menuMobile.classList.contains('is-open');
    if (isOpen) {
      menuMobile.classList.remove('is-open');
      backdrop.classList.remove('is-open');
    } else {
      menuMobile.classList.add('is-open');
      backdrop.classList.add('is-open');
    }
  });
  document.querySelector('.btn-close').addEventListener('click', function () {
    menuMobile.classList.remove('is-open');
    backdrop.classList.remove('is-open');
  });
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.work-item');
for (let elm of elements) {
  observer.observe(elm);
}
