import React from 'react';
import { Target, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Company</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2022 with a vision to protect our planet through sustainable packaging solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Eco-friendly manufacturing"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Leading the Green Revolution
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              SRI MALLIKARJUNA BRAMARAMBIKA ENTERPRISES is at the forefront of the biodegradable packaging revolution. 
              Since our establishment in 2022, we have been dedicated to creating sustainable alternatives to traditional 
              plastic bags, helping businesses and consumers make environmentally conscious choices.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Our Mission</h4>
                  <p className="text-gray-600">Protecting nature through sustainable packaging solutions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership</h4>
                  <p className="text-gray-600">Led by Proprietor Bodi Dharma Teja</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Assured</h4>
                  <p className="text-gray-600">ISO certified with multiple compliance certifications</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Based in Telangana, serving nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;