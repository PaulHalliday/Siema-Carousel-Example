import Siema from 'siema';

const carousel = new Siema({
  selector: '.carousel',
  loop: true,
  duration: 1000,
  easing: 'ease-in',
  perPage: 1,
  onInit: () => console.log('OnInit!'),
  onChange: () => console.log('OnChange')
})

const forward = document.getElementById('forward');
const backward = document.getElementById('backward');

forward.addEventListener('click', () => carousel.next());
backward.addEventListener('click', () => carousel.prev());

setInterval(() => {
  carousel.next()
}, 2000);
