import React, { useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Service from "./Services";
import "./Header.css";

function Header() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "About Us":
        return <AboutUs />;
      case "Contact":
        return <Contact />;
      case "Service":
        return <Service />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header className="header">
        <h2 className="logo">{page}</h2>
        <nav className="nav">
          <button
            className={page === "Home" ? "active" : ""}
            onClick={() => setPage("Home")}
          >
            Home
          </button>
          <button
            className={page === "About Us" ? "active" : ""}
            onClick={() => setPage("About Us")}
          >
            About Us
          </button>
          <button
            className={page === "Contact" ? "active" : ""}
            onClick={() => setPage("Contact")}
          >
            Contact
          </button>
          <button
            className={page === "Service" ? "active" : ""}
            onClick={() => setPage("Service")}
          >
            Service
          </button>
        </nav>
      </header>

      <main className="content">{renderPage()}</main>
    </div>
  );
}

export default Header;
