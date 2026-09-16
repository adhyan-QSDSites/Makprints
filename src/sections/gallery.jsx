import "./gallery.css";

function Gallery() {
  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80",
      title: "Business Cards",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      title: "Product Packaging",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
      title: "Brochures",
    },
    {
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
      title: "Labels & Stickers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
      title: "Posters",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
      title: "Large Format Printing",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-header">
        <span className="gallery-tag">OUR WORK</span>

        <h2>Printing Excellence In Every Project</h2>

        <p>
          Explore some of our recent printing projects crafted with
          precision and premium quality.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;