import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <HomeAbout/>
            <HomeAppointment/>
            <Testimonial/>
            <Blog/>
            <Doctors/>
            <Contact/>
            <Footer></Footer>   
        </div>
    );
};

export default Home;