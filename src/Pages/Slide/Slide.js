import React from 'react';
import img1 from "../../Asserts/1.jpg"
import img2 from "../../Asserts/2.jpg"
import img3 from "../../Asserts/3.jpg"
import img4 from "../../Asserts/4.jpg"
import img5 from "../../Asserts/5.jpg"
import img6 from "../../Asserts/6.jpg"
import SlideItem from './SlideItem';

const Slide = () => {
    const slideData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: img6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]
    
    return (
       
              <div className="carousel w-full py-10">
            {
                slideData.map(slide => <SlideItem
                    key={slide.id}
                    slide={slide}
                ></SlideItem>)
            }
            
        </div>
            
       
    );
};

export default Slide;