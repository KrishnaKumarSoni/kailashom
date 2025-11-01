import React, { useEffect, useMemo, useState } from 'react';
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
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { listenToReviews } from '../services/reviewService';
import { ReviewRecord } from '../types/review';

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
      description: 'Workshop name ideas that balance your brand story with supportive number patterns and launch windows.'
    },
    {
      icon: Baby,
      title: 'Newborn Baby Naming',
      description: 'Co-create baby names and spellings that sit well with family traditions while aligning with the child’s birth numbers.'
    },
    {
      icon: Sparkles,
      title: 'Personal Name Correction',
      description: 'Review signatures, spellings, and personal years to see whether gentle adjustments could bring more ease.'
    }
  ];

  const process = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'Begin with a short chat about your questions, background, and the decisions you’re weighing.'
    },
    {
      icon: Calculator,
      title: 'Numerological Analysis',
      description: 'We map key numbers, personal years, and names to highlight supportive directions without jargon.'
    },
    {
      icon: Sparkles,
      title: 'Custom Name Creation',
      description: 'Receive curated combinations, pronunciation notes, and reasons behind each suggestion.'
    },
    {
      icon: BookOpen,
      title: 'Implementation Guidance',
      description: 'Discuss practical next steps, from paperwork and announcements to colour cues and launch timing.'
    }
  ];

  const [reviews, setReviews] = useState<ReviewRecord[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewsError, setReviewsError] = useState<string | null>(null);

  const reviewDateFormatter = useMemo(
    () => new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }),
    []
  );

  useEffect(() => {
    const unsubscribe = listenToReviews(
      (records) => {
        setReviews(records);
        setReviewsLoading(false);
        setReviewsError(null);
      },
      (error) => {
        console.error('Failed to load reviews', error);
        setReviewsError('Unable to load recent experiences right now. Please check back soon.');
        setReviewsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const faqs = [
    {
      question: "What is business name numerology and how does it help in 2025?",
      answer: "We review how the numbers behind a business name interact with the people running it and the current personal year. The outcome is usually a shortlist of names plus simple suggestions for launch windows so the team can choose what feels practical."
    },
    {
      question: "How do you choose the best name for a newborn baby using numerology?",
      answer: "Parents share preferred sounds or family combinations, and we weigh them against the child's birth date and core numbers. The process is collaborative, with guidance on why certain spellings may feel calmer or more energetic."
    },
    {
      question: "What makes your numerology methodology unique compared to other numerologists in India?",
      answer: "We stick to Cheiro numerology fundamentals and spend most of the session listening. Rather than dramatic forecasts, you receive grounded explanations and next steps you can integrate at your own pace."
    },
    {
      question: "How accurate are numerology predictions for 2025 and personal year calculations?",
      answer: "Numerology outlines themes and timing, not guarantees. Clients often use personal year readings as reflection tools alongside their own planning, which keeps expectations realistic."
    },
    {
      question: "Can numerology really help with business growth and career advancement?",
      answer: "It offers a fresh lens when decisions feel stuck. Many clients use the insights to confirm intuition or spark ideas, while continuing to rely on market research and professional advice for the heavy lifting."
    },
    {
      question: "What is the consultation process and how long does it take?",
      answer: "Typically we begin with a short WhatsApp or phone chat, follow it up with a detailed session, and send written notes within two to three days. Follow-up questions are welcome as you implement the guidance."
    },
    {
      question: "Do you provide services for clients outside India?",
      answer: "Yes. Most meetings happen online, so overseas families and professionals can book sessions that suit their time zone."
    },
    {
      question: "What is the difference between Cheiro numerology and other numerology systems?",
      answer: "Cheiro numerology places strong emphasis on name numbers and personal year cycles. We occasionally reference other systems when it helps clients connect the dots, but Cheiro remains our base."
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
            Thoughtful Numerology Guidance for Names, Families, and New Beginnings
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed font-inter font-light max-w-3xl mx-auto">
            <strong>Rupa Soni</strong> blends traditional Cheiro numerology with a grounded, conversation-led approach. We help families, founders, and individuals explore name choices, timing, and personal cycles with balanced insights you can actually use.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Business & brand naming support</span>
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Baby naming conversations</span>
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Personal year check-ins</span>
            <span className="bg-burnt-orange-100 px-3 py-1 rounded-full">✓ Implementation guidance</span>
          </div>

          <div className="flex items-center justify-center mb-16">
            <button 
              onClick={handleWhatsAppClick}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className="relative px-12 py-4 text-xl font-semibold text-white rounded-xl transition-all duration-150"
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
                Plan a Numerology Conversation
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 font-jakarta">650+</div>
              <div className="text-base sm:text-lg text-gray-600 font-medium font-inter">Families & founders advised</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 font-jakarta">8+</div>
              <div className="text-base sm:text-lg text-gray-600 font-medium font-inter">Cities consulted regularly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 font-jakarta">15</div>
              <div className="text-base sm:text-lg text-gray-600 font-medium font-inter">Years of steady practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - SEO Enhanced */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 font-jakarta">
            A Practical Numerology Practice Rooted in Listening
          </h2>

          <div className="mb-12 text-lg text-gray-700 leading-relaxed font-inter">
            <p className="mb-6">
              For more than 15 years, <strong>Rupa Soni</strong> has studied <strong>Cheiro numerology</strong> and met families across India to talk through names, milestones, and personal rhythms. Our role is to pair traditional calculation with thoughtful conversations so decisions feel informed rather than forced.
            </p>
            <p className="mb-6">
              Sessions focus on what the numbers suggest for the year ahead, practical timing, and how changes may resonate in daily life. Whether you are choosing a business identity, finalising a baby name, or checking in on a personal year, the guidance stays grounded and collaborative.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Cheiro Numerology, Explained Clearly</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-inter font-light">
                We walk through core Cheiro numerology principles in plain language, sharing how name numbers, birth numbers, and personal years interact. Every recommendation comes with context so you can decide what feels right for your situation.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Conversations Across Communities</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-inter font-light">
                Most people find us through a friend or relative. We regularly work with parents, independent professionals, and small business teams in India and with a few overseas families who prefer WhatsApp sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - SEO Optimized */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 font-jakarta">
            Supportive Numerology Services for 2025 — Practical Guidance, Not Hype
          </h2>
          
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-inter">
            We keep our <strong>numerology consultations</strong> simple and conversational. Sessions cover business or brand naming, baby naming assistance, and personal-year reflections with notes you can revisit after the call.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Why Clients Appreciate the Sessions</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left text-gray-700 font-inter">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Calm structure:</strong> We begin with listening, move into calculations, and close with written notes.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Plain language:</strong> Concepts are explained without jargon so families of all ages can follow along.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Practical timing:</strong> Personal-year insights are paired with everyday considerations like exams or launch schedules.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-burnt-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Support afterwards:</strong> Follow-up questions over WhatsApp are welcome for a few weeks as you implement changes.
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
            How a Typical Numerology Session Unfolds
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
              A measured blend of Cheiro numerology insights, lived experience, and practical guidance you can use immediately
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Authentic Indian Middle Class */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 font-jakarta">
              Recent Conversations with Families and Small Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
              The notes below are from people who invited numerology into their decision-making. Names are shared with permission and, in some cases, lightly altered for privacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsLoading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="bg-white p-6 rounded-2xl shadow-lg animate-pulse h-full flex flex-col gap-4"
                >
                  <div className="h-4 bg-gray-200 rounded w-24" />
                  <div className="h-28 bg-gray-100 rounded-xl" />
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded" />
                    <div className="h-3 bg-gray-200 rounded w-3/4" />
                  </div>
                  <div className="mt-auto h-3 bg-gray-200 rounded w-1/3" />
                </div>
              ))}

            {!reviewsLoading && reviewsError && (
              <div className="col-span-full bg-red-50 border border-red-200 text-red-600 rounded-2xl px-6 py-5 text-sm font-inter">
                {reviewsError}
              </div>
            )}

            {!reviewsLoading && !reviewsError && reviews.length === 0 && (
              <div className="col-span-full bg-white border border-dashed border-burnt-orange-300 rounded-2xl px-8 py-10 text-center">
                <p className="text-lg text-gray-700 font-inter mb-4">Be the first to share your story with us.</p>
                <Link
                  to="/write-a-review"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)',
                    boxShadow: '0 8px 20px rgba(234, 88, 12, 0.3)'
                  }}
                >
                  Share your review
                </Link>
              </div>
            )}

            {!reviewsLoading && !reviewsError &&
              reviews.slice(0, 6).map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {reviewDateFormatter.format(review.createdAt)}
                    </div>
                  </div>

                  {review.mediaUrl && (
                    <div className="mb-4 overflow-hidden rounded-xl">
                      {review.mediaType === 'image' ? (
                        <img
                          src={review.mediaUrl}
                          alt={`Review from ${review.name}`}
                          className="w-full h-40 object-cover"
                        />
                      ) : (
                        <video
                          src={review.mediaUrl}
                          controls
                          className="w-full h-40 object-cover rounded-xl"
                        />
                      )}
                    </div>
                  )}

                  <blockquote className="text-sm text-gray-700 mb-4 leading-relaxed font-inter">
                    “{review.feedback}”
                  </blockquote>

                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-burnt-orange-50 p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">Ready to add your experience?</h3>
              <p className="text-lg text-gray-700 mb-6 font-inter">
                Every note helps someone new decide whether a numerology session is right for them.
              </p>
              <Link 
                to="/write-a-review"
                className="inline-flex items-center justify-center px-8 py-3 bg-burnt-orange-600 text-white rounded-xl font-semibold hover:bg-burnt-orange-700 transition-colors"
              >
                Share your review
              </Link>
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
              Here are the questions we hear most often during discovery calls. If something you’re wondering about isn’t covered, message us and we’ll be happy to clarify.
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
            What People Usually Take Away from a Session
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
              "I appreciated how the session slowed me down. Instead of big promises, I left with a clearer plan and a written summary I could revisit with my family."
            </blockquote>
            <cite className="text-xl text-burnt-orange-600 font-bold font-inter">
              — Client feedback shared after a virtual consultation
            </cite>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 text-left text-gray-700 font-inter">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-xl font-semibold text-burnt-orange-600 mb-2 font-jakarta">Clarity</p>
              <p>Clients often say they leave understanding their options instead of feeling overwhelmed by choices.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-xl font-semibold text-burnt-orange-600 mb-2 font-jakarta">Written Notes</p>
              <p>We share session highlights so you can revisit key numbers, spellings, and suggested timelines.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-xl font-semibold text-burnt-orange-600 mb-2 font-jakarta">Next Steps</p>
              <p>Expect simple suggestions—from paperwork reminders to colour cues—that help you ease into changes.</p>
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
            Ready to talk through your numerology questions?
          </h2>
          
          <p className="text-xl text-orange-100 mb-12 font-inter font-light max-w-3xl mx-auto">
            Book a conversation to review names, upcoming milestones, or personal-year themes. We’ll keep it practical, share notes, and leave space for you to decide the pace of any changes.
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
              Request a Session Time
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
              <span className="text-lg text-orange-100 font-semibold font-inter">Phone or WhatsApp sessions</span>
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
              <span className="text-lg text-orange-100 font-semibold font-inter">Notes shared after sessions</span>
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
              <span className="text-lg text-orange-100 font-semibold font-inter">Comfortable for different time zones</span>
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
              <strong className="text-white text-2xl font-jakarta">Scheduling note:</strong> We usually book 2-3 weeks in advance. Share a few preferred slots and we’ll confirm the earliest one that fits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalPage;
