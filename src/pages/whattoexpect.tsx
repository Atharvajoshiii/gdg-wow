import { DefaultDemo } from "@/components/text";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from 'framer-motion';
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconRocket,
  IconBrain,
} from "@tabler/icons-react";
import { useState } from 'react';

// Define types for our components and data
interface CardBackgroundProps {
  color: string;
}

interface Item {
  title: string;
  description: string;
  className: string;
  icon: JSX.Element;
}

const CardBackground: React.FC<CardBackgroundProps> = ({ color }) => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(120deg, ${color}10, ${color}30)`,
      }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div 
      className="absolute inset-0" 
      style={{
        backgroundImage: `radial-gradient(circle at center, ${color}20 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute top-0 right-0 w-16 h-16"
      style={{
        borderRight: `2px solid ${color}40`,
        borderTop: `2px solid ${color}40`,
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
);

export function WhatToExpect(): JSX.Element {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const googleColors = {
    blue: '#4285F4',
    red: '#DB4437',
    yellow: '#F4B400',
    green: '#0F9D58',
    purple: '#7B1FA2',
    teal: '#009688'
  };

  const items: Item[] = [
    {
      title: "Innovative Workshops",
      description: "Dive into cutting-edge technical workshops led by industry experts and Google Developer Experts. Get hands-on experience with the latest technologies.",
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-5 w-5" style={{ color: googleColors.blue }} />,
    },
    {
      title: "Networking Hub",
      description: "Connect with fellow developers, mentors, and industry leaders from across the globe. Build lasting relationships in the tech community.",
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-5 w-5" style={{ color: googleColors.red }} />,
    },
    {
      title: "Hands-on Learning",
      description: "Get practical experience with the latest Google technologies and development tools. Learn from real-world applications and case studies.",
      className: "md:col-span-1",
      icon: <IconSignature className="h-5 w-5" style={{ color: googleColors.yellow }} />,
    },
    {
      title: "Community Building",
      description: "Be part of a vibrant community of innovators, creators, and problem-solvers. Collaborate on projects that make a real impact in the developer ecosystem.",
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-5 w-5" style={{ color: googleColors.green }} />,
    },
    {
      title: "Innovation Lab",
      description: "Access state-of-the-art development environments and experimental features. Push the boundaries of what's possible with emerging technologies and AI integration.",
      className: "md:col-span-2",
      icon: <IconRocket className="h-5 w-5" style={{ color: googleColors.purple }} />,
    },
    {
      title: "AI & ML Excellence",
      description: "Explore the fascinating world of Artificial Intelligence and Machine Learning. Learn to implement smart solutions using Google's advanced AI tools and frameworks.",
      className: "md:col-span-2",
      icon: <IconBrain className="h-5 w-5" style={{ color: googleColors.teal }} />,
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <DefaultDemo name="What To Expect From Us"/>
        <motion.p 
          className="text-lg text-gray-700 mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Embark on an extraordinary journey of innovation, learning, and collaboration. 
          Join us as we explore the frontiers of technology and create meaningful connections.
        </motion.p>
      </motion.div>

      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <motion.div
              className={`${item.className} relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-neutral-200 p-6 h-full shadow-lg`}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.2 }}
            >
              <CardBackground color={Object.values(googleColors)[i % 6]} />
              
              <div className="relative z-10">
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  animate={{
                    x: hoveredIndex === i ? [0, 4, 0] : 0,
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <motion.span 
                    className="p-2 rounded-lg" 
                    style={{ backgroundColor: `${Object.values(googleColors)[i % 6]}20` }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <h3 className="text-xl font-semibold" style={{ color: Object.values(googleColors)[i % 6] }}>
                    {item.title}
                  </h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  animate={{
                    opacity: hoveredIndex === i ? 1 : 0.8,
                  }}
                >
                  {item.description}
                </motion.p>
                
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8"
                  style={{
                    borderRight: `2px solid ${Object.values(googleColors)[i % 6]}30`,
                    borderBottom: `2px solid ${Object.values(googleColors)[i % 6]}30`,
                  }}
                  animate={{
                    rotate: hoveredIndex === i ? [0, 90, 0] : 0,
                  }}
                  transition={{ duration: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </BentoGrid>
    </div>
  );
}

export default WhatToExpect;