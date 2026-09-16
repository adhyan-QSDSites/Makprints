import "./services.css";

function Services() {
  const services = [
    {
      number: "01",
      icon: "🖨️",
      title: "Commercial Printing",
      description:
        "Premium brochures, flyers, catalogues, posters and marketing materials designed to elevate your brand presence.",
    },
    {
      number: "02",
      icon: "📦",
      title: "Packaging Printing",
      description:
        "Luxury product boxes, labels, sleeves and custom packaging solutions with premium finishes.",
    },
    {
      number: "03",
      icon: "🏢",
      title: "Corporate Printing",
      description:
        "Business cards, letterheads, envelopes and complete corporate identity printing solutions.",
    },
    {
      number: "04",
      icon: "🎯",
      title: "Large Format Printing",
      description:
        "High-impact banners, standees, exhibition graphics and promotional display materials.",
    },
    {
      number: "05",
      icon: "🏷️",
      title: "Label & Sticker Printing",
      description:
        "Durable product labels, barcode stickers and branding materials with vibrant print quality.",
    },
    {
      number: "06",
      icon: "✨",
      title: "Custom Print Solutions",
      description:
        "Tailor-made printing services crafted around your unique branding and business needs.",
    },
  ];
  return (
    <section id="services" className="services">
      <div className="services-header">
        <span className="services-tag">
          PREMIUM PRINTING SERVICES
        </span>
        <h2>
          Complete Printing Solutions
          For Modern Brands
        </h2>
        <p>
          Combining advanced technology, premium materials
          and expert craftsmanship to deliver exceptional
          print quality for every project.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-top">
              <span className="service-icon">
                {service.icon}
              </span>
              <span className="service-number">
                {service.number}
              </span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="service-link">
              Learn More →
            </a>
          </div>
        ))}
      </div>
      <div className="services-cta">
        <h3>
          Need Custom Printing Solutions?
        </h3>
        <a href="#contact" className="services-btn">
          Request A Quote
        </a>
      </div>
    </section>
  );
}
export default Services;