import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCart from './ReviewCart';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [review,setReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    return (
        <div>
            <h3 className='text-4xl m-8'>All Review </h3>
            {
                review.map(rev=><ReviewCart
                key={rev._id}
                rev={rev}
                
                ></ReviewCart>)
            }


        </div>
    );
};

export default Review;