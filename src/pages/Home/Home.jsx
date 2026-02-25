import HeroSection from "./sections/HeroSection";
import AboutPreview from "./sections/AboutPreview";
import Audience from "./sections/Audience";
import Results from "./sections/Results";
import Authority from "./sections/Authority";
import FinalCTA from "./sections/FinalCTA";

export default function Home(){
  return (
    <>
      <HeroSection/>
      <AboutPreview/>
      <Audience/>
      <Results/>
      <Authority/>
      <FinalCTA/>
    </>
  );
}