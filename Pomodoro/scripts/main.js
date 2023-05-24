document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdownToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
});

//Pomodoro
window.addEventListener('DOMContentLoaded', function() {
  var minutesLabel = document.getElementById('minutes');
  var secondsLabel = document.getElementById('seconds');
  var progressRing = document.getElementById('progress-ring');
  var progressBar = document.getElementById('progress');
  var startButton = document.getElementById('start');
  var resetButton = document.getElementById('reset');
  var pomodoroContainer = document.querySelector('.pomodoro');

  var totalSeconds = 25 * 60; // 25 minutes

  function pad(number) {
    return (number < 10) ? '0' + number : number;
  }

  function updateTimer() {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    minutesLabel.textContent = pad(minutes);
    secondsLabel.textContent = pad(seconds);

    var progress = (totalSeconds / (25 * 60)) * 100;
    progressBar.style.transform = `scaleY(${progress / 100})`;

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      clearInterval(timerInterval);
      alert('¡Tiempo terminado!');
      pomodoroContainer.classList.remove('active');
    }
  }

  var timerInterval;

  startButton.addEventListener('click', function() {
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    pomodoroContainer.classList.add('active');
  });

  resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    totalSeconds = 25 * 60;
    minutesLabel.textContent = '25';
    secondsLabel.textContent = '00';
    progressBar.style.transform = 'scaleY(1)';
    startButton.disabled = false;
    pomodoroContainer.classList.remove('active');
  });
});
