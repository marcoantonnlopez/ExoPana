// Función para abrir el popup con el texto del contenedor
function openPopup(content) {
  document.getElementById('popup-text').innerText = 'You clicked on ' + content;
  document.getElementById('popup').style.display = 'flex';
}

// Función para cerrar el popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

