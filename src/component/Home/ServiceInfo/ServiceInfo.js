import React from 'react';

const ServiceInfo = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="p-2">
                <div>
                    <img className="service-img" src={service.image} alt=""/>
                </div>    
                <h4 className="py-3">{service.title}</h4>
                <p className="text-secondary">Lorem ipsum dolor sit amet sandae impedit aspernatur debitis, voluptatum eveniet animi quidem! Rerum </p>
            </div>
        </div>
    );
};

export default ServiceInfo;