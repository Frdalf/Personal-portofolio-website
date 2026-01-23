// ============================================
// Splash Screen Handler
// ============================================
function hideSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');

    // Wait for loading animation to complete (3 seconds total)
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        document.body.style.overflow = 'auto';

        // Remove splash screen from DOM after fade transition
        setTimeout(() => {
            splashScreen.remove();
        }, 800);
    }, 3000);
}

// Prevent scrolling while splash screen is visible
document.body.style.overflow = 'hidden';

// ============================================
// Stars Background Animation
// ============================================
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';

        // Random size for stars
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        starsContainer.appendChild(star);
    }
}

// ============================================
// Navigation
// ============================================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.menu-toggle').classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ============================================
// Smooth Scrolling
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Parallax Effect for Floating Cards
// ============================================
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.float-card');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    cards.forEach((card, index) => {
        const speed = (index + 1) * 15;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        card.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// ============================================
// Scroll Animation (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply animation to sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add visible class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// GitHub Projects Fetcher
// ============================================
async function fetchGitHubProjects() {
    const container = document.getElementById('github-projects');

    try {
        const response = await fetch('https://api.github.com/users/Frdalf/repos?sort=updated&per_page=6');
        const repos = await response.json();

        if (repos.length === 0 || repos.message) {
            container.innerHTML = `
                <div class="loading">
                    <p>No projects found or API rate limit exceeded.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = repos.map(repo => {
            // Format project name: replace hyphens/underscores with spaces and capitalize
            const formattedName = repo.name
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());

            // Check if description exists
            const hasDescription = repo.description && repo.description.trim() !== '';
            const descriptionClass = hasDescription ? '' : 'no-description';
            const descriptionText = hasDescription ? repo.description : 'No description available';

            // Custom live demo URLs for specific projects
            const customDemos = {
                'Crypto-Portfolio-Tracker-and-Analytics': 'https://cryptoportfolioalpha.vercel.app'
            };
            const liveDemo = customDemos[repo.name] || repo.homepage;

            return `
            <div class="project-card" data-type="github">
                <div class="project-header">
                    <h3>${formattedName}</h3>
                    <p class="${descriptionClass}">${descriptionText}</p>
                </div>
                <div class="project-tags">
                    ${repo.language ? `<span class="tag">${repo.language}</span>` : ''}
                    ${repo.stargazers_count > 0 ? `<span class="tag">⭐ ${repo.stargazers_count}</span>` : ''}
                    ${repo.forks_count > 0 ? `<span class="tag">🔀 ${repo.forks_count}</span>` : ''}
                </div>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank" class="project-link">View Code →</a>
                    ${liveDemo ? `<a href="${liveDemo}" target="_blank" class="project-link">Live Demo →</a>` : ''}
                </div>
            </div>
        `}).join('');

        // Re-observe new project cards
        document.querySelectorAll('#github-projects .project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

    } catch (error) {
        container.innerHTML = `
            <div class="loading">
                <p>Failed to load projects. Please check your internet connection.</p>
            </div>
        `;
        console.error('Error fetching GitHub repos:', error);
    }
}

// ============================================
// Project Filter Tabs
// ============================================
function filterProjects(filter) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === filter ||
            (filter === 'all' && btn.textContent === 'All') ||
            (filter === 'github' && btn.textContent === 'GitHub') ||
            (filter === 'featured' && btn.textContent === 'Featured')) {
            btn.classList.add('active');
        }
    });

    const featuredProjects = document.querySelector('.featured-projects');
    const githubProjects = document.getElementById('github-projects');
    const subsectionTitle = document.querySelector('.subsection-title');

    switch (filter) {
        case 'all':
            featuredProjects.style.display = 'grid';
            githubProjects.style.display = 'grid';
            subsectionTitle.style.display = 'block';
            break;
        case 'github':
            featuredProjects.style.display = 'none';
            githubProjects.style.display = 'grid';
            subsectionTitle.style.display = 'none';
            break;
        case 'featured':
            featuredProjects.style.display = 'grid';
            githubProjects.style.display = 'none';
            subsectionTitle.style.display = 'none';
            break;
    }
}



// ============================================
// Typing Effect for Subtitle
// ============================================
const roles = ['Developer & Tech Enthusiast', 'Web Developer', 'Blockchain Enthusiast', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const typingText = document.querySelector('.typing-text');
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing new role
    }

    setTimeout(typeEffect, typingSpeed);
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Hide splash screen after animation
    hideSplashScreen();

    createStars();
    fetchGitHubProjects();
    setTimeout(typeEffect, 1000);

    // Make hero section visible immediately
    document.querySelector('.hero').style.opacity = '1';
    document.querySelector('.hero').style.transform = 'translateY(0)';
});

// ============================================
// Active Navigation Link Highlight
// ============================================
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
