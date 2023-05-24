// Obtener elementos del HTML
const longitud_contraseña = document.querySelector('#numeroCaracteres');
const boton_generar = document.querySelector('#boton');
const facil = document.querySelector('#facil');
const medio = document.querySelector('#medio');
const dificil = document.querySelector('#dificil');
const contraseñaOutput = document.querySelector('#contra');
const fieldsetProteccion = document.querySelector('#colorDificultad');
const btnCopiar = document.querySelector('#botonCopiar');



btnCopiar.addEventListener('click', copiarAlPortapapeles);
function copiarAlPortapapeles() {
    const contraseña = document.querySelector('#contra').textContent;
  
    // Crear un elemento de texto temporal
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = contraseña;
  
    // Agregar el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);
  
    // Seleccionar el texto del elemento temporal
    elementoTemporal.select();
  
    try {
      // Copiar el texto al portapapeles
      document.execCommand('copy');
      alert('Contraseña copiada al portapapeles');
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  
    // Remover el elemento temporal del DOM
    document.body.removeChild(elementoTemporal);
  }
  

facil.addEventListener('change', function() {
    fieldsetProteccion.className = 'facil';
});
  
medio.addEventListener('change', function() {
    fieldsetProteccion.className = 'medio';
});

dificil.addEventListener('change', function() {
    fieldsetProteccion.className = 'dificil';
});


// Función para generar la contraseña
function generar_contraseña() {
    let longitud = parseInt(longitud_contraseña.value);

    // Verificar el rango de longitud
    if (longitud < 6) {
        longitud = 6;
    } else if (longitud > 25) {
        longitud = 25;
    }

    let caracteresPermitidos = '';

    // Verificar el nivel de complejidad seleccionado
    if (facil.checked) {
        caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (medio.checked) {
        caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    } else if (dificil.checked) {
        caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*-+.,-_?¿!¡';
    }

    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        contraseña += caracteresPermitidos.charAt(indiceAleatorio);
    }

    // Mostrar contraseña generada
    contraseñaOutput.textContent = contraseña;
}

// Agregar evento de clic al botón
boton_generar.addEventListener('click', generar_contraseña);

document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdownToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
});
