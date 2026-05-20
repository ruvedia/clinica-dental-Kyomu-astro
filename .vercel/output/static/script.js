// GSAP Initialization
gsap.registerPlugin(ScrollTrigger);

// Reading Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) progressBar.style.width = scrolled + '%';
});

// Magnetic Buttons Logic
const magneticBtns = document.querySelectorAll('.btn-primary, .btn-outline');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// Page entrance animation
window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    tl.from('.nav-link', {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
    })
    .from('.hero-content .reveal-wrapper > *', {
        y: 80,
        opacity: 0,
        stagger: 0.15,
    }, '-=0.6')
    .from('.hero-image-wrapper', {
        x: 100,
        opacity: 0,
        scale: 0.9,
    }, '-=1');
});

// Scroll Reveals for sections
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
});

// Parallax effect on images
gsap.utils.toArray('.parallax-img').forEach(img => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: 50,
        ease: 'none'
    });
});

// Service Cards Stagger
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
    },
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: 'power2.out'
});

// Tilt effect for cards (Subtle)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        gsap.to(card, {
            rotateY: x * 10,
            rotateX: -y * 10,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// Initialize Swiper (Testimonials Slider)
if (document.querySelector('.mySwiper')) {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}

// Smooth scroll for nav links (Only internal)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: {
                        y: target,
                        offsetY: 90
                    },
                    ease: 'power4.inOut'
                });
            }
        }
    });
});
// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'initial';
        }
    });

    // Close menu when clicking a link
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'initial';
        });
    });
}
