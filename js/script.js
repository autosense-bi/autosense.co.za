document.addEventListener("DOMContentLoaded", function () {
    var logo = document.getElementById('logo');
    var section = document.getElementById('testhere'); // Change this to your target section
  
    window.addEventListener('scroll', function () {
      var sectionTop = section.getBoundingClientRect().top;
  
      if (sectionTop <= 0) {
        logo.classList.add('show-logo');
        logo.classList.remove('hidden-logo');

      } else {
        logo.classList.add('hidden-logo');
        logo.classList.remove('show-logo');

      }
    });
});
