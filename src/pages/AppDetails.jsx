import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {formatDownloads} from '../utils/convertDownload'
import { Star } from "lucide-react";
import { UserStar } from 'lucide-react';

import { Download } from "lucide-react";
const AppDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const appId= parseInt(id);
    const singleApp= data.find(app=>app.id == appId)
    console.log(singleApp)

    return (
        <div>
           <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row gap-50">
    <img
      src={singleApp.image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{singleApp.title}</h1>
      <p className="py-6">
    Developed By :{singleApp.companyName}
      </p>
      <div className='flex gap-5 mb-10'>
        <div >
<Download></Download>
 <p>{formatDownloads(singleApp.downloads)}</p>
        </div>
        <div >
<Star></Star>
 <p>{singleApp.ratingAvg}</p>
        </div>
        <div >
<UserStar></UserStar>
 <p>{formatDownloads(singleApp.reviews)}</p>
        </div>
       
      </div>
      <button className="btn bg-green-400">Install</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppDetails;