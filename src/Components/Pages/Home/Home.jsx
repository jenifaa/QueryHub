import React, { useRef } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import AiGenerated from "./AiGenerated";
import ProductExplorer from "./ProductExplorer";
import Card from "./Card";
import Header from "../Layout/Header";
import AboutUs from "./AboutUs";
import { Helmet } from "react-helmet-async";
import FAQ from "./FAQ";


const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>QueryHive</title>
      </Helmet>
      {/* <Header />  */}

      <Banner />

      <Card />

      <Cards />

      <AiGenerated />

      <AboutUs></AboutUs>
      <FAQ></FAQ>

      <ProductExplorer />
    </div>
  );
};

export default Home;
