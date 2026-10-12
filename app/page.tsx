import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  ArrowIcon,
  AwardIcon,
  CapIcon,
  DownloadIcon,
  GlobeIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  industryIcons,
} from "@/components/Icons";
import {
  certification,
  clientGroups,
  cvPath,
  education,
  erpModules,
  experience,
  languages,
  profile,
  softSkills,
  stats,
  technicalSkills,
} from "@/data/profile";

function SectionHead({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div className="section__head reveal">
      <span className="kicker">{kicker}</span>
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
  );
}

function CompanyLogo({ monogram, color, name }: { monogram: string; color: string; name: string }) {
  return (
    <span
      className="company-logo"
      style={{ "--logo": color } as React.CSSProperties}
      role="img"
      aria-label={`${name} logo`}
    >
      <span data-len={monogram.length}>{monogram}</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <Reveal />

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top" aria-label="Introduction">
          <div className="hero__grid-bg" aria-hidden />
          <div className="container hero__inner">
            <div className="hero__badges reveal">
              <span className="badge badge--live">
                <span className="dot" /> {profile.availability}
              </span>
              <span className="badge">
                <PinIcon size={14} /> {profile.location}
              </span>
            </div>

            <h1 className="hero__title reveal">
              {profile.name}
              <span className="hero__title-accent">Oracle ERP, built to last.</span>
            </h1>

            <p className="hero__lead reveal">
              <strong>Head of IT and senior Oracle developer.</strong> Zain builds the Forms, Reports,
              APEX applications and PL/SQL that ERP systems run on, and has spent 5+ years doing it for
              companies in Saudi Arabia and Pakistan.
            </p>

            <div className="hero__cta reveal">
              <a className="btn btn--primary" href={cvPath} download>
                <DownloadIcon size={18} /> Download CV
              </a>
              <a className="btn btn--ghost" href="#contact">
                Get in touch <ArrowIcon size={16} />
              </a>
              <a
                className="icon-btn icon-btn--lg"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>

            <dl className="stats reveal">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container about">
            <SectionHead id="about" kicker="01 · About" title="Turning business processes into Oracle applications." />
            <div className="about__body reveal">
              <p className="about__summary">{profile.summary}</p>
              <div className="about__aside">
                <div className="oracle-chip">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/oracle/oracle-original.svg"
                    alt="Oracle"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                  <div>
                    <strong>{certification.name}</strong>
                    <span>
                      {certification.issuer} · {certification.year}
                    </span>
                  </div>
                </div>
                <ul className="about__facts">
                  <li>
                    <span>Current role</span>Head of IT, Mesk
                  </li>
                  <li>
                    <span>Focus</span>APEX · Forms · Reports · PL/SQL
                  </li>
                  <li>
                    <span>Databases</span>Oracle 19c / 21c
                  </li>
                  <li>
                    <span>Languages</span>English · Urdu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section section--alt" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <SectionHead id="experience" kicker="02 · Experience" title="Where he has built and led." />
            <ol className="timeline">
              {experience.map((job) => (
                <li className="job reveal" key={job.name}>
                  <div className="job__rail" aria-hidden>
                    <span className={`job__node ${job.current ? "is-current" : ""}`} />
                  </div>
                  <article className="job__card">
                    <header className="job__head">
                      <CompanyLogo monogram={job.monogram} color={job.color} name={job.name} />
                      <div className="job__titles">
                        <h3>{job.role}</h3>
                        <p className="job__company">
                          {job.name}
                          <span> · {job.location}</span>
                        </p>
                        <p className="job__sub">{job.subrole}</p>
                      </div>
                      <span className={`job__period ${job.current ? "is-current" : ""}`}>
                        {job.period}
                      </span>
                    </header>
                    {job.intro && <p className="job__intro">{job.intro}</p>}
                    <ul className="job__points">
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <ul className="tags" aria-label="Technologies">
                      {job.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="section" id="clients" aria-labelledby="clients-title">
          <div className="container">
            <SectionHead id="clients" kicker="03 · Clients" title="Custom ERP rollouts across four industries." />
            <p className="section__intro reveal">
              At Vision Plus, Zain designed, built and rolled out custom Oracle ERP applications for these
              organisations, alongside a standard ERP product used by more than 30 clients.
            </p>
            <div className="clients">
              {clientGroups.map((g) => {
                const Icon = industryIcons[g.icon];
                return (
                  <article className="client-card reveal" key={g.industry}>
                    <header>
                      <span className="client-card__icon">
                        <Icon size={22} />
                      </span>
                      <h3>{g.industry}</h3>
                      <span className="client-card__count">{g.clients.length}</span>
                    </header>
                    <ul>
                      {g.clients.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section section--alt" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <SectionHead id="skills" kicker="04 · Skills" title="Tools, modules and how he works." />

            <h3 className="sub-head reveal">Technical stack</h3>
            <ul className="skills">
              {technicalSkills.map((s) => (
                <li className="skill reveal" key={s.name}>
                  <span className="skill__icon">
                    {s.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.icon} alt="" width={28} height={28} loading="lazy" />
                    ) : (
                      <span className="skill__mark">{s.mark}</span>
                    )}
                  </span>
                  <span className="skill__text">
                    <strong>{s.name}</strong>
                    <span>{s.detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="skills-split">
              <div className="reveal">
                <h3 className="sub-head">ERP modules</h3>
                <ul className="pills pills--accent">
                  {erpModules.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div className="reveal">
                <h3 className="sub-head">Soft skills</h3>
                <ul className="pills">
                  {softSkills.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education" aria-labelledby="education-title">
          <div className="container">
            <SectionHead id="education" kicker="05 · Education" title="Education, certification and languages." />
            <div className="edu">
              <article className="edu-card reveal">
                <span className="edu-card__icon">
                  <CapIcon size={22} />
                </span>
                <span className="edu-card__label">Education</span>
                <h3>{education.school}</h3>
                <p>{education.degree}</p>
                <span className="edu-card__year">Graduated {education.year}</span>
              </article>
              <article className="edu-card edu-card--feature reveal">
                <span className="edu-card__icon">
                  <AwardIcon size={22} />
                </span>
                <span className="edu-card__label">Certification</span>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
                <span className="edu-card__year">{certification.year}</span>
              </article>
              <article className="edu-card reveal">
                <span className="edu-card__icon">
                  <GlobeIcon size={22} />
                </span>
                <span className="edu-card__label">Languages</span>
                <ul className="langs">
                  {languages.map((l) => (
                    <li key={l.code}>
                      <span className="langs__code">{l.code}</span>
                      <span>
                        <strong>{l.name}</strong>
                        <small>{l.level}</small>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact__panel reveal">
              <div className="contact__intro">
                <span className="kicker kicker--light">06 · Contact</span>
                <h2 id="contact-title">Let&apos;s talk about your Oracle project.</h2>
                <p>
                  Available immediately for Oracle APEX, Forms &amp; Reports, PL/SQL and ERP roles in Saudi
                  Arabia or remotely. References available on request.
                </p>
                <a className="btn btn--light" href={cvPath} download>
                  <DownloadIcon size={18} /> Download full CV (PDF)
                </a>
              </div>

              <ul className="contact__list">
                <li>
                  <a href={`mailto:${profile.email}`} className="contact-item">
                    <span className="contact-item__icon">
                      <MailIcon />
                    </span>
                    <span>
                      <small>Email</small>
                      {profile.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={profile.phoneHref} className="contact-item">
                    <span className="contact-item__icon">
                      <PhoneIcon />
                    </span>
                    <span>
                      <small>Phone</small>
                      {profile.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    className="contact-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-item__icon contact-item__icon--li">
                      <LinkedInIcon />
                    </span>
                    <span>
                      <small>LinkedIn</small>
                      {profile.linkedinHandle}
                    </span>
                  </a>
                </li>
                <li>
                  <div className="contact-item">
                    <span className="contact-item__icon">
                      <PinIcon />
                    </span>
                    <span>
                      <small>Location</small>
                      {profile.location}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="footer__links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon size={18} />
            </a>
            <a href={cvPath} download aria-label="Download CV">
              <DownloadIcon size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
