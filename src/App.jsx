import { useState } from 'react'
import './App.css'

const GITHUB = 'https://github.com/JohnLorena22'
const EMAIL = 'johnbrianlorena79@gmail.com'

// Tip: replace each link with the project's own GitHub or live URL.
const projects = [
  {
    name: 'Task-weaver',
    description:
      'A task manager for adding, organizing, and finishing your to-dos in one place.',
    link: GITHUB,
  },
  {
    name: 'Computer cafe shop',
    description:
      'A shop project for managing a computer cafe: its services, sessions, and sales.',
    link: GITHUB,
  },
  {
    name: 'Simple CRUD',
    description:
      'A small app that creates, reads, updates, and deletes records. The foundation for everything else I build.',
    link: GITHUB,
  },
]

const skills = [
  'React',
  'JavaScript',
  'Vite',
  'HTML & CSS',
  'Java',
  'Git & GitHub',
  'Vercel',
]

const initialTasks = [
  { id: 1, text: 'Build Task-weaver', done: true },
  { id: 2, text: 'Build the Computer cafe shop', done: true },
  { id: 3, text: 'Deploy my portfolio', done: true },
  { id: 4, text: 'Get better at Java', done: false },
]

export default function App() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggle = (id) =>
    setTasks((current) =>
      current.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )

  return (
    <div className="page">
      <header className="hero">
        <h1>Hi, I'm John Lorena.</h1>
        <p className="lead">
          I build small web apps with React and JavaScript, and I'm growing my
          skills in Java.
        </p>

        <div className="panel">
          <h2 className="panel-title">What I'm working on</h2>
          <ul className="tasks">
            {tasks.map((task) => (
              <li key={task.id}>
                <label className={task.done ? 'task done' : 'task'}>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggle(task.id)}
                  />
                  <span>{task.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        <section>
          <h2>Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.name}>
                <a href={p.link} target="_blank" rel="noreferrer">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="chips">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p className="contact-text">
            Have a project or an opportunity in mind? Send me an email.
          </p>
          <ul className="contact">
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                github.com/JohnLorena22
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} John Lorena</p>
      </footer>
    </div>
  )
}