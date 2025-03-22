import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  // Contact information
  const contactInfo = [
    {
      title: "Email",
      value: "chad@chadbishop.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/chadbishop",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" strokeWidth={2} />
          <circle cx="4" cy="4" r="2" strokeWidth={2} />
        </svg>
      ),
    },
    {
      title: "Location",
      value: "San Francisco, CA",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What types of projects do you work on?",
      answer: "I specialize in UX strategy and design for enterprise applications, workflow automation, and digital transformation initiatives. I work with organizations of all sizes, from startups to large enterprises.",
    },
    {
      question: "What is your availability for new projects?",
      answer: "My availability varies throughout the year. Please contact me with details about your project, and I'll let you know my current availability and how I might be able to help.",
    },
    {
      question: "Do you offer consulting services?",
      answer: "Yes, I offer consulting services in UX strategy, design leadership, and digital transformation. I can work with your team on a project basis or provide ongoing strategic guidance.",
    },
    {
      question: "Are you available for speaking engagements?",
      answer: "Yes, I regularly speak at conferences and events on topics related to UX design, leadership, and strategy. Please contact me with details about your event.",
    },
  ];

  return (
    <main>
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-deep-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Contact Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              Let's discuss how I can help with your next project or opportunity
            </p>
          </div>
        </div>
      </div>
      
      <Section
        background="white"
        id="contact-info"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-soft-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 text-deep-blue">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-deep-blue mb-2">{item.title}</h3>
              <p className="text-warm-gray">{item.value}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          
          <div>
            <h3 className="text-2xl font-semibold text-deep-blue mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h4 className="text-lg font-medium text-deep-blue mb-2">{item.question}</h4>
                  <p className="text-warm-gray">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      <Section
        title="Schedule a Call"
        subtitle="Prefer to talk directly? Book a time that works for you."
        background="soft-white"
        id="schedule"
      >
        <div className="text-center">
          <p className="text-lg max-w-2xl mx-auto mb-8">
            I'm available for 30-minute introductory calls to discuss your project, answer questions, or explore potential collaboration opportunities.
          </p>
          <Link href="https://calendly.com" className="btn-primary">
            Book a Call
          </Link>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
