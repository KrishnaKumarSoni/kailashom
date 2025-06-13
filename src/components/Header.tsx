import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919560030342', '_blank');
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white bg-opacity-95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-burnt-orange-600 font-jakarta tracking-wider">KAILASHOM</h1>
          </div>

          <div className="flex items-center">
            <button 
              onClick={handleWhatsAppClick}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className="relative px-6 py-3 text-base font-semibold text-white rounded-lg transition-all duration-150"
              style={{
                background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
                boxShadow: isPressed 
                  ? `inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(234, 88, 12, 0.2)`
                  : `0 4px 12px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                transform: isPressed ? 'translateY(1px)' : 'translateY(0)',
              }}
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Book a Call
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;