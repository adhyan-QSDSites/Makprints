import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <span className="hero-tag">
          ★ Premium Printing & Packaging Solutions
        </span>

        <h1>
          Transform Your Ideas Into
          <span>  Stunning Print </span>Experiences
        </h1>

        <p>
          Business cards, brochures, packaging, labels,
          marketing materials and large-format printing —
          crafted with exceptional quality, vibrant colors
          and unmatched attention to detail.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
            Get Free Quote
          </a>

          <a href="#gallery" className="secondary-btn">
            View Our Work
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <span>Orders Delivered</span>
          </div>

          <div>
            <h3>500+</h3>
            <span>Happy Clients</span>
          </div>

          <div>
            <h3>99%</h3>
            <span>Customer Satisfaction</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;