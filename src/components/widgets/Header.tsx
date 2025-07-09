'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from '@/components/common/Logo';
import Button from '@/components/ui/Button';
import { HeaderData } from '@/types';

interface HeaderProps {
  data?: HeaderData;
  isSticky?: boolean;
  isFullWidth?: boolean;
  position?: string;
}

export default function Header({
  data,
  isSticky = false,
  isFullWidth = false,
  position = 'center',
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = data?.links || [];
  const actions = data?.actions || [];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`${
        isSticky ? 'sticky' : 'relative'
      } top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out`}
    >
      <div className="absolute inset-0"></div>
      <div
        className={`relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:items-center md:justify-between ${
          !isFullWidth ? 'max-w-7xl' : ''
        }`}
      >
        <div className="flex justify-between items-center md:flex-1">
          <Logo />
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav
          className={`items-center w-full md:w-auto ${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex md:justify-center text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:items-center absolute md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 top-full md:top-1/2 left-0 right-0 bg-white md:bg-transparent border-t md:border-t-0 border-gray-200`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium md:justify-center">
            {links.map(({ text, href, links: subLinks }) => (
              <li key={href} className={subLinks?.length ? 'dropdown' : ''}>
                {subLinks?.length ? (
                  <div className="relative group">
                    <button
                      type="button"
                      className="hover:text-blue-600 px-4 py-3 flex items-center whitespace-nowrap w-full md:w-auto"
                    >
                      {text}
                      <svg className="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                                         <ul className="dropdown-menu md:backdrop-blur-md rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-200">
                       {subLinks.map(({ text: text2, href: href2 }) => (
                         <li key={href2 || text2}>
                           <Link
                             className={`first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-blue-600 py-2 px-5 block whitespace-no-wrap ${
                               isActive(href2 || '') ? 'text-blue-600' : ''
                             }`}
                             href={href2 || '#'}
                           >
                             {text2}
                           </Link>
                         </li>
                       ))}
                     </ul>
                  </div>
                ) : (
                  <Link
                    className={`hover:text-blue-600 px-4 py-3 flex items-center whitespace-nowrap ${
                      isActive(href || '') ? 'text-blue-600' : ''
                    }`}
                    href={href || '#'}
                  >
                    {text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`hidden md:flex items-center justify-end`}
        >
          <div className="items-center flex justify-between w-full md:w-auto">
            <div className="flex">
              {/* Theme toggle and RSS feed can be added here */}
            </div>
            {actions?.length ? (
              <span className="ml-4 rtl:ml-0 rtl:mr-4">
                {actions.map((btnProps, index) => (
                  <Button
                    key={index}
                    {...btnProps}
                    className="ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto !text-gray-500 hover:!text-white"
                  />
                ))}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
} 