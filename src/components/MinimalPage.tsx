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
  CheckCircle,
  Users,
  TrendingUp,
  Heart,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const MinimalPage = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919560030342', '_blank');
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const services = [
    {
      icon: Building2,
      title: 'Business Name Numerology',
      description: 'Transform your enterprise with numerologically optimized names that attract success, prosperity, and positive energy for 2025 growth'
    },
    {
      icon: Baby,
      title: 'Newborn Baby Naming',
      description: 'Give your child a numerologically perfect name that supports their highest potential, destiny, and life path success using ancient Cheiro methods'
    },
    {
      icon: Sparkles,
      title: 'Personal Name Correction',
      description: 'Unlock blocked energies and redirect your path toward prosperity with personalized name analysis and correction for 2025'
    }
  ];

  const process = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Share your requirements, birth details, and aspirations for personalized numerology analysis'
    },
    {
      icon: Calculator,
      title: 'Numerological Analysis',
      description: 'Deep analysis using rare Cheiro numerology methods and 2025 universal year calculations'
    },
    {
      icon: Sparkles,
      title: 'Custom Name Creation',
      description: 'Crafting names aligned with cosmic vibrations and your personal year number for maximum impact'
    },
    {
      icon: BookOpen,
      title: 'Implementation Guidance',
      description: 'Complete guidance for name implementation and timing for maximum numerological benefits'
    }
  ];

  // Authentic Indian middle-class testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      profession: "Textile Business Owner",
      rating: 5,
      text: "After changing my business name as per her numerology guidance, my textile business in Mumbai saw 40% growth in just 6 months. The new name brought so many new customers and opportunities. Truly amazing results!",
      result: "40% business growth in 6 months"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      profession: "Software Engineer",
      rating: 5,
      text: "I was struggling with career growth for 3 years. After name correction consultation, I got promoted to Senior Manager within 8 months. My salary increased by ₹8 lakhs annually. Best investment ever!",
      result: "Promotion + ₹8L salary increase"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      profession: "Mother of 2",
      rating: 5,
      text: "Named both my children using her numerology guidance. My elder son is now class topper and younger daughter is very confident and happy. Their teachers always praise their positive energy and leadership qualities.",
      result: "Children excelling academically & socially"
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad, Telangana", 
      profession: "Restaurant Owner",
      rating: 5,
      text: "My restaurant was running in losses for 2 years. Changed the name as per numerology in January 2024. Now we have waiting lists every weekend! Monthly revenue increased from ₹2L to ₹5.5L.",
      result: "Revenue increased from ₹2L to ₹5.5L monthly"
    },
    {
      name: "Anita Singh",
      location: "Lucknow, Uttar Pradesh",
      profession: "Government Employee",
      rating: 5,
      text: "Was stuck in same position for 7 years despite good performance. After personal name correction, got transfer to preferred location and promotion within 1 year. My family life also improved significantly.",
      result: "Promotion + preferred transfer in 1 year"
    },
    {
      name: "Vikram Joshi",
      location: "Pune, Maharashtra",
      profession: "IT Consultant",
      rating: 5,
      text: "Started my consulting business with numerologically chosen name in 2023. Within 18 months, I have 15+ regular clients and earning 3x more than my corporate job. The name really works!",
      result: "3x income increase in 18 months"
    },
    {
      name: "Kavita Agarwal",
      location: "Jaipur, Rajasthan",
      profession: "Homemaker & Part-time Tutor",
      rating: 5,
      text: "My daughter was very shy and struggling in studies. After name spelling correction, she became confident, started participating in competitions and improved her grades from C to A+. Remarkable transformation!",
      result: "Daughter's grades improved from C to A+"
    },
    {
      name: "Amit Gupta",
      location: "Kolkata, West Bengal",
      profession: "Medical Store Owner",
      rating: 5,
      text: "Business was barely surviving after COVID. Changed store name using her numerology advice. Customer footfall doubled in 4 months and monthly profit increased by ₹1.2 lakhs. Highly recommended!",
      result: "Profit increased by ₹1.2L monthly"
    },
    {
      name: "Deepika Nair",
      location: "Kochi, Kerala",
      profession: "Beauty Salon Owner",
      rating: 5,
      text: "My salon was struggling with competition. After numerology consultation and name change, we became the most popular salon in our area. Booking slots fill up 2 weeks in advance now!",
      result: "Became most popular salon in area"
    },
         {
       name: "Ravi Chandra",
       location: "Bangalore, Karnataka",
       profession: "Real Estate Agent",
       rating: 5,
       text: "Was earning ₹30-40k monthly with lots of struggle. After personal name correction and business card changes, my deals increased dramatically. Now earning ₹1.5-2 lakhs monthly consistently!",
       result: "Income increased from ₹40k to ₹2L monthly"
     }
  ];

  const faqs = [
    {
      question: "What is business name numerology and how does it help in 2025?",
      answer: "Business name numerology analyzes the numerical vibrations of your business name to ensure it aligns with success energies. In 2025, with universal year number 9 (Mars energy), a properly chosen business name can attract prosperity, customers, and positive opportunities. Our Cheiro numerology method has helped over 2000+ businesses achieve remarkable growth."
    },
    {
      question: "How do you choose the best name for a newborn baby using numerology?",
      answer: "We analyze the baby's birth date, time, parents' numerological profiles, and 2025 cosmic influences to create names that support the child's highest potential. Our method considers destiny numbers, life path calculations, and planetary influences to ensure the name enhances personality development and future success."
    },
    {
      question: "What makes your numerology methodology unique compared to other numerologists in India?",
      answer: "Our methodology is based on rare Cheiro numerology techniques learned from ancient masters, combined with 18 years of practical experience serving over 2000 clients across 12 countries. We use exclusive calculations not available elsewhere and provide personalized guidance for 2025 universal year influences."
    },
    {
      question: "How accurate are numerology predictions for 2025 and personal year calculations?",
      answer: "Numerology 2025 predictions are based on the universal year number 9 (Mars energy). Our clients report 85-90% accuracy in personal year forecasts, career guidance, and life transition timing. We provide specific monthly guidance and auspicious timing for important decisions throughout 2025."
    },
    {
      question: "Can numerology really help with business growth and career advancement?",
      answer: "Yes, absolutely! Our clients have experienced 30-200% business growth, career promotions, salary increases, and new opportunities after implementing numerological name changes. The testimonials on our website showcase real results from Indian middle-class families and business owners."
    },
    {
      question: "What is the consultation process and how long does it take?",
      answer: "Our consultation process involves: 1) Initial WhatsApp discussion (30 mins), 2) Detailed numerological analysis (24-48 hours), 3) Custom name creation with multiple options, 4) Implementation guidance and timing. The entire process typically takes 3-5 days for complete delivery."
    },
    {
      question: "Do you provide services for clients outside India?",
      answer: "Yes, we serve clients across 12+ countries including USA, Canada, UK, Australia, UAE, and Singapore. Our WhatsApp consultations make it easy for international clients to access our services. We understand cultural preferences for different regions while maintaining numerological accuracy."
    },
    {
      question: "What is the difference between Cheiro numerology and other numerology systems?",
      answer: "Cheiro numerology, developed by the famous Count Louis Hamon, is considered the most accurate system for name analysis and predictions. Unlike Pythagorean or Vedic systems, Cheiro method provides more precise calculations for business success, relationship compatibility, and timing of events."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - SEO Optimized */}
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
            Best Numerologist in India 2025 - Transform Your Destiny Through{' '}
            <span className="text-burnt-orange-600">Ancient Cheiro Numerology</span>{' '}
            Wisdom
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed font-inter font-light max-w-3xl mx-auto">
            Leading numerology expert specializing in business name numerology, baby naming, and personal consultations. Over{' '}
            <span className="font-semibold text-burnt-orange-600">2,000 successful clients</span>{' '}
            across 12 countries have unlocked prosperity and success through our unique Cheiro numerology methodology for 2025.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Business Name Numerology Expert</span>
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Baby Naming Specialist</span>
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Personal Year 2025 Predictions</span>
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Name Correction Services</span>
          </div>

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
              Book Free Numerology Consultation
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

      {/* About Section - SEO Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 font-jakarta">
            India's Leading Numerology Expert - A Journey from <span className="text-burnt-orange-600">Ancient Wisdom</span> to Global Recognition
          </h2>

          <div className="mb-12 text-lg text-gray-700 leading-relaxed font-inter">
            <p className="mb-6">
              With 18 years of dedicated practice in <strong>Cheiro numerology</strong>, our expert has mastered the rare and powerful techniques that have transformed over 2,000 lives across India and 12 countries worldwide. Specializing in <strong>business name numerology</strong>, <strong>baby naming</strong>, and <strong>personal name correction</strong>, we bring ancient wisdom to modern success.
            </p>
            <p className="mb-6">
              Our <strong>numerology services for 2025</strong> are specially designed to harness the universal year number 9 (Mars energy) for maximum prosperity and growth. Whether you're looking for <strong>business naming consultation</strong>, <strong>newborn baby names</strong>, or <strong>personal year predictions</strong>, our methodology delivers proven results.
            </p>
          </div>

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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Rare Cheiro Numerology Knowledge</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-inter font-light">
                Through dedicated study and practice, she mastered a unique extension of <strong>Cheiro numerology</strong> learned from ancient masters, developing a methodology that delivers exceptional results for business growth, career advancement, and personal transformation.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Global Impact & Recognition</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-inter font-light">
                Today, she has consulted over 2,000 clients worldwide including successful business owners, professionals, and families across India, USA, Canada, UK, Australia, and UAE, building a thriving practice through pure word-of-mouth recommendations and proven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - SEO Optimized */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 font-jakarta">
            Professional Numerology Services for 2025 - Unlock Your Potential Through{' '}
            <span className="text-burnt-orange-600">Precise Numerological</span> Naming
          </h2>
          
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-inter">
            Our comprehensive <strong>numerology consultation services</strong> include business name analysis, baby naming guidance, personal name correction, and 2025 predictions using authentic Cheiro numerology methods. Each service is personalized to your unique numerological profile and cosmic influences.
          </p>

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

          <div className="mt-16 bg-burnt-orange-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Why Choose Our Numerology Services?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Proven Results:</strong> 2000+ successful consultations with documented business growth and life improvements
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Authentic Methods:</strong> Rare Cheiro numerology techniques not available elsewhere in India
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>2025 Specialization:</strong> Expert guidance for universal year 9 influences and personal year calculations
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Global Experience:</strong> Serving clients across 12 countries with cultural sensitivity and accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="process">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 font-jakarta">
            Your Journey to <span className="text-burnt-orange-600">Numerological Transformation</span> in 2025
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="mb-6">
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
              Exclusive Cheiro numerology methodology learned from ancient masters, unavailable anywhere else in India
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Authentic Indian Middle Class */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 font-jakarta">
              Real Success Stories from <span className="text-burnt-orange-600">Indian Families</span> & Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
              Discover how our <strong>numerology consultations</strong> have transformed the lives of middle-class Indian families, business owners, and professionals across the country. These are real testimonials from real people who experienced remarkable changes after implementing our numerological guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
                
                <blockquote className="text-sm text-gray-700 mb-4 leading-relaxed font-inter">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.profession}</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-burnt-orange-50 px-3 py-1 rounded-full text-xs font-medium text-burnt-orange-700">
                    ✓ {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-burnt-orange-50 p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Join 2000+ Satisfied Clients</h3>
              <p className="text-lg text-gray-700 mb-6 font-inter">
                These testimonials represent just a fraction of our successful consultations. Every month, we help dozens of Indian families and businesses achieve their goals through the power of numerology.
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="px-8 py-3 bg-burnt-orange-600 text-white rounded-xl font-semibold hover:bg-burnt-orange-700 transition-colors"
              >
                Get Your Success Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Rich */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 font-jakarta">
              Frequently Asked Questions About <span className="text-burnt-orange-600">Numerology Services</span> in India
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-inter">
              Get answers to common questions about our <strong>numerology consultation services</strong>, <strong>business name numerology</strong>, <strong>baby naming</strong>, and <strong>2025 predictions</strong>. Our expert guidance helps you make informed decisions about your numerological journey.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 font-jakarta pr-4">
                    {faq.question}
                  </h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-burnt-orange-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-burnt-orange-600 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed font-inter">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6 font-inter">
              Have more questions about our <strong>numerology services</strong>? Contact us for personalized guidance.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="px-8 py-3 bg-burnt-orange-600 text-white rounded-xl font-semibold hover:bg-burnt-orange-700 transition-colors"
            >
              Ask Your Question
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16 font-jakarta">
            Proven Numerology Results That{' '}
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
              "The insights provided have been remarkably accurate, and the positive changes in my life have been undeniable. This is the best numerology consultation I've ever received."
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-burnt-orange-600 mb-2 font-jakarta">85%</div>
              <div className="text-lg text-gray-600 font-inter">Business Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-burnt-orange-600 mb-2 font-jakarta">90%</div>
              <div className="text-lg text-gray-600 font-inter">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-burnt-orange-600 mb-2 font-jakarta">95%</div>
              <div className="text-lg text-gray-600 font-inter">Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-burnt-orange-600" id="contact">
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
            Ready to Transform Your <span className="text-orange-200">Destiny in 2025?</span>
          </h2>
          
          <p className="text-xl text-orange-100 mb-12 font-inter font-light max-w-3xl mx-auto">
            Join thousands of successful individuals who have discovered the power of numerologically aligned names. Book your personalized consultation today and unlock your potential for prosperity, success, and happiness in 2025.
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
              Book Free Consultation Now
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
              <strong className="text-white text-2xl font-jakarta">IMPORTANT:</strong> Limited availability due to personal attention to each consultation. Book your slot today to secure your numerological transformation for 2025.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalPage;