import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToStoreDb, getStoreApp, removeFromStoreDb } from "../utils/addToDB";

const Installation = () => {
  const data = useLoaderData();
  const [installData, setInstalledData] = useState([]);
  
  // Load installed apps on mount
  useEffect(() => {
    loadInstalledApps();
  }, []);

  const loadInstalledApps = () => {
    const storeAppData = getStoreApp();
    const convertedStoreApp = storeAppData.map((id) => parseInt(id));
    const myAppList = data.filter((app) => convertedStoreApp.includes(app.id));
    setInstalledData(myAppList);
  };

  const handleUninstall = (appId) => {
    removeFromStoreDb(appId);
    
    loadInstalledApps();
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Installed Apps</h1>
      {installData.length === 0 ? (
        <p className="text-gray-500">No apps installed yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installData.map((app) => (
            <div key={app.id} className="card w-full bg-base-100 card-lg shadow-sm">
              <div className="card-body">
                <img src={app.image} alt={app.title} />
                <h2 className="card-title">{app.title}</h2>
                <p>{app.description}</p>
                <div className="justify-end card-actions">
                  <button
                    className="btn btn-error"
                    onClick={() => handleUninstall(app.id)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
