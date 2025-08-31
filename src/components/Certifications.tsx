// import { Award, Shield, FileCheck, Building } from 'lucide-react';

// const Certifications = () => {
//   const certifications = [
//     {
//       icon: <Award className="w-8 h-8" />,
//       name: "ISO Certification",
//       description: "International quality management standards compliance",
//       color: "bg-blue-500"
//     },
//     {
//       icon: <Building className="w-8 h-8" />,
//       name: "Udyam Registration",
//       description: "Government of India MSME registration and recognition",
//       color: "bg-green-500"
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       name: "CPCB Certification",
//       description: "Central Pollution Control Board environmental compliance",
//       color: "bg-purple-500"
//     },
//     {
//       icon: <FileCheck className="w-8 h-8" />,
//       name: "CFE Certificate",
//       description: "Consent for Establishment from regulatory authorities",
//       color: "bg-orange-500"
//     }
//   ];

//   return (
//     <section id="certifications" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Trusted quality backed by industry-leading certifications and compliance standards
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {certifications.map((cert, index) => (
//             <div 
//               key={index}
//               className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
//             >
//               <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
//                 {cert.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.name}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;



import { useState } from 'react';
import { Award, Shield, FileCheck, Building, X, Download } from 'lucide-react';

// Import PDF files directly
import isoPdf from './../certificates/CFE order 03.02.2025.pdf';
import udyamPdf from './../certificates/CPCB CERTIF.pdf';
import cpcbPdf from './../certificates/SRI MALLIKARJUNA BRAMARAMBIKA ENTERPRISES 17088-2.pdf'; // Note: Same as udyam?
import cfePdf from './../certificates/Udyam Registration Certificate.pdf';

const Certifications = () => {
  const [activeCert, setActiveCert] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const certifications = [
    {
      id: 'iso',
      icon: <Award className="w-8 h-8" />,
      name: "ISO Certification",
      description: "ISO17088:2021 for compostable plastics manufacturing",
      color: "bg-blue-500",
      pdfUrl: cpcbPdf
    },
    {
      id: 'udyam',
      icon: <Building className="w-8 h-8" />,
      name: "Udyam Registration",
      description: "Government of India MSME registration and recognition",
      color: "bg-green-500",
      pdfUrl: cfePdf
    },
    {
      id: 'cpcb',
      icon: <Shield className="w-8 h-8" />,
      name: "CPCB Certification",
      description: "Central Pollution Control Board environmental compliance",
      color: "bg-purple-500",
      pdfUrl:isoPdf
    },
    {
      id: 'cfe',
      icon: <FileCheck className="w-8 h-8" />,
      name: "CFE Certificate",
      description: "Consent for Establishment from regulatory authorities",
      color: "bg-orange-500",
      pdfUrl: udyamPdf
    }
  ];

  const handleCardClick = (cert:any) => {
    setActiveCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setActiveCert(null), 300);
  };

  const handleDownload = () => {
  };

  return (
    <>
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
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2"
                onClick={() => handleCardClick(cert)}
              >
                <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {cert.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center text-xs text-blue-600">
                    View certificate
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       {showModal && activeCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full h-[95vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{activeCert.name}</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={handleDownload}
                  className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </button>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe 
                src={activeCert.pdfUrl} 
                className="w-full h-full border-0"
                title={`${activeCert.name} Certificate`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;