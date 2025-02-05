import FAQSection from "@/components/FACSection";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import HeroSection from "@/components/index_page/HeroSection";
import Services from "@/components/index_page/Services";
import Advantages from "@/components/index_page/Advantages";
import Contactus from "@/components/index_page/Contact";
import CustomSolutions from "@/components/index_page/CustomSolutions";

export default function Home() {
  

  return (
    <>
      <Header />
      <main className="mt-20">
        <HeroSection />
        <CustomSolutions />
        <Services />
        <Carousel />
        <Advantages />
        <Contactus />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
