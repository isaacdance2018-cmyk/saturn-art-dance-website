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

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="label">Contact</span>
          <h1>Start your dance journey with us.</h1>
          <p className="hero-text">Contact Saturn Art Dance Studio for class enquiries, trial lessons, enrolment information, and performance programs.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-2">
          <div className="contact-card">
            <h3>Mitcham校区</h3>
            <p>21 Rooks Rd, Mitcham VIC 3132</p>
          </div>
          <div className="contact-card">
            <h3>Moorabbin校区</h3>
            <p>5/445 Warrigal Rd, Moorabbin VIC 3189</p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>saturndance2022@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3>Enquiry</h3>
            <p>Please contact us for trial class and enrolment information.</p>
          </div>
        </div>
      </section>
    </main>
  );
}