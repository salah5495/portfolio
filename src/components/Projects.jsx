import { useState } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "PassYourPermit",
    type: "Company Project",
    label: "Live Production",
    description:
      "A real-world online course platform built over 6+ months for TruckinAcademy LLC. Used to teach trucking industry professionals certification courses. Handles user enrollment, course delivery, and progress tracking.",
    stack: ["React", "Node.js", "MongoDB", "Azure"],
    features: [
      "Course management system",
      "User enrollment & auth",
      "Progress tracking",
      "Content delivery",
    ],
    color: "#00e5ff",
    icon: "🚛",
    link: "https://www.passyourpermit.com/",
    github: null,
  },
  {
    title: "Real Estate App",
    type: "Personal Project",
    label: "MERN Stack",
    description:
      "Full-stack real estate platform built on the MERN stack. Sellers can post properties, buyers can browse listings and contact sellers via email. Integrated AWS SES for automated email communication.",
    stack: ["MongoDB", "Express", "React", "Node.js", "AWS SES"],
    features: [
      "Property listings",
      "AWS SES email integration",
      "User auth & authorization",
      "Seller/buyer roles",
    ],
    color: "#7b61ff",
    icon: "🏠",
    link: "https://github.com/salah5495/real-estate-app",
    github: "https://github.com/salah5495/real-estate-app",
  },
  {
    title: "Student Assistant App",
    type: "Hackathon Project",
    label: "Microsoft Game of Learners",
    description:
      "Built during a 3-week Microsoft Game of Learners hackathon with a team of four. A Power Apps-based student assistant that helps students organize and manage academic tasks and schedules.",
    stack: ["Power Apps", "Microsoft 365", "Cloud"],
    features: [
      "Task organization",
      "Schedule management",
      "Microsoft integration",
      "Team collaboration",
    ],
    color: "#ff6b6b",
    icon: "🎓",
    link: "https://devpost.com/software/student-assistant-app",
    github: null,
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>04 / Projects</span>
          <h2 className={styles.title}>Featured Work</h2>
          <p className={styles.subtitle}>Things I've built and shipped</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`${styles.card} ${hovered === i ? styles.hovered : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ "--project-color": project.color }}
            >
              <div className={styles.cardGlow} />

              <div className={styles.cardTop}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectType}>{project.type}</span>
                  <span
                    className={styles.projectLabel}
                    style={{
                      borderColor: project.color + "30",
                      color: project.color,
                    }}
                  >
                    {project.label}
                  </span>
                </div>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.iconBtn}
                      title="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="18"
                        height="18"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.iconBtn}
                      title="Live Demo"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        width="18"
                        height="18"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.projectIcon}>{project.icon}</div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>

              <ul className={styles.features}>
                {project.features.map((f) => (
                  <li key={f}>
                    <span style={{ color: project.color }}>▸</span> {f}
                  </li>
                ))}
              </ul>

              <div className={styles.projectStack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
