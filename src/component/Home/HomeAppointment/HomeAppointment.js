import React from 'react';
import doctor from '../../../images/doctor.png';
import "./HomeAppointment.css";

const HomeAppointment = () => {
    return (
        <section className="homeAppointment">
            <div className="homeAppointment__overlay">
                <div className="row homeAppointment__container">
                    <div className="col-md-4">
                        <img className="img-fluid appointment-doctor" src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 appointment__content">
                        <h5 className="home-title-sub my-3">APPOINTMENT</h5>
                        <h3 style={{fontSize:"34px"}}>Make an appointment <br/> Today</h3>
                        <p className="pt-3" style={{width:"80%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos commodi laudantium excepturi eveniet quod beatae deleniti at similique, praesentium nesciunt.</p>
                        
                            <button className="btn home-btn mt-4" style={{borderRadius: "0px", color: "#ffffff"}}>Learn More</button>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;