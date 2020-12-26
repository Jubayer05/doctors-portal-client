import React from 'react';
import "./HomeAbout.css";
import homeAboutImg from "../../../images/HomeAbout.png";

const HomeAbout = () => {
    return (
        <section className="homeAbout row">
            <div className="homeAbout__image col-md-5 ml-2">
                <img className="img-fluid" src={homeAboutImg} alt=""/>
            </div>
            <div className="homeAbout__content col-md-5 d-flex  justify-content-around ml-n5">
                <h3 className="home-title mt-2">Exceptional Dental Care, <br/> On Your Terms</h3>
                <p className="text-secondary mt-n5">Lorem ipsum dolor sit amet sandae impedit aspernatur debitis, voluptatum eveniet animi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cumque ipsa sunt repudiandae voluptatibus cum. quidem! Rerum amet sandae impedit aspernatur debitis, voluptatum eveniet animi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cumque ipsa sunt repudiandae voluptatibus cum. quidem! Rerum </p>
                <span className="mt-n5">
                    <button className="btn home-btn mt-n5" style={{borderRadius: "0px", color: "#ffffff"}}>Learn More</button>
                </span>
            </div>
        </section>
    );
};

export default HomeAbout;