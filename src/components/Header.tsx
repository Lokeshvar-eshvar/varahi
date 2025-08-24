import React, { useState } from 'react';
import { Menu, X, Leaf, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Leaf />
          <h1 className="text-lg font-bold text-gray-900 leading-tight">
                SRI MALLIKARJUNA BRAMARAMBIKA ENTERPRISES
              </h1>
      </div>
    </header>
  );
};

export default Header;