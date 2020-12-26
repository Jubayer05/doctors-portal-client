import React from 'react';

const TestimonialCart = ({item}) => {
    return (
        <div className="col-md-4 ">
            <div className="p-4 testimonial-item">
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius quaerat, debitis labore fuga, architecto eos dolore distinctio consequatur commodi dignissimos tenetur sint consequuntur quisquam.
                </p>

                <div className="d-flex align-items-center ">
                    <img style={{width: "60px"}} className="mr-3" src={item.image} alt=""/>
                    <div className="">
                        <h4 className="home-title-sub testimonial-name">Jhon Williams</h4>
                        <small className="mt-n5">California</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;