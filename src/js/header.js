const header = document.querySelector('.top');
const sectionWork = document.querySelector('.section-work');

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
