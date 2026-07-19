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

  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const container2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ['start end', 'end start'],
  });

  const y2 = useTransform(scrollYProgress2, [0, 1], [-100, 100]);

  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const container3 = useRef(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: container3,
    offset: ['start end', 'end start'],
  });

  const y3 = useTransform(scrollYProgress3, [0, 1], [-100, 100]);

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
              className='text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[11vw]'
            >
              About
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
              className='ml-0 text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:ml-[10%] md:text-[11vw]'
            >
              Me
            </motion.h1>
          </div>
        </section>

        {/* IMAGE & SUMMARY PARALLAX */}
        <section className='container mx-auto mt-10 flex flex-col gap-32 border-t border-border px-6 py-20'>
          {/* Paragraph 1 */}
          <div className='flex flex-col gap-12 md:flex-row md:items-center md:gap-24'>
            <div className='w-full md:w-5/12'>
              <div
                className='relative h-[60vh] w-full overflow-hidden rounded-xl'
                ref={container}
              >
                <motion.div
                  style={{ y }}
                  className='absolute inset-y-[-15%] h-[130%] w-full'
                >
                  <Image
                    src='/pcs.png'
                    alt='PAF College Sargodha'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </motion.div>
              </div>
            </div>

            <div className='flex w-full items-center md:w-7/12'>
              <motion.p
                initial='initial'
                whileInView='enter'
                viewport={{ once: true, margin: '-10%' }}
                variants={slideUpWithOpacity}
                className='text-xl font-light leading-relaxed text-foreground/80 md:text-2xl md:leading-loose'
              >
                My journey of discipline and leadership began at PAF College
                Sargodha, where I joined in 2017 as an 8th-grade cadet and spent
                five memorable years completing my Matriculation and F.Sc.
                During my time there, I earned several distinctions, including
                the Badge of Excellence and multiple athletics medals. Beyond
                academics and sports, I had the privilege of serving as House
                Captain, an experience that strengthened my leadership,
                teamwork, and sense of responsibility—qualities that continue to
                shape both my personal and professional life today.
              </motion.p>
            </div>
          </div>

          {/* Paragraph 2 */}
          <div className='flex flex-col-reverse gap-12 md:flex-row md:items-center md:gap-24'>
            <div className='flex w-full items-center md:w-7/12'>
              <motion.p
                initial='initial'
                whileInView='enter'
                viewport={{ once: true, margin: '-10%' }}
                variants={slideUpWithOpacity}
                className='text-xl font-light leading-relaxed text-foreground/80 md:text-2xl md:leading-loose'
              >
                I am currently a{' '}
                <strong className='font-medium text-foreground'>
                  final-year BS Data Science student at the School of Electrical
                  Engineering and Computer Science (SEECS), National University
                  of Sciences and Technology (NUST)
                </strong>
                . Throughout my academic journey, I have gained hands-on
                experience in machine learning, deep learning, natural language
                processing, and data analytics by building intelligent,
                data-driven solutions.
                <br />
                <br />
                My interests lie in developing end-to-end AI applications,
                designing scalable machine learning pipelines, and transforming
                raw data into meaningful insights that solve real-world
                problems. I am passionate about continuously learning emerging
                AI technologies and applying them to create practical, impactful
                solutions.
              </motion.p>
            </div>

            <div className='w-full md:w-5/12'>
              <div
                className='relative h-[60vh] w-full overflow-hidden rounded-xl'
                ref={container2}
              >
                <motion.div
                  style={{ y: y2 }}
                  className='absolute inset-y-[-15%] h-[130%] w-full'
                >
                  <Image
                    src='/nust.png'
                    alt='NUST'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Paragraph 3 */}
          <div className='flex flex-col gap-12 md:flex-row md:items-center md:gap-24'>
            <div className='w-full md:w-5/12'>
              <div
                className='relative h-[60vh] w-full overflow-hidden rounded-xl'
                ref={container3}
              >
                <motion.div
                  style={{ y: y3 }}
                  className='absolute inset-y-[-15%] h-[130%] w-full'
                >
                  <Image
                    src='/hobbies.png'
                    alt='Hobbies'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </motion.div>
              </div>
            </div>

            <div className='flex w-full items-center md:w-7/12'>
              <motion.p
                initial='initial'
                whileInView='enter'
                viewport={{ once: true, margin: '-10%' }}
                variants={slideUpWithOpacity}
                className='text-xl font-light leading-relaxed text-foreground/80 md:text-2xl md:leading-loose'
              >
                Beyond academics and technology, I have always been passionate
                about sports and believe they have played a vital role in
                shaping my discipline, resilience, and teamwork. I enjoy playing{' '}
                <strong className='font-medium text-foreground'>
                  hockey, football, and squash
                </strong>
                , and I actively participated in various athletic events
                throughout my school years. Outside the field, I enjoy{' '}
                <strong className='font-medium text-foreground'>
                  calligraphy, declamation, reading, and table tennis
                </strong>
                . These interests have helped me develop creativity, confidence,
                and effective communication skills while maintaining a healthy
                balance between personal growth and professional ambitions.
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
            className='mb-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground'
          >
            01 / Experience
          </motion.div>

          <div className='grid grid-cols-1 gap-6'>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className='flex flex-col justify-between rounded-3xl border border-border bg-secondary/10 p-8 backdrop-blur-sm md:flex-row md:items-center'
              >
                <div className='mb-6 md:mb-0 md:w-1/4'>
                  <span className='inline-block rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm text-muted-foreground'>
                    {exp.year}
                  </span>
                </div>
                <div className='flex w-full flex-col justify-between md:w-3/4 md:flex-row'>
                  <div className='mb-4 md:mb-0 md:w-5/12 md:pr-8'>
                    <h3 className='mb-2 text-2xl font-medium md:text-3xl'>
                      {exp.title}
                    </h3>
                    <span className='text-sm uppercase tracking-wider text-foreground/70'>
                      {exp.company}
                    </span>
                  </div>
                  <div className='md:w-7/12'>
                    <p className='text-base leading-relaxed text-muted-foreground md:text-lg'>
                      {exp.desc}
                    </p>
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
            className='mb-12 text-sm font-semibold uppercase tracking-wider text-muted-foreground'
          >
            02 / Education
          </motion.div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className='flex flex-col justify-between rounded-3xl border border-border bg-secondary/10 p-8 backdrop-blur-sm'
              >
                <div className='mb-6'>
                  <span className='inline-block rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm text-muted-foreground'>
                    {edu.year}
                  </span>
                </div>
                <div>
                  <h3 className='mb-4 text-2xl font-medium md:text-3xl'>
                    {edu.title}
                  </h3>
                  <div className='flex flex-col gap-2'>
                    <span className='text-lg text-foreground/80'>
                      {edu.institution}
                    </span>
                    <span className='text-sm uppercase tracking-wider text-muted-foreground'>
                      {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </Transition>
  );
}
