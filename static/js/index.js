// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Asegúrate de que el contenedor para el sistema solar exista
const solarSystemContainer = document.getElementById('solar-system-container');
if (solarSystemContainer) {
  solarSystemContainer.appendChild(renderer.domElement);
} else {
  console.error('No se encontró el contenedor para el sistema solar');
}

// Crear geometría de esfera (planeta) con más segmentos para mayor detalle
const geometry = new THREE.SphereGeometry(1, 64, 64); // Aumentamos la resolución de la esfera

// Cargar textura del planeta desde un enlace
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://www.solarsystemscope.com/textures/download/2k_neptune.jpg');

// Material con textura
const material = new THREE.MeshStandardMaterial({
  map: texture,
  roughness: 1,  // Menos brillo
  metalness: 0.3 // Un toque metálico para darle realismo
});

// Malla (esfera) con geometría y material
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Añadir luz a la escena
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz ambiental suave
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.5); // Luz más fuerte para iluminar el planeta
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Función de animación
function animate() {
  requestAnimationFrame(animate);

  // Rotar la esfera lentamente
  sphere.rotation.y += 0.01;

  renderer.render(scene, camera);
}

// Responsividad: Ajustar tamaño de la pantalla
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Iniciar la animación
animate();
