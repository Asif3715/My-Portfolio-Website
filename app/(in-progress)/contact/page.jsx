'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Navbar, Transition } from '@/layout';

import { ContactDetails } from './details';
import { ContactForm } from './form';

export default function Contact() {
  return (
    <Transition>
      <Navbar light />
      <main className='bg-[#1c1d20] text-background min-h-screen'>
        <section className='container mx-auto px-6 pt-32 pb-20'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='mb-16 md:mb-24'
          >
            <h1 className='text-[clamp(2.5em,6vw,5em)] leading-tight font-bold'>
              <span className='flex items-center gap-4 flex-wrap'>
                Let&apos;s start a
                <Image
                  src='/asif5.jpeg'
                  width={80}
                  height={80}
                  className='rounded-full object-cover'
                  alt='Asif Khan'
                />
              </span>
              <span>project together</span>
            </h1>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24'>
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
