'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { MagneticButton, ParallaxReveal } from '@/components';

const phrase = "Let's work together on your next project.";

export function CTA() {
  return (
    <section className='container relative py-32'>
      <div className='flex flex-col items-center text-center'>
        <h2 className='mb-8 text-4xl font-bold md:text-6xl'>
          <ParallaxReveal paragraph={phrase} />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href='/contact' passHref>
            <MagneticButton variant='primary' size='xl'>
              Get in Touch
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
