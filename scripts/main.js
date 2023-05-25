//Funcionamiento del menu desplegable, tanto para moviles como para ordenador.
document.addEventListener('DOMContentLoaded', function () {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
});

//Funcionamiento del menu doble
// Mostrar formulario 1 al cargar la página
formulario1.style.display = 'block';
formulario2.style.display = 'none';

window.addEventListener('load', function () {
  var opcion1 = document.getElementById('opcion1');
  var opcion2 = document.getElementById('opcion2');
  var formulario1 = document.getElementById('formulario1');
  var formulario2 = document.getElementById('formulario2');

  opcion1.addEventListener('change', function () {
    formulario1.style.display = 'block';
    formulario2.style.display = 'none';
  });

  opcion2.addEventListener('change', function () {
    formulario1.style.display = 'none';
    formulario2.style.display = 'block';
  });
});

//Mensaje boton enviar formulario
function mostrarMensaje() {
  var botonEnviar = document.querySelector('.BotonEnviar');
  botonEnviar.disabled = true; // Deshabilitar el botón de enviar
  botonEnviar.value = 'Desabilitado temporalmente'; // Cambiar el texto del botón

  setTimeout(function () {
    botonEnviar.disabled = false; // Habilitar el botón de enviar nuevamente
    botonEnviar.value = 'Enviar'; // Restaurar el texto del botón
  }, 4000); // 3000 ms (3 segundos) - Puedes ajustar este valor según tus necesidades
}

//Añadir recuadro a los conocimientos seleccionados
// Obtén todos los elementos con la clase "conocimiento"
const sections = document.querySelectorAll('.conocimiento');

// Itera sobre cada sección y agrega los eventos de ratón necesarios
sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('resaltado');
  });

  section.addEventListener('mouseout', () => {
    section.classList.remove('resaltado');
  });
});

//Animacion Encabezado
const header = document.querySelector('header');
const titulo = document.querySelector('.titulo');
const originalText = titulo.childNodes[0].nodeValue;
const textos = ['0', '1']; // Textos que se animarán
const duration = 100; // Duración de la animación en milisegundos (más alto = más lento)

let animation;

titulo.addEventListener('mouseenter', () => {
  let currentIndex = 0;
  let currentChar = 0;

  function updateText() {
    if (currentChar >= originalText.length) {
      titulo.childNodes[0].nodeValue = originalText; // Restaurar el texto original al final de la animación
      return;
    }

    const currentText = textos[currentIndex];
    const newText = originalText.substring(0, currentChar) + currentText;

    titulo.childNodes[0].nodeValue = newText;

    currentChar++;
    if (currentChar % 2 === 0) {
      currentIndex = (currentIndex + 1) % textos.length;
    }

    animation = setTimeout(updateText, duration);
  }

  updateText();
});

//Limitador para que en el formulario, solo se introduzcan numeros, en el telefono
const inputNumerico = document.getElementById('numerico');

inputNumerico.addEventListener('input', function(event) {
  const valor = event.target.value;
  const numeros = /^[0-9]*$/;

  if (!valor.match(numeros)) {
    event.target.value = valor.replace(/[^0-9]/g, '');
  }
});