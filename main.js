// Seleccionar todos los botones con la clase 'btn'
const botones = document.querySelectorAll('.btn');

botones.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');

    setTimeout(() => {
      btn.classList.remove('clicked');
    }, 300);
  });
});

