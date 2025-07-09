import Button from '@/components/ui/Button';
import { CallToAction as CallToActionProps } from '@/types';

interface CallToActionComponentProps {
  actions?: Array<CallToActionProps>;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function CallToAction({
  actions,
  title,
  subtitle,
  children,
}: CallToActionComponentProps) {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300 mb-8">
              {subtitle}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions.map((action, index) => (
                <Button key={index} {...action} />
              ))}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
} 