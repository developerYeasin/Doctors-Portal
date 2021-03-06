import React from 'react';
import Navbar from '../Navbar/Navbar';
import AboutAppointment from './AboutAppointment/AboutAppointment';
import Blog from './Blog/Blog';
import Doctors from './Doctors/Doctors';
import Header from './Header/Header';
import InformationBox from './InformationBox/InformationBox';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <InformationBox/>
            <Services/>
            <AboutAppointment/>
            <Testimonial/>
            <Blog/>
            <Doctors/>
        </div>
    );
};

export default Home;