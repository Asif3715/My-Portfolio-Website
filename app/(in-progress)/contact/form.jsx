'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { MagneticButton } from '@/components';

const fields = [
  {
    id: 'name',
    label: "What's your name?",
    placeholder: 'John Doe *',
    type: 'text',
  },
  {
    id: 'email',
    label: "What's your email?",
    placeholder: 'john@doe.com *',
    type: 'email',
  },
  {
    id: 'company',
    label: "What's the name of your organization?",
    placeholder: 'John & Doe ®',
    type: 'text',
  },
  {
    id: 'service',
    label: 'What services are you looking for?',
    placeholder: 'Web Design, Web Development ...',
    type: 'text',
  },
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-12 md:gap-16'>
      {fields.map((field, i) => (
        <motion.div
          key={field.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className='group relative flex flex-col gap-4 border-b border-white/20 pb-4'
        >
          <div className='flex items-center gap-6'>
            <span className='text-sm font-medium text-white/40'>
              {String(i + 1).padStart(2, '0')}
            </span>
            <label
              htmlFor={field.id}
              className='text-xl text-white md:text-3xl'
            >
              {field.label}
            </label>
          </div>
          <input
            type={field.type}
            id={field.id}
            name={field.id}
            value={form[field.id]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required
            className='w-full bg-transparent py-2 pl-12 text-lg text-white transition-colors placeholder:text-white/20 focus:outline-none md:text-2xl'
          />
          <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-focus-within:w-full' />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: fields.length * 0.1 }}
        className='group relative flex flex-col gap-4 border-b border-white/20 pb-4'
      >
        <div className='flex items-center gap-6'>
          <span className='text-sm font-medium text-white/40'>
            {String(fields.length + 1).padStart(2, '0')}
          </span>
          <label htmlFor='message' className='text-xl text-white md:text-3xl'>
            Your message
          </label>
        </div>
        <textarea
          id='message'
          name='message'
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          placeholder='Hello Asif, can you help me with ... *'
          className='w-full resize-none bg-transparent py-4 pl-12 text-lg text-white transition-colors placeholder:text-white/20 focus:outline-none md:text-2xl'
        />
        <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-focus-within:w-full' />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (fields.length + 1) * 0.1 }}
        className='mt-8 flex justify-start'
      >
        <MagneticButton
          variant='primary'
          size='xl'
          className='rounded-full !px-12 !py-8 text-xl'
        >
          Send it!
        </MagneticButton>
      </motion.div>
    </form>
  );
}
