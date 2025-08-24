import React from 'react';
import { ShoppingBag, Leaf, Recycle, Clock, CheckCircle } from 'lucide-react';

const Products = () => {
  const benefits = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "100% Biodegradable",
      description: "Completely breaks down naturally without harming the environment"
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Compostable",
      description: "Can be composted to enrich soil and support plant growth"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Decomposition",
      description: "Decomposes within 180 days under proper conditions"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Certified Quality",
      description: "Meets all environmental standards and safety requirements"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Eco-Friendly Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium biodegradable bags that protect both your products and our planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Biodegradable Bags?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Made from renewable plant-based materials</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Strong and durable for everyday use</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Cost-effective alternative to plastic bags</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Available in various sizes and customizations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Contributes to reducing plastic pollution</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Biodegradable bags"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;