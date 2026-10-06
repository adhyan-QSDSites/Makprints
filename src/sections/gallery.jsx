import "./gallery.css";

import automaticBagMaking from "../assets/machines/Automatic Bag Making Machine Brochure.png";
import automaticDieCutting from "../assets/machines/Automatic Die Cutting Machine Showcase.png";
import automaticPaperCutting from "../assets/machines/Automatic Paper Cutting Machine Brochure.png";
import modernOffsetPrinting from "../assets/machines/Modern Offset Printing Factory.png";
import premiumLaminating from "../assets/machines/Premium Industrial Laminating Machine.png";

function Gallery() {
  const galleryItems = [
    {
      image: automaticBagMaking,
      title: "Automatic Bag Making Machine",
      category: "Bag Manufacturing",
    },
    {
      image: automaticDieCutting,
      title: "Automatic Die Cutting Machine",
      category: "Die Cutting",
    },
    {
      image: automaticPaperCutting,
      title: "Automatic Paper Cutting Machine",
      category: "Paper Processing",
    },
    {
      image: modernOffsetPrinting,
      title: "Modern Offset Printing Machine",
      category: "Offset Printing",
    },
    {
      image: premiumLaminating,
      title: "Premium Industrial Laminating Machine",
      category: "Lamination",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">

        {/* Heading */}
        <div className="gallery-heading">
          <div className="gallery-eyebrow">
            <span></span>
            OUR MACHINERY
            <span></span>
          </div>

          <h2>
            Built for
            <em> Precision</em>
          </h2>

          <p>
            Our advanced printing and finishing machinery enables us to
            deliver consistent quality, precision and efficiency.
          </p>
        </div>

        {/* Gallery */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={item.title}>

              {/* Image */}
              <div className="gallery-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="image-shine"></div>

                <div className="machine-number">
                  0{index + 1}
                </div>
              </div>

              {/* Info */}
              <div className="gallery-info">

                <div>
                  <span className="machine-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>
                </div>

                <div className="gallery-arrow">
                  <span>↗</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;