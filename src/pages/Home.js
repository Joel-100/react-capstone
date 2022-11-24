import React from 'react';
import africaImg from '../assets/africa.png';

const Home = () => (
  <div>
    <div className="flex p-5 items-center border-b">
      <img src={africaImg} alt="Africa map" className="w-[60%] opacity-60" />
      <div className="ml-6">
        <h3 className="text-3xl font-mono text-white font-bold">Africa</h3>
        <p className="text-xl text-white">1,393.7 billion</p>
      </div>
    </div>
    <div className="text-white my-4">
      <h3 className="ml-8">Stats by Country</h3>
    </div>
  </div>
);

export default Home;
