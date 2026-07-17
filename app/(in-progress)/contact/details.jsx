'use client';

import { motion } from 'framer-motion';

const contactLinks = [
  { label: 'Email', href: 'mailto:tanoli3715@gmail.com', text: 'tanoli3715@gmail.com' },
  { label: 'Phone', href: 'tel:+923079966012', text: '+92 307 9966012' },
];

const businessDetails = [
  'Asif Khan',
  'Location: Rawalpindi / Islamabad, Pakistan',
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/asif-khan-0ba826240', text: 'LinkedIn' },
  { label: 'GitHub', href: 'https://github.com/Asif3715', text: 'GitHub' },
];

export function ContactDetails() {
  return (
    <div className='flex flex-col gap-12'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h5 className='text-sm uppercase tracking-wider text-muted-foreground mb-4'>
          Contact Details
        </h5>
        <ul className='flex flex-col gap-3'>
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='text-lg hover:underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-background transition-colors'
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h5 className='text-sm uppercase tracking-wider text-muted-foreground mb-4'>
          Business Details
        </h5>
        <ul className='flex flex-col gap-2'>
          {businessDetails.map((detail) => (
            <li key={detail}>
              <p className='text-lg'>{detail}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h5 className='text-sm uppercase tracking-wider text-muted-foreground mb-4'>
          Socials
        </h5>
        <ul className='flex flex-col gap-3'>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg hover:underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-background transition-colors'
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
