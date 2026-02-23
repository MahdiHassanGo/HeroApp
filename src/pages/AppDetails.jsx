import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {formatDownloads} from '../utils/convertDownload'
import { Star } from "lucide-react";
import { UserStar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


import { Download } from "lucide-react";
const AppDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const appId= parseInt(id);
    const singleApp= data.find(app=>app.id == appId)
    console.log(singleApp)

    return (
      <div className="container mx-auto px-4 py-10">
        {/* primary info card */}
        <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
          <figure className="p-6 flex justify-center items-center">
            <img
              src={singleApp.image}
              alt={singleApp.title}
              className="rounded-lg w-48 h-48 object-contain"
            />
          </figure>
          <div className="card-body">
            <h1 className="text-3xl font-bold">{singleApp.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
              Developed by {singleApp.companyName}
            </p>
            <div className="flex flex-wrap gap-6 mb-6 text-gray-700">
              <div className="flex items-center gap-1">
                <Download className="text-green-500" />
                {formatDownloads(singleApp.downloads)}
              </div>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400" />
                {singleApp.ratingAvg}
              </div>
              <div className="flex items-center gap-1">
                <UserStar className="text-blue-500" />
                {formatDownloads(singleApp.reviews)}
              </div>
            </div>
            <button className="btn btn-primary w-full sm:w-auto">
              Install
            </button>
          </div>
        </div>

        {/* ratings chart section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Rating Breakdown</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <BarChart
              style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
              responsive
              data={singleApp.ratings}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width="auto" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                name="Ratings"
                fill="#8884d8"
                activeBar={{ fill: 'pink', stroke: 'blue' }}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </div>
        </div>

        {/* description */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{singleApp.description}</p>
        </div>
      </div>
    );
};

export default AppDetails;