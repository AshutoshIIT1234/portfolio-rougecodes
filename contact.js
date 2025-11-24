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

// Contact cards animation
gsap.utils.toArray('.contact-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out'
    });
});

// Form animation
gsap.from('.form-wrapper', {
    scrollTrigger: {
        trigger: '.form-wrapper',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
});

// Work features animation
gsap.utils.toArray('.work-feature').forEach((feature, i) => {
    gsap.from(feature, {
        scrollTrigger: {
            trigger: feature,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        delay: i * 0.1,
        ease: 'back.out(1.5)'
    });
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
                button.disabled = true;
                
                setTimeout(() => {
                    button.textContent = 'Message Sent! ✓';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
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

console.log('🚀 RougeCodes Contact - Loaded successfully!');
