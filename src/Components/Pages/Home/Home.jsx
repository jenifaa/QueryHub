import React, { useRef } from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import AiGenerated from "./AiGenerated";
import ProductExplorer from "./ProductExplorer";
import Card from "./Card";
import Header from "../Layout/Header";

const Home = () => {
  const cardsRef = useRef();
  const productExplorerRef = useRef();
  const aiGeneratedRef = useRef();

  const scrollToCards = () =>
    cardsRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProductExplorer = () =>
    productExplorerRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToAiGenerated = () =>
    aiGeneratedRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Header
        scrollToCards={scrollToCards}
        scrollToProductExplorer={scrollToProductExplorer}
        scrollToAiGenerated={scrollToAiGenerated}
      />

      <Banner />

      <Card />
      <div ref={cardsRef}>
        <Cards />
      </div>

      <div ref={aiGeneratedRef}>
        <AiGenerated />
      </div>
      <div ref={productExplorerRef}>
        <ProductExplorer />
      </div>
    </div>
  );
};

export default Home;
