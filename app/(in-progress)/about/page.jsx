'use client';

import { Navbar, Transition } from '@/layout';

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main className='container mx-auto px-6 py-20'>
        <h1 className='mb-12 text-5xl font-bold'>About Me</h1>
        
        <section className='mb-16'>
          <h2 className='mb-6 text-3xl font-semibold'>Summary</h2>
          <p className='text-lg leading-relaxed'>
            Data Science student at NUST with hands-on experience building machine learning, NLP, and data analytics systems from research to deployment. 
            Experienced in developing full-stack AI applications, deep learning pipelines, and business intelligence dashboards using modern ML frameworks, 
            cloud deployment platforms, and data engineering tools.
          </p>
        </section>

        <section className='mb-16'>
          <h2 className='mb-6 text-3xl font-semibold'>Education</h2>
          <div className='mb-8'>
            <a href='https://www.nust.edu.pk/' target='_blank' rel='noopener' className='text-2xl font-medium hover:underline'>
              National University of Sciences and Technology (NUST)
            </a>
            <p className='text-muted-foreground'>Islamabad, Pakistan</p>
            <p className='text-lg'>BS Data Science | 2023 – 2027 (Expected)</p>
            <p className='mt-2 text-muted-foreground'>
              Relevant Coursework: Deep Learning, Machine Learning, Artificial Intelligence, Computer Vision, 
              Large Language Models, Data Mining, Data Warehousing & BI, Probability & Statistics, 
              Database Systems, Parallel & Distributed Computing
            </p>
          </div>
          <div>
            <a href='https://www.pafcollegesargodha.edu.pk/' target='_blank' rel='noopener' className='text-2xl font-medium hover:underline'>
              PAF College Sargodha
            </a>
            <p className='text-muted-foreground'>Sargodha, Pakistan</p>
            <p className='text-lg'>Matric & FSc Pre-Engineering | 2017 – 2022</p>
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='mb-6 text-3xl font-semibold'>Experience</h2>
          <div className='mb-8'>
            <h3 className='text-2xl font-medium'>Research Intern</h3>
            <p className='text-muted-foreground'>Machvis Lab, NUST Islamabad | May 2024 – Aug 2024</p>
            <ul className='mt-4 list-inside list-disc space-y-2'>
              <li>Built a scalable data acquisition pipeline integrating automated web scraping and the PubMed API, processing 5,000+ biomedical abstracts for downstream ML research.</li>
              <li>Engineered an NLP pipeline using spaCy and HuggingFace Transformers for structured clinical entity extraction and multi-label classification.</li>
            </ul>
          </div>
        </section>

        <section className='mb-16'>
          <h2 className='mb-6 text-3xl font-semibold'>Technical Skills</h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div>
              <h3 className='mb-2 text-xl font-medium'>Languages</h3>
              <p>Python (Advanced), SQL (PostgreSQL, SQLite), JavaScript</p>
            </div>
            <div>
              <h3 className='mb-2 text-xl font-medium'>ML / DL</h3>
              <p>PyTorch, TensorFlow, Scikit-learn, HuggingFace Transformers, spaCy</p>
            </div>
            <div>
              <h3 className='mb-2 text-xl font-medium'>LLMs & NLP</h3>
              <p>LangChain, OpenRouter API, RAG, Prompt Engineering</p>
            </div>
            <div>
              <h3 className='mb-2 text-xl font-medium'>Data & BI</h3>
              <p>Pandas, NumPy, Matplotlib, Power BI, DAX, EDA</p>
            </div>
            <div>
              <h3 className='mb-2 text-xl font-medium'>Web & Backend</h3>
              <p>FastAPI, React, Node.js, Streamlit, Selenium</p>
            </div>
            <div>
              <h3 className='mb-2 text-xl font-medium'>Databases</h3>
              <p>PostgreSQL, MySQL, SQLite, MongoDB, FAISS, Qdrant</p>
            </div>
            <div>
              <h3 className='mb-2 text-xl font-medium'>Tools & Platforms</h3>
              <p>Git, Linux (Ubuntu), Docker, Vercel, Render, Supabase</p>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}
