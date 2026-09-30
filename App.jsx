import "./App.css";

const projects = [
  {
    title: "Aurora Dashboard",
    category: "Web Application",
    description:
      "A clean analytics dashboard designed around simple data visualization and a calm user experience.",
    tags: ["React", "UI/UX", "Dashboard"],
  },
  {
    title: "Cloud Studio",
    category: "Brand & Website",
    description:
      "A modern landing page for a creative technology studio with soft gradients and fluid interactions.",
    tags: ["Web Design", "Branding", "Frontend"],
  },
  {
    title: "Notespace",
    category: "Product Design",
    description:
      "A minimal productivity application focused on organizing ideas without visual clutter.",
    tags: ["Product", "Design", "Prototype"],
  },
];

function App() {
  return (
    <div className="site">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Alex<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's talk <span>↗</span>
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              Available for new projects
            </div>

            <h1>
              Building digital
              <br />
              <span>experiences</span> that feel
              <br />
              effortless.
            </h1>

            <p className="hero-description">
              I'm Alex, a designer & frontend developer creating thoughtful,
              modern websites and digital products.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore my work <span>↓</span>
              </a>

              <a href="#contact" className="secondary-button">
                Get in touch
              </a>
            </div>
          </div>

          {/* HERO GRAPHIC */}
          <div className="hero-art">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>

            <div className="floating-card card-one">
              <div className="mini-icon">✦</div>

              <div>
                <strong>Creative</strong>
                <small>Design thinking</small>
              </div>
            </div>

            <div className="orb">
              <div className="orb-inner"></div>
            </div>

            <div className="floating-card card-two">
              <span className="code-symbol">&lt;/&gt;</span>

              <div>
                <strong>Development</strong>
                <small>Clean & scalable</small>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-label">01 — About me</div>

          <div className="about-grid">
            <div>
              <h2>
                Turning ideas into
                <span> meaningful</span> digital experiences.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I enjoy combining thoughtful design with modern technology to
                create digital experiences that are beautiful, intuitive, and
                useful.
              </p>

              <p>
                My approach is simple: understand the problem, remove the
                unnecessary, and build something people genuinely enjoy using.
              </p>

              <a href="#contact" className="text-link">
                More about me <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work section" id="work">
          <div className="section-heading">
            <div>
              <div className="section-label">02 — Selected work</div>
              <h2>Things I've built.</h2>
            </div>

            <p>
              A selection of projects where design,
              <br />
              technology, and ideas come together.
            </p>
          </div>

          <div className="projects">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <div className={`project-image project-${index + 1}`}>
                  <div className="project-window">
                    <div className="window-top">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="window-content">
                      {index === 0 && (
                        <>
                          <div className="fake-sidebar"></div>

                          <div className="fake-dashboard">
                            <div className="fake-heading"></div>

                            <div className="fake-chart">
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                            </div>
                          </div>
                        </>
                      )}

                      {index === 1 && (
                        <div className="landing-preview">
                          <span>CREATE</span>

                          <strong>
                            Better
                            <br />
                            digital
                            <br />
                            spaces.
                          </strong>

                          <div className="preview-circle"></div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="notes-preview">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-title">
                    <span className="project-number">
                      0{index + 1}
                    </span>

                    <div>
                      <h3>{project.title}</h3>
                      <small>{project.category}</small>
                    </div>
                  </div>

                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <div className="section-label">03 — Expertise</div>

          <div className="skills-grid">
            <div>
              <h2>
                A balance of
                <span> creativity</span> and technology.
              </h2>
            </div>

            <div className="skill-list">
              <div className="skill">
                <span>01</span>
                <strong>UI / UX Design</strong>
                <em>↗</em>
              </div>

              <div className="skill">
                <span>02</span>
                <strong>Frontend Development</strong>
                <em>↗</em>
              </div>

              <div className="skill">
                <span>03</span>
                <strong>Design Systems</strong>
                <em>↗</em>
              </div>

              <div className="skill">
                <span>04</span>
                <strong>Creative Development</strong>
                <em>↗</em>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="contact-card">
            <div className="contact-glow"></div>

            <div className="section-label">04 — Contact</div>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it real.</span>
            </h2>

            <p>
              I'm always open to interesting projects, collaborations,
              and conversations.
            </p>

            <a
              href="mailto:hello@example.com"
              className="contact-button"
            >
              hello@example.com <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <span>© 2026 Alex Studio</span>
        <span>Designed & built with care.</span>
      </footer>
    </div>
  );
}

export default App;
