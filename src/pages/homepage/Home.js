import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Treatment from './Treatment';
import MakeAppointment from './MakeAppintment';
import Testimonials from './Testimonials';
import Footer from './Footer';
const Home = () => {
return (
    <div>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Treatment></Treatment>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        <Footer></Footer>
    </div>
);
};

export default Home;