// AppDetails.jsx
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { formatDownloads } from "../utils/convertDownload";
import { Star, UserStar, Download, ShieldCheck } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { addToStoreDb, removeFromStoreDb, isAppInStore } from "../utils/addToDB";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const appId = parseInt(id);
  const singleApp = data.find((app) => app.id === appId);

  const [installed, setInstalled] = React.useState(false);

  React.useEffect(() => {
    if (!isNaN(appId)) setInstalled(isAppInStore(appId));
  }, [appId]);

  const handleInstallToggle = () => {
    if (installed) {
      removeFromStoreDb(appId);
      setInstalled(false);
    } else {
      addToStoreDb(appId);
      setInstalled(true);
    }
  };

  if (!singleApp) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="alert alert-warning">
          <span>App not found.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: content */}
        <div className="lg:col-span-2 space-y-8">
          {/* header card */}
          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                <div className="rounded-2xl p-4 bg-base-200/60 border border-base-200 w-fit">
                  <img
                    src={singleApp.image}
                    alt={singleApp.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold">{singleApp.title}</h1>
                  <p className="mt-1 text-base-content/70">
                    Developed by <span className="font-medium">{singleApp.companyName}</span>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="badge badge-outline gap-1">
                      <Download className="w-4 h-4" />
                      {formatDownloads(singleApp.downloads)}
                    </span>
                    <span className="badge badge-outline gap-1">
                      <Star className="w-4 h-4" />
                      {singleApp.ratingAvg}
                    </span>
                    <span className="badge badge-outline gap-1">
                      <UserStar className="w-4 h-4" />
                      {formatDownloads(singleApp.reviews)} reviews
                    </span>
                    <span className="badge badge-ghost gap-1">
                      <ShieldCheck className="w-4 h-4" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              <div className="divider my-2" />

              <div>
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-base-content/70 leading-relaxed">
                  {singleApp.description}
                </p>
              </div>
            </div>
          </div>

          {/* chart */}
          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body">
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <h2 className="text-xl font-semibold">Rating Breakdown</h2>
                  <p className="text-sm text-base-content/60 mt-1">
                    Distribution of ratings across users.
                  </p>
                </div>
              </div>

              <div className="mt-4 h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={singleApp.ratings} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="count"
                      name="Ratings"
                      fill="hsl(var(--p))"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: install card */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 border border-base-200 shadow-sm lg:sticky lg:top-24">
            <div className="card-body">
              <h3 className="text-lg font-semibold">Get this app</h3>
              <p className="text-sm text-base-content/70">
                Install to access features instantly. You can uninstall anytime.
              </p>

              <button
                className={`btn mt-4 ${installed ? "btn-outline" : "btn-primary"}`}
                onClick={handleInstallToggle}
              >
                {installed ? "Uninstall" : "Install"}
              </button>

              <div className="divider" />

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-base-content/60">Downloads</span>
                  <span className="font-medium">{formatDownloads(singleApp.downloads)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/60">Rating</span>
                  <span className="font-medium">{singleApp.ratingAvg}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base-content/60">Reviews</span>
                  <span className="font-medium">{formatDownloads(singleApp.reviews)}</span>
                </div>
              </div>

              <div className="mt-4 alert">
                <span className="text-sm">
                  Tip: Add more screenshots & feature bullets for a more “App Store” look.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;