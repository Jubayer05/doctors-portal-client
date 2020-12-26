import React, { useState } from 'react';
import chair from "../../../images/chair.png";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./AppointmentMain.css";

const AppointmentMain = ({handleDate, date}) => {
   
    
    return (
        <main className='my-5 headerMain d-flex justify-content-center'>
        <div className='w-75 d-flex justify-content-between align-items-center'>
        <div className="headerMain__content">
            <h3 className="pb-3">Appointment</h3>
            <Calendar className="calendar mr-5"
            onChange={handleDate}
            value={date}
            />
        </div>
        <div className="headerMain__img">
            <img className="w-100" src={chair} alt=""/>
        </div>
        </div>
    </main>
    );
};

export default AppointmentMain;