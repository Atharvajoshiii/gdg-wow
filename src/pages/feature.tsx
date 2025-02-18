import { AnimatedCardDemo } from "@/components/animatedcarddemo";
import { DefaultDemo } from "@/components/text";
import { motion } from 'framer-motion';
import {Star } from 'lucide-react';
import { useState } from 'react';

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full"
        style={{
          background: i % 2 ? '#4285F4' : '#DB4437',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          filter: 'blur(1px)',
        }}
        animate={{
          y: [-20, -120],
          x: [0, Math.random() * 100 - 50],
          opacity: [0, 1, 0],
          scale: [0, 2, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const Feature = () => {
  const [isHovered, setIsHovered] = useState(false);

  const googleColors = {
    blue: '#4285F4',
    red: '#DB4437',
    yellow: '#F4B400',
    green: '#0F9D58'
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center bg-white relative overflow-hidden">
      <FloatingParticles />
      
      {/* Animated background rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{ 
              width: `${400 + i * 100}px`,
              height: `${400 + i * 100}px`,
              border: `2px solid ${Object.values(googleColors)[i % 4]}`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* First Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatedCardDemo />
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Floating stars */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                right: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
            </motion.div>
          ))}

          <div className="relative">
            <DefaultDemo name="About GDSC WoW" />
            <motion.div
              className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-xl"
              animate={{
                opacity: isHovered ? 0.6 : 0.2,
                scale: isHovered ? 1.05 : 1,
              }}
            />
          </div>

          <motion.div 
            className="space-y-4 relative z-10"
            animate={{
              opacity: isHovered ? 1 : 0.9,
            }}
          >
            <motion.p 
              className="text-lg leading-relaxed text-gray-800 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to <span className="text-blue-500 font-semibold">Google Developer Student Clubs Wonder of Wonders</span> - where innovation meets community! 🌟
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-800 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              GDSC WoW is an extraordinary <span className="text-red-500 font-semibold">annual celebration</span> that brings together the brightest minds from across our global developer community. Here, we transform ideas into reality, forge lasting connections, and push the boundaries of what's possible.
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-800 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Join us for an incredible journey filled with <span className="text-yellow-500 font-semibold">workshops</span>, <span className="text-green-500 font-semibold">hackathons</span>, and <span className="text-blue-500 font-semibold">networking opportunities</span> that will inspire and empower you to make a difference in the tech world. 
            </motion.p>
            <motion.p 
              className="text-lg leading-relaxed text-gray-800 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Together, we're building more than just code - we're building the future! 🚀
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Feature;