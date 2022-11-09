import React from 'react'; 
import './SlideItem.css';

const SlideItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img '>
                    <img src={image} alt="" className="w-full rounded-xl custom-img " />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-1/2 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Online Traning <br />
                         Better & Easy <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-1/2 top-1/2">
                    <p className='text-xl text-white'>The best Personal Trainer blogs from thousands of blogs on the web and ranked by traffic, social media followers, domain authority & freshness.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <button className="btn btn-warning mr-5">
                        
                        start Now             </button>
                
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default SlideItem;