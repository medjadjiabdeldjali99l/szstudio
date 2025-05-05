// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Navbar scroll behavior
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Portfolio filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 200);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // Services navigation smooth scroll
  const servicesNav = document.querySelectorAll('.services-nav .nav-link');
  
  if (servicesNav.length > 0) {
    servicesNav.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        servicesNav.forEach(navLink => navLink.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Adjust video background size
  const videoBackground = document.querySelector('.video-background video');
  
  if (videoBackground) {
    function adjustVideoSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const videoRatio = 16 / 9;
      const windowRatio = width / height;
      
      if (windowRatio < videoRatio) {
        videoBackground.style.width = 'auto';
        videoBackground.style.height = '100%';
      } else {
        videoBackground.style.width = '100%';
        videoBackground.style.height = 'auto';
      }
    }
    
    adjustVideoSize();
    window.addEventListener('resize', adjustVideoSize);
  }

  // Add animation to hero images
  const heroImages = document.querySelectorAll('.hero-image');
  
  if (heroImages.length > 0) {
    let currentIndex = 0;
    
    function animateHeroImages() {
      heroImages.forEach((image, index) => {
        if (index === currentIndex) {
          image.style.opacity = '1';
          image.style.transform = 'scale(1)';
        } else {
          image.style.opacity = '0.5';
          image.style.transform = 'scale(0.95)';
        }
      });
      
      currentIndex = (currentIndex + 1) % heroImages.length;
    }
    
    setInterval(animateHeroImages, 5000);
  }

});



  const container = document.getElementById("compare");
  const slider = document.getElementById("slider");
  const topImage = document.getElementById("topImage");
  
  let isDragging = false;
  
  // Fonction pour mettre à jour la position du slider et le changement d'image
  const updateSlider = (x) => {
    const rect = container.getBoundingClientRect();
    let offset = x - rect.left;
  
    // ici on limite pour que la barre ne sorte pas à gauche ou à droite
    const halfSliderWidth = 15; // moitié de 20px (largeur de la barre)
    offset = Math.max(halfSliderWidth, Math.min(offset, rect.width - halfSliderWidth));
  
    const percent = (offset / rect.width) * 100;
    slider.style.left = `${percent}%`;
    topImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  };
  
  // Fonction pour démarrer le glissement
  const startDrag = (e) => {
    isDragging = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX; // Obtenir la position de la souris ou du toucher
    updateSlider(x);
  };
  
  // Fonction pour arrêter le glissement
  const stopDrag = () => {
    isDragging = false;
  };
  
  // Fonction pour déplacer le slider
  const duringDrag = (e) => {
    if (!isDragging) return; // Si on n'est pas en train de glisser, on ne fait rien
    const x = e.touches ? e.touches[0].clientX : e.clientX; // Obtenir la position de la souris ou du toucher
    updateSlider(x);
  };
  
  // Ajouter les événements de démarrage et de mouvement de glissement
  slider.addEventListener("mousedown", startDrag);
  slider.addEventListener("touchstart", startDrag);
  
  window.addEventListener("mousemove", duringDrag);
  window.addEventListener("touchmove", duringDrag);
  
  // Ajouter les événements de fin de glissement
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchend", stopDrag);
  
