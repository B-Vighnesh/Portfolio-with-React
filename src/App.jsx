import React, { useState, useEffect, useRef } from 'react';

// STYLES COMPONENT
// We'll inject all the CSS directly into the app using a style tag.
// This keeps everything in one file and mirrors the original HTML structure.
const GlobalStyles = () => (
  <style>{`
    /* Basic Reset & Typography */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Inter', sans-serif;
        background-color: #000000;
        color: #E5E7EB;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    img {
        max-width: 100%;
        display: block;
    }
    .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    @media (min-width: 640px) { .container { max-width: 640px; } }
    @media (min-width: 768px) { .container { max-width: 768px; } }
    @media (min-width: 1024px) { .container { max-width: 1024px; } }
    @media (min-width: 1280px) { .container { max-width: 1280px; } }

    /* Header & Navigation */
    #header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        transition: padding 0.3s ease-in-out;
        padding: 0.75rem 0;
    }
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.05em;
    }
    #main-nav a {
        color: #D1D5DB;
        transition: color 0.3s;
    }
    #main-nav a:hover {
        color: #38bdf8;
    }
    #mobile-menu-button {
        display: none;
        color: #D1D5DB;
        background: none;
        border: none;
        cursor: pointer;
    }
    #mobile-menu-button .fa-bars {
        font-size: 1.5rem;
    }
    #mobile-menu {
        display: none;
    }
    #mobile-menu.active {
        display: block;
    }
    #mobile-menu a {
        display: block;
        padding: 0.5rem 1.5rem;
        color: #D1D5DB;
    }
    #mobile-menu a:hover {
        background-color: #1f2937;
    }
    @media (max-width: 767px) {
        #main-nav { display: none; }
        #mobile-menu-button { display: block; }
    }
    @media (min-width: 768px) {
        #main-nav { display: flex; gap: 2rem; }
    }

    /* Hero Section */
    #home {
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
    }
    .hero-content {
        max-width: 56rem;
        margin: 0 auto;
        text-align: center;
        z-index: 10;
    }
    .hero-content img {
        width: 10rem;
        height: 10rem;
        border-radius: 9999px;
        margin: 0 auto 1.5rem auto;
        border: 4px solid #0ea5e9;
        box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.2), 0 4px 6px -2px rgba(14, 165, 233, 0.1);
    }
    .hero-content h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 1rem;
    }
    .hero-content .subtitle {
        font-size: 1.25rem;
        color: #7dd3fc;
        margin-bottom: 2rem;
    }
    .hero-content .description {
        font-size: 1.125rem;
        color: #D1D5DB;
        max-width: 42rem;
        margin: 0 auto 2.5rem auto;
    }
    .hero-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
    }
    .btn {
        display: inline-block;
        font-weight: 700;
        padding: 0.75rem 2rem;
        border-radius: 9999px;
        font-size: 1.125rem;
        transition: all 0.3s;
        transform-origin: center;
        width: 100%;
    }
    .btn:hover {
        transform: scale(1.05);
    }
    .btn-primary {
        background-color: #0ea5e9;
        color: #ffffff;
        box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.4), 0 4px 6px -2px rgba(14, 165, 233, 0.2);
    }
    .btn-primary:hover {
        background-color: #0284c7;
    }
    .btn-secondary {
        border: 2px solid #0ea5e9;
        color: #38bdf8;
    }
    .btn-secondary:hover {
        background-color: #0ea5e9;
        color: #ffffff;
    }
    @media (min-width: 640px) {
        .hero-content h1 { font-size: 3.75rem; }
        .hero-content .subtitle { font-size: 1.5rem; }
        .hero-buttons { flex-direction: row; }
        .btn { width: auto; }
    }

    /* General Section Styling */
    section {
        padding: 5rem 0;
    }
    .section-title {
        font-size: 1.875rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 3rem;
        background: -webkit-linear-gradient(45deg, #38bdf8, #a78bfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (min-width: 768px) {
        section { padding: 8rem 0; }
        .section-title { font-size: 2.25rem; margin-bottom: 4rem; }
    }

    /* About Section */
    #about .container > div {
        max-width: 56rem;
        margin: 0 auto;
        padding: 2rem;
        border-radius: 1rem;
    }
    #about p {
        font-size: 1.125rem;
        line-height: 1.75;
        color: #D1D5DB;
    }
    @media (min-width: 768px) {
        #about .container > div { padding: 3rem; }
    }

    /* Skills, Projects, Certifications Grid */
    .grid {
        display: grid;
        gap: 2rem;
        max-width: 72rem;
        margin: 0 auto;
    }
    @media (min-width: 640px) {
        .grid-cols-sm-2 { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
        .grid-cols-lg-2 { grid-template-columns: repeat(2, 1fr); }
        .grid-cols-lg-3 { grid-template-columns: repeat(3, 1fr); }
        .grid-cols-lg-5 { grid-template-columns: repeat(5, 1fr); }
    }
    
    /* Cards (Skills, Projects, Certs) */
    .card {
        border-radius: 0.75rem;
        text-align: center;
        padding: 1.5rem;
    }
    .card-hover {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card-hover:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
    }
    .skill-card i {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    .skill-card h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #ffffff;
    }
    .project-card, .cert-card {
        border-radius: 1rem;
        overflow: hidden;
        text-align: left;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    .project-card img {
        width: 100%;
        height: 16rem;
        object-fit: cover;
    }
    .project-card-content, .cert-card-content {
        padding: 2rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .project-card h3, .cert-card h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.75rem;
    }
    .project-card p, .cert-card p {
        color: #9CA3AF;
        margin-bottom: 1.5rem;
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
    }
    .tag {
        font-size: 0.875rem;
        font-weight: 500;
        padding: 0.25rem 0.75rem;
        border-radius: 9999px;
    }
    .tag-sky { background-color: rgba(14, 165, 233, 0.2); color: #7dd3fc; }
    .tag-violet { background-color: rgba(139, 92, 246, 0.2); color: #c4b5fd; }
    .card-link {
        font-weight: 600;
        margin-top: auto;
        align-self: flex-start;
    }
    .card-link:hover { text-decoration: underline; }
    .link-sky { color: #38bdf8; }
    .link-sky:hover { color: #7dd3fc; }
    .link-violet { color: #a78bfa; }
    .link-violet:hover { color: #c4b5fd; }
    .link-cyan { color: #22d3ee; }
    .link-cyan:hover { color: #67e8f9; }
    .cert-card i {
        font-size: 2.25rem;
        margin-bottom: 1rem;
    }

    /* Contact Section */
    #contact { text-align: center; }
    #contact p {
        font-size: 1.125rem;
        color: #9CA3AF;
        max-width: 42rem;
        margin: 0 auto 2.5rem auto;
    }
    .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 3rem;
    }
    .social-links a {
        color: #9CA3AF;
        font-size: 1.875rem;
        transition: color 0.3s;
    }
    .social-links a:hover {
        color: #38bdf8;
    }

    /* Footer */
    footer {
        text-align: center;
        padding: 1.5rem 0;
    }
    footer p {
        color: #6B7280;
    }

    /* Utility & Helper Classes */
    .glassmorphism {
        background: rgba(20, 20, 20, 0.6);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .bg-black-50 {
        background-color: rgba(0,0,0,0.5);
    }
    #home::before {
        content: '';
        position: absolute;
        width: 2000px;
        height: 2000px;
        top: 50%;
        left: 50%;
        background-image: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 60%);
        animation: pulse 10s infinite linear;
        transform-origin: center;
    }
    @keyframes pulse {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
        50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
    }
    .reveal {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
    #to-top-button {
        display: none;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: rgba(14, 165, 233, 0.5);
        color: #ffffff;
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
        border: none;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s, background-color 0.3s;
        z-index: 50;
    }
    #to-top-button:hover {
        background-color: #0ea5e9;
    }
  `}</style>
);

