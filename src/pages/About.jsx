import React from 'react';
import { Award, Users, Target } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Kamal Garg</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A visionary entrepreneur with over two decades of experience in multiple industries
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
            alt="Kamal Garg"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            With a passion for innovation and excellence, Kamal Garg has built a diverse
            portfolio of successful businesses across multiple sectors. His journey began
            with a small plastic manufacturing unit and has grown into a conglomerate
            spanning construction, housing, and industrial manufacturing.
          </p>
          <p className="text-gray-600">
            Today, under his leadership, our companies continue to set new standards in
            their respective industries, driven by a commitment to quality, innovation,
            and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, setting high standards
              and consistently delivering quality results.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of teamwork and building strong relationships
              with our clients and partners.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Target className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We continuously innovate and adapt to meet the evolving needs of our
              customers and markets.
            </p>
          </div>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="bg-gray-100 rounded-lg p-8">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-4xl font-bold text-blue-600 mb-2">20+</h4>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600 mb-2">500+</h4>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600 mb-2">300+</h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-600 mb-2">3</h4>
            <p className="text-gray-600">Successful Businesses</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;