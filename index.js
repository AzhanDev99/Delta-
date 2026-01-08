// ==========================================
// GSAP ANIMATION CONFIGURATION
// Construction & Renovation Website
// ==========================================

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// UTILITY: Smooth Scroll Setup
// ==========================================
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// ==========================================
// MENU ANIMATIONS
// ==========================================
const menuBtn = document.getElementById('menuBtn');
const menuBtnClose = document.getElementById('menuBtnClose');
const menu = document.getElementById('menu');

const openMenu = () => {
  gsap.to(menu, {
    x: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'bounce.out'
  });
};

const closeMenu = () => {
  gsap.to(menu, {
    x: '100%',
    opacity: 0,
    duration: 0.6,
    ease: 'power2.inOut'
  });
};

if (menuBtn) menuBtn.addEventListener('click', openMenu);
if (menuBtnClose) menuBtnClose.addEventListener('click', closeMenu);

// ==========================================
// ANIMATION CLASS: animate-header
// Header slides from top
// ==========================================
gsap.utils.toArray('.animate-header').forEach(element => {
  gsap.from(element, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element.closest('.page-1, .page-2, .page-3'),
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-hero-title
// Main title slides from left
// ==========================================
gsap.utils.toArray('.animate-hero-title').forEach(element => {
  gsap.from(element, {
    x: -200,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: element.closest('.part-1'),
      start: 'top 70%',
      end: 'top 10%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-hero-subtitle
// Subtitle slides from bottom
// ==========================================
gsap.utils.toArray('.animate-hero-subtitle').forEach(element => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element.closest('.part-1'),
      start: 'top 70%',
      end: 'top 10%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-hero-buttons
// Buttons slide from bottom
// ==========================================
gsap.utils.toArray('.animate-hero-buttons').forEach(element => {
  gsap.from(element, {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: element.closest('.part-1'),
      start: 'top 70%',
      end: 'top 10%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-hero-image
// Right side image - Door opening effect (3D rotation)
// ==========================================
gsap.utils.toArray('.animate-hero-image').forEach(element => {
  gsap.from(element, {
    rotateY: 90,
    transformOrigin: 'top right',
    transformStyle: 'preserve-3d',
    opacity: 0,
    duration: 1.5,
    delay: 0.6,
    ease: 'bounce.out',
    scrollTrigger: {
      trigger: element.closest('.part-1'),
      start: 'top 70%',
      end: 'top 10%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-left-images
// Left bottom images - Door opening from bottom
// ==========================================
gsap.utils.toArray('.animate-left-images').forEach(element => {
  gsap.from(element.children, {
    scaleY: 0,
    transformOrigin: 'bottom',
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-about-image
// About section large image - Shutter opening
// ==========================================
gsap.utils.toArray('.animate-about-image').forEach(element => {
  gsap.from(element, {
    scaleY: 0,
    transformOrigin: 'bottom',
    opacity: 0,
    duration: 1.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: element.closest('.part-2, .section2'),
      start: 'top 60%',
      end: 'top 10%',
      scrub: 1
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-about-title
// About section title from left
// ==========================================
gsap.utils.toArray('.animate-about-title').forEach(element => {
  gsap.from(element, {
    x: -150,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element.closest('.part-2, .section2'),
      start: 'top 60%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-about-content
// About section content from right
// ==========================================
gsap.utils.toArray('.animate-about-content').forEach(element => {
  gsap.from(element, {
    x: 150,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element.closest('.part-2, .section2'),
      start: 'top 60%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-service-card
// Service cards stagger animation
// ==========================================
gsap.utils.toArray('.animate-service-card').forEach((element, index) => {
  gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element.closest('.part-1'),
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-service-image
// Service images fade and scale
// ==========================================
gsap.utils.toArray('.animate-service-image').forEach(element => {
  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: element.closest('.part-1'),
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-form-container
// Form container from right
// ==========================================
gsap.utils.toArray('.animate-form-container').forEach(element => {
  gsap.from(element, {
    x: 200,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element.closest('.part-2'),
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-form-image
// Left form image slides from left
// ==========================================
gsap.utils.toArray('.animate-form-image').forEach(element => {
  gsap.from(element, {
    x: -200,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element.closest('.part-2'),
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-chair-image
// Chair image grows from bottom
// ==========================================
gsap.utils.toArray('.animate-chair-image').forEach(element => {
  gsap.from(element, {
    scaleY: 0,
    transformOrigin: 'bottom',
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: 'elastic.out(1, 0.5)',
    scrollTrigger: {
      trigger: element.closest('.part-2'),
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-form-input
// Form inputs stagger from bottom
// ==========================================
gsap.utils.toArray('.animate-form-input').forEach((element, index) => {
  gsap.from(element, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.8 + (index * 0.1),
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element.closest('form'),
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-carousel
// Carousel horizontal scroll reveal
// ==========================================
gsap.utils.toArray('.animate-carousel').forEach(element => {
  gsap.from(element, {
    x: -300,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 30%',
      scrub: 1
    }
  });
});

// ==========================================
// ANIMATION: Carousel Cards Individual
// ==========================================
gsap.utils.toArray('.carousel-card').forEach((card, index) => {
  gsap.from(card, {
    y: 100,
    opacity: 0,
    rotation: 5,
    duration: 0.8,
    delay: index * 0.15,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: card.closest('.carousel-wrapper'),
      start: 'top 70%',
      end: 'top 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION: Reviews Marquee
// ==========================================
gsap.utils.toArray('.animate-marquee, .animate-marqueetwo').forEach(element => {
  gsap.from(element, {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element.closest('.section6'),
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-footer
// Footer fade in from bottom
// ==========================================
gsap.utils.toArray('.animate-footer').forEach(element => {
  gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      end: 'top 40%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-process-step
// Process steps sequential reveal
// ==========================================
gsap.utils.toArray('.animate-process-step').forEach((element, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });

  tl.from(element, {
    scale: 0.5,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(2)'
  })
  .from(element.querySelector('p'), {
    y: 30,
    opacity: 0,
    duration: 0.4
  }, '-=0.2');
});

// ==========================================
// ANIMATION CLASS: animate-gallery-card
// Gallery cards masonry reveal
// ==========================================
gsap.utils.toArray('.animate-gallery-card').forEach((card, index) => {
  gsap.from(card, {
    scale: 0.7,
    opacity: 0,
    rotation: -5,
    duration: 0.8,
    delay: index * 0.05,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: card.closest('.grid'),
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-map
// Map container zoom in
// ==========================================
gsap.utils.toArray('.animate-map').forEach(element => {
  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-left
// Generic left slide animation
// ==========================================
gsap.utils.toArray('.animate-left').forEach(element => {
  gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-right
// Generic right slide animation
// ==========================================
gsap.utils.toArray('.animate-right').forEach(element => {
  gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-up
// Generic bottom to top animation
// ==========================================
gsap.utils.toArray('.animate-up').forEach(element => {
  gsap.from(element, {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 35%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-down
// Generic top to bottom animation
// ==========================================
gsap.utils.toArray('.animate-down').forEach(element => {
  gsap.from(element, {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 35%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-fade
// Simple fade in animation
// ==========================================
gsap.utils.toArray('.animate-fade').forEach(element => {
  gsap.from(element, {
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 35%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-scale
// Scale up animation
// ==========================================
gsap.utils.toArray('.animate-scale').forEach(element => {
  gsap.from(element, {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-rotate-door-left
// Door opening from left (Y-axis rotation)
// ==========================================
gsap.utils.toArray('.animate-rotate-door-left').forEach(element => {
  gsap.from(element, {
    rotateY: -90,
    transformOrigin: 'left center',
    transformStyle: 'preserve-3d',
    opacity: 0,
    duration: 1.5,
    ease: 'bounce.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
      end: 'top 25%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-rotate-door-right
// Door opening from right (Y-axis rotation)
// ==========================================
gsap.utils.toArray('.animate-rotate-door-right').forEach(element => {
  gsap.from(element, {
    rotateY: 90,
    transformOrigin: 'right center',
    transformStyle: 'preserve-3d',
    opacity: 0,
    duration: 1.5,
    ease: 'bounce.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
      end: 'top 25%',
      toggleActions: 'play none none reverse'
    }
  });
});



// ==========================================
// ANIMATION CLASS: animate-rotate-door-top
// Door opening from top (X-axis rotation)
// ==========================================
gsap.utils.toArray('.animate-rotate-door-top').forEach(element => {
  gsap.from(element, {
    rotateX: -90,
    transformOrigin: 'top center',
    transformStyle: 'preserve-3d',
    opacity: 0,
    duration: 1.5,
    ease: 'bounce.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
      end: 'top 25%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// ANIMATION CLASS: animate-shutter-vertical
// Vertical shutter opening from bottom
// ==========================================
gsap.utils.toArray('.animate-shutter-vertical').forEach(element => {
  gsap.from(element, {
    scaleY: 0,
    transformOrigin: 'bottom',
    opacity: 0,
    duration: 1.5,
    ease: 'power3.inOut',
    scrollTrigger: {
      trigger: element,
      start: 'top 70%',
      end: 'top 20%',
      scrub: 1
    }
  });
});


// gsap.utils.toArray('.animate-shutter-vertical_2').forEach(element => {
//   gsap.from(element, {
//     scaleY: 0,
//     transformOrigin: 'bottom',
//     opacity: 0,
//     duration: 1.5,
//     ease: 'power3.inOut',
//     scrollTrigger: {
//       trigger: '.section2 ',
//       start: 'top 30%',
//       end: 'top 5%',
//       scrub: 1
//     }
//   });
// });


// ==========================================
// ANIMATION CLASS: animate-stagger
// Stagger children elements
// ==========================================
gsap.utils.toArray('.animate-stagger').forEach(parent => {
  gsap.from(parent.children, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: parent,
      start: 'top 75%',
      end: 'top 25%',
      toggleActions: 'play none none reverse'
    }
  });
});

// ==========================================
// Initialize smooth scroll
// ==========================================
setupSmoothScroll();

// ==========================================
// Page Load Animation
// ==========================================
window.addEventListener('load', () => {
  gsap.from('body', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.out'
  });
});

console.log('🎨 GSAP Animations Loaded Successfully!');