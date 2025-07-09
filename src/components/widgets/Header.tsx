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
  isDark?: boolean;
  isFullWidth?: boolean;
  position?: string;
}

export default function Header({
  data,
  isSticky = false,
  isDark = false,
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
      } top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out ${
        isDark ? 'dark' : ''
      }`}
    >
      <div className="absolute inset-0"></div>
      <div
        className={`relative text-default py-3 px-3 md:px-6 mx-auto w-full ${
          position !== 'center' ? 'md:flex md:justify-between' : ''
        } ${
          position === 'center' ? 'md:grid md:grid-cols-3 md:items-center' : ''
        } ${!isFullWidth ? 'max-w-7xl' : ''}`}
      >
        <div className={`${position === 'right' ? 'mr-auto rtl:mr-0 rtl:ml-auto' : ''} flex justify-between`}>
          <Logo />
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav
          className={`items-center w-full md:w-auto ${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex md:mx-5 text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:justify-self-center absolute md:relative top-full left-0 right-0 bg-white dark:bg-gray-900 md:bg-transparent border-t md:border-t-0 border-gray-200 dark:border-gray-700`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium md:justify-center">
            {links.map(({ text, href, links: subLinks }) => (
              <li key={href} className={subLinks?.length ? 'dropdown' : ''}>
                {subLinks?.length ? (
                  <div className="relative group">
                    <button
                      type="button"
                      className="hover:text-blue-600 dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap w-full md:w-auto"
                    >
                      {text}
                      <svg className="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                                         <ul className="dropdown-menu md:backdrop-blur-md dark:md:bg-gray-900 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all duration-200">
                       {subLinks.map(({ text: text2, href: href2 }) => (
                         <li key={href2 || text2}>
                           <Link
                             className={`first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-blue-600 dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap ${
                               isActive(href2 || '') ? 'text-blue-600 dark:text-blue-400' : ''
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
                    className={`hover:text-blue-600 dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap ${
                      isActive(href || '') ? 'text-blue-600 dark:text-blue-400' : ''
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
          className={`${
            position === 'left' ? 'ml-auto rtl:ml-0 rtl:mr-auto' : ''
          } hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0 md:justify-self-end`}
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
                    className="ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
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