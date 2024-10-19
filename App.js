import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => (
  <header>
    <h1>Inyat Nathani</h1>
    <nav>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

// About Me Section
const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>I'm a software developer and IT consultant specializing in building websites, webshops, and server management solutions for businesses. Currently, I'm looking to contribute to companies that want to optimize their online presence.</p>
    <img src="/path-to-your-image.jpg" alt="Inyat Nathani" className="profile-img" />
  </section>
);

// Skills Section
const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>Frontend: HTML, CSS, JavaScript, React</li>
      <li>Backend: Java, Spring Boot, REST APIs</li>
      <li>Database: MySQL, SQL</li>
      <li>Webshops: WooCommerce, Shopify</li>
      <li>Hosting: VPS, Cloud servers, CPanel</li>
      <li>SEO Optimization</li>
    </ul>
  </section>
);

// Projects Section
const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <img src="/path-to-your-project-image1.jpg" alt="Webshop" />
      <h3>Webshop Development</h3>
      <p>Created an optimized webshop using WooCommerce for a local business to improve their online sales.</p>
      <a href="https://github.com/inyat-nathani/webshop-project" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
    <div className="project">
      <img src="/path-to-your-project-image2.jpg" alt="Cloud Server" />
      <h3>Cloud Server Setup</h3>
      <p>Configured a cloud server for hosting a scalable web application, improving performance for high-traffic usage.</p>
      <a href="https://github.com/inyat-nathani/cloud-server-project" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  </section>
);

// Contact Section
const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:inyat.nathani@gmail.com">inyat.nathani@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/inyat-nathani" target="_blank" rel="noopener noreferrer">Inyat Nathani</a></p>
  </section>
);

// Footer Component
const Footer = () => (
  <footer>
    <p>&copy; 2024 Inyat Nathani. All rights reserved.</p>
  </footer>
);

export default App;
