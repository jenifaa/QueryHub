import React from 'react';
import Banner from './Banner';
import Cards from './Cards';
import AiGenerated from './AiGenerated';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <AiGenerated></AiGenerated>
        </div>
    );
};

export default Home;