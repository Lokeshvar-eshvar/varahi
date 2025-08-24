import React from 'react';
import { Leaf, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight">
                  SRI MALLIKARJUNA<br />
                  BRAMARAMBIKA ENTERPRISES
                </h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading manufacturer of biodegradable bags, committed to protecting our environment 
              through sustainable packaging solutions since 2022.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">ISO</span>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">UDYAM</span>
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">CPCB</span>
              </div>
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">CFE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+91 9059801014</p>
                  <p className="text-gray-400">+91 8555977241</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  H.NO-14-81/72/232/D, Navya Nagar Colony,<br />
                  Beerumguda, Patancheru, Medak, Telangana, 502032
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 SRI MALLIKARJUNA BRAMARAMBIKA ENTERPRISES. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for a greener planet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;