'use client';

import React from 'react';
import Link from 'next/link';

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default form submission logic
      console.log('Form submitted', Object.fromEntries(formData.entries()));
      // Here you would typically send the data to an API
      alert('Thanks for your message! I\'ll get back to you soon.');
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-semibold text-deep-blue mb-6">Get in Touch</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-warm-gray mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-warm-gray rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-warm-gray mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-warm-gray rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
            placeholder="Your email address"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-warm-gray mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 border border-warm-gray rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
        >
          <option value="">Select a subject</option>
          <option value="Project Inquiry">Project Inquiry</option>
          <option value="Speaking Opportunity">Speaking Opportunity</option>
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="General Question">General Question</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-warm-gray mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-warm-gray rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
          placeholder="Your message"
        ></textarea>
      </div>
      
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="h-5 w-5 text-deep-blue focus:ring-deep-blue border-warm-gray rounded"
        />
        <label htmlFor="consent" className="ml-2 block text-warm-gray">
          I consent to having my information stored for contact purposes
        </label>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button type="submit" className="btn-primary">
          Send Message
        </button>
        <Link href="/schedule" className="btn-secondary text-center">
          Schedule a Call
        </Link>
      </div>
    </form>
  );
}
