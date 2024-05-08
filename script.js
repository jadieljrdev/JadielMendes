document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav_link');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
  
        if (targetSection) {
          const headerHeight = document.querySelector('.container').offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;
  
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });