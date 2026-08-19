document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var notify = document.querySelector('.notify-form');
  if (notify) {
    notify.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = notify.querySelector('button');
      var original = btn.textContent;
      btn.textContent = "You're on the list \u2713";
      setTimeout(function () { btn.textContent = original; }, 2500);
      notify.querySelector('input').value = '';
    });
  }
});
