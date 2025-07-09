import React from 'react';
import { Brain, TrendingUp, Network, Shield } from 'lucide-react';
import { Features as FeaturesProps } from '@/types';

const iconMap: Record<string, React.ComponentType<any>> = {
  brain: Brain,
  'chart-line': TrendingUp,
  network: Network,
  'shield-lock': Shield,
};

export default function Features({
  id,
  tagline,
  title,
  subtitle,
  columns = 3,
  items = [],
}: FeaturesProps) {
  return (
    <section className="py-16 md:py-20" {...(id ? { id } : {})}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {tagline && (
            <p className="text-base text-blue-600 dark:text-blue-200 font-bold tracking-wide uppercase mb-6">
              {tagline}
            </p>
          )}
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
        {items && items.length > 0 && (
          <div className={`mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-${columns}`}>
            {items.map(({ title, description, icon, link }, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {icon && (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-blue-600 text-white">
                    {iconMap[icon] && React.createElement(iconMap[icon], { className: 'h-8 w-8' })}
                  </div>
                )}
                {title && (
                  <h3 className="mb-2 text-xl font-bold leading-snug tracking-tight dark:text-gray-200">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="text-muted dark:text-slate-300">{description}</p>
                )}
                {link && (
                  <a
                    className="font-bold text-blue-600 hover:underline dark:text-gray-200"
                    href={link.href}
                  >
                    {link.text} →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 