class MyHeader extends HTMLElement
{
    connectedCallback(){
        this.innerHTML = `
    <header id="header">
        <div class="container header-container">
            <div class="logo">
                <div class="logo-image">
                    <img src="logo.png" alt="SailWeb7 Logo">
                </div>
                Sail<span>Web7</span>

            </div>
            <nav>
                <ul id="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="mobile-menu" id="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>
    <!-- Back to Top Button -->
    <div class="back-to-top" id="back-to-top">
        <i class="fas fa-chevron-up"></i>
    </div>
    <style>
     .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--light);
            display: flex;
            align-items: center;
            gap: 8px;
            transition: var(--transition);
        }
        .logo-image {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: var(--transition);
            position: relative;
        }
        
        .logo-image::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(30, 136, 229, 0.3) 0%, rgba(100, 181, 246, 0.3) 100%);
            opacity: 0;
            transition: var(--transition);
        }
        
        .logo:hover .logo-image::before {
            opacity: 1;
        }
        
        .logo-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        
        .logo span {
            color: var(--primary);
        }
    </style>
    
 `
  this.attachEventListeners();

    }
    attachEventListeners(){
        // Mobile menu toggle
        document.getElementById('mobile-menu').addEventListener('click', function() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('show');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            const navMenu = document.getElementById('nav-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (window.innerWidth <= 768 && 
                !navMenu.contains(e.target) && 
                !mobileMenu.contains(e.target) && 
                navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                mobileMenu.querySelector('i').classList.remove('fa-times');
                mobileMenu.querySelector('i').classList.add('fa-bars');
            }
        });

         // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            const backToTop = document.getElementById('back-to-top');
            
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
                backToTop.classList.add('show');
            } else {
                header.classList.remove('header-scrolled');
                backToTop.classList.remove('show');
            }
        });
        // Back to top functionality
        document.getElementById('back-to-top').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


    }
    }
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement
{
    connectedCallback(){
        this.innerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>SailWeb7</h3>
                    <p>We are a leading web development agency dedicated to creating exceptional digital experiences that drive business growth.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Tiktok"><i class="fab fa-tiktok"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Services</h3>
                    <ul class="footer-links">
                        <li><a href="services.html">Web Development</a></li>
                        <li><a href="services.html">E-Commerce</a></li>
                        <li><a href="services.html">UI/UX Design</a></li>
                        <li><a href="services.html">SEO Optimization</a></li>
                        <li><a href="services.html">Web Maintenance</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Info</h3>
                    <p><i class="fas fa-phone"></i> +254 788 015 809</p>
                    <p><i class="fab fa-whatsapp"></i> +254 788 015 809</p>
                    <p><i class="fas fa-envelope"></i> info@sailweb7.com</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2026 SailWeb7. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    <style>
    /* Footer */
        footer {
            background: linear-gradient(135deg, var(--dark) 0%, var(--dark-gray) 100%);
            color: var(--light);
            padding: 60px 0 20px;
            border-top: 1px solid rgba(30, 136, 229, 0.2);
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-column h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            color: var(--light);
            position: relative;
            display: inline-block;
        }
        
        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 40px;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--primary-light));
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 10px;
        }
        
        .footer-links a {
            transition: var(--transition);
            color: rgba(227, 242, 253, 0.7);
        }
        
        .footer-links a:hover {
            color: var(--primary);
            padding-left: 5px;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-links a {
            width: 40px;
            height: 40px;
            background: rgba(30, 136, 229, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }
        
        .social-links a:hover {
            background: var(--primary);
            transform: translateY(-5px);
        }
        
        .footer-column p {
            color: rgba(227, 242, 253, 0.7);
            margin-bottom: 15px;
        }
        
        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(30, 136, 229, 0.2);
            color: rgba(227, 242, 253, 0.5);
            font-size: 0.9rem;
        }
    </style>
        `
    }
}

customElements.define('my-footer', MyFooter)
