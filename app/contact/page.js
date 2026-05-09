export default function ContactPage() {
  return (
    <main
      style={{
        padding: "80px 20px",
        background: "#f5f2ed",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h4
          style={{
            color: "#b08b57",
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          CONTACT
        </h4>

        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
            color: "#222",
          }}
        >
          Start your dance journey with us.
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#666",
            maxWidth: "700px",
            lineHeight: "1.8",
            marginBottom: "60px",
          }}
        >
          Contact Saturn Art Dance Studio for trial lessons, enrolment
          information, and performance programs.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "24px",
            }}
          >
            <h2>Mitcham Campus</h2>
            <p>21 Rooks Rd, Mitcham VIC 3132</p>
            <p>WeChat: SATURNMITCHAM</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "24px",
            }}
          >
            <h2>Moorabbin Campus</h2>
            <p>5/445 Warrigal Rd, Moorabbin VIC 3189</p>
            <p>WeChat: SATURNMOORABBIN</p>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mdabwrov"
          method="POST"
          style={{
            background: "white",
            padding: "50px",
            borderRadius: "24px",
          }}
        >
          <h2
            style={{
              marginBottom: "30px",
            }}
          >
            Course Enquiry Form
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              name="wechat"
              placeholder="WeChat ID"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <select
              name="campus"
              style={inputStyle}
            >
              <option>Mitcham Campus</option>
              <option>Moorabbin Campus</option>
            </select>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <textarea
              name="message"
              placeholder="Tell us what class you are interested in..."
              rows="6"
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            style={{
              background: "#b08b57",
              color: "white",
              border: "none",
              padding: "16px 40px",
              borderRadius: "999px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
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
};
