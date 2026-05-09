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

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="label">Professional Dance Education</span>
            <h1>Where dance becomes art, culture, and confidence.</h1>
            <p className="hero-text">
              Saturn Art Dance Studio is a Melbourne-based dance academy dedicated to excellence in dance education, artistic expression, and stage performance.
            </p>
            <div className="actions">
              <a className="button" href="/classes">View Classes</a>
              <a className="button gold" href="/contact">Contact Us</a>
            </div>
          </div>
          <div className="hero-image">Main Dance Photo / Studio Hero Image</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro">
            <span className="label">Explore</span>
            <h2>Discover our studio.</h2>
            <p>Explore our classes, gallery, teaching team, and contact details through dedicated pages.</p>
          </div>
          <div className="grid grid-4">
            <a href="/classes" className="card">
              <h3>Classes</h3>
              <p className="muted">Professional programs in Chinese dance, ballet, contemporary, and performance training.</p>
            </a>
            <a href="/gallery" className="card">
              <h3>Gallery</h3>
              <p className="muted">Studio moments, stage performances, competitions, and student training highlights.</p>
            </a>
            <a href="/team" className="card">
              <h3>Our Team</h3>
              <p className="muted">Meet our teachers and artistic training team.</p>
            </a>
            <a href="/contact" className="card">
              <h3>Contact</h3>
              <p className="muted">Get in touch for trial classes, enrolment, and general enquiries.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container grid grid-2">
          <div>
            <span className="label">Contact</span>
            <h2>Start your dance journey with us.</h2>
          </div>
          <div className="contact-card">
            <p><strong>Mitcham Campus：</strong><br />21 Rooks Rd, Mitcham VIC 3132</p>
            <p><strong>Moorabbin Campus：</strong><br />5/445 Warrigal Rd, Moorabbin VIC 3189</p>
            <p><strong>Email：</strong><br />saturndance2022@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 Saturn Art Dance Studio. All rights reserved.</footer>
    </main>
  );
}
