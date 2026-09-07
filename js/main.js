
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
  const publications = document.querySelectorAll('.publication[data-category]');
  if (filterButtons.length && publications.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(b => b.classList.toggle('active', b === button));
        publications.forEach(pub => {
          const show = filter === 'all' || pub.dataset.category === filter;
          pub.classList.toggle('is-hidden', !show);
        });
      });
    });
  }
})();
