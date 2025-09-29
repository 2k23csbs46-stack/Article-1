import React from "react";

function AboutUs() {
  return (
    <div>
      <h1 style={{ color: "#023e8a" }}>About Our Team 👨‍💻👩‍💻</h1>
      <p style={{ fontSize: "18px", margin: "10px 0 30px" }}>
        We are passionate about technology and solving problems with modern solutions.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div style={{ background: "#caf0f8", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>👨‍💼 Founder</h3>
          <p>Visionary leader driving innovation.</p>
        </div>
        <div style={{ background: "#ade8f4", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>👩‍💻 Developer</h3>
          <p>Building scalable and robust apps.</p>
        </div>
        <div style={{ background: "#90e0ef", padding: "20px", borderRadius: "10px", width: "200px" }}>
          <h3>🎨 Designer</h3>
          <p>Crafting beautiful user experiences.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
