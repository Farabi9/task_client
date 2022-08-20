import React from 'react';

const Service = ({service}) => {

    const {name, img, description, price, mentor} = service;

    return (
        <div className="card w-76 h-50 my-5 mx-5 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Course" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <p>Available Quanity: {price}</p>
          <p>Min Quanity: {mentor}</p>
        </div>
      </div>
    );
};

export default Service;