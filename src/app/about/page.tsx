import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Altitude Consulting',
  description: 'Learn about Altitude Consulting and our mission to help financial firms build successful AI Centers of Excellence.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              About Altitude Consulting
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300">
              We're a specialized consulting firm helping mid-sized financial institutions build and implement AI Centers of Excellence that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-300 mb-6">
                To democratize AI strategy for mid-sized financial firms by providing board-ready AI Center of Excellence blueprints that balance innovation with governance.
              </p>
              <p className="text-lg text-gray-600 dark:text-slate-300 mb-8">
                We believe every financial institution deserves access to world-class AI strategy, regardless of size. Our proprietary methodology delivers actionable roadmaps in 90 days, not years.
              </p>
              <Button
                text="Book a Consultation"
                href="/contact"
                icon="calendar"
                variant="primary"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/Liam-OBrien-scaled.jpg"
                alt="Liam O'Brien, Founder"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              The principles that guide our approach to AI strategy consulting
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">Practical Excellence</h3>
              <p className="text-gray-600 dark:text-slate-300">
                We focus on actionable strategies that can be implemented immediately, not theoretical frameworks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">Governance First</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Every AI strategy we develop prioritizes compliance, risk management, and regulatory requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-gray-200">Collaborative Success</h3>
              <p className="text-gray-600 dark:text-slate-300">
                We work as an extension of your team, ensuring knowledge transfer and sustainable implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              Meet the experts behind our AI strategy consulting services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 dark:text-gray-200">Liam O'Brien</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-4">Founder & Principal Consultant</p>
              <p className="text-gray-600 dark:text-slate-300 mb-4">
                With over 15 years of experience in financial services and technology, Liam has helped dozens of financial institutions implement AI strategies that drive measurable business outcomes.
              </p>
              <p className="text-gray-600 dark:text-slate-300">
                His expertise spans AI governance, vendor evaluation, organizational design, and change management. Liam holds an MBA from a top-tier business school and has worked with firms ranging from boutique investment managers to global banks.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/Liam-OBrien-scaled.jpg"
                alt="Liam O'Brien"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 