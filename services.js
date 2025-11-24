// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
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

// Section animations
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

// Services intro
gsap.from('.services-intro', {
    scrollTrigger: {
        trigger: '.services-intro',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
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

// Service numbers animation
gsap.utils.toArray('.service-number').forEach((num, i) => {
    gsap.from(num, {
        scrollTrigger: {
            trigger: num,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(2)'
    });
});

// CTA section
gsap.from('.services-cta h2', {
    scrollTrigger: {
        trigger: '.services-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    ease: 'back.out(1.5)'
});

gsap.from('.services-cta .btn', {
    scrollTrigger: {
        trigger: '.services-cta',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: 'power3.out'
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Dropdown menu toggle for mobile
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = dropdownLink.parentElement;
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown').forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
        }
    });
});

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

// Parallax effect
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

console.log('🚀 RougeCodes Services - Loaded successfully!');
