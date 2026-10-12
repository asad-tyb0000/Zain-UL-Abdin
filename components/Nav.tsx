"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownloadSimpleIcon, ListIcon, ReadCvLogoIcon, SquaresFourIcon, XIcon } from "@phosphor-icons/react";
import { cvPath } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Academia" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const isPortfolio = usePathname() === "/portfolio";

  // A 1px sentinel at the top of the page tells us when the user has scrolled.
  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} className="nav-sentinel" aria-hidden />
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
              <DownloadSimpleIcon size={16} weight="bold" /> Download CV
            </a>
          </nav>

          <div className="nav__actions">
            <Link
              className="icon-btn"
              href={isPortfolio ? "/" : "/portfolio"}
              aria-label={isPortfolio ? "Switch to CV view" : "Switch to portfolio view"}
              title={isPortfolio ? "CV view" : "Portfolio view"}
            >
              {isPortfolio ? <ReadCvLogoIcon size={18} /> : <SquaresFourIcon size={18} />}
            </Link>
            <ThemeToggle />
            <a className="btn btn--primary btn--sm nav__cv" href={cvPath} download>
              <DownloadSimpleIcon size={16} weight="bold" /> CV
            </a>
            <button
              className="icon-btn nav__toggle"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <XIcon size={18} /> : <ListIcon size={18} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
