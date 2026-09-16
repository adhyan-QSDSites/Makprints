import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-left">
          <span className="about-tag">
            ABOUT MAK PRINTS
          </span>
          <h2>
            Delivering Premium Printing Solutions
            With Precision & Quality
          </h2>
          <p>
            MAK Prints is a trusted printing partner offering
            high-quality commercial, corporate, packaging and
            large-format printing solutions. We combine modern
            printing technology with expert craftsmanship to
            deliver exceptional results for businesses of all sizes.
          </p>
          <p>
            From business cards and brochures to product packaging,
            labels and promotional materials, we ensure every print
            reflects professionalism, quality and attention to detail.
          </p>
        </div>
        <div className="about-right">
          <div className="about-card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="about-card">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="about-card">
            <h3>1000+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="about-card">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;