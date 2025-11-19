// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect - add background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero animations
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

gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: 'power3.out'
});

// Section titles animation
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

// Careers intro
gsap.from('.careers-intro', {
    scrollTrigger: {
        trigger: '.careers-intro',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 60,
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

// Apply section
gsap.from('.apply', {
    scrollTrigger: {
        trigger: '.apply',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
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

// Application form submission
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const button = applicationForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                button.textContent = 'Submitting...';
                
                setTimeout(() => {
                    button.textContent = 'Application Sent! ✓';
                    applicationForm.reset();
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 3000);
                }, 1500);
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

// Smooth scroll for anchor links
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
            
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Add parallax effect to sections
gsap.utils.toArray('section').forEach(section => {
    const video = section.querySelector('.section-video, .hero-video');
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

console.log('🚀 RougeCodes Careers - Loaded successfully!');
