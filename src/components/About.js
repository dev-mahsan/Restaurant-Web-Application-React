import React from 'react'
import AboutImg from '../assets/images/about-img.jpeg'
const About = () => {
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading">
                    <span>about</span> us
                </h1>

                <div className="row">
                    <div className="image">
                        <img src={AboutImg} alt="" />
                    </div>

                    <div className="content">
                        <h3>what makes our food special?</h3>
                        <p>
                            Our food is a harmonious blend of tradition and innovation, meticulously prepared to captivate your senses. Each dish we serve is a culinary masterpiece, meticulously crafted with the freshest ingredients and infused with the passion and expertise of our chefs.
                        </p>
                        <p>
                            What sets us apart is our unwavering commitment to quality and authenticity. From the careful selection of ingredients to the mastery of cooking techniques, we strive for perfection in every dish. With every bite, experience the richness of flavor and the warmth of tradition, making dining with us an unforgettable journey through taste and culture.
                        </p>
                        <a href="#" className="btn">
                            learn more
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About