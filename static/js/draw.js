const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');

// Definir los puntos en coordenadas (x, y)
const points = [
  { x: 100, y: 100 },
  { x: 300, y: 100 },
  { x: 500, y: 100 },
  { x: 100, y: 300 },
  { x: 300, y: 300 },
  { x: 500, y: 300 },
];

// Almacenar las líneas permanentes
let lines = [];
let lastTouchedPoint = null; // Almacena el último punto tocado

// Variables para controlar el estado del dibujo
let currentPoint = null;
let drawing = false;

// Dibujar los puntos en el canvas
function drawPoints() {
  points.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2); 
    
    // Si es el último punto tocado, cambiar el color a rojo
    if (lastTouchedPoint && point === lastTouchedPoint) {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'black'; // Color por defecto
    }
    
    ctx.fill();
    ctx.closePath();
  });
}

// Dibujar las líneas permanentes almacenadas
function drawLines() {
  lines.forEach(line => {
    ctx.beginPath();
    ctx.moveTo(line.start.x, line.start.y);
    ctx.lineTo(line.end.x, line.end.y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  });
}

// Función para detectar si el clic fue en un punto
function getClickedPoint(x, y) {
  return points.find(point => {
    const distance = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
    return distance < 10; // Verifica si el clic está cerca del punto
  });
}

// Función para limpiar y redibujar el canvas (puntos y líneas permanentes)
function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPoints();  // Redibuja los puntos
  drawLines();   // Redibuja las líneas permanentes
}

// Manejar clics en el canvas
canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const clickedPoint = getClickedPoint(x, y);
  if (clickedPoint) {
    if (currentPoint) {
      // Almacenar la línea permanente entre los dos puntos
      lines.push({ start: currentPoint, end: clickedPoint });

      // Dibuja la línea permanente entre los dos puntos
      redrawCanvas();
    }
    // Actualiza el punto actual y habilita el dibujo dinámico
    currentPoint = clickedPoint;
    lastTouchedPoint = clickedPoint; // Actualiza el último punto tocado
    drawing = true;
    redrawCanvas(); // Redibujar el canvas para reflejar el cambio de color
  }
});

// Manejar el movimiento del mouse para dibujar la línea de seguimiento
canvas.addEventListener('mousemove', (e) => {
  if (drawing && currentPoint) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Limpia el canvas y redibuja los puntos y líneas permanentes
    redrawCanvas();

    // Dibuja la línea temporal entre el punto actual y la posición del mouse
    ctx.beginPath();
    ctx.moveTo(currentPoint.x, currentPoint.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
  }
});

// Manejar cuando el mouse sale del canvas (detener el seguimiento)
canvas.addEventListener('mouseup', () => {
  drawing = false; // Desactivar el seguimiento después de hacer clic en otro punto
});

canvas.addEventListener('mouseout', () => {
  if (drawing) {
    redrawCanvas(); // Redibuja el canvas y detiene la línea al salir del canvas
    drawing = false;
  }
});

// Función para deshacer la última línea dibujada
document.getElementById('undoButton').addEventListener('click', () => {
  if (lines.length > 0) {
    lines.pop(); // Eliminar la última línea del array
    redrawCanvas(); // Redibujar el canvas sin la última línea
  }
});

// Función para borrar todas las líneas
document.getElementById('clearButton').addEventListener('click', () => {
  lines = []; // Vaciar el array de líneas
  redrawCanvas(); // Redibujar el canvas sin líneas
});

// Inicializar el canvas dibujando los puntos
redrawCanvas();
