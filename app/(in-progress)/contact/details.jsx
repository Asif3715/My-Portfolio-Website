'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:tanoli3715@gmail.com',
    text: 'tanoli3715@gmail.com',
  },
  { label: 'Phone', href: 'tel:+923079966012', text: '+92 307 9966012' },
];

const businessDetails = [
  'Asif Khan',
  'Location: Rawalpindi / Islamabad, Pakistan',
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/asif-khan-0ba826240',
    text: 'LinkedIn',
  },
  { label: 'GitHub', href: 'https://github.com/Asif3715', text: 'GitHub' },
];

export function ContactDetails() {
  return (
    <div className='flex flex-col gap-12 md:pl-16'>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='mb-8'
      >
        <div className='relative size-32 overflow-hidden rounded-full border-2 border-white/20 md:size-48'>
          <Image
            src='/asif5.jpeg'
            fill
            className='object-cover grayscale transition-all duration-500 hover:grayscale-0'
            alt='Asif Khan'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h5 className='mb-4 text-xs font-semibold uppercase tracking-widest text-white/50'>
          Contact Details
        </h5>
        <ul className='flex flex-col gap-3'>
          {contactLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className='group relative text-xl font-medium transition-colors hover:text-white/80 md:text-2xl'
              >
                {link.text}
                <span className='absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h5 className='mb-4 text-xs font-semibold uppercase tracking-widest text-white/50'>
          Business Details
        </h5>
        <ul className='flex flex-col gap-2'>
          {businessDetails.map(detail => (
            <li key={detail}>
              <p className='text-xl text-white/80 md:text-2xl'>{detail}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h5 className='mb-4 text-xs font-semibold uppercase tracking-widest text-white/50'>
          Socials
        </h5>
        <ul className='flex flex-col gap-3'>
          {socialLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative text-xl font-medium transition-colors hover:text-white/80 md:text-2xl'
              >
                {link.text}
                <span className='absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
