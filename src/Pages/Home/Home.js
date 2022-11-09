import React from 'react';
import Footer from '../Sharead/Footer/Footer';
import Header from '../Sharead/Header/Header';
import headerImg from "../../Asserts/online-training-course.jpg"
import Slide from '../Slide/Slide';
import { useLoaderData } from 'react-router-dom';
import AllService from '../AllService/AllService';

const Home = () => {
    const services=useLoaderData();
    console.log(services);
    
    return (
        <div>
        
             <Slide></Slide>
             <h1>Length of Services: {services.length}</h1>
             {
                services.map(service=><AllService
                key={service._id}
                service={service}
                ></AllService>)
             }
          
        </div>
    );
};

export default Home;