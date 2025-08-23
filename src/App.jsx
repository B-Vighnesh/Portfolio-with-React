import React, { useState, useEffect, useRef } from 'react';
import "./App.css"; 
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
