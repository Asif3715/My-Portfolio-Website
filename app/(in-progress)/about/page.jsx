'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import { Navbar, Transition } from '@/layout';

const slideUpWithOpacity = {
  initial: { y: 50, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  },
};

// Data
const education = [
  {
    title: 'BS Data Science',
    institution: 'National University of Sciences and Technology (NUST)',
    year: '2023 – 2027',
    location: 'Islamabad, Pakistan',
  },
  {
    title: 'Matric & FSc Pre-Engineering',
    institution: 'PAF College Sargodha',
    year: '2017 – 2022',
    location: 'Sargodha, Pakistan',
  },
];

const experience = [
  {
    title: 'Research Intern',
    company: 'Machvis Lab, NUST',
    year: 'May 2024 – Aug 2024',
    desc: 'Built scalable data acquisition pipeline with automated web scraping and PubMed API. Engineered NLP pipeline using spaCy and HuggingFace for clinical entity extraction.',
  },
];

const skills = [
  {
    category: 'Languages',
    items: 'Python, SQL, JavaScript',
    colSpan: 'md:col-span-1',
  },
  {
    category: 'ML & Deep Learning',
    items: 'PyTorch, TensorFlow, Scikit-learn, HuggingFace',
    colSpan: 'md:col-span-2',
  },
  {
    category: 'LLMs & NLP',
    items: 'LangChain, RAG, Prompt Engineering, spaCy',
    colSpan: 'md:col-span-2',
  },
  {
    category: 'Data & BI',
    items: 'Pandas, Power BI, DAX, EDA',
    colSpan: 'md:col-span-1',
  },
  {
    category: 'Backend & Web',
    items: 'FastAPI, React, Node.js, Streamlit',
    colSpan: 'md:col-span-1',
  },
  {
    category: 'Databases & Tools',
    items: 'PostgreSQL, Qdrant, Docker, Git',
    colSpan: 'md:col-span-2',
  },
];

function Marquee() {
  return (
    <div className='relative my-20 flex w-full -rotate-2 scale-110 flex-col items-center overflow-hidden bg-foreground py-12 text-background'>
      <motion.div
        className='flex whitespace-nowrap text-5xl font-bold uppercase tracking-tight md:text-7xl'
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
      >
        <span className='mr-8'>
          Python • PyTorch • TensorFlow • React • FastAPI • LangChain • Qdrant •
          Power BI •{' '}
        </span>
        <span className='mr-8'>
          Python • PyTorch • TensorFlow • React • FastAPI • LangChain • Qdrant •
          Power BI •{' '}
        </span>
      </motion.div>
    </div>
  );
}

export default function About() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen pb-20'>
        {/* HERO SECTION */}
        <section className='container mx-auto px-6 pb-20 pt-32 md:pt-48'>
          <div className='overflow-hidden'>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.2,
              }}
              className='text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[9vw]'
            >
              Building
            </motion.h1>
          </div>
          <div className='overflow-hidden'>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.3,
              }}
              className='ml-0 text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:ml-[10%] md:text-[9vw]'
            >
              Intelligent
            </motion.h1>
          </div>
          <div className='overflow-hidden'>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.4,
              }}
              className='ml-0 text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:ml-[20%] md:text-[9vw]'
            >
              Systems
            </motion.h1>
          </div>
        </section>

        {/* IMAGE & SUMMARY PARALLAX */}
        <section className='container mx-auto mt-10 border-t border-border px-6 py-20'>
          <div className='flex flex-col gap-12 md:flex-row md:gap-24'>
            <div className='w-full md:w-1/3'>
              <div
                className='relative h-[60vh] w-full overflow-hidden rounded-xl'
                ref={container}
              >
                <motion.div
                  style={{ y }}
                  className='absolute -inset-y-[15%] h-[130%] w-full'
                >
                  <Image
                    src='/asif5.jpeg'
                    alt='Asif Khan'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                </motion.div>
              </div>
            </div>

            <div className='flex w-full items-center md:w-2/3'>
              <motion.p
                initial='initial'
                whileInView='enter'
                viewport={{ once: true, margin: '-10%' }}
                variants={slideUpWithOpacity}
                className='text-2xl font-medium leading-tight md:text-4xl md:leading-snug'
              >
                I am a Data Science student at NUST with hands-on experience
                building machine learning, NLP, and data analytics systems.
                <br />
                <br />
                My focus lies in developing full-stack AI applications, deep
                learning pipelines, and transforming raw data into actionable
                business intelligence.
              </motion.p>
            </div>
          </div>
        </section>

        {/* INFINITE MARQUEE */}
        <Marquee />

        {/* EXPERIENCE TIMELINE */}
        <section className='container mx-auto px-6 py-32'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='mb-16 text-sm font-semibold uppercase tracking-wider text-muted-foreground'
          >
            01 / Experience
          </motion.div>

          <div className='flex flex-col border-t border-border'>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='group flex flex-col border-b border-border py-10 transition-colors duration-500 hover:bg-secondary/20 md:flex-row'
              >
                <div className='mb-4 w-full md:mb-0 md:w-1/4'>
                  <span className='text-muted-foreground'>{exp.year}</span>
                </div>
                <div className='flex w-full flex-col justify-between md:w-3/4 md:flex-row'>
                  <div className='mb-4 md:mb-0 md:w-1/2 md:pr-8'>
                    <h3 className='mb-2 text-2xl font-medium md:text-4xl'>
                      {exp.title}
                    </h3>
                    <span className='text-sm uppercase tracking-wider text-muted-foreground'>
                      {exp.company}
                    </span>
                  </div>
                  <div className='md:w-1/2'>
                    <p className='text-lg text-muted-foreground'>{exp.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className='container mx-auto px-6 py-10'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='mb-16 text-sm font-semibold uppercase tracking-wider text-muted-foreground'
          >
            02 / Education
          </motion.div>

          <div className='flex flex-col border-t border-border'>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='group flex flex-col border-b border-border py-10 transition-colors duration-500 hover:bg-secondary/20 md:flex-row'
              >
                <div className='mb-4 w-full md:mb-0 md:w-1/4'>
                  <span className='text-muted-foreground'>{edu.year}</span>
                </div>
                <div className='flex w-full flex-col justify-between md:w-3/4 md:flex-row'>
                  <div className='mb-4 md:mb-0 md:w-1/2 md:pr-8'>
                    <h3 className='mb-2 text-2xl font-medium md:text-3xl'>
                      {edu.institution}
                    </h3>
                    <span className='text-sm uppercase tracking-wider text-muted-foreground'>
                      {edu.location}
                    </span>
                  </div>
                  <div className='flex items-center md:w-1/2'>
                    <p className='text-xl'>{edu.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS BENTO BOX */}
        <section className='container mx-auto px-6 py-32'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='mb-16 text-sm font-semibold uppercase tracking-wider text-muted-foreground'
          >
            03 / Expertise
          </motion.div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className={`flex flex-col justify-between rounded-3xl border border-border bg-secondary/10 p-8 backdrop-blur-sm ${skill.colSpan}`}
              >
                <h3 className='mb-8 text-xl font-medium text-foreground/80 md:text-2xl'>
                  {skill.category}
                </h3>
                <p className='text-lg leading-relaxed text-muted-foreground md:text-xl'>
                  {skill.items}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </Transition>
  );
}
