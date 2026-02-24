// Apps.jsx
import { Link } from "react-router-dom";
import { formatDownloads } from "../utils/convertDownload";
import { Star, Download } from "lucide-react";

const Apps = ({ data }) => {
  const fiveStarApps = data.filter((app) => Number(app.ratingAvg) >= 4.6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {fiveStarApps.map((app) => (
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

            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-base-content/60">
                Tap to view details
              </span>
              <span className="btn btn-primary btn-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Open
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Apps;