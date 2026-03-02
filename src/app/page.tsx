import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import GeographicalVariations from "@/components/GeographicalVariations";
import Downloads from "@/components/Downloads";
import Warranty from "@/components/Warranty";
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
        <GeographicalVariations />
        <Downloads />
        <Warranty />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
