import React from 'react';
import { useLoaderData} from 'react-router-dom';
import ReviewCart from '../Review/ReviewCart';

const View = () => {
    const reviewIdData=useLoaderData();
    console.log(reviewIdData);
    return (
        <div>
             <h3 className='text-4xl m-8'>Review: {reviewIdData.length} </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                reviewIdData.map(rev=><ReviewCart
                key={rev._id}
                rev={rev}
                
                ></ReviewCart>)
            }
            </div>
        </div>
    );
};

export default View;