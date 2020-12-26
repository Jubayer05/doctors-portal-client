import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentMain from '../AppointmentMain/AppointmentMain';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const handleDate = (date) => {
        setDate(date);
    }
    return (
        <section>
            <Navbar/>
            <AppointmentMain handleDate={handleDate} date={date}/>
            <BookAppointment date={date.toDateString()}/>
            <Footer/>
        </section>
    );
};

export default Appointment;