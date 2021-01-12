import React from 'react';
import './Home.css';

import homeImg from '../../assets/images/image2.png';
import leafImg from '../../assets/images/leafimg.jpg';
import ImageSlider from '../carousel/ImageSlider';
import SliderData from '../carousel/SliderData';

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-text">
                    <h1>You Deserve Better</h1> <br/>
                    <p>Consider this a <br/> <span>taste intervention</span></p><br/>
                    <button type="button" className="btn-home">Learn More</button>
                </div>

                <div className="home-image-container">
                <div className="home-image">
                    <img src={homeImg} alt="home" />
                </div>
                </div>

            </div>

            <div className="leaf-container">
                <div className="leaf-image">
                    <img src={leafImg} alt="leaf" />
                </div>
                <div className="leaf-text">
                    <p>We Make it easy <br/> for you to cook <br/> delicious dinner</p> <br />
                    <p className="leaf-text-p">
                        Simply choose your recipes on a weekly <br /> menu  and we'll deliver freshly picked vegetables,<br /> pre-portioned ingredients and step by step<br /> recipes direct to your door ready for you <br /> to cook
                    </p> <br />
                    <button type="button" className="btn-leaf">Shop Now</button>
                </div>
            </div>

            {/* carousel */}
            <ImageSlider slides={SliderData}/>
        </>
    )
}