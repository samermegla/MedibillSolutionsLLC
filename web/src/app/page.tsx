import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import RoiCalculator from "@/components/RoiCalculator";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
      <RoiCalculator />
    </div>
  );
}
