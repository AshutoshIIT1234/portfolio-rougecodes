// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Loading screen
const loadingScreen = document.querySelector('.loading-screen');
const loadingVideo = loadingScreen.querySelector('video');

// Hide loading screen after video plays or after 3 seconds
const hideLoading = () => {
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
            loadingScreen.classList.add('hidden');
        }
    });
};

// Wait for video to end or timeout
loadingVideo.addEventListener('ended', hideLoading);
setTimeout(hideLoading, 3000);

// Smooth scroll setup
const lenis = {
    scrollTo: (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// Navbar scroll effect - add background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero animations - Split text effect
const heroLines = document.querySelectorAll('.hero-title .line');

if (heroLines.length > 0) {
    heroLines.forEach((line, index) => {
        const text = line.textContent;
        line.innerHTML = '';
        
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            line.appendChild(span);
            
            gsap.from(span, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.3 + i * 0.03,
                ease: 'power4.out'
            });
        });
    });
}

// Hero subtitle and description
gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1.2,
    ease: 'power3.out'
});

gsap.from('.hero-description', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1.4,
    ease: 'power3.out'
});

// Hero tags stagger
gsap.from('.hero-tags span', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    delay: 1.6,
    ease: 'back.out(2)'
});

// CTA buttons
gsap.from('.cta-buttons .btn', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 1.9,
    ease: 'power3.out'
});

// Scroll indicator
gsap.from('.scroll-indicator', {
    opacity: 0,
    duration: 1,
    delay: 2.2,
    ease: 'power3.out'
});

// Parallax effect for hero
gsap.to('.hero-content', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
    },
    y: 300,
    opacity: 0.3,
    ease: 'none'
});

// Section titles animation - simplified
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Mission text reveal
gsap.from('.mission-text', {
    scrollTrigger: {
        trigger: '.mission-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

// Projects section
gsap.from('.projects-subtitle', {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

// Feature cards with stagger
gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

// Service items grid animation
gsap.utils.toArray('.service-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.05,
        ease: 'back.out(1.5)'
    });
});

// Industry tags wave animation
gsap.utils.toArray('.industry-tag').forEach((tag, i) => {
    gsap.from(tag, {
        scrollTrigger: {
            trigger: '.industries-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.04,
        ease: 'power3.out'
    });
});

// Testimonial cards
gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// About section animations
gsap.from('.about-intro', {
    scrollTrigger: {
        trigger: '.about-intro',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
});

// Story section
gsap.from('.story-content', {
    scrollTrigger: {
        trigger: '.story',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

gsap.from('.story-video', {
    scrollTrigger: {
        trigger: '.story',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

// Vision section
gsap.from('.vision-content', {
    scrollTrigger: {
        trigger: '.vision',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

gsap.from('.vision-video', {
    scrollTrigger: {
        trigger: '.vision',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

// Value cards
gsap.utils.toArray('.value-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.12,
        ease: 'power3.out'
    });
});

// Team members
gsap.utils.toArray('.team-member').forEach((member, i) => {
    gsap.from(member, {
        scrollTrigger: {
            trigger: member,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.15,
        ease: 'back.out(1.5)'
    });
});

// Differentiators list
gsap.utils.toArray('.differentiators li').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        x: -80,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.08,
        ease: 'power3.out'
    });
});

// Service detail cards alternating
gsap.utils.toArray('.service-detail').forEach((service, i) => {
    gsap.from(service, {
        scrollTrigger: {
            trigger: service,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
});

// Contact section
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-content',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
});

// Why Work section
gsap.from('.why-work-content', {
    scrollTrigger: {
        trigger: '.why-work',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

gsap.from('.why-work-video', {
    scrollTrigger: {
        trigger: '.why-work',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

// Position cards
gsap.utils.toArray('.position-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

// Final CTA
gsap.from('.final-cta h2', {
    scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: 'back.out(1.5)'
});

gsap.from('.final-cta .btn', {
    scrollTrigger: {
        trigger: '.final-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: 'power3.out'
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                button.textContent = 'Sending...';
                
                setTimeout(() => {
                    button.textContent = 'Sent! ✓';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 2000);
                }, 1000);
            }
        });
    });
}

// Button hover effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            scale: 1.05,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
});

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const speed = 0.15;
    
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor interactions
document.querySelectorAll('a, button, .feature-card, .service-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 1.5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Magnetic effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add parallax effect to sections
gsap.utils.toArray('section').forEach(section => {
    const video = section.querySelector('.section-video');
    if (video) {
        gsap.to(video, {
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -100,
            ease: 'none'
        });
    }
});

// Smooth reveal for images and videos
gsap.utils.toArray('video, img').forEach(media => {
    gsap.from(media, {
        scrollTrigger: {
            trigger: media,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

console.log('🚀 RougeCodes - Animations loaded successfully!');
