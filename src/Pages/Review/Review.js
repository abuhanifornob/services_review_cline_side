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

    const handleReviewDelete=id=>{
        const proced=window.confirm("Yor are Sure ? You want to cancel this Review : ");
        if(proced){
            fetch(`http://localhost:5000/review/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
              console.log(data)
              if (data.deletedCount>0) {
                alert("Successfully deleted one document.");

                const remainingReview=review.filter(rev=>rev._id!==id);
                setReview(remainingReview);
              }
            
            })
        }
    
     }
    return (
        <div>
            <h3 className='text-4xl m-8'>All Review </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                review.map(rev=><ReviewCart
                key={rev._id}
                rev={rev}
                handleReviewDelete={handleReviewDelete}
                
                ></ReviewCart>)
            }
            </div>
            


        </div>
    );
};

export default Review;