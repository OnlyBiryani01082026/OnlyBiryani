// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Open menu image in a new tab when tapped
const menuImage = document.querySelector('.menuImage');
if (menuImage) {
  menuImage.style.cursor = 'zoom-in';
  menuImage.addEventListener('click', () => {
    window.open(menuImage.src, '_blank');
  });
}
