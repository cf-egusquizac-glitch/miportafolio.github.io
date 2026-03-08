// ========================================
// CONFIGURACIÓN - EDITA ESTO CON TUS DATOS
// ========================================

const portfolioConfig = {
    // CAMBIAR: Tus datos de contacto
    contact: {
        phone: "+51 944 105 927",
        email: "cf.catalane@gmail.com",
        linkedin: "https://www.linkedin.com/in/canilo-f-catal%C3%A1n-egusquiza-06b57838a/"
    },
    
    // CAMBIAR: Tus redes sociales
    social: {
        github: "https://github.com/cf-egusquizac-glitch",
        linkedin: "https://www.linkedin.com/in/canilo-f-catal%C3%A1n-egusquiza-06b57838a/"
    },
    
    // TUS PROYECTOS - AGREGA LOS LINKS DE GITHUB AQUÍ
    projects: [
        {
            id: 1,
            name: "Tienda de Productos Alimenticios",
            description: "Tienda online de alimentos frescos con catálogo de productos, carrito de compras y sistema de pedidos.",
            tech: ["VSC"],
            icon: "fa-shopping-basket",
            githubUrl: "https://github.com/repos?q=owner%3A%40me",
            demoUrl: "https://cf-egusquizac-glitch.github.io/freshmarket-github.io/"
        },
        {
            id: 2,
            name: "Pollos a la Brasa",
            description: "Página web para restaurante de pollos a la brasa con menú digital, promociones y sistema de delivery.",
            tech: ["VSC"],
            icon: "fa-drumstick-bite",
            githubUrl: "https://github.com/repos?q=owner%3A%40me",
            demoUrl: "https://cf-egusquizac-glitch.github.io/pollos-a-la-brasa-suarez.github.io/"
        }
    ]
};

// ========================================
// NO EDITAR DEBAJO DE ESTA LÍNEA
// ========================================

// Cargar proyectos en el DOM
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    container.innerHTML = portfolioConfig.projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <i class="fas ${project.icon}"></i>
                <div class="project-overlay">
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" title="Ver en GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    ` : ''}
                    ${project.demoUrl ? `
                        <a href="${project.demoUrl}" target="_blank" title="Ver Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank">
                            <i class="fab fa-github"></i> Repositorio
                        </a>
                    ` : ''}
                    ${project.demoUrl ? `
                        <a href="${project.demoUrl}" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Cargar datos de contacto
function loadContactInfo() {
    document.getElementById('contact-phone').textContent = portfolioConfig.contact.phone;
    document.getElementById('contact-email').textContent = portfolioConfig.contact.email;
}

// Menú responsive
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Navegación activa al hacer scroll
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Header con sombra al hacer scroll
function initHeaderShadow() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Smooth scroll para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadContactInfo();
    initMobileMenu();
    initScrollSpy();
    initHeaderShadow();
    initSmoothScroll();
    
    console.log('🚀 Portafolio de Canilo Catalán cargado exitosamente');
});