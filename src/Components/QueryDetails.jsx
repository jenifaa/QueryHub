import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QueryDetails = () => {
    const {title,_id} = useLoaderData()
    return (
        <div>
            {title}
        </div>
    );
};

export default QueryDetails;