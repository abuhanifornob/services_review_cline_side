import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    const { title, img, price, description ,_id} = service;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={img} alt="Shoes" /></figure>
                
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    
                    </h2>
                    <p>{
                description.length >100 ?
                    <>{description.slice(0, 100) + '...'} <Link to={`/servicesDetails/${_id}`} className="text-xl font-bolder text-orange-700">See Details</Link> </>
                    :
                    description
                //  {`/news/${_id}`}
            }</p>
                        <div className="card-actions justify-end">
                    <Link to={`/comments/${_id}`}>
                        <button className="btn btn-primary">Your Comments</button>
                    </Link>
                      <Link to={`/viewreview/${_id}`}>
                      <div className="btn btn-primary">View Review</div>
                      </Link>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;