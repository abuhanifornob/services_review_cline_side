import React from 'react';

const AllCategoryCart = ({serviceCategory}) => {
    const{title,img,description,_id,price}=serviceCategory;
    return (
        <div>
            <div >
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={img} alt="Shoes" /></figure>
         
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className='flex justify-around'>
                        <div>
                        <h3>Price: {price}</h3>
                        </div>
                        
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    </div>
                    
                </div>
            </div>

        </div>
        </div>
    );
};

export default AllCategoryCart;