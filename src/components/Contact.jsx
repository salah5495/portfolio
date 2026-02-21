import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("abdullahisalahdiis5395@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.label}>05 / Contact</span>
            <h2 className={styles.title}>
              Let's build
              <br />
              <span className={styles.titleAccent}>something</span>
              <br />
              great.
            </h2>
            <p className={styles.subtitle}>
              I'm currently open to new opportunities. Whether you have a
              project, a role, or just want to chat about tech — my inbox is
              always open.
            </p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Nairobi, Kenya</span>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>💼</span>
                <div>
                  <span className={styles.infoLabel}>Status</span>
                  <span
                    className={styles.infoValue}
                    style={{ color: "var(--accent)" }}
                  >
                    Available for hire
                  </span>
                </div>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>⚡</span>
                <div>
                  <span className={styles.infoLabel}>Experience</span>
                  <span className={styles.infoValue}>2+ Years</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.emailCard}>
              <p className={styles.emailHint}>Shoot me an email</p>
              <div className={styles.emailBox}>
                <span className={styles.emailText}>
                  abdullahisalahdiis5395@gmail.com
                </span>
                <button className={styles.copyBtn} onClick={copyEmail}>
                  {copied ? (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="16"
                        height="16"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        width="16"
                        height="16"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className={styles.orLine}>
                <span />
                <span>or</span>
                <span />
              </div>

              <a
                href="mailto:abdullahisalahdiis5395@gmail.com"
                className={styles.mailBtn}
              >
                Open in Mail Client
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="16"
                  height="16"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://github.com/salah5495"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahi-salah-a996ba314/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerText}>
            Designed & Built by{" "}
            <span style={{ color: "var(--accent)" }}>Abdullahi Salah</span> ·
            Nairobi, Kenya · {new Date().getFullYear()}
          </span>
          <span className={styles.footerMono}>Built with React + Vite</span>
        </footer>
      </div>
    </section>
  );
}
