import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div>
            details here
        </div>
    );
};

export default ToyDetails;