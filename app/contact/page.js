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

export default function Contact() {
  return (
    <main>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="label">Contact</span>
          <h1>Start your dance journey with us.</h1>
          <p className="hero-text">Contact Saturn Art Dance Studio for trial lessons, enrolment information, and performance programs.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="contact-card">
            <h3>Mitcham Campus</h3>
            <p>21 Rooks Rd, Mitcham VIC 3132</p>
            <p>WeChat: saturn_dance</p>
          </div>
          <div className="contact-card">
            <h3>Moorabbin Campus</h3>
            <p>5/445 Warrigal Rd, Moorabbin VIC 3189</p>
            <p>WeChat: SaturnDance_M</p>
          </div>
        </div>

        <div className="container" style={{ marginTop: "32px" }}>
          <form action="https://formspree.io/f/mdabwrov" method="POST" className="contact-card">
            <h2 style={{ marginBottom: "30px" }}>Course Enquiry Form</h2>

            <input className="form-input" type="text" name="name" placeholder="Student Name" required />
            <input className="form-input" type="number" name="age" placeholder="Age" required />
            <input className="form-input" type="text" name="phone" placeholder="Phone Number" required />
            <input className="form-input" type="text" name="wechat" placeholder="WeChat ID" />

            <select className="form-input" name="campus">
              <option>Mitcham Campus</option>
              <option>Moorabbin Campus</option>
            </select>

            <textarea className="form-input" name="message" placeholder="Tell us what class you are interested in..." rows="6" />

            <button className="button gold" type="submit" style={{ border: "none", cursor: "pointer" }}>
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}