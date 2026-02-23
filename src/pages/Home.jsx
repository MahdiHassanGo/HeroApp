import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router-dom';
import Apps from '../components/Apps';

const Home = () => {

     const data = useLoaderData();

 



    return (
        <div>
         <div className="hero bg-base-100 min-h-screen">
  <div className="hero-content flex-col lg:flex-col">
    
    <div>
      <h1 className="text-5xl font-bold">We Build  <span className='text-purple-400'>Productive</span> Apps</h1>
      <p className="py-6">
      At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className='flex justify-center gap-3 mb-4' >
     <button className="btn btn-primary">Google Play</button>
      <button className="btn btn-primary">App Store</button>
      </div>
 
      <img
      src="../../public/assets/hero.png"
      className="max-w-full rounded-lg mx-auto "
    />
    </div>
  </div>
  {/* Trending Apps */}
 

</div>
 <div className='min-h-screen'>
<h2 className="text-5xl">Trending Apps</h2>
<p>Explore All Trending Apps on the Market developed by us</p>

<Suspense fallback={<div> loading ......</div>}>
<Apps data={data}></Apps>
</Suspense>




  </div>
        </div>
    );
};

export default Home;