import { HeaderData, FooterData } from '@/types';

export const headerData: HeaderData = {
  links: [
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Services',
      href: '/services',
    },
    {
      text: 'Insights',
      href: '/insights',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Book Strategy Session', href: '/contact', icon: 'calendar' }],
};

export const footerData: FooterData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'AI CoE Strategy', href: '/services' },
        { text: 'Vendor Evaluation', href: '/services' },
        { text: 'Compliance & Governance', href: '/services' },
        { text: 'AI Hiring Advisory', href: '/services' },
        { text: 'Automation & Workflow', href: '/services' },
        { text: 'Voice AI Discovery', href: '/services' },
      ],
    },
    {
      title: 'Insights',
      links: [
        { text: 'Governance', href: '/insights' },
        { text: 'Technology & Tools', href: '/insights' },
        { text: 'Use Cases', href: '/insights' },
        { text: 'Leadership & Culture', href: '/insights' },
        { text: 'All Articles', href: '/insights' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Sydney Office', href: '/contact' },
        { text: 'New York Office', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'AI Readiness Assessment', href: '#' },
        { text: 'Case Studies', href: '#' },
        { text: 'Whitepapers', href: '#' },
        { text: 'Book a Consultation', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/liam-obrien/', target: '_blank' },
    { ariaLabel: 'X', icon: 'twitter', href: 'https://x.com/liamlive', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'rss', href: '/rss.xml' },
  ],
  footNote: `
    <img src="/logos/A7-Icon-white.png" alt="A7 Icon" class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 object-contain mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm dark:hidden" />
    <img src="/logos/A7-Icon.png" alt="A7 Icon" class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 object-contain mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm hidden dark:block" />
    © ${new Date().getFullYear()} Altitude Group · All rights reserved.
  `,
}; 