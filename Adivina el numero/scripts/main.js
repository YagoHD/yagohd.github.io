//Codigo programa
//Generar numer aleatorio 
let numeroAleatorio = Math.floor(Math.random()* 100)+1;

//Obtener elementos del DOM
const numeroInput = document.getElementById('numero');
const btnVerificar = document.getElementById('btnEnviar');
const btnReiniciar = document.getElementById('btnReiniciar');
const mensaje = document.getElementById('mensaje');

//Agregar evento de click en el boton
btnVerificar.addEventListener('click', function(){
  const intentoUsuario = parseInt(numeroInput.value);
  
  //Agregar el numero ingresadoa la lista de numeros
  numerosIngresados.push(intentoUsuario);
  //LLamar a la funcion para actualizar el rectangulo
  actualizarRectangulo();

  if (intentoUsuario ===numeroAleatorio){
    mensaje.textContent = '¡Felicidades! Has adivinado el número';
    numeroObjetivo = intentoUsuario;
    actualizarRectangulo();
  }else if(intentoUsuario<numeroAleatorio){
    mensaje.textContent = `El número es mayor a ${intentoUsuario}`

  }else if(intentoUsuario>numeroAleatorio){
    mensaje.textContent = `El número es menor a ${intentoUsuario}`

  }
});

//Agregar la funcionalidad del reinicio del juego
btnReiniciar.addEventListener('click', () =>{
  numeroAleatorio = Math.floor(Math.random()* 100)+1;
  mensaje.textContent="¿Tendras suerte?";
  numeroInput.textContent="";
  numerosIngresados = [];
  numeroObjetivo = null;
  actualizarRectangulo();
});

//Funcionalidad rectangulo
let numerosIngresados = [];
let numeroObjetivo = null;
const rectangulo = document.getElementById('rectangulo');
const simbolo = document.getElementById('simbolo');

function actualizarRectangulo() {
  // Actualizar el texto del símbolo "?"
  simbolo.textContent = numeroObjetivo;

  // Ordenar la lista de números ingresados en orden ascendente
  numerosIngresados.sort((a, b) => a - b);

  // Actualizar los números ingresados a la izquierda o derecha del símbolo
  rectangulo.textContent = numerosIngresados.join("-");
  
}


//Menu desplegable
document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdownToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
});
