import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import AboutTheFirm from "./components/AboutTheFirm";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div className="min-h-screen bg-secondary-lighter/10 text-black overflow-hidden">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <AboutTheFirm />
      <WhyChooseUs />
      <Team />
      {/* <Testimonials /> - Contatar o cliente para decidir*/}
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App