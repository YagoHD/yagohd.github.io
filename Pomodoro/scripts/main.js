document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdownToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
});
//Pomodoro
window.addEventListener('DOMContentLoaded', function () {
  var minutesLabel1 = document.getElementById('minutes');
  var secondsLabel1 = document.getElementById('seconds');
  var progressRing1 = document.getElementById('progress-ring');
  var progressBar1 = document.getElementById('progress');
  var startButton1 = document.getElementById('start');
  var resetButton1 = document.getElementById('reset');
  var pomodoroContainer1 = document.querySelector('.pomodoro');

  var minutesLabel2 = document.getElementById('minutes2');
  var secondsLabel2 = document.getElementById('seconds2');
  var progressRing2 = document.getElementById('progress-ring2');
  var progressBar2 = document.getElementById('progress2');
  var pomodoroContainer2 = document.querySelector('.pomodoro2');

  var totalSeconds1 = 25 * 60; // 25 minutes
  var totalSeconds2 = 5 * 60; // 5 minutes

  function pad(number) {
    return (number < 10) ? '0' + number : number;
  }

  function updateTimer1() {
    var minutes1 = Math.floor(totalSeconds1 / 60);
    var seconds1 = totalSeconds1 % 60;

    minutesLabel1.textContent = pad(minutes1);
    secondsLabel1.textContent = pad(seconds1);

    var progress1 = (totalSeconds1 / (25 * 60)) * 100;
    progressBar1.style.transform = `scaleY(${progress1 / 100})`;

    if (totalSeconds1 > 0) {
      totalSeconds1--;
    } else {
      clearInterval(timerInterval1);
      alert('¡Tiempo terminado!');
      pomodoroContainer1.classList.remove('active');
      startPomodoro2();
    }
  }

  function updateTimer2() {
    var minutes2 = Math.floor(totalSeconds2 / 60);
    var seconds2 = totalSeconds2 % 60;

    minutesLabel2.textContent = pad(minutes2);
    secondsLabel2.textContent = pad(seconds2);

    var progress2 = (totalSeconds2 / (5 * 60)) * 100;
    progressBar2.style.transform = `scaleY(${progress2 / 100})`;

    if (totalSeconds2 > 0) {
      totalSeconds2--;
    } else {
      clearInterval(timerInterval2);
      alert('¡Tiempo de descanso terminado!');
      pomodoroContainer2.classList.remove('active');
    }
  }

  var timerInterval1;
  var timerInterval2;

  function startPomodoro1() {
    timerInterval1 = setInterval(updateTimer1, 1000);
    startButton1.disabled = true;
    pomodoroContainer1.classList.add('active');
  }

  function startPomodoro2() {
    timerInterval2 = setInterval(updateTimer2, 1000);
    pomodoroContainer2.classList.add('active');
  }

  startButton1.addEventListener('click', startPomodoro1);

  resetButton1.addEventListener('click', function () {
    clearInterval(timerInterval1);
    clearInterval(timerInterval2);
    totalSeconds1 = 25 * 60;
    totalSeconds2 = 5 * 60;
    minutesLabel1.textContent = '25';
    secondsLabel1.textContent = '00';
    progressBar1.style.transform = 'scaleY(1)';
    minutesLabel2.textContent = '5';
    secondsLabel2.textContent = '00';
    progressBar2.style.transform = 'scaleY(1)';
    startButton1.disabled = false;
    pomodoroContainer1.classList.remove('active');
    pomodoroContainer2.classList.remove('active');
  });
});
