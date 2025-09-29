import React from "react";

function Home() {
  return (
    <div>
      <h1 style={{ color: "#0077b6" }}>Welcome to Zoho 🎉</h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        Empowering businesses with smart solutions.
      </p>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px", width: "200px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>🚀 Fast</h3>
          <p>Lightning speed services to boost growth.</p>
        </div>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px", width: "200px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>💡 Innovative</h3>
          <p>Creative solutions for every challenge.</p>
        </div>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px", width: "200px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <h3>🌍 Global</h3>
          <p>Trusted worldwide by businesses.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
