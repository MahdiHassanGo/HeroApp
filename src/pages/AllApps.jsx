// AllApps.jsx
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatDownloads } from "../utils/convertDownload";
import { Star, Download } from "lucide-react";

const AllApps = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">All Apps</h1>
          <p className="mt-2 text-base-content/70">
            Discover our complete collection of apps.
          </p>
        </div>
        <div className="badge badge-outline">Total: {data.length}</div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((app) => (
          <Link
            key={app.id}
            to={`/details/${app.id}`}
            className="group card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl p-3 bg-base-200/60 border border-base-200">
                  <img
                    className="w-12 h-12 object-contain"
                    src={app.image}
                    alt={app.title}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">
                    {app.title}
                  </h3>
                  <p className="text-sm text-base-content/60 truncate">
                    {app.companyName}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="badge badge-outline gap-1">
                      <Download className="w-4 h-4" />
                      {formatDownloads(app.downloads)}
                    </span>
                    <span className="badge badge-outline gap-1">
                      <Star className="w-4 h-4" />
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-base-content/60">
                  View details
                </span>
                <span className="btn btn-primary btn-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Open
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllApps;