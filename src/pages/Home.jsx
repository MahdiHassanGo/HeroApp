// Home.jsx
import React, { Suspense } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Apps from "../components/Apps";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="bg-base-100">
      {/* HERO */}
      <section className="bg-gradient-to-b from-base-100 to-base-200 border-b border-base-200">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 badge badge-outline">
                <span className="w-2 h-2 rounded-full bg-success" />
                Trusted productivity tools
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                We build{" "}
                <span className="text-primary">productive</span>{" "}
                apps that feel amazing.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-base-content/70 leading-relaxed">
                At HERO.IO, we craft innovative apps designed to make everyday
                life simpler, smarter, and more exciting — turning ideas into
                digital experiences that actually help.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn btn-primary">Google Play</button>
                <button className="btn btn-outline">App Store</button>
                <Link to="/all" className="btn btn-ghost">
                  Browse all apps →
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="badge badge-ghost">Fast</span>
                <span className="badge badge-ghost">Clean UI</span>
                <span className="badge badge-ghost">Top Rated</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="card bg-base-100 shadow-lg border border-base-200">
                <div className="p-4 sm:p-6">
                  <img
                    src="/assets/hero.png"
                    className="max-w-full rounded-xl"
                    alt="Hero visual"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Trending Apps</h2>
            <p className="mt-2 text-base-content/70">
              Explore our top-performing apps loved by users.
            </p>
          </div>

          <Link to="/all" className="btn btn-sm sm:btn-md btn-outline">
            View All
          </Link>
        </div>

        <div className="mt-8">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="skeleton h-40 w-full" />
                ))}
              </div>
            }
          >
            <Apps data={data} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Home;