// Reusable component for scroll-reveal effect
const Reveal = ({ children }) => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('visible');
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, []);

    return <div ref={ref} className="reveal">{children}</div>;
};

// INDIVIDUAL SECTION COMPONENTS
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header id="header" className="glassmorphism" style={{ padding: isScrolled ? '0.5rem 0' : '0.75rem 0' }}>
            <div className="container header-content">
                <a href="#home" className="logo">B Vighnesh Kumar</a>
                <nav id="main-nav">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#certifications">Certifications</a>
                    <a href="#contact">Contact</a>
                    <a href="https://drive.google.com/drive/folders/1l7s_ImuhapNcJ_joO7l8LpED-E-3ucVw?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
                </nav>
                <button id="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div id="mobile-menu" className={`glassmorphism ${isMenuOpen ? 'active' : ''}`}>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#certifications" onClick={closeMenu}>Certifications</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
                <a href="https://drive.google.com/drive/folders/1l7s_ImuhapNcJ_joO7l8LpED-E-3ucVw?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a>
            </div>
        </header>
    );
};

const Hero = () => (
    <section id="home">
        <div className="container">
            <div className="hero-content">
                <img src="https://placehold.co/150x150/000000/38bdf8?text=VK" alt="B Vighnesh Kumar" />
                <h1>B Vighnesh Kumar</h1>
                <p className="subtitle">Full Stack Developer</p>
                <p className="description">
                    A passionate Computer Science student building scalable and efficient web applications with Java, Spring Boot, and React.js.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="https://drive.google.com/drive/folders/1l7s_ImuhapNcJ_joO7l8LpED-E-3ucVw?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">My Resume</a>
                </div>
            </div>
        </div>
    </section>
);

const About = () => (
    <section id="about">
        <Reveal>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="glassmorphism">
                    <p>
                        I am a Computer Science student with hands-on experience in designing, developing, and maintaining full-stack applications. My expertise lies in using Java, Spring Boot, MySQL, and React.js to create robust and user-friendly solutions. I'm driven by a passion for problem-solving and a desire to build software that meets real-world business needs. I'm currently seeking a Full Stack Developer role where I can contribute to building scalable and efficient systems.
                    </p>
                </div>
            </div>
        </Reveal>
    </section>
);

