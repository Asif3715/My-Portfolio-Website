'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { MagneticButton } from '@/components';

const fields = [
  { id: 'name', label: "What's your name?", placeholder: 'John Doe *', type: 'text' },
  { id: 'email', label: "What's your email?", placeholder: 'john@doe.com *', type: 'email' },
  { id: 'company', label: "What's the name of your organization?", placeholder: 'John & Doe ®', type: 'text' },
  { id: 'service', label: 'What services are you looking for?', placeholder: 'Web Design, Web Development ...', type: 'text' },
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-10'>
      {fields.map((field, i) => (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className='flex flex-col gap-2'
        >
          <span className='text-sm text-muted-foreground'>
            {String(i + 1).padStart(2, '0')}
          </span>
          <label htmlFor={field.id} className='text-lg'>
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={form[field.id]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
            className='border-b border-muted-foreground/30 bg-transparent py-3 text-lg transition-colors placeholder:text-muted-foreground/50 focus:border-background focus:outline-none'
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: fields.length * 0.1 }}
        className='flex flex-col gap-2'
      >
        <span className='text-sm text-muted-foreground'>
          {String(fields.length + 1).padStart(2, '0')}
        </span>
        <label htmlFor='message' className='text-lg'>
          Your message
        </label>
        <textarea
          id='message'
          name='message'
          value={form.message}
          onChange={handleChange}
          rows={6}
          required
          placeholder='Hello Asif, can you help me with ... *'
          className='resize-none border-b border-muted-foreground/30 bg-transparent py-3 text-lg transition-colors placeholder:text-muted-foreground/50 focus:border-background focus:outline-none'
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (fields.length + 1) * 0.1 }}
        className='mt-4'
      >
        <MagneticButton variant='primary' size='xl'>
          Send it!
        </MagneticButton>
      </motion.div>
    </form>
  );
}
