import "./navbar.css";
import logo from "../assets/makwhite.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          <img src={logo} alt="MAK Prints Logo" />
          <span>MAK Prints</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="quote-btn">
          Get Quote
        </a>

      </div>
    </header>
  );
}

export default Navbar;