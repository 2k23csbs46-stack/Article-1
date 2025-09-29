import React from "react";

function Service() {
  return (
    <div>
      <h1 style={{ color: "#0096c7" }}>Our Services ⚙️</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "25px", marginTop: "30px" }}>
        <div style={{ background: "#f1f1f1", padding: "20px", borderRadius: "10px", width: "220px" }}>
          <h3>🌐 Web Apps</h3>
          <p>Custom websites and portals.</p>
        </div>
        <div style={{ background: "#f1f1f1", padding: "20px", borderRadius: "10px", width: "220px" }}>
          <h3>📱 Mobile Apps</h3>
          <p>Android & iOS apps for your needs.</p>
        </div>
        <div style={{ background: "#f1f1f1", padding: "20px", borderRadius: "10px", width: "220px" }}>
          <h3>☁️ Cloud</h3>
          <p>Secure and scalable cloud solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
