// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Mobile dropdown functionality
document.querySelectorAll('.nav-dropdown .nav-link').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdownParent = this.parentElement;
            dropdownParent.classList.toggle('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ... (kode JavaScript lainnya tetap sama)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-item, .project-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'var(--dark-color)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'var(--dark-color)';
        navbar.style.boxShadow = 'none';
    }
});

// Header color change based on section
function updateHeaderColor() {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.getElementById('home');
    const homeRect = homeSection.getBoundingClientRect();
    
    // Jika home section masih terlihat di viewport (atas layar)
    if (homeRect.bottom > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.color = 'var(--text-color)';
        // Update logo dan link warna
        document.querySelector('.nav-logo a').style.color = 'var(--primary-color)';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = 'var(--text-color)';
        });
        document.querySelectorAll('.hamburger span').forEach(span => {
            span.style.background = 'var(--text-color)';
        });
    } else {
        // Ketau sudah scroll keluar dari home section
        navbar.style.background = 'var(--dark-color)';
        navbar.style.color = 'white';
        // Update logo dan link warna
        document.querySelector('.nav-logo a').style.color = 'white';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#ecf0f1';
        });
        document.querySelectorAll('.hamburger span').forEach(span => {
            span.style.background = 'white';
        });
    }
}

// Panggil function saat scroll dan load
window.addEventListener('scroll', updateHeaderColor);
window.addEventListener('load', updateHeaderColor);

// Juga panggil saat resize (untuk responsive)
window.addEventListener('resize', updateHeaderColor);f