import Hero from '@/components/widgets/Hero';
import Features from '@/components/widgets/Features';
import Brands from '@/components/widgets/Brands';
import CallToAction from '@/components/widgets/CallToAction';

const metadata = {
  title: 'Altitude Consulting — Board-Ready AI Strategy in 90 Days',
  description: 'We help COOs and GMs of mid-sized financial firms unlock the full potential of AI—without compromising governance or wasting resources.',
  ignoreTitleTemplate: true,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Widget */}
      <Hero
        tagline="Board-Ready AI Strategy in 90 Days"
        actions={[
          {
            variant: 'primary',
            text: 'Book Strategy Session',
            href: '/contact',
            icon: 'calendar',
          },
          { text: 'Learn more', href: '#capabilities' },
        ]}
        title="Build Your <span class='bg-gradient-to-r from-teal-500 via-blue-600 via-indigo-600 via-violet-600 via-purple-600 to-orange-500 bg-clip-text text-transparent'>AI Center of Excellence</span><br />Strategy. Structure. Talent. Governance."
        subtitle="We help COOs and GMs of mid-sized financial firms unlock the full potential of AI—without compromising governance or wasting resources. Our proprietary blueprint delivers an actionable AI Center of Excellence strategy tailored to your operations, talent, and regulatory landscape."
        image={{
          src: '/images/AI-CoE-Consult.jpg',
          alt: 'AI Strategy Consulting',
          width: 1024,
          height: 576,
        }}
      />

      {/* Client Logos Section */}
      <Brands
        title="Trusted by Leading Financial Institutions"
        subtitle="We've helped organizations across the financial services sector implement AI strategies that drive results."
        images={[
          {
            src: '/images/workedwithlogos/J.P.-Morgan-Co.png',
            alt: 'J.P. Morgan',
          },
          {
            src: '/images/workedwithlogos/UBS.png',
            alt: 'UBS',
          },
          {
            src: '/images/workedwithlogos/DB.gif',
            alt: 'Deutsche Bank',
          },
          {
            src: '/images/workedwithlogos/MS.png',
            alt: 'Morgan Stanley',
          },
          {
            src: '/images/workedwithlogos/eToro-share-img.png',
            alt: 'eToro',
          },
          {
            src: '/images/workedwithlogos/CS.png',
            alt: 'Credit Suisse',
          },
          {
            src: '/images/workedwithlogos/MST.png',
            alt: 'MST',
          },
          {
            src: '/images/workedwithlogos/Saxo-1.png',
            alt: 'Saxo Bank',
          },
          {
            src: '/images/workedwithlogos/FundSeeder.png',
            alt: 'FundSeeder',
          },
          {
            src: '/images/workedwithlogos/ABN.png',
            alt: 'ABN Amro',
          },
          {
            src: '/images/workedwithlogos/BALM.png',
            alt: 'BALM',
          },
          {
            src: '/images/workedwithlogos/Synergy.png',
            alt: 'Synergy',
          },
          {
            src: '/images/workedwithlogos/GlenEagle.png',
            alt: 'Glen Eagle',
          },
        ]}
      />

      {/* Key Capabilities */}
      <Features
        id="capabilities"
        tagline="Core Capabilities"
        title="Comprehensive AI Strategy Solutions"
        subtitle="Everything you need to build and implement a successful AI Center of Excellence in your organization."
        columns={4}
        items={[
          {
            title: 'AI CoE Blueprint',
            description:
              'Complete roadmaps, organizational structures, and implementation playbooks tailored to your business needs.',
            icon: 'brain',
          },
          {
            title: 'Vendor Evaluation',
            description:
              'Strategic assessment and selection of AI vendors and technologies that align with your operational requirements.',
            icon: 'chart-line',
          },
          {
            title: 'Cross-Department Alignment',
            description:
              'Facilitate collaboration between IT, operations, compliance, and business units for seamless AI adoption.',
            icon: 'network',
          },
          {
            title: 'Governance & Compliance',
            description:
              'Robust frameworks ensuring AI implementations meet regulatory requirements and risk management standards.',
            icon: 'shield-lock',
          },
        ]}
      />

      {/* CallToAction Widget */}
      <CallToAction
        actions={[
          {
            variant: 'primary',
            text: 'Book Strategy Session',
            href: '/contact',
            icon: 'calendar',
          },
          {
            variant: 'secondary',
            text: 'Learn About Our Services',
            href: '/services',
          },
        ]}
        title="Ready to Transform Your AI Strategy?"
        subtitle="Join the financial institutions already leveraging our expertise to build successful AI Centers of Excellence. Get your board-ready AI strategy in just 90 days."
      />
    </>
  );
}
