import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SponsorTier {
  id: string;
  title: string;
  price: string;
  color: string;
  features: string[];
}

const CallForSponsors: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const sponsorTiers: SponsorTier[] = [
    {
      id: 'platinum',
      title: 'Platinum',
      price: '$10,000',
      color: '#4285F4',
      features: [
        'Prime location large booth (20x20)',
        '20-minute keynote presentation',
        'First-tier logo placement on all materials',
        '10 VIP event passes with exclusive access',
        'Featured in post-event videos & press releases',
        'Exclusive sponsor-led workshop session'
      ]
    },
    {
      id: 'gold',
      title: 'Gold',
      price: '$7,500',
      color: '#FBBC05',
      features: [
        'Premium location booth (15x15)',
        '10-minute speaking slot',
        'Second-tier logo placement',
        '6 VIP event passes',
        'Social media highlights & promotions',
        'Demo area in high-traffic location'
      ]
    },
    {
      id: 'silver',
      title: 'Silver',
      price: '$5,000',
      color: '#9E9E9E',
      features: [
        'Standard booth (10x10)',
        '5-minute lightning talk opportunity',
        'Third-tier logo placement',
        '4 VIP event passes',
        'Mentioned in event emails',
        'Inclusion in digital event program'
      ]
    },
    {
      id: 'bronze',
      title: 'Bronze',
      price: '$2,500',
      color: '#CD7F32',
      features: [
        'Tabletop display area',
        'Logo on event website',
        'Mention during opening remarks',
        '2 VIP event passes',
        'Company description in digital program',
        'Post-event attendee list (opt-in only)'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,245,250,1) 100%)',
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Blobs */}
        {isVisible && [...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl mix-blend-multiply opacity-20"
            style={{
              width: `${Math.random() * 400 + 300}px`,
              height: `${Math.random() * 400 + 300}px`,
              backgroundColor: [
                'rgba(66, 133, 244, 0.7)',
                'rgba(234, 67, 53, 0.7)',
                'rgba(251, 188, 5, 0.7)',
                'rgba(52, 168, 83, 0.7)'
              ][i],
              left: `${(i * 25) + Math.random() * 10}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatBlob ${7 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
        
        {/* Floating Particles */}
        {isVisible && [...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              backgroundColor: [
                'rgba(66, 133, 244, 0.6)',
                'rgba(234, 67, 53, 0.6)',
                'rgba(251, 188, 5, 0.6)',
                'rgba(52, 168, 83, 0.6)'
              ][Math.floor(Math.random() * 4)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite, 
                         pulse ${Math.random() * 2 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(to right, #4285F4 1px, transparent 1px), 
                           linear-gradient(to bottom, #4285F4 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 15s linear infinite'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Animated Header */}
        {isVisible && (
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <h2 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 leading-tight">
                Become a Sponsor
              </h2>
              <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 rounded-full mt-2 animate-shimmer" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            >
              Support innovation and connect with top tech talent at GDG's most anticipated event of the year!
            </motion.p>
            
            {/* Animated Icon Row */}
            <div className="flex justify-center space-x-12 mt-12">
              {['#4285F4', '#EA4335', '#FBBC05', '#34A853'].map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.15,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                  }}
                  className="relative"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-lg relative overflow-hidden"
                    style={{ backgroundColor: color }}
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-8 h-8 text-white"
                      style={{ fill: 'white' }}
                    >
                      {index === 0 && <path d="M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z" />}
                      {index === 1 && <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" />}
                      {index === 2 && <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />}
                      {index === 3 && <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18Z" />}
                    </svg>
                    
                    {/* Animated Ripple Effect */}
                    <div 
                      className="absolute inset-0 bg-white rounded-full animate-ping-slow"
                      style={{ 
                        animationDelay: `${index * 0.2}s`,
                        opacity: 0.3 
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Sponsor Tiers - Animated Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-800">
          {sponsorTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 100, rotateY: -15 }}
              animate={isVisible ? { 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
              } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.15,
                type: 'spring',
                stiffness: 100,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="group relative overflow-hidden rounded-2xl"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Card Background with dynamic glassmorphism effect */}
              <div 
                className="absolute inset-0 backdrop-blur-sm transition-all duration-500 group-hover:backdrop-blur-md"
                style={{
                  backgroundColor: `${tier.color}10`,
                  backgroundImage: `radial-gradient(circle at 50% 0%, ${tier.color}20 0%, transparent 75%)`,
                  borderTop: `4px solid ${tier.color}`,
                  boxShadow: activeIndex === index ? `0 0 30px ${tier.color}50` : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
              
              {/* Animated background gradient */}
              <div 
                className="absolute -inset-[100%] opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
                style={{
                  background: `conic-gradient(from 0deg at 50% 50%, ${tier.color} 0%, transparent 60%, ${tier.color} 100%)`,
                  animation: activeIndex === index ? 'spin 10s linear infinite' : 'none',
                }}
              />
              
              {/* Card Content */}
              <div className="relative z-10 p-8">
                {/* Tier Header */}
                <div className="text-center mb-6">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${tier.color}, ${tier.color}90)`,
                    }}
                  >
                    <span className="text-2xl font-black text-white tracking-wider">{tier.title.charAt(0)}</span>
                    
                    {/* Animated rings */}
                    <div 
                      className="absolute inset-0 border-4 border-white rounded-full opacity-30 group-hover:opacity-50 group-hover:scale-150 transition-all duration-1000"
                      style={{ animationDelay: '0.1s' }}
                    />
                  </div>
                  
                  {/* Animated title */}
                  <h3 
                    className="text-2xl font-bold mb-1 relative inline-block" 
                    style={{ color: tier.color }}
                  >
                    {tier.title}
                    <div 
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: tier.color }}
                    />
                  </h3>
                  
                  {/* Price with animated highlight */}
                  <div 
                    className="text-3xl font-bold my-3 relative inline-block"
                    style={{ color: activeIndex === index ? tier.color : '#333' }}
                  >
                    <span className="relative z-10 transition-colors duration-300">{tier.price}</span>
                    <div 
                      className="absolute -inset-x-4 bottom-0 h-3 w-0 group-hover:w-full transition-all duration-500"
                      style={{ 
                        backgroundColor: `${tier.color}30`,
                        zIndex: 0
                      }}
                    />
                  </div>
                </div>
                
                {/* Features List with staggered animation */}
                <ul className="text-left space-y-4 mb-8 min-h-64">
                  {tier.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.7 + index * 0.1 + i * 0.1
                      }}
                      className="flex items-start text-gray-700 group-hover:text-gray-900"
                    >
                      <div 
                        className="flex-shrink-0 mr-2 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300"
                        style={{ 
                          backgroundColor: activeIndex === index ? tier.color : `${tier.color}20`
                        }}
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-3 h-3"
                          style={{ fill: activeIndex === index ? 'white' : tier.color }}
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Animated Button */}
                <div className="relative group">
                  <button 
                    className="w-full py-4 rounded-xl text-white font-bold transition-all duration-500 overflow-hidden relative z-10 shadow-md group-hover:shadow-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${tier.color}, ${tier.color}90)`,
                    }}
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                    <span className="z-10">Become {tier.title} Sponsor</span>
                    
                    {/* Animated arrow */}
                    <svg 
                      className="w-5 h-5 ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  
                  {/* Button shadow */}
                  <div 
                    className="absolute -bottom-1 inset-x-0 h-8 blur-xl transition-opacity duration-500 opacity-30 group-hover:opacity-60 rounded-b-xl"
                    style={{ 
                      background: tier.color
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-24 text-center relative"
        >
          <div className="relative inline-block">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 mb-6">Ready to Support Innovation?</h3>
            <motion.div 
              className="h-1 w-0 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"
              animate={isVisible ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1, delay: 2 }}
            />
          </div>
          
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg">
            Join leading tech companies in sponsoring GDG's WOW Event. 
            Custom sponsorship packages are also available to meet your specific goals.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-bold text-lg shadow-lg overflow-hidden group"
          >
            <span className="relative z-10">Contact Us About Sponsorship</span>
            
            {/* Button animation effects */}
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="15" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <rect 
                className="absolute inset-0 w-full h-full fill-current text-blue-500 opacity-0 group-hover:opacity-30"
                style={{ 
                  filter: 'url(#glow)',
                  animation: 'pulse 2s infinite'
                }}
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Animated keyframes */}
      <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
          50% { transform: translateY(-20px) scale(1.05) rotate(5deg); }
        }
        
        @keyframes floatParticle {
          0% { transform: translate(0, 0); }
          100% { transform: translate(calc(100vw - 100%), calc(100vh - 100%)); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .perspective-800 {
          perspective: 800px;
        }
        
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CallForSponsors;