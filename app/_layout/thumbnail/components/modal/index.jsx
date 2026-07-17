'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const MotionComponent = motion(Center);

export const ThumbnailModal = forwardRef(
  /**
   * @param {import('react').HTMLAttributes<HTMLElement> & { variants: import('framer-motion').Variants; active: boolean; index: number;}} props
   * @param {import('react').ForwardedRef<HTMLElement>} ref
   */
  function ThumbnailModal({ variants, active, index, ...props }, ref) {
    const items = thumbnailOptions.map(({ title, category, image }) => {
      const id = randomId();
      return (
        <Center key={id} className='size-full'>
          <div className='relative size-full overflow-hidden'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover'
              sizes='320px'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 text-white'>
              <h3 className='text-center text-xl font-bold'>{title}</h3>
              <p className='mt-1 text-center text-sm opacity-80'>{category}</p>
            </div>
          </div>
        </Center>
      );
    });

    return (
      <MotionComponent
        ref={ref}
        className='pointer-events-none fixed left-1/2 top-1/2 size-80 overflow-hidden rounded-lg bg-secondary-foreground'
        variants={variants}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        {...props}
      >
        <div
          className='relative size-full'
          style={{
            top: `${index * -100}%`,
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {items}
        </div>
      </MotionComponent>
    );
  },
);
