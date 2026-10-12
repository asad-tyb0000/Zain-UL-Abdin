import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  DownloadSimpleIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  certification,
  cvPath,
  education,
  experience,
  languages,
  profile,
  softSkills,
  technicalSkills,
  tools,
  type Skill,
} from "@/data/profile";

// Every section is a Row: label left of the Axis, content right of it.
function Row({ id, label, aside, children }: { id?: string; label: string; aside?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="row" id={id} aria-label={label}>
      <div className="row__label reveal">
        <span className="tick" aria-hidden />
        <h2>{label}</h2>
        {aside}
      </div>
      <div className="row__body reveal">{children}</div>
    </section>
  );
}

function SkillIcon({ s }: { s: Skill }) {
  return (
    <span className="mark">
      {s.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.icon} alt="" width={26} height={26} loading="lazy" />
      ) : (
        <span>{s.mark}</span>
      )}
    </span>
  );
}

const contacts = [
  { icon: PhoneIcon, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: LinkedinLogoIcon, label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
  { icon: MapPinIcon, label: "Location", value: profile.location },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <Reveal />

      <main id="main" className="container">
        <div className="axis" aria-hidden>
          <span className="axis__dot" />
        </div>
        <header className="row hero" id="top">
          <div className="row__label">
            <span className="hero__node" aria-hidden>
              ZA
            </span>
            <ul className="hero__meta">
              <li>
                <small>Based in</small>
                {profile.location}
              </li>
              <li>
                <small>Availability</small>
                <span className="live">{profile.availability}</span>
              </li>
              <li>
                <small>Currently</small>
                {profile.current}
              </li>
            </ul>
          </div>
          <div className="row__body">
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__titles">
              {profile.titles.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href={cvPath} download>
                <DownloadSimpleIcon size={18} weight="bold" /> Download CV
              </a>
              <a className="btn btn--ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
        </header>

        <Row id="about" label="Summary">
          <p className="lede">{profile.summary}</p>
        </Row>

        {experience.map((job, i) => (
          <Row
            key={job.company}
            id={i === 0 ? "experience" : undefined}
            label={i === 0 ? "Experience" : ""}
            aside={
              <div className="job__meta">
                <span className="logo" style={{ "--logo": job.color } as React.CSSProperties} role="img" aria-label={`${job.company} logo`}>
                  {job.monogram}
                </span>
                <p>{job.period}</p>
                <p>{job.location}</p>
                {job.current && <span className="now">Current role</span>}
              </div>
            }
          >
            <article className="job">
              <h3>{job.role}</h3>
              <p className="job__company">{job.company}</p>
              <p className="job__sub">{job.subrole}</p>
              {job.intro && <p className="job__intro">{job.intro}</p>}
              <h4>{job.pointsLabel}</h4>
              <ul className="points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {job.clients && (
                <>
                  <p className="job__intro">{job.clientsLead}</p>
                  <div className="clients">
                    {job.clients.map((g) => (
                      <div key={g.industry}>
                        <h5>
                          {g.industry} <span>{g.clients.length}</span>
                        </h5>
                        <ul>
                          {g.clients.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {job.morePoints && (
                <ul className="points points--cols">
                  {job.morePoints.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {job.closing && <p className="job__closing">{job.closing}</p>}
            </article>
          </Row>
        ))}

        <Row id="education" label="Academia">
          <div className="duo">
            <div>
              <small>Education</small>
              <h3>{education.school}</h3>
              <p>
                {education.degree}, graduation {education.year}
              </p>
            </div>
            <div className="cert">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={certification.logo} alt="Oracle" width={40} height={40} loading="lazy" />
              <div>
                <small>Certification</small>
                <h3>{certification.name}</h3>
                <p>
                  {certification.issuer} ({certification.year})
                </p>
              </div>
            </div>
          </div>
        </Row>

        <Row id="skills" label="Technical skills">
          <ul className="skills">
            {technicalSkills.map((s) => (
              <li key={s.name}>
                <SkillIcon s={s} />
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                </div>
              </li>
            ))}
          </ul>
          <ul className="chips">
            {tools.map((s) => (
              <li key={s.name}>
                <SkillIcon s={s} />
                {s.name}
              </li>
            ))}
          </ul>
        </Row>

        <Row label="Soft skills">
          <dl className="soft">
            {softSkills.map((s) => (
              <div key={s.name}>
                <dt>{s.name}</dt>
                <dd>{s.detail}</dd>
              </div>
            ))}
          </dl>
        </Row>

        <Row label="Languages">
          <ul className="langs">
            {languages.map((l) => (
              <li key={l.code}>
                <span className="mark">
                  <span>{l.code}</span>
                </span>
                <div>
                  <h3>{l.name}</h3>
                  <p>{l.level}</p>
                </div>
              </li>
            ))}
          </ul>
        </Row>

        <Row id="contact" label="Contact">
          <a className="big-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRightIcon size={28} weight="bold" />
          </a>
          <ul className="contacts">
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <Icon size={20} weight={label === "LinkedIn" ? "fill" : "duotone"} />
                  <span>
                    <small>{label}</small>
                    {value}
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} {...(label === "LinkedIn" && { target: "_blank", rel: "noopener noreferrer" })}>
                      {inner}
                    </a>
                  ) : (
                    <div>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="contact__foot">
            <a className="btn btn--primary" href={cvPath} download>
              <DownloadSimpleIcon size={18} weight="bold" /> Download CV
            </a>
            <p>{profile.references}</p>
          </div>
        </Row>
      </main>

      <footer className="container footer footer--axis">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
