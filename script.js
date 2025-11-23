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
        // Skip smooth scrolling for project links (they have their own functionality)
        if (this.classList.contains('project-link')) {
            return;
        }
        
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
            'jemuran-gameplay1.png',
            'jemuran-gameplay2.png',
            'jemuran-character.png'
        ],
        description: 'A management genre game where the player plays as a little kid who is assigned to look after the laundry by his mother.',
        techStack: [
            'Genre: Management/Survival',
            'Platform: PC (Windows)',
            'Game Engine: GODOT',
            'Art: Pixel 2D, Top-down',
            'Sound: Open-sourced'
        ],
        roles: [
            'Game Artist',
            'Created game assets and objects',
            'Designed characters and environments'
        ],
        features: [
            'Top-down survival gameplay mechanics',
            'Pixel art style',
            'Multiple levels'
        ],
    },
    'sproste': {
        title: 'SPROSTE',
        mainImage: 'logo_sproste.png',
        gallery: [
            'logo_sproste.png',
            'sproste-menu.png',
            'sproste-gameplay1.png',
            'sproste-gameplay2.png',
            'sproste-character.png'
        ],
        description: 'A 2D, physics-based environmental puzzle game in which players assume the role of an exploration robot navigating a barren, trash-filled world to find a plant. During their exploration, players solve various puzzles to discover clues about where plants might grow again in this barren world. Players also discover stories about humanity\'s journey to defeat its own trash.',
        techStack: [
            'Genre: Puzzle, Adventure',
            'Platform: PC (Windows)',
            'Game Engine: Unity',
            'Art: Pixel 2D, Side-scroll',
            'Sound: Open-sourced'
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
    },
    'portfolio': {
        title: 'PORTFOLIO WEBSITE',
        mainImage: 'profile.png',
        gallery: [
            'profile.png',
            'pcview.png',
            'mobileview.jpg'
        ],
        description: 'Personal portfolio website to showcase my projects and skills as a programmer and game artist.',
        techStack: [
            'Frontend: HTML5, CSS3, JavaScript',
            'Styling: Custom CSS with CSS Variables',
            'Deployment: Vercel',
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
        ],
        projectType: 'website'
    },
    'penalty-shooter': {
        title: 'PENALTY SHOOTER SIMULATOR',
        mainImage: 'project4.jpg',
        gallery: [
            'project4.jpg'
        ],
        description: 'A website that contains a simulation of a penalty shootout in football. This interactive web application allows users to experience the thrill of penalty kicks with realistic physics and gameplay mechanics.',
        techStack: [
            'Frontend: HTML5, CSS3, JavaScript',
            'Game Logic: Vanilla JavaScript',
            'Styling: Custom CSS',
            'Tools: VS Code, Git'
        ],
        roles: [
            'Full-stack Developer',
            'Designed game mechanics and physics',
            'Implemented user interface',
            'Developed interactive gameplay elements'
        ],
        features: [
            'Realistic penalty kick physics',
            'Interactive goalkeeper AI',
            'Score tracking system',
            'Responsive design for all devices',
            'Smooth animations and transitions'
        ],
        projectType: 'website'
    },
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

// Function to fill modal content
function fillModalContent(project) {
    // Set basic info
    document.getElementById('modalTitle').textContent = project.title;
    
    // Handle main image dengan error fallback
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = project.mainImage;
    mainImage.alt = project.title;
    mainImage.onerror = function() {
        this.src = 'placeholder.jpg';
    };

    // Update description title based on project type
    const descriptionTitle = document.querySelector('.detail-section h3');
    if (project.projectType === 'website') {
        descriptionTitle.textContent = 'Project Description';
    } else {
        descriptionTitle.textContent = 'Game Description';
    }
    
    document.getElementById('modalDescription').textContent = project.description;
    
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

// Initialize project buttons
function initializeProjectButtons() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        // Hapus event listener lama jika ada
        link.replaceWith(link.cloneNode(true));
    });
    
    // Tambahkan event listener baru
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const projectCard = this.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent.toLowerCase();
            
            let projectKey = '';
            if (projectTitle.includes('jemuran')) projectKey = 'jemuran';
            else if (projectTitle.includes('sproste')) projectKey = 'sproste';
            else if (projectTitle.includes('portfolio')) projectKey = 'portfolio';
            else if (projectTitle.includes('penalty')) projectKey = 'penalty-shooter';
            
            if (projectsData[projectKey]) {
                openModal(projectsData[projectKey]);
            } else {
                console.log('Project data not found for key:', projectKey);
                alert('Project details not available yet.');
            }
        });
    });
}

// Skills Filter Functionality
function initializeSkillsFilter() {
    const filterButtons = document.querySelectorAll('.skills-filter-btn');
    const skillCategories = document.querySelectorAll('.skills-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Remove active class from all buttons and categories
            filterButtons.forEach(btn => btn.classList.remove('active'));
            skillCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding category
            const targetCategory = document.getElementById(`${filter}-category`);
            if (targetCategory) {
                targetCategory.classList.add('active');
            }
        });
    });
}

// Artworks Filter Functionality
function initializeArtworksFilter() {
    const filterButtons = document.querySelectorAll('.artworks-filter-btn');
    const artworkItems = document.querySelectorAll('.artwork-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter artwork items
            artworkItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Function to ensure skills section is always visible
function ensureSkillsVisibility() {
    const skillsCategories = document.querySelectorAll('.skills-category');
    const skillsFilterBtns = document.querySelectorAll('.skills-filter-btn');
    
    // Check if any skills category is active
    const hasActiveCategory = Array.from(skillsCategories).some(category => 
        category.classList.contains('active')
    );
    
    // If no category is active, show programming category
    if (!hasActiveCategory) {
        skillsCategories.forEach(category => category.classList.remove('active'));
        skillsFilterBtns.forEach(btn => btn.classList.remove('active'));
        
        const programmingCategory = document.getElementById('programming-category');
        const programmingBtn = document.querySelector('.skills-filter-btn[data-filter="programming"]');
        
        if (programmingCategory && programmingBtn) {
            programmingCategory.classList.add('active');
            programmingBtn.classList.add('active');
        }
    }
}

// Call this function periodically and on scroll
function initializeSectionMonitoring() {
    // Check skills section visibility on scroll
    window.addEventListener('scroll', () => {
        const skillsSection = document.getElementById('skills');
        const rect = skillsSection.getBoundingClientRect();
        
        // If skills section is in viewport, ensure it's visible
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            ensureSkillsVisibility();
        }
    });
    
    // Also check when filter buttons are clicked in artworks
    document.querySelectorAll('.artworks-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(ensureSkillsVisibility, 100);
        });
    });
}

// Initialize animation observer
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

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectButtons();
    initializeSkillsFilter();
    initializeArtworksFilter();
    initializeSectionMonitoring();
    updateHeaderColor();
    ensureSkillsVisibility();
});

// Event listeners for header color
window.addEventListener('scroll', updateHeaderColor);
window.addEventListener('load', updateHeaderColor);
window.addEventListener('resize', updateHeaderColor);