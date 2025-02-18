import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { useState, useEffect } from 'react';

function DefaultDemo({ name }: { name: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      <AnimatedText 
        text={name}
        textClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 transform"
        underlinePath="M 0,15 Q 50,5 100,15 Q 150,25 200,15 Q 250,5 300,15"
        underlineHoverPath="M 0,15 Q 50,25 100,15 Q 150,5 200,15 Q 250,25 300,15"
        underlineDuration={1.2}
      />
      <div className={`absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`} />
      <div className={`absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-30 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`} />
    </div>
  );
}

function CustomStyleDemo() {
  return (
    <div className="relative group">
      <AnimatedText
        text="Namaste World!"
        textClassName="text-5xl font-bold mb-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 transform"
        underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
        underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
        underlineDuration={1.5}
      />
      <br />
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <br />
    </div>
  );
}

export { DefaultDemo, CustomStyleDemo };