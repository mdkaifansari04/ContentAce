import React from 'react';
import { FadeImg } from '../core/fadeImg';
import { cn } from '@/lib/utils';

function Icon({ className, src }: { className?: string; src: string }) {
  return (
    <FadeImg
      className={cn(
        'w-5 block [&_svg]:stroke-red-400 group-hover:text-white ',
        className
      )}
      src={`../../icons/${src}`}
    />
  );
}

export default Icon;
