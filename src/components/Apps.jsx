import { Link } from "react-router-dom";
import { formatDownloads } from "../utils/convertDownload";
import { Star } from "lucide-react";
import { Download } from "lucide-react";

const Apps = ({ data }) => {
  const fiveStarApps = data.filter((app) => Number(app.ratingAvg) >= 4.6);
  return (
    <div className="grid grid-cols-1  md:grid-cols-3 gap-10 ">
      {fiveStarApps.map((app) => (
        <div key={app.id}>
         <Link to={`/details/${app.id}`} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img className="w-[100px]" src={app.image} alt={app.title} />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{app.title}</h2>

              <div className="card-actions justify-end">
                <button className="btn text-green-400"><Download></Download>
                  {formatDownloads(app.downloads)}
                </button>
                <button className="btn text-orange-300">
                  <Star></Star>

                  {app.ratingAvg}
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Apps;
