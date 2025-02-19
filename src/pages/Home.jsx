import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Factory, Home as HomeIcon } from 'lucide-react';
import P1 from "../assets/plastic/1.jpg"
import C1 from "../assets/construction/1.jpg"
import H1 from "../assets/housing/1.jpg"
const businesses = [
  {
    id: 'plastic',
    title: 'Plastic Manufacturing',
    description: 'Leading manufacturer of high-quality plastic products',
    icon: Factory,
    color: 'bg-blue-500',
    image: P1
  },
  {
    id: 'construction',
    title: 'Construction Agency',
    description: 'Building tomorrow\'s infrastructure today',
    icon: Building2,
    color: 'bg-green-500',
    image: C1
  },
  {
    id: 'housing',
    title: 'Housing Agency',
    description: 'Your trusted partner in real estate',
    icon: HomeIcon,
    color: 'bg-orange-500',
    image: H1
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our Business Portfolio
        </h1>
        <p className="text-xl text-gray-600">
          Discover our diverse range of successful enterprises
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {businesses.map((business) => {
          const Icon = business.icon;
          return (
            <div
              key={business.id}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/business/${business.id}`)}
            >
              <div className="absolute inset-0">
                <img
                  src={business.image}
                  alt={business.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-opacity-40" />
              </div>
              
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className={`${business.color} p-3 rounded-full w-fit mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {business.title}
                </h3>
                <p className="text-gray-200">
                  {business.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">
              Over 20 years of combined experience across multiple industries
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              Commitment to delivering the highest quality products and services
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Constantly evolving and adapting to market needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;