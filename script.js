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

// Project Data - Simpan data project Anda di sini
const projectsData = {
    'jemuran': {
        title: '🎮 JEMURAN THE GAME',
        mainImage: 'logo_jemuran.png',
        gallery: [
            'logo_jemuran.png',
            'jemuran-gameplay1.jpg',
            'jemuran-gameplay2.jpg',
            'jemuran-character.jpg'
        ],
        description: 'Game survival 2D pixel art dimana pemain berperan sebagai anak yang harus menjaga pakaian jemuran dari berbagai ancaman seperti hujan, tikus, burung, dan anak nakal. Setiap level memiliki target score yang harus dicapai sebelum waktu habis.',
        techStack: [
            'Engine: Godot 4.0',
            'Graphics: Pixel Art (128x128 resolution)',
            'Programming: GDScript',
            'Audio: BFXR untuk sound effects',
            'Tools: Aseprite, Tiled, Audacity'
        ],
        roles: [
            'Lead Artist & UI Designer',
            'Created all character sprites (main character, enemies, NPCs)',
            'Designed environment tilesets (house, yard, background)',
            'Developed complete UI system (menus, HUD, icons)',
            'Animated character movements and interactions',
            'Created visual effects (rain, wind, day/night transition)'
        ],
        features: [
            'Day/Night cycle dengan perubahan gameplay',
            '3 jenis musuh dengan AI berbeda',
            'Weather system yang mempengaruhi gameplay',
            'Power-up system (payung, peluit, jaring)',
            'Progressive difficulty curve',
            'Local score tracking'
        ],
        videoLink: 'https://youtu.be/jemuran-game-demo'
    },
    'sproste': {
        title: '🧩 SPROSTE',
        mainImage: 'logo_sproste.png',
        gallery: [
            'logo_sproste.png',
            'sproste-gameplay1.jpg',
            'sproste-gameplay2.jpg',
            'sproste-puzzle.jpg'
        ],
        description: 'Puzzle platformer 2D dengan mechanics gravitasi dinamis. Pemain dapat mengubah arah gravitasi untuk menyelesaikan teka-teki ruangan. Setiap bab memperkenalkan mechanics baru yang semakin menantang.',
        techStack: [
            'Engine: Unity 2022.3 LTS',
            'Graphics: Vector Art style',
            'Programming: C#',
            'Tools: Figma, Illustrator, Photoshop',
            'Platform: Windows, WebGL'
        ],
        roles: [
            'Game Artist & UI/UX Designer',
            'Designed main character and enemy sprites',
            'Created environment assets and interactive objects',
            'Developed complete UI/UX flow',
            'Implemented visual feedback systems',
            'Collaborated on level design and puzzle mechanics'
        ],
        features: [
            '6 worlds dengan 8 levels each',
            'Dynamic gravity manipulation',
            'Color-based puzzle mechanics',
            'Smooth controller and keyboard support',
            'Hint system untuk pemula',
            'Minimalist audio design'
        ],
        videoLink: 'https://youtu.be/sproste-gameplay'
    },
    'portfolio': {
        title: '💼 PORTFOLIO WEBSITE',
        mainImage: 'project3.jpg',
        gallery: [
            'project3.jpg',
            'portfolio-mobile.jpg',
            'portfolio-design.jpg'
        ],
        description: 'Website portfolio responsive yang menampilkan karya, skills, dan pengalaman. Dibangun dengan focus pada user experience dan visual aesthetics yang clean dan modern.',
        techStack: [
            'Frontend: HTML5, CSS3, JavaScript',
            'Styling: Custom CSS dengan CSS Variables',
            'Icons: Font Awesome 6',
            'Deployment: GitHub Pages',
            'Tools: VS Code, Git'
        ],
        roles: [
            'Full-stack Developer & Designer',
            'Designed complete UI/UX from scratch',
            'Implemented responsive layout',
            'Developed custom animations and interactions',
            'Optimized for performance and SEO',
            'Integrated contact form with Formspree'
        ],
        features: [
            'Fully responsive design',
            'Smooth scrolling navigation',
            'Interactive project gallery',
            'Contact form with validation',
            'Dark/light theme ready',
            'Fast loading performance'
        ],
        videoLink: 'https://youtu.be/portfolio-website-tour'
    }
};

// Modal Functionality
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');

// Add click event to all "View Details" buttons
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const projectCard = this.closest('.project-card');
        const projectTitle = projectCard.querySelector('h3').textContent.toLowerCase();
        
        let projectKey = '';
        if (projectTitle.includes('jemuran')) projectKey = 'jemuran';
        else if (projectTitle.includes('sproste')) projectKey = 'sproste';
        else if (projectTitle.includes('portfolio')) projectKey = 'portfolio';
        
        if (projectsData[projectKey]) {
            openModal(projectsData[projectKey]);
        }
    });
});

// Open Modal Function
function openModal(project) {
    // Set basic info
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalMainImage').src = project.mainImage;
    document.getElementById('modalMainImage').alt = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalVideoLink').href = project.videoLink;
    
    // Set tech stack
    const techList = document.getElementById('modalTechStack');
    techList.innerHTML = '';
    project.techStack.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        techList.appendChild(li);
    });
    
    // Set roles
    const rolesList = document.getElementById('modalRoles');
    rolesList.innerHTML = '';
    project.roles.forEach(role => {
        const li = document.createElement('li');
        li.textContent = role;
        rolesList.appendChild(li);
    });
    
    // Set features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Set gallery
    const gallery = document.querySelector('.thumbnail-gallery');
    gallery.innerHTML = '';
    project.gallery.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        thumbnail.addEventListener('click', () => {
            // Update main image
            document.getElementById('modalMainImage').src = image;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            thumbnail.classList.add('active');
        });
        
        gallery.appendChild(thumbnail);
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Modal Function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event Listeners for closing modal
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Panggil function saat scroll dan load
window.addEventListener('scroll', updateHeaderColor);
window.addEventListener('load', updateHeaderColor);

// Juga panggil saat resize (untuk responsive)
window.addEventListener('resize', updateHeaderColor);