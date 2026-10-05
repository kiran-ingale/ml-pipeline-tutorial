document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.step-card, .project-card, .challenge-card');

  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(12px)';
    item.style.transition = 'opacity 0.45s ease, transform 0.45s ease';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 70 * index);
  });
});
