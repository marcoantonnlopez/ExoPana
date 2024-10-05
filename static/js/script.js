const canvas = document.getElementById('skyCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let constellation = [];

// Generar estrellas aleatorias
function createStars() {
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      selected: false,
    });
  }
}

// Dibujar las estrellas en el cielo
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = star.selected ? 'yellow' : 'white';
    ctx.fill();
  });
}

// Dibujar líneas entre las estrellas seleccionadas (constelación)
function drawConstellation() {
  if (constellation.length > 1) {
    ctx.beginPath();
    ctx.moveTo(constellation[0].x, constellation[0].y);
    for (let i = 1; i < constellation.length; i++) {
      ctx.lineTo(constellation[i].x, constellation[i].y);
    }
    ctx.strokeStyle = 'yellow';
    ctx.stroke();
  }
}

// Manejar clics en las estrellas
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  stars.forEach(star => {
    const dist = Math.sqrt((mouseX - star.x) ** 2 + (mouseY - star.y) ** 2);
    if (dist < 10) {  // Si hace clic en una estrella
      star.selected = true;
      constellation.push(star);
    }
  });

  drawStars();
  drawConstellation();
});

// Inicializar la pantalla
createStars();
drawStars();

// Guardar la constelación como imagen
document.getElementById('save').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'constellation.png';
  link.href = canvas.toDataURL();
  link.click();
});
