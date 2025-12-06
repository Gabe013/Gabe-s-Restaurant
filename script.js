// Initialize Bootstrap 3 collapse plugin for hamburger menu
document.addEventListener('DOMContentLoaded', function() {
  var navToggle = document.querySelector('.navbar-toggle');
  var navCollapse = document.querySelector('.collapse');
  
  if (navToggle && navCollapse) {
    navToggle.addEventListener('click', function() {
      navCollapse.classList.toggle('in');
    });
  }
  
  // Close menu when a link is clicked
  var navLinks = document.querySelectorAll('.my-nav-list a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navCollapse.classList.remove('in');
    });
  });
});
