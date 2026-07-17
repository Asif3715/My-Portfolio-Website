'use client';

import { Navbar, Transition } from '@/layout';

const projects = [
  {
    title: 'RAG Research Paper Assistant',
    desc: 'AI assistant for querying academic papers using RAG, Qdrant vector DB, FastAPI, and React with source-cited retrieval.',
    tech: 'RAG, Qdrant, FastAPI, React, LLMs',
    github: 'https://github.com/Asif3715/RAG-ResearchPaper',
    live: null,
  },
  {
    title: 'Automated CV Intelligence & Ranking Platform',
    desc: 'Automates resume screening with LLM-powered parsing, multi-criteria scoring, and credential verification.',
    tech: 'LLMs, NLP, FastAPI, React, Supabase',
    github: 'https://github.com/Asif3715/cv-analyzer',
    live: 'https://cv-analyzer-drab.vercel.app',
  },
  {
    title: 'Osteoporosis Classification via Multimodal Fusion',
    desc: 'Deep learning framework combining ResNet50 and clinical metadata ANN for 3-class diagnostic classification.',
    tech: 'ResNet50, ViT-MAE, PyTorch',
    github: 'https://github.com/Asif3715/Osteoporosis-Detection',
    live: null,
  },
  {
    title: 'Superstore Sales & Returns BI Platform',
    desc: 'Interactive Power BI dashboard with 5,900+ retail records, geospatial maps, Pareto analysis, and forecasting.',
    tech: 'Power BI, Python, DAX',
    github: 'https://github.com/Asif3715/Superstore-BI-Analysis',
    live: null,
  },
  {
    title: 'AI Email Triage Agent',
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
      <main className='container mx-auto px-6 py-20'>
        <h1 className='mb-12 text-5xl font-bold'>Projects</h1>
        
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {projects.map((project) => (
            <div key={project.title} className='rounded-lg border border-border p-6 transition-shadow hover:shadow-lg'>
              <h2 className='mb-2 text-2xl font-medium'>{project.title}</h2>
              <p className='mb-3 text-muted-foreground'>{project.desc}</p>
              <p className='mb-4 text-sm text-muted-foreground'>{project.tech}</p>
              <div className='flex gap-4'>
                <a 
                  href={project.github} 
                  target='_blank' 
                  rel='noopener' 
                  className='font-medium text-foreground hover:underline'
                >
                  GitHub
                </a>
                {project.live && (
                  <a 
                    href={project.live} 
                    target='_blank' 
                    rel='noopener' 
                    className='font-medium text-foreground hover:underline'
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Transition>
  );
}
