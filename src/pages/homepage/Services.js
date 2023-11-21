import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';


const Services = () => {
    const services = [
        {
            _id:1,
            name:"Fluride Treatment",
            description:"come toh hudhu hfyhuf ydyyy hyfy yyyyyfy hhhfyruyutu",
            img:fluoride
        },
        {
            _id:2,
            name:"Cavity Filling",
            description:"come toh hudhu hfyhuf ydyyy hyfy yyyyyfy hhhfyruyutu",
            img:cavity
        },
        {
            _id:3,
            name:"Teetn Whitening",
            description:"come toh hudhu hfyhuf ydyyy hyfy yyyyyfy hhhfyruyutu",
            img:whitening
        },
    ]

     
return (
    <div className='my-28'>
       <div className='text-center '>
       <h3 className='text-sky-500 text-xl font-bold uppercase'>Our Services</h3>
        <h2 className='text-3xl'>Services We Provide</h2>
       </div>
       <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 px-12'>
          {
            services.map(service=><Service
                key={service._id}
                service={service}
            >
            </Service>)
          }
       </div>
    </div>
);
};

export default Services;