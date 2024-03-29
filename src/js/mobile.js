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

  var header = document.querySelector('.top');
  var sectionWork = document.querySelector('.how-it-work');

  function handleHeaderStyle() {
    if (window.innerWidth <= 1279) {
      header.style.backgroundColor = 'rgba(87, 111, 53, 0.8)';
    } else if (window.scrollY >= sectionWork.offsetTop) {
      header.style.backgroundColor = 'rgba(87, 111, 53, 0.8)';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  }

  window.addEventListener('scroll', handleHeaderStyle);
  window.addEventListener('resize', handleHeaderStyle);
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
