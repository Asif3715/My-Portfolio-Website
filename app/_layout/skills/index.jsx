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
    <section className='overflow-hidden bg-background py-20'>
      <div className='container mx-auto mb-12 px-6'>
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
              className='cursor-default text-6xl font-bold text-muted-foreground/20 transition-colors duration-300 hover:text-foreground md:text-8xl'
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
