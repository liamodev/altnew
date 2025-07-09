'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Contact Us
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-slate-300">
              Ready to transform your AI strategy? Let's discuss how we can help you build a successful AI Center of Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-gray-200">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Tell us about your AI strategy needs..."
                  />
                </div>
                <Button
                  text="Send Message"
                  type="submit"
                  variant="primary"
                  className="w-full md:w-auto"
                />
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 dark:text-gray-200">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-gray-200">Email</h3>
                    <p className="text-gray-600 dark:text-slate-300">liam@altitude7.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-gray-200">Phone</h3>
                    <p className="text-gray-600 dark:text-slate-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-gray-200">Offices</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-200">Sydney</p>
                        <p className="text-gray-600 dark:text-slate-300">Level 20, 1 Market Street</p>
                        <p className="text-gray-600 dark:text-slate-300">Sydney, NSW 2000, Australia</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-200">New York</p>
                        <p className="text-gray-600 dark:text-slate-300">350 5th Avenue</p>
                        <p className="text-gray-600 dark:text-slate-300">New York, NY 10118, USA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 dark:text-gray-200">Book a Strategy Session</h3>
                    <p className="text-gray-600 dark:text-slate-300 mb-3">
                      Schedule a 30-minute consultation to discuss your AI strategy needs
                    </p>
                    <Button
                      text="Book Now"
                      href="#"
                      icon="calendar"
                      variant="primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 dark:text-gray-200">What is the typical timeline for an AI CoE project?</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Our standard AI Center of Excellence blueprint is delivered in 90 days, including discovery, strategy development, and stakeholder alignment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 dark:text-gray-200">Do you work with small financial firms?</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Yes, we specialize in mid-sized financial institutions with assets under $50 billion. Our approach is tailored to organizations that need enterprise-grade AI strategy without enterprise-scale resources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 dark:text-gray-200">What industries do you serve?</h3>
              <p className="text-gray-600 dark:text-slate-300">
                We focus exclusively on financial services, including banks, investment managers, insurance companies, and fintech firms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 dark:text-gray-200">Do you provide ongoing support?</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Yes, we offer ongoing advisory services to support implementation and help you navigate challenges as your AI CoE evolves.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 