import type { NextPage } from "next";
import BgLayout from "../components/BgLayout";
import BorderGradient from "../components/BorderGradient";
import Navbar from "../components/NavBar";
import NftCarousel from "../components/NftCarousel";
import Tabs from "../components/Tabs";
import Accordion from "../components/Accordions/Accordion";
import Contents from "../components/Contents";



const Home: NextPage = () => {
  return (
    <>
    
      <Navbar />
      <BorderGradient />
      <BgLayout>
        <NftCarousel />
        <Contents />
        <Tabs />
        <Accordion/>
      </BgLayout>
    </>
  );
};

export default Home;
