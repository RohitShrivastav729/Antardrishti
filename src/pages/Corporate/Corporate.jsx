import CorporateHero from "./sections/CorporateHero";
import CorporateWhy from "./sections/CorporateWhy";
import CorporateOffer from "./sections/CorporateOffer";
import TrustedBy from "../About/sections/TrustedBy";
import Gallery from "../Home/sections/Gallery"
import FinalCTA from "../Home/sections/FinalCTA"
import ContactForm from "../Contact/sections/ContactForm";

export default function Corporate(){
  return (
    <>
      <CorporateHero/>
      <CorporateWhy/>
      <CorporateOffer/>
      <TrustedBy/>
      <Gallery/>
      <ContactForm/>
    </>
  );
}