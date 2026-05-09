function Header() {
  return (
    <header className="header">
      <div className="container navbar">
        <a href="/">
          <div className="brand-title">Saturn Art Dance Studio</div>
          <div className="brand-subtitle">Melbourne Dance Academy</div>
        </a>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/classes">Classes</a>
          <a href="/gallery">Gallery</a>
          <a href="/team">Team</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function Gallery() {
  const items = ["Studio Environment", "Class Moments", "Stage Performance", "Student Training", "Dance Showcase", "Competition Preparation"];

  return (
    <main>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="label">Gallery</span>
          <h1>Moments from our studio and stage.</h1>
          <p className="hero-text">Replace these placeholders with your real classroom, performance, and studio photos.</p>
        </div>
      </section>
      <section className="section white">
        <div className="container grid grid-3">
          {items.map((item) => (
            <div className="gallery-box" key={item}>{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}