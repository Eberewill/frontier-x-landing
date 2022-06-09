import type { NextPage } from "next";
import BgLayout from "../components/BgLayout";
import BorderGradient from "../components/BorderGradient";
import Navbar from "../components/NavBar";
import NftCarousel from "../components/NftCarousel";
import Tabs from "../components/Tabs";
import AccordionsSection from "../components/Accordions/AccordionsSection";
import Contents from "../components/Contents";
import Meta from "../components/Meta";

const Home: NextPage = () => {
  return (
    <>
    <Meta title="Home" keywords="fr0ntier-x,nft" icon="/asset/logo" description="sample page"/>
      <Navbar />
      <BorderGradient />
      <BgLayout>
        <NftCarousel />
        <Contents />
        <Tabs />
        <AccordionsSection />
      </BgLayout>
    </>
  );
};

export default Home;
