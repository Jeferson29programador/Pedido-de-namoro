let button = document.getElementById('no');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;
let heartsContainer = document.querySelector('.hearts-container');

button.addEventListener('mouseover', function () {
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '\u2764'; // caractere de coração
    document.querySelector('.hearts-container').appendChild(heart);
  }
  
  // Chame a função createHeart() para criar os corações
  setInterval(createHeart, 100); // cria um coração a cada 100ms
