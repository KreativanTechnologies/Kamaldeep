import React from 'react';
import { Lightbulb, Target, TrendingUp, Award, Shield, Leaf, Users } from 'lucide-react';

function Vision() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] overflow-hidden bg-blue-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Vision Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white mb-6">Our Vision</h1>
            <p className="text-xl text-blue-100">
              Pioneering Excellence Across Industries Through Innovation and Sustainable Development
            </p>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              "To be the driving force of innovation and excellence in manufacturing,
              construction, and housing, creating sustainable solutions for tomorrow."
            </h2>
            <p className="text-lg text-gray-600 italic">
              - Kamal Garg, Founder & CEO
            </p>
          </div>
        </div>
      </div>

      {/* Mission Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Mission Pillars
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Plastic Manufacturing */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-48 bg-blue-500 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1633934542430-0905ccb5f593?auto=format&fit=crop&q=80&w=1000"
                alt="Plastic Manufacturing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
              <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Plastic Manufacturing Excellence
              </h3>
              <p className="text-gray-600">
                Revolutionizing the industry through eco-friendly practices and
                cutting-edge manufacturing solutions that set new quality benchmarks.
              </p>
            </div>
          </div>

          {/* Construction Agency */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-48 bg-green-500 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
                alt="Construction"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-900 opacity-60"></div>
              <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Building Tomorrow's Infrastructure
              </h3>
              <p className="text-gray-600">
                Creating sustainable infrastructure that enhances communities while
                maintaining the highest standards of construction excellence.
              </p>
            </div>
          </div>

          {/* Housing Agency */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-48 bg-orange-500 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Housing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-orange-900 opacity-60"></div>
              <div className="absolute top-4 left-4 bg-white p-3 rounded-full">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovative Housing Solutions
              </h3>
              <p className="text-gray-600">
                Developing modern living spaces that combine affordability,
                sustainability, and superior quality of life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest standards in every endeavor
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Maintaining transparency and ethical practices
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Committed to environmental responsibility
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                Building lasting relationships and trust
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Goals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Looking to the Future
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Sustainable Growth</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">•</span>
                <span className="text-gray-600">Expand eco-friendly manufacturing processes</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">•</span>
                <span className="text-gray-600">Implement renewable energy solutions</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">•</span>
                <span className="text-gray-600">Develop green building technologies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Market Leadership</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3 mt-0.5">•</span>
                <span className="text-gray-600">Expand into new regional markets</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3 mt-0.5">•</span>
                <span className="text-gray-600">Foster strategic partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-3 mt-0.5">•</span>
                <span className="text-gray-600">Innovate product offerings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;