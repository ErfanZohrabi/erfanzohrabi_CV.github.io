// Particles.js Configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#64ffda' },
    shape: { type: 'circle' },
    opacity: {
      value: 0.5,
      random: false,
      animation: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      animation: { enable: true, speed: 2, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#64ffda',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Typed.js
  const typed = new Typed('#typed-text', {
    strings: [
      'Bioinformatics Enthusiast',
      'AI Researcher',
      'Deep Learning Specialist',
      'Computational Biology Expert'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 1000,
    loop: true
  });

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Initialize Tooltips
  tippy('[data-tippy-content]', {
    placement: 'top',
    animation: 'fade',
    theme: 'custom'
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scroll to Top Button
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isDark = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections on scroll
  gsap.utils.toArray('.fade-in').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Skills Progress Animation
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach(skill => {
    const progress = skill.getAttribute('data-progress');
    gsap.to(skill, {
      width: `${progress}%`,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: skill,
        start: 'top 90%'
      }
    });
  });

  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.23,
      ease: 'power2.out'
    });
    gsap.to(cursorDot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
  });

  // Lazy Loading Images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('loader-hidden');
  loader.addEventListener('transitionend', () => {
    document.body.removeChild(loader);
  });
}); 