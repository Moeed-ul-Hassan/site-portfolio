// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu?.classList.toggle('active');
});

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Hero Section Animations
const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTimeline
    .from('.hero h1', {
        y: 100,
        opacity: 0,
        duration: 1.2
    })
    .from('.hero p', {
        y: 50,
        opacity: 0,
        duration: 1
    }, "-=0.8")
    .from('.hero-buttons .cta-button', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.8")
    .from('.scroll-indicator', {
        y: -20,
        opacity: 0,
        duration: 1
    }, "-=0.5");

// Section Titles Animation
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});

// About Section Animations
gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about-image',
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1
});

gsap.from('.experience-badge', {
    scrollTrigger: {
        trigger: '.about-image',
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from('.about-text p', {
    scrollTrigger: {
        trigger: '.about-text',
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '.stats-grid',
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// Process Cards Animation
gsap.utils.toArray('.process-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.2
    });
});

// Project Cards Animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.2
    });
});

// Skills Cards Animation
gsap.utils.toArray('.skill-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: i * 0.1
    });

    // Animate skill level bars
    gsap.from(card.querySelector('.level-bar'), {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        width: 0,
        duration: 1.5,
        delay: i * 0.1 + 0.5,
        ease: "power2.out"
    });
});

// Testimonial Cards Animation
gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: i * 0.3
    });
});

// Blog Cards Animation
gsap.utils.toArray('.blog-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.3
    });
});

// Contact Section Animation
gsap.utils.toArray('.contact-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: i * 0.2
    });
});

gsap.from('.social-link', {
    scrollTrigger: {
        trigger: '.social-links',
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    hero.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--x', `${Math.random() * 100}vw`);
        particle.style.setProperty('--y', `${Math.random() * 100}vh`);
        particle.style.setProperty('--delay', `${Math.random() * 5}s`);
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Hover animations for interactive elements
const projectCards2 = document.querySelectorAll('.project-card');
projectCards2.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    gsap.to('.hero-bg', {
        x: mouseX * 50,
        y: mouseY * 50,
        duration: 1,
        ease: "power2.out"
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in-element class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(element => observer.observe(element));
});


// Skills animation on scroll
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Project cards hover effect
const projectCards3 = document.querySelectorAll('.project-card');
projectCards3.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Enhanced animations for project cards
projectCards3.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(10px)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});
