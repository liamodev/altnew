import Link from 'next/link';
import { CallToAction } from '@/types';
import { Calendar, ExternalLink } from 'lucide-react';

interface ButtonProps extends CallToAction {
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const iconMap: Record<string, React.ComponentType<any>> = {
  calendar: Calendar,
  external: ExternalLink,
};

export default function Button({
  text,
  href,
  icon,
  variant = 'primary',
  target,
  rel,
  className = '',
  children,
  type = 'button',
}: ButtonProps) {
  const IconComponent = icon ? iconMap[icon] : null;
  const content = children || text;

  const baseClasses = 'inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 py-3 text-lg font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm align-middle transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-slate-500';
  
  const variantClasses = {
    primary: 'text-white bg-blue-600 border-blue-600 shadow-md hover:bg-blue-700 hover:border-blue-700 focus:ring-blue-600 dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700',
    secondary: 'text-gray-900 bg-white border-gray-300 shadow-sm hover:text-gray-700 hover:bg-gray-50 focus:ring-blue-600 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank';
    
    if (isExternal) {
      return (
        <a
          className={classes}
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener'}
        >
          {content}
          {IconComponent && <IconComponent className="w-5 h-5 ml-1 -mr-1.5" />}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
        {IconComponent && <IconComponent className="w-5 h-5 ml-1 -mr-1.5" />}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
      {IconComponent && <IconComponent className="w-5 h-5 ml-1 -mr-1.5" />}
    </button>
  );
} 