import Link from "next/link";

export default function ContactPage() {
  return (
    <main style={{ background: "#f5f2ed", minHeight: "100vh", fontFamily: "Arial" }}>
      <header
        style={{
          background: "white",
          borderBottom: "1px solid #e5e5e5",
          padding: "24px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Saturn Art Dance Studio</h2>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "2px", color: "#999" }}>
            MELBOURNE DANCE ACADEMY
          </p>
        </div>

        <nav style={{ display: "flex", gap: "30px" }}>
          <Link href="/">Home</Link>
          <Link href="/classes">Classes</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 20px" }}>
        <h4 style={{ color: "#b08b57", letterSpacing: "3px" }}>CONTACT</h4>

        <h1 style={{ fontSize: "64px", marginBottom: "20px", color: "#222" }}>
          Start your dance journey with us.
        </h1>

        <p style={{ fontSize: "20px", color: "#666", maxWidth: "700px", lineHeight: "1.8", marginBottom: "60px" }}>
          Contact Saturn Art Dance Studio for trial lessons, enrolment information, and performance programs.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", marginBottom: "40px" }}>
          <div style={{ background: "white", padding: "40px", borderRadius: "24px" }}>
            <h2>Mitcham Campus</h2>
            <p>21 Rooks Rd, Mitcham VIC 3132</p>
            <p>WeChat: saturn_dance</p>
          </div>

          <div style={{ background: "white", padding: "40px", borderRadius: "24px" }}>
            <h2>Moorabbin Campus</h2>
            <p>5/445 Warrigal Rd, Moorabbin VIC 3189</p>
            <p>WeChat: SaturnDance_M</p>
          </div>
        </div>

        <form action="https://formspree.io/f/mdabwrov" method="POST" style={{ background: "white", padding: "50px", borderRadius: "24px" }}>
          <h2 style={{ marginBottom: "30px" }}>Course Enquiry Form</h2>

          <input name="name" placeholder="Student Name" required style={inputStyle} />
          <input name="age" placeholder="Age" required style={inputStyle} />
          <input name="phone" placeholder="Phone Number" required style={inputStyle} />
          <input name="wechat" placeholder="WeChat ID" style={inputStyle} />

          <select name="campus" style={inputStyle}>
            <option>Mitcham Campus</option>
            <option>Moorabbin Campus</option>
          </select>

          <textarea name="message" placeholder="Tell us what class you are interested in..." rows="6" style={inputStyle} />

          <button type="submit" style={{
            background: "#b08b57",
            color: "white",
            border: "none",
            padding: "16px 40px",
            borderRadius: "999px",
            fontSize: "16px",
            cursor: "pointer",
          }}>
            Submit Enquiry
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
  boxSizing: "border-box",
  marginBottom: "20px",
};
