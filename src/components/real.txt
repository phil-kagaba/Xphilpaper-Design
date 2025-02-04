import React from "react";
import { Download } from "lucide-react";
import codeX1 from "../assets/image/codeX (1).jpg";
import codeX2 from "../assets/image/codeX (2).jpg";
import codeX3 from "../assets/image/codeX (3).jpg";
import codeX4 from "../assets/image/codeX (4).jpg";
import codeX5 from "../assets/image/codeX (5).jpg";
import codeX6 from "../assets/image/codeX (6).png";
import codeX7 from "../assets/image/codeX (7).jpg";
import codeX8 from "../assets/image/codeX (8).jpg";
import codeX9 from "../assets/image/codeX (9).jpg";
// import codeX10 from "../assets/image/codeX (10).jpg";

const images = [codeX1, codeX2, codeX3, codeX4, codeX5,codeX6];
const upperImages = [codeX7, codeX8, codeX9];

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Xphilpaper-Design</h1>
          <nav className="space-x-4">
            <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-[magenta]">Explore</button>
            <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-[magenta]">Advertise</button>
            <button className="px-10 py-2 bg-gray-100 rounded-md hover:bg-[magenta] ">login</button>
            <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-[magenta]">Get More+</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {upperImages.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex space-x-4 overflow-x-auto">
          {["Color", "Blog", "Website", "Design", "Social", "Background"].map(
            (category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-md whitespace-nowrap hover:bg-[magenta]"
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Free Download favorate Wallpaper</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative bg-white shadow rounded-md overflow-hidden"
            >
              <img
                src={image}
                alt={`Template Image ${index + 1}`}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="p-2 bg-white rounded-full shadow">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">Xphilproduct {index + 1}</h3>
                <p className="text-sm text-gray-600">Business, Design</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;