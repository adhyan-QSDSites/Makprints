import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer id="contact" className="footer">

      {/* Top Footer */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>MAK Prints</h2>

          <p>
            Delivering premium printing solutions with exceptional quality,
            vibrant colors, and precision craftsmanship for businesses,
            brands, and organizations.
          </p>

          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Printing Services</h3>

          <p>Business Cards</p>
          <p>Brochures & Catalogues</p>
          <p>Packaging Printing</p>
          <p>Flyers & Posters</p>
          <p>Large Format Printing</p>
        </div>
      </div>
      {/* Contact Cards Row */}
      <div className="footer-contact-row">

        <div className="contact-card">
          <div className="contact-number">01</div>

          <div className="contact-info">
            <a href="mailto:info@makprints.com">
              <MdEmail className="contact-icon" />
              info@makprints.com
            </a>

            <a href="tel:+919992022220">
              <FaPhoneAlt className="contact-icon" />
              +91 99920 22220
            </a>

            <a
              href="https://wa.me/919992022220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-number">02</div>

          <div className="contact-info">
            <a href="mailto:info@makprints.com">
              <MdEmail className="contact-icon" />
              info@makprints.com
            </a>

            <a href="tel:+919990946900">
              <FaPhoneAlt className="contact-icon" />
              +91 99909 46900
            </a>

            <a
              href="https://wa.me/919990946900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-number">03</div>

          <div className="contact-info">
            <a href="mailto:info@makprints.com">
              <MdEmail className="contact-icon" />
              info@makprints.com
            </a>

            <a href="tel:+919910506665">
              <FaPhoneAlt className="contact-icon" />
              +91 99105 06665
            </a>

            <a
              href="https://wa.me/919910506665"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon" />
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MAK Prints. All Rights Reserved.
        </p>

        <span>
          Designed & Developed with Precision
        </span>
      </div>

    </footer>
  );
}

export default Footer;

