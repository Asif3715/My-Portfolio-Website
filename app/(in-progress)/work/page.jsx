'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { Navbar, Transition } from '@/layout';

const projects = [
  {
    title: 'RAG Research Paper',
    desc: 'AI assistant for querying academic papers using RAG, Qdrant vector DB, FastAPI, and React with source-cited retrieval.',
    tech: 'RAG, Qdrant, FastAPI, React, LLMs',
    github: 'https://github.com/Asif3715/RAG-ResearchPaper',
    live: null,
  },
  {
    title: 'CV Intelligence',
    desc: 'Automates resume screening with LLM-powered parsing, multi-criteria scoring, and credential verification.',
    tech: 'LLMs, NLP, FastAPI, React, Supabase',
    github: 'https://github.com/Asif3715/cv-analyzer',
    live: 'https://cv-analyzer-drab.vercel.app',
  },
  {
    title: 'Osteoporosis Detection',
    desc: 'Deep learning framework combining ResNet50 and clinical metadata ANN for 3-class diagnostic classification.',
    tech: 'ResNet50, ViT-MAE, PyTorch',
    github: 'https://github.com/Asif3715/Osteoporosis-Detection',
    live: null,
  },
  {
    title: 'Superstore BI',
    desc: 'Interactive Power BI dashboard with 5,900+ retail records, geospatial maps, Pareto analysis, and forecasting.',
    tech: 'Power BI, Python, DAX',
    github: 'https://github.com/Asif3715/Superstore-BI-Analysis',
    live: null,
  },
  {
    title: 'Email Triage Agent',
    desc: 'Appscript-enabled student help email agent for automated categorization and routing.',
    tech: 'LLMs, Appscript',
    github: 'https://github.com/Asif3715/AI-Email-Triage-Agent',
    live: 'https://ai-email-triage-agent.vercel.app',
  },
  {
    title: 'Travel Agent',
    desc: 'Plan trips according to your interests and budget using AI.',
    tech: 'LLMs, Python',
    github: 'https://github.com/Asif3715/Travel-Agent',
    live: null,
  },
];

export default function Work() {
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
              className='text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[10vw]'
            >
              Creating
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
              className='ml-0 text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:ml-[10%] md:text-[10vw]'
            >
              Next-Gen
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
              className='ml-0 text-[14vw] font-bold uppercase leading-[0.85] tracking-tighter md:ml-[20%] md:text-[10vw]'
            >
              AI Apps
            </motion.h1>
          </div>
        </section>

        {/* PROJECTS LIST */}
        <section className='container mx-auto px-6 py-20'>
          <div className='flex flex-col border-b border-border'>
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='group flex flex-col border-t border-border py-12 transition-all duration-500 hover:bg-secondary/20 md:flex-row'
              >
                <div className='mb-6 w-full md:mb-0 md:w-1/3 md:pr-8'>
                  <span className='mb-2 block text-sm font-medium text-muted-foreground'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className='text-3xl font-medium tracking-tight md:text-5xl'>
                    {project.title}
                  </h3>
                </div>

                <div className='flex w-full flex-col justify-between md:w-2/3 md:flex-row'>
                  <div className='mb-8 w-full md:mb-0 md:w-2/3 md:pr-12'>
                    <p className='mb-6 text-lg text-muted-foreground md:text-xl'>
                      {project.desc}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.split(', ').map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className='rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex w-full items-start gap-6 md:w-1/3 md:justify-end'>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group/link flex items-center gap-2 border-b border-transparent pb-1 font-medium transition-all hover:border-foreground'
                    >
                      GitHub
                      <ArrowUpRight className='size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1' />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group/link flex items-center gap-2 border-b border-transparent pb-1 font-medium transition-all hover:border-foreground'
                      >
                        Live
                        <ArrowUpRight className='size-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1' />
                      </a>
                    )}
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
