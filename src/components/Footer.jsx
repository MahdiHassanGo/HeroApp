// Footer.jsx
import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-base-200 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img className="w-10 h-10" src="/assets/logo.png" alt="HeroApp" />
              <span className="text-xl font-bold">HeroApp</span>
            </div>
            <p className="mt-3 text-base-content/70 max-w-md">
              We craft productivity apps that feel fast, clean, and enjoyable —
              designed for everyday wins.
            </p>
            <p className="mt-4 text-sm text-base-content/50">
              © {new Date().getFullYear()} HeroApp. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h6 className="font-semibold mb-3">Product</h6>
              <ul className="space-y-2 text-base-content/70">
                <li className="hover:text-base-content cursor-pointer">Apps</li>
                <li className="hover:text-base-content cursor-pointer">
                  Installation
                </li>
                <li className="hover:text-base-content cursor-pointer">
                  Support
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-3">Social</h6>
              <div className="flex items-center gap-3">
                <a className="btn btn-ghost btn-sm" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a className="btn btn-ghost btn-sm" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a className="btn btn-ghost btn-sm" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;