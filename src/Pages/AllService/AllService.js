import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoryCart from './AllCategoryCart';


const AllService = () => {
    const allService=useLoaderData();

    return (
        <div className='my-8'>
            <h1 className='text-3xl '>My All Training Service</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                allService.map(serviceCategory=><AllCategoryCart
                key={serviceCategory._id}
                serviceCategory={serviceCategory}
                ></AllCategoryCart>)
            }
            </div>
            
          
        </div>
    );
};

export default AllService;