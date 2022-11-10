import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const servicesDetails = useLoaderData();
    console.log(servicesDetails);
    return (
        <div className="card w-100 bg-base-100 shadow-2xl">
            <figure><img src={servicesDetails.img} alt="Shoes" /></figure>

            <div className="card-body">
                <h2 className="card-title">
                    {servicesDetails.title}

                </h2>
                <p>
                {servicesDetails.description}

                </p>
                <div className="card-actions justify-end">
                    <Link to={`/comments/${servicesDetails._id}`}>
                        <button className="btn btn-primary">Your Comments</button>
                    </Link>
                    <Link to={`/viewreview/${servicesDetails._id}`}>
                        <div className="btn btn-primary">View Review</div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;