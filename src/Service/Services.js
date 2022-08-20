import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
   useEffect(() =>{
       fetch('http://localhost:5000/service')
       .then(res => res.json())
       .then(data => setServices(data))
   },[])
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      {
          services.map(service => <Service
          service={service}
          ></Service>)
      }
      </div>
    );
};

export default Services;