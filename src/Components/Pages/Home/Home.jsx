import React, { useRef } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import AiGenerated from "./AiGenerated";
import ProductExplorer from "./ProductExplorer";
import Card from "./Card";
import Header from "../Layout/Header";
import AboutUs from "./AboutUs";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>QueryHive</title>
      </Helmet>
      <Header /> 

      <Banner />

      <Card />

      <Cards />

      <AiGenerated />

      <AboutUs></AboutUs>

      <ProductExplorer />
    </div>
  );
};

export default Home;
