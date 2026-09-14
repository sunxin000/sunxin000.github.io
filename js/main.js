const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const expanded = navigation.classList.toggle('active');
  toggle.setAttribute('aria-expanded', String(expanded));
});
navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const dialog = document.querySelector('.figure-dialog');
const fullImage = dialog.querySelector('.figure-full');
const caption = document.querySelector('#figure-caption');
if (typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-figure]').forEach(link => {
    link.addEventListener('click', event => {
      // Keep opening in a new tab available with modifier keys.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      fullImage.src = link.href;
      fullImage.alt = link.querySelector('img').alt;
      caption.textContent = link.dataset.caption;
      dialog.showModal();
      document.body.classList.add('figure-open');
    });
  });
  dialog.querySelector('.figure-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => document.body.classList.remove('figure-open'));
}
