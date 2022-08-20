import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
   useEffect(() =>{
       fetch('service.json')
       .then(res => res.json())
       .then(data => setServices(data))
   },[])
    return (
        <div >
      {
          services.map(service => <Service
          service={service}
          ></Service>)
      }
      </div>
    );
};

export default Services;