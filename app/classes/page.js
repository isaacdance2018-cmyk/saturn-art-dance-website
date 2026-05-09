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

export default function Classes() {
  const classes = [
    ["Chinese Dance", "Classical and folk dance training focused on body rhythm, expression, flexibility, and stage performance."],
    ["Ballet", "Foundation ballet classes designed to improve posture, strength, coordination, and discipline."],
    ["Contemporary Dance", "Creative movement and contemporary technique for expression and artistry."],
    ["Technique Training", "Flexibility, jumps, turns, core strength, and performance confidence."],
    ["Performance Program", "Stage preparation and performance training for showcases and competitions."],
    ["Adult Dance", "Dance classes for adults who want to improve movement, confidence, and artistic expression."]
  ];

  return (
    <main>
      <Header />
      <section className="page-hero">
        <div className="container">
          <span className="label">Classes</span>
          <h1>Dance programs for every stage of learning.</h1>
          <p className="hero-text">Structured and inspiring dance training for students of different ages and levels.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          {classes.map((item) => (
            <div className="card" key={item[0]}>
              <h3>{item[0]}</h3>
              <p className="muted">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}