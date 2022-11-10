import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const servicesDetails=useLoaderData();
    console.log(servicesDetails);
    return (
        <div>
            <h1>This is Sevice Details{}</h1>
        </div>
    );
};

export default ServicesDetails;