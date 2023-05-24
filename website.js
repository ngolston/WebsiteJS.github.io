document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var sections = document.querySelectorAll('.shade-section');
      
      sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        var sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
          var sectionHeight = section.offsetHeight;
          var sectionOffset = sectionTop - window.innerHeight;
          var percentScrolled = Math.abs(sectionOffset) / sectionHeight;
          
          if (percentScrolled <= 0.2) {
            section.classList.remove('light', 'lighter', 'lightest');
          } else if (percentScrolled <= 0.4) {
            section.classList.add('light');
            section.classList.remove('lighter', 'lightest');
          } else if (percentScrolled <= 0.6) {
            section.classList.add('lighter');
            section.classList.remove('light', 'lightest');
          } else {
            section.classList.add('lightest');
            section.classList.remove('light', 'lighter');
          }
        }
      });
    });
  });
  