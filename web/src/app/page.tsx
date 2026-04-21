import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Software from "@/components/Software";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
      <Software />
      <Contact />
    </div>
  );
}
