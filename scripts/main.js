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

window.addEventListener('load', function() {
  var opcion1 = document.getElementById('opcion1');
  var opcion2 = document.getElementById('opcion2');
  var formulario1 = document.getElementById('formulario1');
  var formulario2 = document.getElementById('formulario2');

  opcion1.addEventListener('change', function() {
    formulario1.style.display = 'block';
    formulario2.style.display = 'none';
  });

  opcion2.addEventListener('change', function() {
    formulario1.style.display = 'none';
    formulario2.style.display = 'block';
  });
});

//Mensaje boton enviar formulario
function mostrarMensaje() {
  var botonEnviar = document.querySelector('.BotonEnviar');
  botonEnviar.disabled = true; // Deshabilitar el botón de enviar
  botonEnviar.value = 'Desabilitado temporalmente'; // Cambiar el texto del botón

  setTimeout(function() {
    botonEnviar.disabled = false; // Habilitar el botón de enviar nuevamente
    botonEnviar.value = 'Enviar'; // Restaurar el texto del botón
  }, 4000); // 3000 ms (3 segundos) - Puedes ajustar este valor según tus necesidades
}