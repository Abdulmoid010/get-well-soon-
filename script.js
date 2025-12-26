document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#FFD84D"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#FFD84D",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Hug button effect
    const hugButton = document.getElementById('hugButton');
    if (hugButton) {
        hugButton.addEventListener('click', function() {
            this.classList.add('hug-animation');
            setTimeout(() => {
                this.classList.remove('hug-animation');
            }, 500);
            
            // Create floating hearts
            for (let i = 0; i < 5; i++) {
                createFloatingHeart();
            }
        });
    }

    // Create floating hearts
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '<i data-feather="heart" class="text-sunshine-200"></i>';
        feather.replace();
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.bottom = '0';
        heart.style.opacity = '0';
        heart.style.transform = 'translateY(0) scale(0)';
        heart.style.transition = 'all 1.5s ease-out';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.opacity = '0.8';
            heart.style.transform = `translateY(-${100 + Math.random() * 100}px) scale(${0.5 + Math.random() * 0.5})`;
        }, 10);

        setTimeout(() => {
            heart.style.opacity = '0';
            setTimeout(() => {
                heart.remove();
            }, 1500);
        }, 1500);
    }

    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.promise-item').forEach(item => {
        observer.observe(item);
    });
});