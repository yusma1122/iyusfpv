/*
* TIMUS FPV - Drone Pilot FPV Profesional Website
* Author: Your Name
*/

// Document Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1500);

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    document.querySelector('.navbar-nav .nav-link[href="#home"]').classList.add('active');

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.portfolio-filters .filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all filters
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked filter
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Show/hide portfolio items based on filter
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Video Modal
    const videoLinks = document.querySelectorAll('.portfolio-play');
    if (videoLinks.length > 0) {
        videoLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const videoSrc = this.getAttribute('data-video');
                document.querySelector('#videoModal iframe').src = videoSrc;
            });
        });
        
        // Reset video src when modal is closed
        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.addEventListener('hidden.bs.modal', function() {
                document.querySelector('#videoModal iframe').src = '';
            });
        }
    }

    // Smooth Scrolling for Internal Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    if (internalLinks.length > 0) {
        internalLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.getAttribute('href') !== '#') {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        const navbarHeight = document.querySelector('.navbar').offsetHeight;
                        const targetPosition = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // If mobile menu is open, close it
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        const navbarCollapse = document.querySelector('.navbar-collapse');
                        if (navbarCollapse.classList.contains('show')) {
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                            bsCollapse.hide();
                        }
                    }
                }
            });
        });
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone')?.value || '';
            const service = document.getElementById('service')?.value || '';
            const message = document.getElementById('message').value;
            const newsletter = document.getElementById('newsletter')?.checked || false;
            
            // In a real implementation, you'd send this data to a server
            // For now, let's just show an alert
            alert(`Terima kasih ${name}! Pesan Anda telah diterima. Kami akan segera menghubungi Anda.`);
            
            // Reset form
            this.reset();
        });
    }

    // Active menu highlight based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect for elements
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Apply parallax to hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
    });

    // Counter Animation (using CounterUp library)
    if (typeof $.fn.counterUp !== 'undefined') {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
});

// Handle video background autoplay issues
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hero-video');
    if (video) {
        // Some browsers don't allow autoplay, this is a fallback
        video.play().catch(function(error) {
            // If autoplay is not allowed, show a static image instead
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                video.style.display = 'none';
                heroSection.style.backgroundImage = 'url("assets/hero-bg.jpg")';
                heroSection.style.backgroundSize = 'cover';
                heroSection.style.backgroundPosition = 'center';
            }
        });
    }
});