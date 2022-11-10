import React from 'react';
import Footer from '../Sharead/Footer/Footer';
import Header from '../Sharead/Header/Header';
import headerImg from "../../Asserts/online-training-course.jpg"
import Slide from '../Slide/Slide';
import { Link, useLoaderData } from 'react-router-dom';
import AllService from '../AllService/AllService';
import Services from '../AllService/Services';

const Home = () => {
    const services=useLoaderData();
    console.log(services);
    
    return (
        <div>
        
             <Slide></Slide>
             <h1>Length of Services: {services.length}</h1>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
             {
                services.map(service=><Services
                key={service._id}
                service={service}
                ></Services>)
             }
             </div>
             

             <div className='mx-auto m-12'>
                <Link to="/serviceall">
                <button className='btn btn-active btn-secondary' >See All Category Of Trainer </button></Link>
          
             </div>
          
        </div>
    );
};

export default Home;