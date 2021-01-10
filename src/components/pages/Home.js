import React from 'react';
import './Home.css';

import homeImg from '../../assets/images/image2.png';

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-text">
                    <h1>You Deserve Better</h1> <br/>
                    <p>Consider this a <br/> <span>taste intervention</span></p><br/>
                    <button type="button" className="btn-home">Learn More</button>
                </div>
                <div className="home-image">
                    <img src={homeImg} alt="home" />
                </div>
            </div>
        </>
    )
}