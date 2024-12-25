import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import AiGenerated from './AiGenerated';
import ProductExplorer from './ProductExplorer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <ProductExplorer></ProductExplorer>
            <AiGenerated></AiGenerated>
        </div>
    );
};

export default Home;