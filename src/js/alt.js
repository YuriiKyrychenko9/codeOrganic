document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.menu-link, .button-menu-mobile');
  const backdrop = document.querySelector('.backdrop');

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      backdrop.classList.add('is-closed');
    });
  });
});
