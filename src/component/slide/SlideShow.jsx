import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './style.css'
import College from '../../images/college.jpg'
import HighSchool from '../../images/cpncHighschool.jpg'
import Kinder from '../../images/kinder.jpg'
import Worship from '../../images/worship.jpg'
import MC from '../../images/mc.jpg'




const Example = () => {
    const images = [
       College,
       HighSchool,
       Kinder,
       Worship,
       MC

      
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                   
                </div>
            </div>
            
        </Slide>
    );
};

export default Example;
