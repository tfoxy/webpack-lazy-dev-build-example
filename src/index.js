import './0';

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');

b1.addEventListener('click', () => {
  import('./1');
});

b2.addEventListener('click', () => {
  import('./2');
});
