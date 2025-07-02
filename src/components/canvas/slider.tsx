import { motion } from 'framer-motion';
import React from 'react';

interface TechItem {
  name: string;
  img: string;
}

export default function TechSlider() {
  const techStack: TechItem[] = [
    { name: 'MongoDB', img: '/images/mongodb.png' },
    { name: 'Express.js', img: '/images/express.png' },
    { name: 'React.js', img: '/images/react.png' },
    { name: 'Node.js', img: '/images/node.png' },
    { name: 'WordPress', img: '/images/wordpress.png' },
    { name: 'JavaScript', img: '/images/javascript.png' },
    { name: 'Tailwind CSS', img: '/images/tailwind.png' },
    { name: 'Next.js', img: '/images/nextjs.png' },
  ];

  return (
    <div className="overflow-hidden bg-black py-6">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ 
          x: ['0%', '-50%'] 
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: 'linear',
        }}
      >
        {[...techStack, ...techStack].map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="flex flex-col items-center justify-center w-24"
          >
            <img 
              src={tech.img} 
              alt={tech.name} 
              className="w-16 h-16 object-contain"
            />
            <p className="text-white text-sm mt-2">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
