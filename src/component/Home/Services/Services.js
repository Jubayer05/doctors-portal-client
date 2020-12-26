import React from 'react';
import "./Services.css";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import white from "../../../images/white.png";
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const serviceData = [
    {
        image: fluoride,
        title: "Fluoride Treatment"
    },
    {
        image: cavity,
        title: "Cavity filling"
    },
    {
        image: white,
        title: "Teeth Whitening"
    }
];
const Services = () => {
    return (
        <section className="services mt-5 py-5 text-center">
                <h5 className="home-title-sub">OUR SERVICES</h5>
                <h3 className="home-title mb-5">Services We Provide</h3> 
            <div className="d-flex justify-content-center">
                <div className="row service-container">
                    {
                        serviceData.map(service => <ServiceInfo service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;