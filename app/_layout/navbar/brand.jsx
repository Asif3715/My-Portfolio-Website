'use client';

import { Copyright } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function NavbarBrand() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className={`group flex cursor-pointer pb-5 ${isHome ? '' : ''}`}>
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <Copyright />
      </div>

      <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-expo group-hover:pe-8'>
        <h5 className='transition-transform duration-500 ease-in-expo group-hover:-translate-x-full'>
          Asif
        </h5>
        <h5 className='ps-1 transition-transform duration-500 ease-in-expo group-hover:-translate-x-14'>
          Khan
        </h5>
      </div>
    </div>
  );
}
