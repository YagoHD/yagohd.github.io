document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdownToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
  });
});
