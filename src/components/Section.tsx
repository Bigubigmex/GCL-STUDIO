import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export default function Section({ children, className, id, noPadding = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "w-full relative", 
        !noPadding && "py-24 md:py-32", 
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
