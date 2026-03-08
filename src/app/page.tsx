import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/GeographicalVariations";
import ServiceAreas from "@/components/Downloads";
import EstimateBanner from "@/components/Warranty";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <ServiceAreas />
        <EstimateBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
