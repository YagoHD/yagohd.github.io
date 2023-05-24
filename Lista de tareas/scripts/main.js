
//Obtener elementos del HTML
const inputTarea = document.querySelector("#nuevaTarea");
const botonAgregar = document.querySelector("#botonAgregar");
const listaTareas = document.querySelector("#listaTareas");

//Array para almacenar tareas
let tareas = [];

//Funcion para agreagar una nueva tarea
function agregarTarea() {
  console.log('Agregando tarea...');
  const tareaTexto = inputTarea.value;

  if (tareaTexto !== '') {
    // Crear un objeto de tarea
    const tarea = {
      id: Date.now(),
      texto: tareaTexto,
      completada: false
    };

    // Agregar la tarea al array
    tareas.push(tarea);

    // Limpiar el campo de texto
    inputTarea.value = '';

    // Actualizar la lista de tareas
    actualizarListaTareas();
  }
  //Las tareas se guardan en el almacenamiento del navegador
  guardarTareas();
}

//Funcion para marcar una tarea como completada
function marcarCompletada(id) {
  // Encontrar la tarea correspondiente en el array
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    // Cambiar el estado de completado de la tarea
    tarea.completada = !tarea.completada;

    // Actualizar la lista de tareas
    actualizarListaTareas();

    // Guardar las tareas en el almacenamiento del navegador
    guardarTareas();
  }
}

//Funcion para eliminar una tarea
function eliminarTarea(id) {
  //Filtrar las tareas para eliminar la tarea con la id correspondiente
  tareas = tareas.filter(t => t.id !== id);

  //Actualizar lista de tareas
  actualizarListaTareas();
  //Las tareas se guardan en el almacenamiento del navegador
  guardarTareas();
}

//Funcion para actualizar lista de tareas en el HTML
function actualizarListaTareas() {
  // Limpiar la lista de tareas
  listaTareas.innerHTML = '';

  // Recorrer las tareas y crear elementos de lista correspondientes
  tareas.forEach(tarea => {

    const elementoTarea = document.createElement('li');
    elementoTarea.textContent = tarea.texto;

    const checkboxTarea = document.createElement('input');
    checkboxTarea.style.marginLeft = '10px';
    checkboxTarea.type = 'checkbox';
    checkboxTarea.checked = tarea.completada;
    checkboxTarea.addEventListener('change', () => {
      marcarCompletada(tarea.id);
    });

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.style.marginLeft = '10px';
    botonEliminar.addEventListener('click', () => eliminarTarea(tarea.id));

    elementoTarea.appendChild(checkboxTarea);
    elementoTarea.appendChild(botonEliminar);
    listaTareas.appendChild(elementoTarea);

    if (tarea.completada) {
      elementoTarea.classList.add('completada', 'subrayado');
    } else {
      elementoTarea.classList.remove('completada', 'subrayado');
    }
  });
}

// Función para guardar las tareas en el almacenamiento del navegador
function guardarTareas() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Función para cargar las tareas del almacenamiento del navegador
function cargarTareas() {
  const tareasGuardadas = localStorage.getItem('tareas');
  if (tareasGuardadas) {
    tareas = JSON.parse(tareasGuardadas);
    actualizarListaTareas();
  }
}

// Función para manejar el evento de presionar tecla en el campo de entrada
function handleKeyPress(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
}



// Agregar evento de presionar tecla al campo de entrada
inputTarea.addEventListener("keypress", handleKeyPress);
//Agregar un enevento al iniciar la pagina
window.addEventListener('load', cargarTareas);
//Aagregar un evento al boton Agregar
botonAgregar.addEventListener('click', agregarTarea)

document.addEventListener('DOMContentLoaded', function () {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
});
