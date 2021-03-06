import App from './App.svelte';
import '../src/styles/style.scss';
import headerImage from '../src/images/selfie_gray_glasses.png';

const app = new App({
  target: document.getElementById('root'),
  props: {
    name: 'world',
  },
});

export default app;

/* SCROLL ANIMATIONS */
const tiles = document.querySelectorAll('.work-projects');
const fadeIns = document.querySelectorAll('.fade-ins');
const scalers = document.querySelectorAll('.scalers');

const options = {
  threshold: 0,
  rootMargin: '0px 0px -150px 0px',
};

const animateOnScroll = new IntersectionObserver(function (
  entries,
  animateOnScroll,
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('active');
      animateOnScroll.unobserve(entry.target);
    }
  });
},
options);

tiles.forEach((tile) => {
  animateOnScroll.observe(tile);
});
fadeIns.forEach((fade) => {
  animateOnScroll.observe(fade);
});
scalers.forEach((scale) => {
  animateOnScroll.observe(scale);
});

window.addEventListener('load', function () {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});
