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

  const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-section')
  
    const windowHalfSize = window.innerHeight * 0.6
  
    const animateScroll = () => {
      sections.forEach(item => {
        const sectionTop = item.getBoundingClientRect().top
  
        const isSectionVisible = (sectionTop - windowHalfSize) < 0
  
        if (isSectionVisible) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
  
      })
  
    }
  
    animateScroll()
    window.addEventListener('scroll', animateScroll)
  
}

initAnimationScroll();