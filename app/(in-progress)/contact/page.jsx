'use client';

import { Navbar, Transition } from '@/layout';

export default function Contact() {
  return (
    <Transition>
      <Navbar />
      <main className='container mx-auto px-6 py-20'>
        <h1 className='text-5xl font-bold mb-4'>Get in Touch</h1>
        <p className='text-xl text-muted-foreground mb-16 max-w-2xl'>
          Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities and ideas.
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-sm uppercase tracking-wider text-muted-foreground mb-6'>Contact Info</h2>
            
            <div className='mb-8'>
              <p className='text-sm text-muted-foreground mb-1'>Email</p>
              <a href='mailto:tanoli3715@gmail.com' className='text-lg hover:underline'>
                tanoli3715@gmail.com
              </a>
            </div>

            <div className='mb-8'>
              <p className='text-sm text-muted-foreground mb-1'>Phone</p>
              <a href='tel:+923079966012' className='text-lg hover:underline'>
                +92 307 9966012
              </a>
            </div>

            <div className='mb-8'>
              <p className='text-sm text-muted-foreground mb-1'>Location</p>
              <p className='text-lg'>Rawalpindi / Islamabad, Pakistan</p>
            </div>
          </div>

          <div>
            <h2 className='text-sm uppercase tracking-wider text-muted-foreground mb-6'>Socials</h2>
            
            <div className='mb-8'>
              <p className='text-sm text-muted-foreground mb-1'>LinkedIn</p>
              <a 
                href='https://linkedin.com/in/asif-khan-0ba826240' 
                target='_blank' 
                rel='noopener' 
                className='text-lg hover:underline'
              >
                linkedin.com/in/asif-khan-0ba826240
              </a>
            </div>

            <div className='mb-8'>
              <p className='text-sm text-muted-foreground mb-1'>GitHub</p>
              <a 
                href='https://github.com/Asif3715' 
                target='_blank' 
                rel='noopener' 
                className='text-lg hover:underline'
              >
                github.com/Asif3715
              </a>
            </div>
          </div>
        </div>
      </main>
    </Transition>
  );
}
