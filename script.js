// ============================================
// Internationalization (i18n) System
// ============================================
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.greeting': "Hello, I'm",
        'hero.subtitle': 'Developer & Tech Enthusiast',
        'hero.description': 'Building innovative technology solutions with a passion for web development, blockchain, and modern technologies.',
        'hero.viewProjects': 'View Projects',
        'hero.contactMe': 'Contact Me',
        'hero.webDev': 'Web Dev',
        'hero.fastClean': 'Fast & Clean',
        'hero.dataScience': 'Data Science',
        'hero.scrollDown': 'Scroll Down',

        // About Section
        'about.title': 'About Me',
        'about.hello': 'Hello! Nice to meet you',
        'about.intro': "I'm a passionate developer dedicated to creating innovative technology solutions. With experience in various modern technologies, I'm always enthusiastic about learning new things in the world of programming.",
        'about.focus': 'My main focus is developing applications that are not only functional, but also deliver outstanding user experiences with modern and intuitive designs.',
        'about.projects': 'Projects',
        'about.technologies': 'Technologies',
        'about.dedication': 'Dedication',

        // Skills Section
        'skills.title': 'Skills & Technologies',
        'skills.frontend.title': 'Frontend Development',
        'skills.frontend.desc': 'HTML, CSS, JavaScript, React, Vue.js, and responsive design for stunning interfaces.',
        'skills.backend.title': 'Backend Development',
        'skills.backend.desc': 'Node.js, Python, PHP, and database management for powerful applications.',
        'skills.web3.title': 'Web3 & Blockchain',
        'skills.web3.desc': 'Smart contracts, DApps, and blockchain technology for a decentralized future.',
        'skills.tools.title': 'Tools & Platforms',
        'skills.tools.desc': 'Git, GitHub, VS Code, Docker, and Linux for an efficient workflow.',
        'skills.datascience.title': 'Data Science',
        'skills.datascience.desc': 'Data analysis, machine learning, and visualization for extracting meaningful insights.',

        // Projects Section
        'projects.title': 'My Projects',
        'projects.all': 'All',
        'projects.featured': 'Featured',
        'projects.featuredBadge': 'Featured',
        'projects.defi.title': 'DeFi Staking Platform',
        'projects.defi.desc': 'A decentralized application (DApp) for token staking and reward distribution, built with Solidity, Hardhat, and React.',
        'projects.nft.title': 'NFT Marketplace',
        'projects.nft.desc': 'NFT marketplace platform for trading with automated royalty system.',
        'projects.viewCode': 'View Code →',
        'projects.liveDemo': 'Live Demo →',
        'projects.latestGithub': 'Latest from GitHub',
        'projects.loadingGithub': 'Loading projects from GitHub...',
        'projects.noProjects': 'No projects found or API rate limit exceeded.',
        'projects.loadError': 'Failed to load projects. Please check your internet connection.',

        // Contact Section
        'contact.title': 'Get In Touch',
        'contact.subtitle': "Let's work together!",
        'contact.desc': 'Interested in collaborating or have any questions? Feel free to reach out!',
        'contact.quote': 'The best way to predict the future is to create it.',

        // Footer
        'footer.copyright': '© 2026 Farid Al Farizi. All rights reserved.',

        // Typing Effect Roles
        'roles': ['Developer & Tech Enthusiast', 'Web Developer', 'Blockchain Enthusiast', 'Problem Solver']
    },
    id: {
        // Navigation
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.skills': 'Keahlian',
        'nav.projects': 'Proyek',
        'nav.contact': 'Kontak',

        // Hero Section
        'hero.greeting': 'Halo, Saya',
        'hero.subtitle': 'Pengembang & Pecinta Teknologi',
        'hero.description': 'Membangun solusi teknologi inovatif dengan semangat untuk pengembangan web, blockchain, dan teknologi modern.',
        'hero.viewProjects': 'Lihat Proyek',
        'hero.contactMe': 'Hubungi Saya',
        'hero.webDev': 'Web Dev',
        'hero.fastClean': 'Cepat & Rapi',
        'hero.dataScience': 'Data Science',
        'hero.scrollDown': 'Gulir ke Bawah',

        // About Section
        'about.title': 'Tentang Saya',
        'about.hello': 'Halo! Senang bertemu dengan Anda',
        'about.intro': 'Saya adalah pengembang yang berdedikasi untuk menciptakan solusi teknologi inovatif. Dengan pengalaman di berbagai teknologi modern, saya selalu antusias mempelajari hal-hal baru di dunia pemrograman.',
        'about.focus': 'Fokus utama saya adalah mengembangkan aplikasi yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang luar biasa dengan desain modern dan intuitif.',
        'about.projects': 'Proyek',
        'about.technologies': 'Teknologi',
        'about.dedication': 'Dedikasi',

        // Skills Section
        'skills.title': 'Keahlian & Teknologi',
        'skills.frontend.title': 'Pengembangan Frontend',
        'skills.frontend.desc': 'HTML, CSS, JavaScript, React, Vue.js, dan desain responsif untuk antarmuka yang memukau.',
        'skills.backend.title': 'Pengembangan Backend',
        'skills.backend.desc': 'Node.js, Python, PHP, dan manajemen database untuk aplikasi yang andal.',
        'skills.web3.title': 'Web3 & Blockchain',
        'skills.web3.desc': 'Smart contract, DApps, dan teknologi blockchain untuk masa depan terdesentralisasi.',
        'skills.tools.title': 'Tools & Platform',
        'skills.tools.desc': 'Git, GitHub, VS Code, Docker, dan Linux untuk alur kerja yang efisien.',
        'skills.datascience.title': 'Data Science',
        'skills.datascience.desc': 'Analisis data, machine learning, dan visualisasi untuk mengekstrak insight bermakna.',

        // Projects Section
        'projects.title': 'Proyek Saya',
        'projects.all': 'Semua',
        'projects.featured': 'Unggulan',
        'projects.featuredBadge': 'Unggulan',
        'projects.defi.title': 'Platform Staking DeFi',
        'projects.defi.desc': 'Aplikasi terdesentralisasi (DApp) untuk staking token dan distribusi hadiah, dibangun dengan Solidity, Hardhat, dan React.',
        'projects.nft.title': 'Marketplace NFT',
        'projects.nft.desc': 'Platform marketplace NFT untuk trading dengan sistem royalti otomatis.',
        'projects.viewCode': 'Lihat Kode →',
        'projects.liveDemo': 'Demo Langsung →',
        'projects.latestGithub': 'Terbaru dari GitHub',
        'projects.loadingGithub': 'Memuat proyek dari GitHub...',
        'projects.noProjects': 'Tidak ada proyek ditemukan atau batas API tercapai.',
        'projects.loadError': 'Gagal memuat proyek. Silakan periksa koneksi internet Anda.',

        // Contact Section
        'contact.title': 'Hubungi Saya',
        'contact.subtitle': 'Mari bekerja sama!',
        'contact.desc': 'Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!',
        'contact.quote': 'Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.',

        // Footer
        'footer.copyright': '© 2026 Farid Al Farizi. Hak cipta dilindungi.',

        // Typing Effect Roles
        'roles': ['Pengembang & Pecinta Teknologi', 'Web Developer', 'Penggemar Blockchain', 'Problem Solver']
    }
};

