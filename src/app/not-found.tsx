import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 dark:text-gray-700 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300 mb-8">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Go Home"
              href="/"
              variant="primary"
            />
            <Button
              text="Contact Us"
              href="/contact"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 