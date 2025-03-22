import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  // Sample data for projects
  const projects = [
    {
      title: 'Leading Workflow Automation',
      description: 'Redesigned complex workflow automation tools to improve efficiency and user satisfaction across enterprise teams.',
      imageSrc: '/images/projects/workflow-automation.jpg',
      tags: ['UX Strategy', 'Enterprise', 'Workflow'],
      href: '/work/workflow-automation',
    },
    {
      title: 'NewRocket - UX Strategy and Innovation',
      description: 'Led UX strategy and innovation initiatives for NewRocket, resulting in improved user engagement and business metrics.',
      imageSrc: '/images/projects/newrocket.jpg',
      tags: ['UX Strategy', 'Innovation', 'Leadership'],
      href: '/work/newrocket',
    },
    {
      title: 'Enterprise Portal Redesign',
      description: 'Completely reimagined the enterprise portal experience, focusing on user-centered design principles and modern interfaces.',
      imageSrc: '/images/projects/enterprise-portal.jpg',
      tags: ['Enterprise', 'Portal', 'Redesign'],
      href: '/work/enterprise-portal',
    },
    {
      title: 'Mobile Banking App',
      description: 'Designed a user-friendly mobile banking application that simplified complex financial transactions for everyday users.',
      imageSrc: '/images/projects/mobile-banking.jpg',
      tags: ['Mobile', 'Finance', 'UX Design'],
      href: '/work/mobile-banking',
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Created an intuitive dashboard for healthcare professionals to monitor patient data and make informed decisions quickly.',
      imageSrc: '/images/projects/healthcare-dashboard.jpg',
      tags: ['Healthcare', 'Dashboard', 'Data Visualization'],
      href: '/work/healthcare-dashboard',
    },
    {
      title: 'E-commerce Platform Optimization',
      description: 'Optimized the user journey for an e-commerce platform, resulting in increased conversion rates and customer satisfaction.',
      imageSrc: '/images/projects/ecommerce-platform.jpg',
      tags: ['E-commerce', 'Optimization', 'Conversion'],
      href: '/work/ecommerce-optimization',
    },
  ];

  return (
    <main>
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-deep-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              My Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              Explore my case studies and projects showcasing my approach to solving complex design challenges.
            </p>
          </div>
        </div>
      </div>
      
      <Section
        title="Case Studies"
        subtitle="Detailed explorations of my design process and problem-solving approach"
        background="white"
        id="case-studies"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              tags={project.tags}
              href={project.href}
            />
          ))}
        </div>
      </Section>
      
      <Section
        title="My Design Process"
        subtitle="A systematic approach to solving design challenges"
        background="soft-white"
        id="design-process"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-deep-blue text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Discover</h3>
            <p className="text-warm-gray">
              Research, stakeholder interviews, and understanding user needs to define the problem space.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-deep-blue text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Define</h3>
            <p className="text-warm-gray">
              Synthesize research, create user personas, journey maps, and define key requirements.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-deep-blue text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Design</h3>
            <p className="text-warm-gray">
              Ideate solutions, create wireframes, prototypes, and iteratively refine the design.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-deep-blue bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-deep-blue text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Deliver</h3>
            <p className="text-warm-gray">
              Usability testing, refinement, handoff to development, and measuring success.
            </p>
          </div>
        </div>
      </Section>
      
      <Section
        title="Let's Create Something Together"
        subtitle="Have a project in mind? Let's discuss how I can help."
        background="deep-blue"
        id="contact-cta"
      >
        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities to create exceptional user experiences and help organizations achieve their goals through strategic design.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-deep-blue hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
