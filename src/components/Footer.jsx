import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github ,} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-2xl font-semibold">Xphilpaper-Design</h3>
            <p className="text-sm mt-2">Your go-to destination for high-quality wallpapers!</p>
            <p className="text-sm mt-2">philbertiradukunda03@gmail.com</p>
          </div>
          <div className="flex flex-wrap space-x-6 mb-4 sm:mb-0">
            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold text-lg">Explore</h4>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-sm hover:text-magenta">Home</a></li>
                <li><a href="#" className="text-sm hover:text-magenta">Browse</a></li>
                <li><a href="#" className="text-sm hover:text-magenta">Categories</a></li>
                <li><a href="#" className="text-sm hover:text-magenta">Contact</a></li>
              </ul>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-lg">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a href="https://github.com" className="text-white hover:text-magenta">
                  <Github size={24} />phil-kagaba
                </a>
                <a href="https://facebook.com" className="text-white hover:text-magenta">
                  <Facebook size={24} />phil
                </a>
                <a href="https://twitter.com" className="text-white hover:text-magenta">
                  <Twitter size={24} />phil
                </a>
                <a href="https://instagram.com" className="text-white hover:text-magenta">
                  <Instagram size={24} />i__phil
                </a>
                <a href="https://linkedin.com" className="text-white hover:text-magenta">
                  <Linkedin size={24} />phil
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="">&copy; 2025 Xphilpaper-Design. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-magenta">Terms of Service</a>
            <a href="#" className="hover:text-magenta">Privacy Policy</a>
            <a href="#" className="hover:text-magenta">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
