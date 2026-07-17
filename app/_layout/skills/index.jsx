'use client';

import { motion } from 'framer-motion';

const skills = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn',
  'FastAPI', 'React', 'PostgreSQL', 'Docker',
  'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision',
  'RAG', 'LLMs', 'Data Analytics', 'Power BI',
];

export function Skills() {
  return (
    <section className='py-20 overflow-hidden bg-background'>
      <div className='container mx-auto px-6 mb-12'>
        <h2 className='text-sm uppercase tracking-wider text-muted-foreground'>Tech Stack</h2>
      </div>
      
      <div className='relative'>
        <motion.div
          className='flex gap-8 whitespace-nowrap'
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className='text-6xl md:text-8xl font-bold text-muted-foreground/20 hover:text-foreground transition-colors duration-300 cursor-default'
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