// Current language state - always start with English
let currentLang = 'en';

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update typing effect roles
    updateTypingRoles(lang);
}

// Update roles for typing effect based on language
function updateTypingRoles(lang) {
    if (translations[lang]['roles']) {
        window.typingRoles = translations[lang]['roles'];
    }
}

// Initialize language switcher
function initLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langSwitcher = document.querySelector('.lang-switcher');

    if (langToggle) {
        langToggle.addEventListener('change', () => {
            const lang = langToggle.checked ? 'id' : 'en';
            applyTranslations(lang);

            // Update label highlighting
            if (langSwitcher) {
                langSwitcher.setAttribute('data-lang', lang);
            }
        });
    }

    // Apply default language on load
    applyTranslations(currentLang);
}

// ============================================
// Theme Switcher (Dark/Light Mode)
// ============================================
let currentTheme = 'dark'; // Default is dark mode

function applyTheme(theme) {
    currentTheme = theme;

    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

function initThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            const theme = themeToggle.checked ? 'light' : 'dark';
            applyTheme(theme);
        });
    }

    // Apply default theme (dark)
    applyTheme(currentTheme);
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (!backToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Custom smooth scroll with easing
    function smoothScrollToTop() {
        const startPosition = window.scrollY;
        const duration = 800; // ms
        let startTime = null;

        // Easing function - easeOutCubic for smooth deceleration
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = easeOutCubic(progress);

            window.scrollTo(0, startPosition * (1 - easeProgress));

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Scroll to top on click
    backToTopBtn.addEventListener('click', smoothScrollToTop);
}

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
                'Crypto-Portfolio-Tracker-and-Analytics': 'https://cryptoportfolioalpha.vercel.app',
                'Defi-staking-platform': 'https://defistakingplatform.vercel.app/',
                'Personal-portofolio-website': 'https://faridalfarizi.vercel.app/'
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
// Initialize roles from translations (will be updated when language changes)
window.typingRoles = translations[currentLang]['roles'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const typingText = document.querySelector('.typing-text');
    const roles = window.typingRoles || translations['en']['roles'];
    const currentRole = roles[roleIndex % roles.length];

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

    // Initialize language switcher
    initLanguageSwitcher();

    // Initialize theme switcher (default: dark mode)
    initThemeSwitcher();

    // Initialize back to top button
    initBackToTop();

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
