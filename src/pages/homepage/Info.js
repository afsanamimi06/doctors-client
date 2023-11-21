import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"


const Info = () => {
return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-14'>
       <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" img={clock}></InfoCard>
       <InfoCard cardTitle="Our Location" bgClass="bg-slate-500	" img={marker}></InfoCard>
       <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" img={phone}></InfoCard>
    </div>
);
};

export default Info;