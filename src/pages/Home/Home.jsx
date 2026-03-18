import HeroSection from "./sections/HeroSection";
import AboutPreview from "./sections/AboutPreview";
import Audience from "./sections/Audience";
import Results from "./sections/Results";
import Authority from "./sections/Authority"; 
import Gallery from "./sections/Gallery";
import ContactForm from "../Contact/sections/ContactForm";

export default function Home(){
  return (
    <>
      <HeroSection/>
      <Audience/>
      <Results/>
      <Authority/>
      <Gallery />
      <ContactForm/>
    </>
  );
}