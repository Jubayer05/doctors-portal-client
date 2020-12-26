import React from 'react';
import testimonial from "../../../images/quote.png";
import "./Testimonial.css";
import person1 from "../../../images/Ellipse 1.png";
import person2 from "../../../images/Ellipse 2.png";
import person3 from "../../../images/Ellipse 3.png";
import TestimonialCart from '../TestimonialCart/TestimonialCart';

const TestimonialCartData = [
    {image: person1},
    {image: person2},
    {image: person3},
]

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="d-flex justify-content-between align-items-center">
                <div className="mt-3 ml-5">
                    <h5 className="home-title-sub">Testimonial</h5>
                    <h3 className="home-title mb-5">What our Patiants <br/> Says</h3>
                </div>
                <img className="testimonial-img" src={testimonial} alt=""/>
            </div>

            <div className="row mt-5 px-5">
                {
                    TestimonialCartData.map(item => <TestimonialCart item={item} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;