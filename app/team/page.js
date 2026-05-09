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

        <details className="mobile-menu-wrapper">
          <summary className="menu-button">Menu</summary>
          <div className="mobile-menu">
            <a href="/">Home</a>
            <a href="/classes">Classes</a>
            <a href="/gallery">Gallery</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export default function Team() {
  return (
    <main>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="label">Our Team</span>
          <h1>Professional guidance with care and discipline.</h1>
          <p className="hero-text">Teacher names and photos can be added later.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h3>Isaac Liu</h3>
            <p><strong>Founder / Principal</strong></p>
            <p className="muted">Dedicated to creating a professional and inspiring dance education environment for students in Melbourne.</p>
          </div>
          <div className="card">
            <h3>Teaching Team</h3>
            <p><strong>Professional Dance Educators</strong></p>
            <p className="muted">Our teachers support students with structured training, artistic guidance, and performance development.</p>
          </div>
        </div>
      </section>
    </main>
  );
}