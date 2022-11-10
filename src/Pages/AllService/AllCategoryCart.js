import React from 'react';
import { Link } from 'react-router-dom';

const AllCategoryCart = ({serviceCategory}) => {
    const{title,img,description,_id,price}=serviceCategory;
    return (
        <div>
            <div className='' >
            <div className="card w-96 bg-base-100 shadow-2xl p-3 ">
                <figure><img src={img} alt="Shoes" /></figure>
         
                <div className="card-body">
                    <h2 className="card-title text-center">
                        {title}
                     
                    </h2>
                 
                    <p>{
                description.length >100 ?
                    <>{description.slice(0, 100) + '...'} <Link to={`/cours/${_id}`}>See Details</Link> </>
                    :
                    description
                //  {`/news/${_id}`}
            }</p>
                    <div className='flex justify-around'>   
                    <div className="card-actions justify-end">
                    <Link to={`/comments/${_id}`}>
                        <button className="btn btn-primary">Your Comments</button>
                    </Link>
                      
                        <div className="btn btn-primary">View Review</div>
                    </div>
                    </div>
                    
                </div>
            </div>

        </div>
        </div>
    );
};

export default AllCategoryCart;