const Skills = () => (
    <section id="skills" className="bg-black-50">
        <Reveal>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="grid grid-cols-sm-2 grid-cols-lg-5">
                    <div className="card skill-card card-hover glassmorphism">
                        <i className="fab fa-java" style={{ color: '#38bdf8' }}></i>
                        <h3>Java</h3>
                    </div>
                    <div className="card skill-card card-hover glassmorphism">
                        <i className="fas fa-leaf" style={{ color: '#4ade80' }}></i>
                        <h3>Spring Boot</h3>
                    </div>
                    <div className="card skill-card card-hover glassmorphism">
                        <i className="fab fa-react" style={{ color: '#22d3ee' }}></i>
                        <h3>React.js</h3>
                    </div>
                    <div className="card skill-card card-hover glassmorphism">
                        <i className="fas fa-database" style={{ color: '#fb923c' }}></i>
                        <h3>MySQL</h3>
                    </div>
                    <div className="card skill-card card-hover glassmorphism">
                        <i className="fas fa-c" style={{ color: '#60a5fa' }}></i>
                        <h3>C</h3>
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
);

const Projects = () => (
    <section id="projects">
        <Reveal>
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="grid grid-cols-lg-2">
                    <div className="project-card card-hover glassmorphism">
                        <img src="https://placehold.co/600x400/000000/38bdf8?text=AagriGgate" alt="AagriGgate Project" />
                        <div className="project-card-content">
                            <h3>AagriGgate</h3>
                            <p>A full-stack web platform enabling farmers to connect directly with buyers, reducing reliance on intermediaries.</p>
                            <div className="tags">
                                <span className="tag tag-sky">Spring Boot</span>
                                <span className="tag tag-sky">React.js</span>
                                <span className="tag tag-sky">MySQL</span>
                            </div>
                            <a href="https://github.com/B-Vighnesh/AagriGgate" target="_blank" rel="noopener noreferrer" className="card-link link-sky">
                                View on GitHub <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="project-card card-hover glassmorphism">
                        <img src="https://placehold.co/600x400/000000/a78bfa?text=EquiManage" alt="EquiManage Project" />
                        <div className="project-card-content">
                            <h3>EquiManage</h3>
                            <p>A console-based equipment management system for electronics labs to enhance organization and resource tracking.</p>
                             <div className="tags">
                                <span className="tag tag-violet">Java</span>
                                <span className="tag tag-violet">MySQL</span>
                                <span className="tag tag-violet">JDBC</span>
                            </div>
                            <a href="https://github.com/B-Vighnesh/EquiManage" target="_blank" rel="noopener noreferrer" className="card-link link-violet">
                                View on GitHub <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
);

const Certifications = () => (
    <section id="certifications" className="bg-black-50">
        <Reveal>
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="grid grid-cols-lg-3">
                    <div className="cert-card card-hover glassmorphism">
                        <div className="cert-card-content">
                            <i className="fas fa-certificate" style={{ color: '#38bdf8' }}></i>
                            <h3>Programming in Java</h3>
                            <p>IIT Kharagpur (NPTEL)</p>
                            <a href="https://nptel.ac.in/courses/106105191" target="_blank" rel="noopener noreferrer" className="card-link link-sky">
                                View Course <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="cert-card card-hover glassmorphism">
                        <div className="cert-card-content">
                            <i className="fas fa-certificate" style={{ color: '#22d3ee' }}></i>
                            <h3>Java Programming: Arrays, Lists, and Structured Data</h3>
                            <p>Duke University (Coursera)</p>
                            <a href="https://www.coursera.org/learn/java-programming-arrays-lists-data" target="_blank" rel="noopener noreferrer" className="card-link link-cyan">
                                View Course <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="cert-card card-hover glassmorphism">
                        <div className="cert-card-content">
                            <i className="fas fa-certificate" style={{ color: '#a78bfa' }}></i>
                            <h3>Introduction to Databases</h3>
                            <p>Meta (Coursera)</p>
                            <a href="https://www.coursera.org/learn/introduction-to-databases" target="_blank" rel="noopener noreferrer" className="card-link link-violet">
                               View Course <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
    </section>
);

const Contact = () => (
    <section id="contact">
        <Reveal>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p>
                    I'm currently looking for new opportunities. Feel free to reach out if you have a project in mind or just want to connect!
                </p>
                <a href="mailto:vighneshsheregar2004@gmail.com" className="btn btn-primary">Hire Me</a>
                <div className="social-links">
                    <a href="https://linkedin.com/in/b-vighnesh-kumar" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/B-Vighnesh" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://leetcode.com/u/B%20Vighnesh%20Kumar" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i></a>
                </div>
            </div>
        </Reveal>
    </section>
);

const Footer = () => (
    <footer className="bg-black-50">
        <div className="container">
            <p>&copy; {new Date().getFullYear()} B Vighnesh Kumar. All Rights Reserved.</p>
        </div>
    </footer>
);

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button id="to-top-button" onClick={scrollToTop} style={{ display: isVisible ? 'flex' : 'none' }}>
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};


// MAIN APP COMPONENT
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
