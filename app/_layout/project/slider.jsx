'use client';

import { Center } from '@/components';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  return (
    <Center
      className='relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
    </Center>
  );
}
