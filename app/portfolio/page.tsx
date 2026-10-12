import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  CertificateIcon,
  DownloadSimpleIcon,
  FactoryIcon,
  GearIcon,
  GraduationCapIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
  PillIcon,
  TShirtIcon,
  TranslateIcon,
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

export const metadata: Metadata = {
  title: "Portfolio",
  alternates: { canonical: "/portfolio" },
};

const clientGroups = experience.flatMap((j) => j.clients ?? []);
const rollouts = clientGroups.reduce((n, g) => n + g.clients.length, 0);
const industryIcon = [GearIcon, TShirtIcon, PillIcon, FactoryIcon];

const stats = [
  { value: "5+", label: "Years with Oracle" },
  { value: "30+", label: "Clients on my ERP product" },
  { value: String(rollouts), label: "Custom ERP rollouts" },
  { value: certification.year, label: "Oracle APEX certified" },
];

function Icon({ s, size = 28 }: { s: Skill; size?: number }) {
  return (
    <span className="mark">
      {s.icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.icon} alt="" width={size} height={size} loading="lazy" />
      ) : (
        <span>{s.mark}</span>
      )}
    </span>
  );
}

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <Reveal />

      <main id="main" className="pf container">
        <section className="pf-hero" id="top">
          <div>
            <span className="pf-badge">
              <span className="live">Available immediately</span>
            </span>
            <h1>{profile.name}</h1>
            <p className="pf-hero__titles">
              {profile.titles.join(" · ")}
              <br />
              <span>
                {profile.current}, {profile.location}
              </span>
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
          <dl className="pf-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pf-bento" id="about" aria-label="About">
          <article className="pf-card pf-card--wide reveal">
            <h2>About</h2>
            <p className="pf-lede">{profile.summary}</p>
          </article>
          <article className="pf-card pf-card--dark reveal">
            <CertificateIcon size={26} weight="duotone" />
            <small>Certification</small>
            <h3>{certification.name}</h3>
            <p>
              {certification.issuer} ({certification.year})
            </p>
          </article>
          <article className="pf-card reveal" id="education">
            <GraduationCapIcon size={26} weight="duotone" />
            <small>Academia</small>
            <h3>{education.school}</h3>
            <p>
              {education.degree}, graduation {education.year}
            </p>
          </article>
          <article className="pf-card reveal">
            <TranslateIcon size={26} weight="duotone" />
            <small>Languages</small>
            {languages.map((l) => (
              <p key={l.code}>
                <strong>{l.name}</strong>: {l.level}
              </p>
            ))}
          </article>
        </section>

        <section className="pf-section" id="experience" aria-labelledby="pf-exp">
          <h2 id="pf-exp" className="reveal">
            Experience
          </h2>
          <div className="pf-jobs">
            {experience.map((job) => (
              <article className="pf-card pf-job reveal" key={job.company}>
                <header>
                  <span className="logo" style={{ "--logo": job.color } as React.CSSProperties} role="img" aria-label={`${job.company} logo`}>
                    {job.monogram}
                  </span>
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job__company">{job.company}</p>
                    <p className="job__sub">
                      {job.subrole}. {job.location}
                    </p>
                  </div>
                  <span className={job.current ? "now" : "pf-period"}>{job.period}</span>
                </header>
                {job.intro && <p className="job__intro">{job.intro}</p>}
                <h4>{job.pointsLabel}</h4>
                <ul className="points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {job.clientsLead && (
                  <p className="job__intro">
                    {job.clientsLead.replace(/:$/, "")} {rollouts} companies, listed in{" "}
                    <a href="#clients">Clients</a>.
                  </p>
                )}
                {job.morePoints && (
                  <details className="pf-more">
                    <summary>More achievements ({job.morePoints.length})</summary>
                    <ul className="points points--cols">
                      {job.morePoints.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {job.closing && <p className="job__closing">{job.closing}</p>}
                  </details>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="pf-section" id="clients" aria-labelledby="pf-clients">
          <div className="pf-split reveal">
            <span className="pf-num" aria-hidden>
              {rollouts}
            </span>
            <h2 id="pf-clients">Custom ERP applications delivered across four industries.</h2>
          </div>
          <div className="pf-clients">
            {clientGroups.map((g, i) => {
              const I = industryIcon[i];
              return (
                <article className={`pf-card pf-tile-${i} reveal`} key={g.industry}>
                  <h3>
                    <I size={22} weight="duotone" /> {g.industry} <span>{g.clients.length}</span>
                  </h3>
                  <ul>
                    {g.clients.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="pf-section" id="skills" aria-labelledby="pf-skills">
          <h2 id="pf-skills" className="reveal">
            Skills
          </h2>
          <ul className="pf-skills">
            {technicalSkills.map((s) => (
              <li className="pf-card reveal" key={s.name}>
                <Icon s={s} />
                <h3>{s.name}</h3>
                <p>{s.detail}</p>
              </li>
            ))}
          </ul>
          <ul className="chips reveal">
            {tools.map((s) => (
              <li key={s.name}>
                <Icon s={s} size={20} />
                {s.name}
              </li>
            ))}
          </ul>
          <dl className="pf-soft reveal">
            {softSkills.map((s) => (
              <div key={s.name}>
                <dt>{s.name}</dt>
                <dd>{s.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pf-section pf-contact reveal" id="contact" aria-labelledby="pf-contact">
          <h2 id="pf-contact">Let&apos;s work together.</h2>
          <a className="big-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRightIcon size={28} weight="bold" />
          </a>
          <ul className="contacts">
            <li>
              <a href={profile.phoneHref}>
                <PhoneIcon size={20} weight="duotone" />
                <span>
                  <small>Phone</small>
                  {profile.phone}
                </span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinLogoIcon size={20} weight="fill" />
                <span>
                  <small>LinkedIn</small>
                  {profile.linkedinHandle}
                </span>
              </a>
            </li>
            <li>
              <div>
                <MapPinIcon size={20} weight="duotone" />
                <span>
                  <small>Location</small>
                  {profile.location}
                </span>
              </div>
            </li>
          </ul>
          <div className="contact__foot">
            <a className="btn btn--primary" href={cvPath} download>
              <DownloadSimpleIcon size={18} weight="bold" /> Download CV
            </a>
            <p>{profile.references}</p>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
