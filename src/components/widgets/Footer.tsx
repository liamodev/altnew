import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Rss } from 'lucide-react';
import { FooterData } from '@/types';

const iconMap: Record<string, React.ComponentType<any>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  rss: Rss,
};

export default function Footer({ data }: { data: FooterData }) {
  const { links, secondaryLinks, socialLinks, footNote } = data;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logos/A7-Icon-white.png"
                  alt="Altitude Consulting"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <span className="ml-2 text-xl font-bold">Altitude</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Board-Ready AI Strategy in 90 Days. We help COOs and GMs of mid-sized financial firms unlock the full potential of AI.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {links.map(({ title, links: linkItems }) => (
                  <div key={title} className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                      {title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {linkItems.map((link) => (
                        <li key={link.text}>
                          <Link
                            href={link.href || '#'}
                            className="text-base text-gray-300 hover:text-white"
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6">
                {socialLinks.map(({ ariaLabel, icon, href, target }) => (
                  <a
                    key={ariaLabel}
                    href={href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-gray-300"
                    aria-label={ariaLabel}
                  >
                    {icon && iconMap[icon] && React.createElement(iconMap[icon], { className: 'h-6 w-6' })}
                  </a>
                ))}
              </div>
              <div className="mt-4 md:mt-0 flex space-x-6">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href || '#'}
                    className="text-sm text-gray-400 hover:text-gray-300"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <div dangerouslySetInnerHTML={{ __html: footNote }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 