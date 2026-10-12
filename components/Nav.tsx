"use client";

import { useEffect, useState } from "react";
import { cvPath } from "@/data/profile";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#clients", label: "Clients" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Zain Ul Abdin, back to top">
          <span className="nav__logo">ZA</span>
          <span className="nav__name">Zain Ul Abdin</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary btn--sm nav__cv-mobile" href={cvPath} download>
            <DownloadIcon size={16} /> Download CV
          </a>
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a className="btn btn--primary btn--sm nav__cv" href={cvPath} download>
            <DownloadIcon size={16} /> CV
          </a>
          <button
            className="icon-btn nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
