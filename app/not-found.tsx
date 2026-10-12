import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: "80vh", display: "grid", placeItems: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <span className="kicker">404</span>
        <h2 style={{ margin: "14px auto 28px" }}>This page doesn&apos;t exist.</h2>
        <Link className="btn btn--primary" href="/">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
