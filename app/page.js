export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p style={{ letterSpacing: 4, color: "#8a6b2f" }}>
              MELBOURNE DANCE ACADEMY
            </p>

            <h1 style={{ fontSize: "64px", lineHeight: 1.1 }}>
              Saturn Art Dance Studio
            </h1>

            <p style={{ fontSize: "20px", lineHeight: 1.8, color: "#666" }}>
              A Melbourne-based dance academy dedicated to excellence in dance
              education, artistic expression, and stage performance.
            </p>

            <div style={{ marginTop: 40 }}>
              <a className="button" href="#classes">
                View Classes
              </a>

              <a
                className="button"
                href="#contact"
                style={{ background: "#8a6b2f" }}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="hero-image">
            Add Your Main Studio Photo Here
          </div>
        </div>
      </section>

      <section className="section" id="classes">
        <div className="container">
          <h2 style={{ fontSize: 42 }}>Our Classes</h2>

          <div className="card-grid">
            <div className="card">
              <h3>Chinese Dance</h3>
              <p>
                Classical and folk dance training focused on performance and
                expression.
              </p>
            </div>

            <div className="card">
              <h3>Ballet</h3>
              <p>
                Foundation ballet classes designed to improve posture and
                technique.
              </p>
            </div>

            <div className="card">
              <h3>Contemporary</h3>
              <p>
                Creative movement and contemporary dance technique for all
                levels.
              </p>
            </div>

            <div className="card">
              <h3>Performance Training</h3>
              <p>
                Stage preparation, flexibility, turns, jumps, and competition
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 42 }}>Gallery</h2>

          <div className="gallery-grid">
            <div className="gallery-box">Studio Photos</div>
            <div className="gallery-box">Performance Photos</div>
            <div className="gallery-box">Classroom Photos</div>
            <div className="gallery-box">Competition Photos</div>
            <div className="gallery-box">Dance Showcase</div>
            <div className="gallery-box">Student Training</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontSize: 42 }}>Our Team</h2>

          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="card">
              <h3>Isaac Liu</h3>
              <p>Founder / Principal</p>
              <p>
                Dedicated to creating a professional and inspiring dance
                education environment in Melbourne.
              </p>
            </div>

            <div className="card">
              <h3>Teaching Team</h3>
              <p>Professional Dance Educators</p>
              <p>
                Structured training, artistic guidance, and performance
                development for all students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container">
          <h2 style={{ fontSize: 42 }}>Contact Us</h2>

          <div className="contact-card">
            <p>
              <strong>Address:</strong><br />
              445 Warrigal Rd, Moorabbin VIC 3189
            </p>

            <p>
              <strong>Email:</strong><br />
              saturndance2022@gmail.com
            </p>

            <p>
              <strong>Studio:</strong><br />
              Saturn Art Dance Studio
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}