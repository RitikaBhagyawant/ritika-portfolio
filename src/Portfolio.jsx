import "./Portfolio.css";
import { useEffect } from "react";

function Portfolio() {

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <>
      <div className="bg-particles">
        <div
          className="particle"
          style={{ width: "100px", height: "100px", top: "10%", left: "15%" }}
        ></div>
      </div>

      <nav>
        <div className="container">
          <div className="logo">RB</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </nav>

   <section id="home" className="hero">
  <div className="container hero-flex">

    {/* LEFT SIDE */}
    <div className="hero-left">
      <h1>Ritika Bhagyawant</h1>
      <p>Software Developer | .NET | React | Django | Python | Angular</p>

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ color: "#34D399", marginBottom: "1rem" }}>
          What I Do
        </h3>

        <p>
          I design and develop secure full-stack applications,
          build REST APIs, optimize databases, and deploy scalable systems to AWS.
        </p>
      </div>

     <div className="hero-buttons-group">
  <a href="#projects" className="btn btn-outline">Projects</a>
  <a href="#experience" className="btn btn-outline">Experience</a>
  <a href="#skills" className="btn btn-outline">Skills</a>
  <a href="#contact" className="btn btn-outline">Contact</a>
  <a href="#education" className="btn btn-outline">Education</a>



</div>
    </div>

    {/* RIGHT SIDE CODE CARD */}
    <div className="hero-code">
      <pre>
{`const developer = {
  name: "Ritika Bhagyawant",
  role: "Full Stack Developer",
  skills: ["React", ".NET", "Django", "SQL","Python"],
  passion: "Building scalable web apps"
};`}
      </pre>
    </div>

  </div>
</section>


{/* 👇 ADD ABOUT SECTION RIGHT HERE 👇 */}

<section id="about">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <p className="section-subtitle">
      Passionate about building secure and scalable Web applications.
    </p>

    <div className="about-content">
      <div className="about-text">
   <p>
I am a passionate Full Stack Developer with hands-on experience in 
.NET (C#), React, Angular, Django, and SQL Server. I specialize in 
building scalable, secure, and high-performance web applications 
using clean architecture principles and industry best practices.
</p>
<p>
My experience includes designing RESTful APIs, implementing secure 
authentication systems, optimizing database queries, and deploying 
applications to cloud platforms like AWS. I enjoy solving complex 
problems, improving system performance, and creating seamless user 
experiences that deliver real business value.
</p>
      </div>

      <div className="stats">
<div 
  className="stat-item"
  onClick={() => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  }}
  style={{ cursor: "pointer" }}
>
  <div className="stat-number">2+</div>
  <div className="stat-label">Years Experience</div>
</div>

<div 
  className="stat-item"
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }}
  style={{ cursor: "pointer" }}
>
  <div className="stat-number">5+</div>
  <div className="stat-label">Major Projects</div>
</div>

      </div>
    </div>
  </div>
</section>

<section id="skills">
  <div className="container">
    <h2 className="section-title">Skills & Technologies</h2>
    <p className="section-subtitle">
      A comprehensive toolkit for modern web development
    </p>

    <div className="skills-grid">

      <div className="skill-category">
        <h3>Frontend</h3>
        <ul className="skill-list">
          <li>React.js</li>
          <li>Angular</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Backend</h3>
        <ul className="skill-list">
          <li>Python</li>
          <li>C# / .NET</li>
          <li>Django</li>
          <li>Flask</li>
          <li>RESTful APIs</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Databases</h3>
        <ul className="skill-list">
          <li>Microsoft SQL Server</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>SQLite</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Tools & Platforms</h3>
        <ul className="skill-list">
          <li>Git & GitHub</li>
          <li>AWS</li>
          <li>Postman</li>
          <li>Firebase</li>
        </ul>
      </div>

    </div>
  </div>
</section>


