import React from 'react';
import { useParams } from 'react-router-dom';
import { Building2, Factory, Home as HomeIcon, Link as LinkIcon } from 'lucide-react';
import P1 from "../assets/plastic/1.jpg"
import P2 from "../assets/plastic/2.jpg"
import P3 from "../assets/plastic/3.jpg"

import C1 from "../assets/construction/1.jpg"
import C2 from "../assets/construction/2.jpg"
import C3 from "../assets/construction/3.jpg"

import H1 from "../assets/housing/1.jpg"
import H2 from "../assets/housing/2.jpg"
import H3 from "../assets/housing/3.jpg"
const businessData = {
  plastic: {
    title: 'Plastic Manufacturing',
    description: 'Leading manufacturer of high-quality plastic products serving various industries.',
    icon: Factory,
    color: 'bg-blue-500',
    heroImage: P1,
    gallery: [
      P1,
      P2,
      P3,
    ],
    features: [
      'High-quality plastic products',
      'Custom manufacturing solutions',
      'Eco-friendly processes',
      'Industry-leading technology',
    ],
    website: 'https://example.com/plastic',
  },
  construction: {
    title: 'Construction Agency',
    description: 'Expert construction services for commercial and residential projects.',
    icon: Building2,
    color: 'bg-green-500',
    heroImage: C1,
    gallery: [
      C1,
      C2,
      C3
    ],
    features: [
      'Commercial construction',
      'Residential projects',
      'Infrastructure development',
      'Project management',
    ],
    website: 'https://example.com/construction',
  },
  housing: {
    title: 'Housing Agency',
    description: 'Your trusted partner in real estate, offering comprehensive housing solutions.',
    icon: HomeIcon,
    color: 'bg-orange-500',
    heroImage:H1,
    gallery: [
      H1,
      H2,
      H3
    ],
    features: [
      'Property sales',
      'Property management',
      'Investment consulting',
      'Market analysis',
    ],
    website: 'https://example.com/housing',
  },
};

function BusinessDetail() {
  const { id } = useParams();
  const business = businessData[id];

  if (!business) {
    return <div>Business not found</div>;
  }

  const Icon = business.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={business.heroImage}
          alt={business.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className={`${business.color} p-4 rounded-full w-fit mx-auto mb-4`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">{business.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{business.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {business.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Website Link */}
        <div className="text-center">
          <a
            href={business.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white ${business.color} hover:opacity-90 transition-opacity`}
          >
            <LinkIcon className="h-5 w-5" />
            <span>Visit Website</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;