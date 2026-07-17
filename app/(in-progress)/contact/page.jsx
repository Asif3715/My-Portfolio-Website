'use client';

import { motion } from 'framer-motion';

import { Navbar, Transition } from '@/layout';

import { ContactDetails } from './details';
import { ContactForm } from './form';

export default function Contact() {
  return (
    <Transition>
      <Navbar light />
      <main className='min-h-screen bg-[#1c1d20] pb-20 text-background'>
        {/* HERO SECTION */}
        <section className='container mx-auto mb-20 border-b border-white/20 px-6 pb-20 pt-32 md:pt-48'>
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
              Let&apos;s start
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
              A Project
            </motion.h1>
          </div>
          <div className='overflow-hidden pb-10'>
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
              Together
            </motion.h1>
          </div>
        </section>

        <section className='container mx-auto px-6'>
          <div className='grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24'>
            <div>
              <ContactForm />
            </div>

            <div>
              <ContactDetails />
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}
