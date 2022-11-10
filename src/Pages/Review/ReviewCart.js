import React, { useEffect, useState } from 'react';

const ReviewCart = ({rev}) => {
    const {traningName,customer,email,phone,date,rating,message,trainerReviewId}=rev;
    const[userReviw,setUserReviw]=useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${trainerReviewId}`)
        .then(res=>res.json())
        .then(data=>setUserReviw(data))
    }, [userReviw]);
    
    console.log(userReviw);

    return (
        <div className="card w-96 bg-neutral text-neutral-content p-3 m-3">
             <figure>{
                 
                    userReviw?.img &&
                    <img src={userReviw.img} />
                  
                }
                 

             </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{traningName}</h2>
                <h3>Name: {customer}</h3>
                <h3>Emai: {email}</h3>
                <h3>Phone:{phone}</h3>
                <h3>Date: {date}</h3>
                <p>Feedback: {message}</p>
                <div className="card-actions justify-end text-start">
                    <div className='text-xl font-bold text-orange-600'>Rating {rating}</div>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;