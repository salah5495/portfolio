import { useRef, useEffect } from "react";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    label: "Languages",
    icon: "{ }",
    items: [
      { name: "JavaScript", level: 100 },
      { name: "Python", level: 90 },
      { name: "C#", level: 80 },
      { name: "HTML/CSS", level: 100 },
    ],
  },
  {
    label: "Frameworks",
    icon: "⚡",
    items: [
      { name: "React", level: 100 },
      { name: "Node.js", level: 95 },
      { name: "Django", level: 92 },
      { name: "ASP.NET / Blazor", level: 78 },
    ],
  },
  {
    label: "Databases",
    icon: "◈",
    items: [
      { name: "MongoDB", level: 95 },
      { name: "MySQL", level: 78 },
      { name: "MSSQL Server", level: 72 },
    ],
  },
  {
    label: "Cloud & Tools",
    icon: "☁",
    items: [
      { name: "Azure", level: 75 },
      { name: "AWS (SES)", level: 65 },
      { name: "Git / GitHub", level: 100 },
      { name: "REST APIs", level: 100 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = level + "%";
            }
          }, delay);
        }
      },
      { threshold: 0.1 },
    );
    if (barRef.current) observer.observe(barRef.current.parentElement);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className={styles.skill}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.track}>
        <div
          ref={barRef}
          className={styles.bar}
          style={{ width: 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>02 / Skills</span>
          <h2 className={styles.title}>Technical Toolkit</h2>
          <p className={styles.subtitle}>Technologies I work with day-to-day</p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => (
            <div key={group.label} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{group.icon}</span>
                <h3 className={styles.cardTitle}>{group.label}</h3>
              </div>
              <div className={styles.skills}>
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={gi * 100 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tags}>
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Azure",
            "AWS",
            "Python",
            "Django",
            "REST API",
            "Git",
            "MySQL",
            "C#",
            "Blazor",
            "JavaScript",
            "MERN Stack",
            "Power Apps",
          ].map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
