import React from 'react';
import { Award, Shield, FileCheck, Building } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Award className="w-8 h-8" />,
      name: "ISO Certification",
      description: "International quality management standards compliance",
      color: "bg-blue-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      name: "Udyam Registration",
      description: "Government of India MSME registration and recognition",
      color: "bg-green-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: "CPCB Certification",
      description: "Central Pollution Control Board environmental compliance",
      color: "bg-purple-500"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      name: "CFE Certificate",
      description: "Consent for Establishment from regulatory authorities",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted quality backed by industry-leading certifications and compliance standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                {cert.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;