import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'TruckinAcademy LLC',
    period: 'Aug 2023 — Oct 2025',
    type: 'Full-time',
    stack: ['Node.js', 'React', 'MongoDB', 'Azure'],
    description:
      'Built and maintained resilient, scalable solutions for an online trucking education platform. Engineered full-stack features using Node.js, MongoDB, and React, deploying on Azure infrastructure. Developed PassYourPermit — a real-world online course platform serving trucking industry students.',
    highlights: [
      'Developed PassYourPermit, a live production course platform',
      'Leveraged Azure cloud services for scalable deployments',
      'Architected MERN stack applications for performance',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'The Jitu',
    period: 'Jul 2023 — Aug 2023',
    type: 'Internship',
    stack: ['C#', 'Blazor', 'ASP.NET', 'MSSQL Server'],
    description:
      'Contributed to robust .NET-based solutions during an intensive internship. Worked with C#, Blazor, Web APIs, and MS SQL Server to develop and deliver enterprise-grade features.',
    highlights: [
      'Built Web APIs using ASP.NET architecture',
      'Developed Blazor UI components for internal tools',
      'Worked with MSSQL Server for data management',
    ],
  },
]

const education = {
  degree: 'BSc. Mathematics and Computer Science',
  school: 'Kirinyaga University',
  period: 'Sep 2019 — Apr 2023',
  coursework: ['OOP', 'Data Structures & Algorithms', 'Azure', 'AWS'],
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Django', 'MySQL', 'MongoDB', 'NodeJs', 'Blazor', 'ASP.Net'],
}

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>03 / Experience</span>
          <h2 className={styles.title}>Work History</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.timeline}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.dot} />
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <span className={styles.company}>{exp.company}</span>
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.period}>{exp.period}</span>
                      <span className={`${styles.type} ${exp.type === 'Internship' ? styles.intern : ''}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className={styles.description}>{exp.description}</p>

                  <ul className={styles.highlights}>
                    {exp.highlights.map((h, hi) => (
                      <li key={hi}>
                        <span className={styles.bullet}>→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.stack}>
                    {exp.stack.map(tech => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sidebar}>
            <div className={styles.eduCard}>
              <div className={styles.eduIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className={styles.eduDegree}>{education.degree}</h3>
              <span className={styles.eduSchool}>{education.school}</span>
              <span className={styles.eduPeriod}>{education.period}</span>
              <div className={styles.divider} />
              <p className={styles.courseLabel}>Relevant Coursework</p>
              <div className={styles.courses}>
                {education.coursework.map(c => (
                  <span key={c} className={styles.course}>{c}</span>
                ))}
              </div>
              <div className={styles.divider} />
              <p className={styles.courseLabel}>Skills Developed</p>
              <div className={styles.courses}>
                {education.skills.map(s => (
                  <span key={s} className={styles.course}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.leaderCard}>
              <div className={styles.leaderHeader}>
                <span className={styles.leaderIcon}>◈</span>
                Leadership
              </div>
              <p className={styles.leaderTitle}>Web Lead</p>
              <p className={styles.leaderOrg}>Google Developer Student Club</p>
              <p className={styles.leaderSchool}>Kirinyaga University</p>
              <p className={styles.leaderPeriod}>Mar 2022 — Apr 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
