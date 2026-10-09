import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const projects = [
    {
      title: "Computer Cafe System",
      description:
        "A computer cafe station management system for managing cafe computers, station status, tiers, and hourly rates.",
      technologies: ["React", "Laravel", "PHP", "SQLite", "REST API"],
      github: "https://github.com/JohnLorena22/com-cafe",
      type: "Full Stack",
    },
    {
      title: "Task Weaver",
      description:
        "A task management application with CRUD functionality, task completion, filtering, and a Laravel REST API backend.",
      technologies: ["React", "Laravel", "PHP", "Eloquent", "SQLite"],
      github: "https://github.com/JohnLorena22/task-weaver",
      type: "Full Stack",
    },
    {
      title: "React CRUD Application",
      description:
        "A simple CRUD application created to practice React components, forms, routing, and state management.",
      technologies: ["React", "JavaScript", "React Router", "Bootstrap"],
      github: "https://github.com/JohnLorena22",
      type: "Frontend",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Vite",
    "Laravel",
    "PHP",
    "MySQL",
    "SQLite",
    "REST API",
    "Git",
    "GitHub",
    "Bootstrap",
    "HTML & CSS",
  ];

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            JL<span>.</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="hero section">
          <div className="hero-container">
            <div className="hero-text">
              <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>

              <h1>
                Building simple
                <br />
                <span>solutions with code.</span>
              </h1>

              <p className="hero-description">
                Hi, I'm <strong>John Lorena</strong>. I'm a Computer
                Science student interested in web development,
                application development, and learning how software
                systems work.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Projects
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="hero-card">
              <div className="terminal">
                <div className="terminal-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="terminal-content">
                  <p>
                    <span className="terminal-symbol">$</span> whoami
                  </p>

                  <p className="terminal-output">
                    computer science student
                  </p>

                  <p>
                    <span className="terminal-symbol">$</span> skills
                  </p>

                  <p className="terminal-output">
                    React · Laravel · PHP
                  </p>

                  <p>
                    <span className="terminal-symbol">$</span> status
                  </p>

                  <p className="terminal-output">
                    learning & building...
                  </p>

                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="content-container">
            <div className="section-heading">
              <p className="eyebrow">ABOUT ME</p>
              <h2>A student who enjoys building things.</h2>
            </div>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a Computer Science student developing my
                  skills in web and application development.
                </p>

                <p>
                  Most of my projects focus on understanding how
                  frontend interfaces, backend APIs, databases,
                  and CRUD systems work together.
                </p>

                <p>
                  I enjoy learning by building real projects and
                  improving them step by step.
                </p>
              </div>

              <div className="about-details">
                <div className="detail-item">
                  <span>Focus</span>
                  <strong>Web Development</strong>
                </div>

                <div className="detail-item">
                  <span>Frontend</span>
                  <strong>React / JavaScript</strong>
                </div>

                <div className="detail-item">
                  <span>Backend</span>
                  <strong>Laravel / PHP</strong>
                </div>

                <div className="detail-item">
                  <span>Database</span>
                  <strong>MySQL / SQLite</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-alt">
          <div className="content-container">
            <div className="section-heading">
              <p className="eyebrow">SKILLS</p>
              <h2>Technologies I'm learning.</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="content-container">
            <div className="section-heading">
              <p className="eyebrow">PROJECTS</p>
              <h2>Things I've built.</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">
                    0{index + 1}
                  </div>

                  <p className="project-type">
                    {project.type}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-dark">
          <div className="content-container contact-container">
            <div className="section-heading">
              <p className="eyebrow">CONTACT</p>

              <h2>Let's connect.</h2>
            </div>

            <p className="contact-description">
              If you'd like to see more of my work, you can visit
              my GitHub profile.
            </p>

            <div className="contact-buttons">
              <a
                href="https://github.com/JohnLorena22"
                target="_blank"
                rel="noopener noreferrer"
                className="light-button"
              >
                GitHub Profile
              </a>

              <a
                href="mailto:johnbrianlorena79@gmail.com"
                className="outline-light-button"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} John Lorena
        </p>
      </footer>
    </div>
  );
}

export default App;