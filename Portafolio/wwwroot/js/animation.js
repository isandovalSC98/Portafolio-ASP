// Animaciones y efectos interactivos para el portafolio

document.addEventListener('DOMContentLoaded', function() {
    
    // Animación de scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const elementsToAnimate = document.querySelectorAll('.habilidades, .project-card, .titulo, .logos, .timeline-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // Efecto de parallax suave para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('seccionNombre');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Animación de escritura para el nombre
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Aplicar efecto de escritura al nombre si está visible
    const nombreElement = document.querySelector('.nombre');
    if (nombreElement && !nombreElement.dataset.animated) {
        const originalText = nombreElement.textContent;
        nombreElement.dataset.animated = 'true';
        
        const nombreObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter(nombreElement, originalText, 150);
                    nombreObserver.unobserve(entry.target);
                }
            });
        });
        
        nombreObserver.observe(nombreElement);
    }

    // Efecto hover para las tecnologías
    const techImages = document.querySelectorAll('.imgTecnologias');
    techImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Animación de contador para estadísticas (si las hay)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        updateCounter();
    }

    // Smooth scroll para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Compensar navbar fija
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de partículas flotantes en el hero
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animation = 'float 6s linear infinite';
        
        const hero = document.getElementById('seccionNombre');
        if (hero) {
            hero.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }
    }

    // Crear partículas cada 2 segundos
    setInterval(createParticle, 2000);

    // Efecto de carga progresiva para las imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });

    // Animación de las habilidades al hacer hover
    const skillCards = document.querySelectorAll('.habilidades');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('h1 i');
            if (icon) {
                icon.style.animation = 'pulse 1s infinite';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('h1 i');
            if (icon) {
                icon.style.animation = 'none';
            }
        });
    });

    // Efecto de typing para el subtítulo
    const subtituloElement = document.querySelector('.subtitulo1');
    if (subtituloElement && !subtituloElement.dataset.animated) {
        const originalSubText = subtituloElement.textContent;
        subtituloElement.dataset.animated = 'true';
        
        const subtituloObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        typeWriter(subtituloElement, originalSubText, 80);
                    }, 2000); // Esperar a que termine el nombre
                    subtituloObserver.unobserve(entry.target);
                }
            });
        });
        
        subtituloObserver.observe(subtituloElement);
    }

    // Efecto de resaltado para el navbar activo
    function highlightActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNav);

    // Efecto de shake para botones de acción
    const actionButtons = document.querySelectorAll('.btn-primary');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });

    // Animación de entrada para las cards de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('scroll-reveal');
        observer.observe(card);
    });

    // Animación de entrada para el timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
        observer.observe(item);
    });

    // Efecto de hover para el formulario
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });

    // Animación de las redes sociales
    const socialIcons = document.querySelectorAll('.iconoRedes');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 0.6s ease';
        });
        
        icon.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });

    // Efecto de carga para el formulario
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío (remover en producción)
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="bi bi-check-circle me-2"></i>¡Enviado!';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // Efecto de scroll suave para el botón "Volver arriba"
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollToTopBtn.className = 'btn btn-primary scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efecto de hover para los marcadores del timeline
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    timelineMarkers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(-50%) scale(1.2) rotate(10deg)';
        });
        
        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(-50%) scale(1) rotate(0deg)';
        });
    });

    // Animación de entrada escalonada para las responsabilidades del timeline
    const timelineResponsibilities = document.querySelectorAll('.timeline-body ul li');
    timelineResponsibilities.forEach((li, index) => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-20px)';
        li.style.transition = 'all 0.5s ease';
        
        const liObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 100);
                    liObserver.unobserve(entry.target);
                }
            });
        });
        
        liObserver.observe(li);
    });

    // Efecto de hover para las badges de tecnologías
    const techBadges = document.querySelectorAll('.badge');
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

});

// Animaciones CSS adicionales
const additionalStyles = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
    40%, 43% { transform: translate3d(0,-30px,0); }
    70% { transform: translate3d(0,-15px,0); }
    90% { transform: translate3d(0,-4px,0); }
}

@keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
}

.nav-link.active {
    color: var(--primary-color) !important;
    font-weight: 600;
}

.nav-link.active::after {
    width: 100% !important;
}

.timeline-item {
    animation: fadeInUp 0.8s ease forwards;
}

.timeline-item:nth-child(odd) {
    animation-delay: 0.2s;
}

.timeline-item:nth-child(even) {
    animation-delay: 0.4s;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Agregar estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);