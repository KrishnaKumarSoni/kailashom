import React, { useState } from 'react';
import { 
  Phone, 
  Star, 
  Building2, 
  Baby, 
  Sparkles, 
  Award, 
  Globe, 
  MessageCircle, 
  Shield,
  Calculator,
  BookOpen,
  Target,
  CheckCircle
} from 'lucide-react';

const MinimalPage = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919560030342', '_blank');
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const services = [
    {
      icon: Building2,
      title: 'Business Naming',
      description: 'Transform your enterprise with numerologically optimized names that attract success'
    },
    {
      icon: Baby,
      title: 'Newborn Naming',
      description: 'Give your child a name that supports their highest potential throughout life'
    },
    {
      icon: Sparkles,
      title: 'Personal Name Correction',
      description: 'Unlock blocked energies and redirect your path toward prosperity'
    }
  ];

  const process = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Share your requirements and aspirations'
    },
    {
      icon: Calculator,
      title: 'Numerological Analysis',
      description: 'Deep analysis using Cheiro numerology methods'
    },
    {
      icon: Sparkles,
      title: 'Custom Name Creation',
      description: 'Crafting names aligned with cosmic vibrations'
    },
    {
      icon: BookOpen,
      title: 'Implementation Guidance',
      description: 'Complete guidance for maximum impact'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div 
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-600 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{
                boxShadow: '0 20px 40px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <Star className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-jakarta">
            Transform Your Destiny Through{' '}
            <span className="text-burnt-orange-600">Ancient Numerology</span>{' '}
            Wisdom
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed font-inter font-light max-w-3xl mx-auto">
            Discover the hidden power of numbers that have guided over{' '}
            <span className="font-semibold text-burnt-orange-600">2,000 successful individuals</span>{' '}
            across the globe to unlock prosperity and success.
          </p>

          <button 
            onClick={handleWhatsAppClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="relative px-12 py-4 text-xl font-semibold text-white rounded-xl transition-all duration-150 mb-16"
            style={{
              background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
              boxShadow: isPressed 
                ? `inset 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(234, 88, 12, 0.2)`
                : `0 8px 24px rgba(234, 88, 12, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
              transform: isPressed ? 'translateY(2px)' : 'translateY(0)',
            }}
          >
            <span className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Book a Call
            </span>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 font-jakarta">2000+</div>
              <div className="text-base sm:text-lg text-gray-600 font-medium font-inter">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 font-jakarta">12+</div>
              <div className="text-base sm:text-lg text-gray-600 font-medium font-inter">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 font-jakarta">18</div>
              <div className="text-base sm:text-lg text-gray-600 font-medium font-inter">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 font-jakarta">
            A Journey from <span className="text-burnt-orange-600">India</span> to Global Recognition
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-600 rounded-xl flex items-center justify-center"
                style={{
                  boxShadow: '0 12px 24px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Rare Knowledge Acquired</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-inter font-light">
                Through dedicated study and practice, she mastered a unique extension of Cheiro numerology, developing a methodology that delivers exceptional results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-600 rounded-xl flex items-center justify-center"
                style={{
                  boxShadow: '0 12px 24px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Global Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-inter font-light">
                Today, she has consulted over 2,000 clients worldwide, building a thriving practice through pure word-of-mouth recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 font-jakarta">
            Unlock Your Potential Through{' '}
            <span className="text-burnt-orange-600">Precise Numerological</span> Naming
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-600 rounded-2xl flex items-center justify-center"
                  style={{
                    boxShadow: '0 16px 32px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-inter font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 font-jakarta">
            Your Journey to <span className="text-burnt-orange-600">Transformation</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <div 
                    className="w-12 h-12 mx-auto mb-4 bg-burnt-orange-600 text-white rounded-lg flex items-center justify-center text-xl font-bold font-jakarta"
                    style={{
                      boxShadow: '0 8px 16px rgba(234, 88, 12, 0.3)'
                    }}
                  >
                    {index + 1}
                  </div>
                  <div 
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-600 rounded-xl flex items-center justify-center"
                    style={{
                      boxShadow: '0 12px 24px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-jakarta">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-inter font-light">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-burnt-orange-100 p-8 rounded-2xl max-w-3xl mx-auto">
            <div 
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-600 rounded-xl flex items-center justify-center"
              style={{
                boxShadow: '0 12px 24px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 font-jakarta">
              Exclusive methodology learned from ancient masters, unavailable anywhere else in the world
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 font-jakarta">
            Proven Results That{' '}
            <span className="text-burnt-orange-600">Speak for Themselves</span>
          </h2>

          <div className="bg-burnt-orange-50 p-12 rounded-2xl shadow-lg mb-16">
            <div 
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-burnt-orange-400 to-burnt-orange-600 rounded-xl flex items-center justify-center"
              style={{
                boxShadow: '0 12px 24px rgba(234, 88, 12, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <blockquote className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-8 leading-relaxed font-inter">
              "The insights provided have been remarkably accurate, and the positive changes in my life have been undeniable."
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <cite className="text-xl text-burnt-orange-600 font-bold font-inter">
              — A Satisfied Client from Toronto, Canada
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-burnt-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-12">
            <div 
              className="w-24 h-24 mx-auto mb-8 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              style={{
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <Phone className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-8 font-jakarta">
            Ready to Transform Your <span className="text-orange-200">Destiny?</span>
          </h2>
          
          <p className="text-xl text-orange-100 mb-12 font-inter font-light max-w-3xl mx-auto">
            Join thousands of successful individuals who have discovered the power of numerologically aligned names.
          </p>

          <button 
            onClick={handleWhatsAppClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="relative px-12 py-4 text-xl font-semibold text-burnt-orange-600 bg-white rounded-xl transition-all duration-150 mb-16"
            style={{
              boxShadow: isPressed 
                ? `inset 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)`
                : `0 8px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
              transform: isPressed ? 'translateY(2px)' : 'translateY(0)',
            }}
          >
            <span className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Book a Call
            </span>
          </button>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center gap-4">
              <div 
                className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                style={{
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <MessageCircle className="w-8 h-8 text-orange-200" />
              </div>
              <span className="text-lg text-orange-100 font-semibold font-inter">WhatsApp consultations</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div 
                className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                style={{
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Shield className="w-8 h-8 text-orange-200" />
              </div>
              <span className="text-lg text-orange-100 font-semibold font-inter">Personal attention</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div 
                className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm"
                style={{
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Globe className="w-8 h-8 text-orange-200" />
              </div>
              <span className="text-lg text-orange-100 font-semibold font-inter">12+ countries served</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl max-w-3xl mx-auto">
            <div 
              className="w-16 h-16 mx-auto mb-6 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm"
              style={{
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <CheckCircle className="w-8 h-8 text-orange-200" />
            </div>
            <p className="text-xl text-orange-100 font-semibold font-inter font-light">
              <strong className="text-white text-2xl font-jakarta">IMPORTANT:</strong> Limited availability due to personal attention to each consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalPage;