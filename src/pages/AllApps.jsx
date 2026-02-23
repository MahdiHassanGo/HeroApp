import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { formatDownloads } from "../utils/convertDownload";
import { Star } from "lucide-react";
import { Download } from "lucide-react";
const AllApps = () => {
      const data = useLoaderData();
      
    return (
        <div>
              <h1 className='text-5xl text-center mt-10'>All Apps</h1>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              
      {data.map((app) => (
        <div key={app.id} className="flex justify-center">
          <Link
            to={`/details/${app.id}`}
            className="card w-full sm:w-80 bg-white shadow-md hover:shadow-lg transition transform hover:-translate-y-1 rounded-lg overflow-hidden"
          >
            <figure className="flex justify-center p-4">
              <img className="w-24 h-24 object-contain" src={app.image} alt={app.title} />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">{app.title}</h2>

              <div className="card-actions justify-end">
                <button className="btn btn-sm text-green-400 flex items-center gap-1">
                  <Download />{formatDownloads(app.downloads)}
                </button>
                <button className="btn btn-sm text-orange-300 flex items-center gap-1">
                  <Star />{app.ratingAvg}
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
        </div>
    );
};

export default AllApps;