<section id="experience">
  <div className="container">
    <h2 className="section-title">Work Experience</h2>
    <p className="section-subtitle">
      Professional journey and key achievements
    </p>

    <div className="experience-timeline">

      {/* Design Accent */}
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="experience-title">Software Developer Intern</h3>
          <div className="experience-company">Design Accent Limited</div>
          <div className="experience-date">
            September 2025 – January 2026 | Goregaon (W), Mumbai
          </div>
        </div>

        <ul>
          <li>Developed full-stack web applications using .NET (C#), React, and Angular.</li>
          <li>Designed and implemented secure REST APIs with JWT authentication and role-based access control.</li>
          <li>Built Super Admin dashboards for centralized system management.</li>
          <li>Optimized Microsoft SQL Server queries and stored procedures for performance.</li>
          <li>Integrated OTP verification and Firebase notifications.</li>
          <li>Managed AWS deployment and production-level debugging.</li>
        </ul>
      </div>

      {/* Rayds */}
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="experience-title">Web Developer Intern</h3>
          <div className="experience-company">Rayds Services Limited</div>
          <div className="experience-date">
            August 2025 – September 2025 | Malad (W), Mumbai
          </div>
        </div>

        <ul>
          <li>Built WhatsApp BOT using Node.js, Express, and MySQL.</li>
          <li>Implemented QR-based WhatsApp login scanner system.</li>
          <li>Integrated Postman APIs for seamless message delivery.</li>
          <li>Developed responsive web pages for white-label clients.</li>
        </ul>
      </div>

      {/* Health Prime */}
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="experience-title">Analyst</h3>
          <div className="experience-company">Health Prime International</div>
          <div className="experience-date">
            May 2024 – July 2025 | Andheri (E), Mumbai
          </div>
        </div>

        <ul>
          <li>Built CRUD applications in Python for patient medical record management.</li>
          <li>Developed backend services using Flask/Django with REST APIs.</li>
          <li>Processed large claim datasets using Python (pandas, NumPy).</li>
          <li>Automated weekly denial reports reducing manual effort.</li>
          <li>Created dashboards to present KPIs to stakeholders.</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section id="projects">
  <div className="container">
    <h2 className="section-title">Featured Projects</h2>
    <p className="section-subtitle">
      Showcasing my technical capabilities and problem-solving skills
    </p>

    <div className="projects-grid">

      <div className="project-card">
        <div className="project-content">
          <h3 className="project-title">Flight Booking System</h3>
          <p className="project-description">
            Full-stack flight booking platform with secure authentication and payment integration.
          </p>

          <div className="project-tech">
            <span className="tech-tag">Django</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">SQL</span>
            <span className="tech-tag">Razorpay</span>
          </div>

          <ul className="project-features">
            <li>Secure user authentication</li>
            <li>Interactive seat selection</li>
            <li>Dynamic pricing system</li>
            <li>Admin dashboard control</li>
          </ul>
        </div>
      </div>

      <div className="project-card">
        <div className="project-content">
          <h3 className="project-title">News Management System</h3>
          <p className="project-description">
            Robust CRUD-based content management platform with modular architecture.
          </p>

          <div className="project-tech">
            <span className="tech-tag">Django</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">SQL</span>
          </div>

          <ul className="project-features">
            <li>Full CRUD functionality</li>
            <li>Structured data handling</li>
            <li>Clean backend logic</li>
          </ul>
        </div>
      </div>

      <div className="project-card">
        <div className="project-content">
          <h3 className="project-title">WhatsApp BOT System</h3>
          <p className="project-description">
            Automated WhatsApp messaging system with QR login authentication.
          </p>

          <div className="project-tech">
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express</span>
            <span className="tech-tag">MySQL</span>
          </div>

          <ul className="project-features">
            <li>QR-based login</li>
            <li>Session management</li>
            <li>API integration</li>
          </ul>
        </div>
      </div>

      <div className="project-card">
  <div className="project-content">
    <h3 className="project-title">E-Commerce UI Clone</h3>
    <p className="project-description">
      Fully responsive e-commerce frontend clone built with modern UI practices.
    </p>

    <div className="project-tech">
      <span className="tech-tag">HTML</span>
      <span className="tech-tag">CSS</span>
      <span className="tech-tag">Bootstrap</span>
      <span className="tech-tag">JavaScript</span>
    </div>

    <ul className="project-features">
      <li>Responsive layout</li>
      <li>Product filtering</li>
      <li>Add to cart UI</li>
      <li>Modern clean design</li>
    </ul>
  </div>
</div>


    </div>
  </div>
</section>

<section id="education">
  <div className="container">
    <h2 className="section-title">Education</h2>
    <p className="section-subtitle">
      Academic background and professional training
    </p>

    <div className="education-wrapper">

      <div className="education-card">
        <h3>Masters in Python Full Stack Development</h3>
        <p className="education-institute">IT Vedant</p>
        <p className="education-desc">
          Specialized training in Full Stack Development covering Python,
          Django, REST APIs, frontend frameworks, and database integration.
        </p>
      </div>

      <div className="education-card">
        <h3>Bachelor of Science (B.Sc.) in Physics</h3>
        <p className="education-institute">
          Sathaye College of Arts, Commerce and Science
        </p>
        <p className="education-desc">
          Built strong analytical and problem-solving foundations with
          mathematical and scientific concepts.
        </p>
      </div>

    </div>
  </div>
</section>

<section id="contact">
  <div className="container">
    <h2 className="section-title">Contact Me</h2>
    <p className="section-subtitle">
      Let’s build something amazing together.
    </p>

    <div className="contact-content">

      <div className="contact-info">

        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <a href="mailto:yourmail@gmail.com">
            ritikabhagyawant@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📞</div>
          <a href="tel:+919999999999">
            +91 9137787057
          </a>
        </div>

        <div className="contact-item">
          <div className="contact-icon">💼</div>
          <a 
            href="https://www.linkedin.com/in/ritikabhagyawant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

      </div>

    </div>
  </div>
</section>

{/* 👇 Footer stays below 👇 */}

<footer className="footer">
  <div className="footer-container">

    {/* LEFT SIDE */}
    <div className="footer-brand">
      <h2>Ritika Bhagyawant</h2>
      <p>
        Building scalable and secure web applications with
        modern technologies and clean architecture.
      </p>
    </div>

    {/* NAVIGATION */}
    <div className="footer-links">
      <h4>Navigation</h4>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>

    {/* SOCIAL */}
    <div className="footer-links">
      <h4>Social</h4>
      <a href="https://github.com/RitikaBhagyawant" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/ritikabhagyawant/" target="_blank">LinkedIn</a>
      <a href="#">Instagram</a>
    </div>

    {/* SCROLL TO TOP */}
    <div className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Ritika Bhagyawant. All rights reserved.
  </div>
</footer>

    </>
  );
}

export default Portfolio;
