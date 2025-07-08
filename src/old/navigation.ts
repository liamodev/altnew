import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Insights',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Book Strategy Session', href: getPermalink('/contact'), icon: 'tabler:calendar' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'AI CoE Strategy', href: getPermalink('/services') },
        { text: 'Vendor Evaluation', href: getPermalink('/services') },
        { text: 'Compliance & Governance', href: getPermalink('/services') },
        { text: 'AI Hiring Advisory', href: getPermalink('/services') },
        { text: 'Automation & Workflow', href: getPermalink('/services') },
        { text: 'Voice AI Discovery', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Insights',
      links: [
        { text: 'Governance', href: getBlogPermalink() },
        { text: 'Technology & Tools', href: getBlogPermalink() },
        { text: 'Use Cases', href: getBlogPermalink() },
        { text: 'Leadership & Culture', href: getBlogPermalink() },
        { text: 'All Articles', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Sydney Office', href: getPermalink('/contact') },
        { text: 'New York Office', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'AI Readiness Assessment', href: '#' },
        { text: 'Case Studies', href: '#' },
        { text: 'Whitepapers', href: '#' },
        { text: 'Book a Consultation', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/liam-obrien/', target: '_blank' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/liamlive', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img src="/src/assets/logos/A7-Icon-white.png" alt="A7 Icon" class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 object-contain mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm dark:hidden" />
    <img src="/src/assets/logos/A7-Icon.png" alt="A7 Icon" class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 object-contain mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm hidden dark:block" />
    © ${new Date().getFullYear()} Altitude Group · All rights reserved.
  `,
};
