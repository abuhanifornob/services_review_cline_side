import React from 'react';

const ReviewCart = () => {
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
             <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-ghost btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;