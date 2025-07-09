import Image from 'next/image';
import { Brands as BrandsProps } from '@/types';

export default function Brands({
  id,
  title,
  subtitle,
  images = [],
}: BrandsProps) {
  return (
    <section className="py-16 md:py-20" {...(id ? { id } : {})}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
        {images && images.length > 0 && (
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-8 sm:max-w-xl sm:grid-cols-3 sm:gap-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
            {images.map(({ src, alt }, index) => (
              <div key={index} className="col-span-1 flex justify-center">
                <Image
                  className="h-12 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  src={src || ''}
                  alt={alt || 'Client logo'}
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 