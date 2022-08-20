import React from 'react';

const Stat = () => {
    return (
        <div class="stats shadow lg:w-full sm:w-96 mt-10 bg-red-100">
  
        <div class="stat place-items-center">
          <div class="stat-title text-black text-2xl font-bold">Students</div>
          <div class="stat-value">31K+</div>
          
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title text-black text-2xl font-bold">Users</div>
          <div class="stat-value text-secondary">2M</div>
        
        </div>
        
        <div class="stat place-items-center">
          <div class="stat-title text-black text-2xl font-bold">New Registers</div>
          <div class="stat-value">1,200</div>
         
        </div>
        
      </div>
    );
};

export default Stat;