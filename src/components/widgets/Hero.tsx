import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Hero as HeroProps } from '@/types';

interface HeroComponentProps extends HeroProps {
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  tagline,
  content,
  actions,
  image,
  id,
  bg,
  children,
}: HeroComponentProps) {
  return (
    <section className="relative md:-mt-[76px] not-prose" {...(id ? { id } : {})}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {bg && <div dangerouslySetInnerHTML={{ __html: bg }} />}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div className="py-12 md:py-20">
          <div className="text-center pb-10 md:pb-16 max-w-5xl mx-auto">
            {tagline && (
              <p
                className="text-base text-blue-600 dark:text-blue-200 font-bold tracking-wide uppercase mb-6"
                dangerouslySetInnerHTML={{ __html: tagline }}
              />
            )}
            {title && (
              <h1
                className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            <div className="max-w-3xl mx-auto">
              {subtitle && (
                <p
                  className="text-xl text-gray-600 dark:text-slate-300 mb-6"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
              {actions && (
                <div className="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4">
                  {Array.isArray(actions) ? (
                    actions.map((action, index) => (
                      <div key={index} className="flex w-full sm:w-auto">
                        <Button {...action} className="w-full sm:mb-0" />
                      </div>
                    ))
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: actions }} />
                  )}
                </div>
              )}
            </div>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
          </div>
          <div>
            {image && (
              <div className="relative m-auto max-w-4xl w-[70%]">
                {typeof image === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: image }} />
                ) : (
                  <Image
                    className="mx-auto rounded-md w-full object-cover"
                    width={1024}
                    height={576}
                    {...image}
                    alt={image.alt || 'Hero image'}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
} 