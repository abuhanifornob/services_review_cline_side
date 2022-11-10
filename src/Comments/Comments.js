import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Comments = () => {
    const { _id, title,} = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
         event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const phone = form.phone.value;
    const message = form.message.value;
    const date=form.date.value;
    const rating=form.rating.value;

    const review = {
        trainerReviewId: _id,
        traningName: title,
        customer: name,
        email,
        phone,
        date,
        rating,
        message
    }

    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch('http://localhost:5000/review', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(review)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Your Comment Posted')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));


}
    return (
        <div>
        <form onSubmit={handlePlaceOrder} className="p-6">
            <h2 className="text-4xl text-center m-8">{title}</h2>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                <input name="date" type="date" placeholder="Current Date" className="input input-ghost w-full  input-bordered"/>
                <input name="rating" type="text" placeholder="Your Rating Point Out of 5" className="input input-ghost w-full  input-bordered" />
                
            </div>
            <textarea name="message" className="textarea textarea-bordered h-52 w-full mt-5" placeholder="Your Message for Trainer " required></textarea>

            <input className='btn' type="submit" value="Send your Comment" />
        </form>
    </div>
    );
};

export default Comments;