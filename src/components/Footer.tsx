import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burnt-orange-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 font-jakarta tracking-wider">KAILASHOM</h3>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed font-inter font-light">
              Transforming destinies through ancient numerology wisdom since 2007.
            </p>
          </div>
          
          <div className="border-t border-orange-400 pt-8">
            <div className="flex items-center justify-center gap-3 text-lg text-orange-100 font-inter font-light mb-3">
              <span>Made with</span>
              <div 
                className="border border-orange-300 rounded-lg p-2 bg-white bg-opacity-10 backdrop-blur-sm"
                style={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Heart className="w-5 h-5 text-orange-200 fill-current" />
              </div>
              <span>for transforming lives</span>
            </div>
            <p className="text-lg text-orange-200 font-inter font-light">
              © 2027 Kailashom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;