import React from 'react'
import wa from 'file:///C:/Users/msi/Desktop/crypto/crypto-app/src/img/about-img.png'
const Section = () => {
    return (
        <div>
            <section class="about-section spad">

                <div class="container">

                    <div class="row">
                        <div class="a">
                            <h2>What is Bitcoin</h2>
                            <h5>Bitcoin is an innovative payment network and a new kind of money.</h5>
                            <p>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
                            <a class="site-btn sb-gradients sbg-line mt-5">Get Started</a>
                        </div>

                    </div>


                    <div className="imgg">
                        <img src={wa} alt="" />
                    
                        </div>
                </div>

            </section>
        </div>
    )
}

export default Section;
