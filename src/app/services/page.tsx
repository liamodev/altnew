import { Metadata } from 'next';
import Features from '@/components/widgets/Features';
import CallToAction from '@/components/widgets/CallToAction';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive AI strategy consulting services for financial institutions. From AI CoE blueprints to vendor evaluation and governance frameworks.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Our Services
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300">
              Comprehensive AI strategy consulting services designed specifically for mid-sized financial institutions
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <Features
        tagline="Core Services"
        title="AI Center of Excellence Strategy"
        subtitle="Our flagship service delivers a complete AI CoE blueprint in 90 days"
        columns={2}
        items={[
          {
            title: 'AI CoE Blueprint Development',
            description:
              'Complete organizational design, governance frameworks, and implementation roadmaps tailored to your specific business needs and regulatory environment.',
            icon: 'brain',
          },
          {
            title: 'Vendor Evaluation & Selection',
            description:
              'Strategic assessment of AI vendors and technologies, including technical evaluation, cost-benefit analysis, and risk assessment.',
            icon: 'chart-line',
          },
          {
            title: 'Cross-Department Alignment',
            description:
              'Facilitation of collaboration between IT, operations, compliance, and business units to ensure seamless AI adoption across your organization.',
            icon: 'network',
          },
          {
            title: 'Governance & Compliance Framework',
            description:
              'Robust frameworks ensuring AI implementations meet regulatory requirements, risk management standards, and industry best practices.',
            icon: 'shield-lock',
          },
        ]}
      />

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              Specialized consulting services to support your AI journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-gray-200">AI Hiring Advisory</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Strategic guidance on building AI teams, including role definition, skill requirements, and recruitment strategies.
              </p>
              <ul className="text-sm text-gray-600 dark:text-slate-300 space-y-1">
                <li>• Role definition and job descriptions</li>
                <li>• Skill assessment frameworks</li>
                <li>• Recruitment strategy development</li>
                <li>• Team structure optimization</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-gray-200">Automation & Workflow</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Process optimization and automation strategies to maximize AI ROI and operational efficiency.
              </p>
              <ul className="text-sm text-gray-600 dark:text-slate-300 space-y-1">
                <li>• Process mapping and analysis</li>
                <li>• Automation opportunity identification</li>
                <li>• Workflow optimization</li>
                <li>• ROI calculation frameworks</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-gray-200">Voice AI Discovery</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                Specialized consulting for voice AI implementation in customer service and operations.
              </p>
              <ul className="text-sm text-gray-600 dark:text-slate-300 space-y-1">
                <li>• Use case identification</li>
                <li>• Technology evaluation</li>
                <li>• Implementation planning</li>
                <li>• Voice AI governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              A proven methodology that delivers results in 90 days
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">Discovery</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Deep dive into your organization, current state, and strategic objectives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">Strategy</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Develop comprehensive AI CoE blueprint and implementation roadmap
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">Validation</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Stakeholder alignment and board presentation preparation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">Launch</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Implementation support and ongoing advisory services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            text: 'Download Service Guide',
            href: '#',
          },
        ]}
        title="Ready to Build Your AI Center of Excellence?"
        subtitle="Get your board-ready AI strategy in just 90 days. Join the financial institutions already leveraging our expertise."
      />
    </>
  );
} 