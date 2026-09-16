import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import Gallery from "./sections/gallery";

// Future Sections
// import Process from "./sections/process";
// import Testimonials from "./sections/testimonials";
// import FAQ from "./sections/faq";
// import Contact from "./sections/contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;