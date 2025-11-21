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

// Header color change based on section
function updateHeaderColor() {
    const navbar = document.querySelector('.navbar');
    const homeSection = document.getElementById('home');
    const homeRect = homeSection.getBoundingClientRect();
    
    if (homeRect.bottom > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        document.querySelector('.nav-logo a').style.color = 'var(--primary-color)';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = 'var(--text-color)';
        });
        document.querySelectorAll('.hamburger span').forEach(span => {
            span.style.background = 'var(--text-color)';
        });
    } else {
        navbar.style.background = 'var(--dark-color)';
        document.querySelector('.nav-logo a').style.color = 'white';
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#ecf0f1';
        });
        document.querySelectorAll('.hamburger span').forEach(span => {
            span.style.background = 'white';
        });
    }
}

// Project Data
const projectsData = {
    'jemuran': {
        title: 'JEMURAN THE GAME',
        mainImage: 'logo_jemuran.png',
        gallery: [
            'logo_jemuran.png',
            'jemuran-gameplay1.jpg',
            'jemuran-gameplay2.jpg',
            'jemuran-character.jpg'
        ],
        description: 'A survival game developed with 5 other developers. I was responsible for creating visual elements including characters and environments.',
        techStack: [
            'Engine: Godot 4.0',
            'Graphics: Pixel Art',
            'Programming: GDScript',
            'Tools: Aseprite',
            'Platform: PC'
        ],
        roles: [
            'Game Artist',
            'Created game assets and objects',
            'Designed characters and environments'
        ],
        features: [
            'Survival gameplay mechanics',
            'Pixel art style',
            'Multiple levels'
        ],
        videoLink: 'https://drive.google.com/your-link-here'
    },
    'sproste': {
        title: 'SPROSTE',
        mainImage: 'logo_sproste.png',
        gallery: [
            'logo_sproste.png',
            'sproste-gameplay1.jpg',
            'sproste-gameplay2.jpg',
            'sproste-puzzle.jpg'
        ],
        description: 'A side-scrolling puzzle game developed with 3 other developers. As the Artist, I was responsible for the visual aspects, including characters, environments, and the user interface.',
        techStack: [
            'Engine: Unity',
            'Graphics: 2D Pixel',
            'Programming: C#',
            'Tools: Aseprite',
            'Platform: PC'
        ],
        roles: [
            'Game Artist',
            'Created UI/UX',
            'Created main character sprites',
            'Created environment assets and objects',
        ],
        features: [
            'Side-scrolling puzzle mechanics',
            'Pixel art graphics',
            'Intuitive UI/UX'
        ],
        videoLink: 'https://drive.google.com/your-link-here'
    },
    'portfolio': {
        title: 'PORTFOLIO WEBSITE',
        mainImage: 'project3.jpg',
        gallery: [
            'project3.jpg',
            'portfolio-mobile.jpg',
            'portfolio-design.jpg'
        ],
        description: 'Personal portfolio website to showcase my projects and skills as a programmer and game artist.',
        techStack: [
            'Frontend: HTML5, CSS3, JavaScript',
            'Styling: Custom CSS with CSS Variables',
            'Deployment: GitHub',
            'Tools: VS Code, Git'
        ],
        roles: [
            'Full-stack Developer & Designer',
            'Designed complete UI/UX',
            'Implemented responsive layout',
            'Developed custom animations and interactions',
            'Integrated contact form with Formspree'
        ],
        features: [
            'Fully responsive design',
            'Smooth scrolling navigation',
            'Interactive project gallery',
            'Contact form with validation',
            'Fast loading performance'
        ]
    }
};

// Modal Functionality
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');

// Function to open modal
function openModal(project) {
    fillModalContent(project);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function untuk mengisi konten modal
function fillModalContent(project) {
    // Set basic info
    document.getElementById('modalTitle').textContent = project.title;
    
    // Handle main image dengan error fallback
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = project.mainImage;
    mainImage.alt = project.title;
    mainImage.onerror = function() {
        this.src = 'placeholder.jpg';
        this.alt = 'Image not available';
    };
    
    document.getElementById('modalDescription').textContent = project.description;
    
    // Handle video link - sembunyikan jika tidak ada
    const videoLinkElement = document.getElementById('modalVideoLink');
    if (project.videoLink) {
        videoLinkElement.href = project.videoLink;
        videoLinkElement.style.display = 'inline-flex';
    } else {
        videoLinkElement.style.display = 'none';
    }
    
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
    
    // Set gallery dengan error handling
    const gallery = document.querySelector('.thumbnail-gallery');
    gallery.innerHTML = '';
    project.gallery.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.className = 'thumbnail';
        if (index === 0) thumbnail.classList.add('active');
        
        // Error handling untuk thumbnail
        thumbnail.onerror = function() {
            this.style.display = 'none';
        };
        
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
}

// Close Modal Function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add click event to all "View Details" buttons - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View Details clicked'); // Debug log
            
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent.toLowerCase();
            console.log('Project title:', projectTitle); // Debug log
            
            let projectKey = '';
            if (projectTitle.includes('jemuran')) projectKey = 'jemuran';
            else if (projectTitle.includes('sproste')) projectKey = 'sproste';
            else if (projectTitle.includes('portfolio')) projectKey = 'portfolio';
            
            console.log('Project key:', projectKey); // Debug log
            
            if (projectsData[projectKey]) {
                openModal(projectsData[projectKey]);
            } else {
                console.log('Project data not found for key:', projectKey);
            }
        });
    });
});

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

// Initialize
window.addEventListener('scroll', updateHeaderColor);
window.addEventListener('load', updateHeaderColor);
window.addEventListener('resize', updateHeaderColor);
