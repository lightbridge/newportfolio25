import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import SkillsList from '@/components/SkillsList';
import Testimonial from '@/components/Testimonial';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  // Sample data for skills
  const skills = [
    { name: 'UX Strategy', category: 'Design Leadership', level: 5 },
    { name: 'Product Design', category: 'Design Leadership', level: 5 },
    { name: 'Design Systems', category: 'Design Leadership', level: 4 },
    { name: 'Team Leadership', category: 'Design Leadership', level: 5 },
    { name: 'User Research', category: 'Research & Strategy', level: 4 },
    { name: 'Competitive Analysis', category: 'Research & Strategy', level: 4 },
    { name: 'Information Architecture', category: 'Research & Strategy', level: 5 },
    { name: 'Usability Testing', category: 'Research & Strategy', level: 4 },
    { name: 'Figma', category: 'Tools & Technologies', level: 5 },
    { name: 'Sketch', category: 'Tools & Technologies', level: 4 },
    { name: 'Adobe Creative Suite', category: 'Tools & Technologies', level: 4 },
    { name: 'Prototyping', category: 'Tools & Technologies', level: 5 },
    { name: 'HTML/CSS', category: 'Development', level: 3 },
    { name: 'JavaScript', category: 'Development', level: 3 },
    { name: 'React', category: 'Development', level: 2 },
    { name: 'Agile Methodologies', category: 'Process', level: 4 },
    { name: 'Design Thinking', category: 'Process', level: 5 },
    { name: 'Workshop Facilitation', category: 'Process', level: 4 },
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "Chad's leadership in UX strategy transformed our product. His ability to balance user needs with business goals resulted in a solution that delighted our customers and improved our key metrics significantly.",
      author: "Jane Smith",
      role: "VP of Product",
      company: "Enterprise Solutions Inc.",
    },
    {
      quote: "Working with Chad was a game-changer for our team. His strategic approach to design challenges and his ability to mentor junior designers elevated our entire product experience.",
      author: "Michael Johnson",
      role: "Director of Engineering",
      company: "TechCorp",
    },
  ];

  // Career timeline data
  const careerTimeline = [
    {
      year: "2020 - Present",
      role: "Senior Product Design Leader",
      company: "Enterprise Solutions Inc.",
      description: "Leading UX strategy and design for enterprise workflow automation products. Managing a team of designers and researchers to create cohesive user experiences across multiple platforms.",
    },
    {
      year: "2017 - 2020",
      role: "UX Director",
      company: "NewRocket",
      description: "Directed UX strategy and innovation initiatives, resulting in improved user engagement and business metrics. Led a team of 8 designers and established design systems and processes.",
    },
    {
      year: "2014 - 2017",
      role: "Senior UX Designer",
      company: "Digital Innovations Co.",
      description: "Led design for key client projects including enterprise portals, mobile applications, and e-commerce platforms. Mentored junior designers and established UX best practices.",
    },
    {
      year: "2010 - 2014",
      role: "UX Designer",
      company: "Creative Solutions Agency",
      description: "Designed user interfaces for web and mobile applications. Conducted user research and usability testing to inform design decisions.",
    },
  ];

  return (
    <main>
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-deep-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              A passionate design leader with a focus on creating impactful user experiences
            </p>
          </div>
        </div>
      </div>
      
      <Section
        title="My Story"
        background="white"
        id="my-story"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src="/images/about-portrait.jpg"
              alt="Chad Bishop"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <p className="text-lg mb-6">
              With over 15 years of experience in product design and UX leadership, I've helped organizations transform their digital products through strategic design thinking and user-centered approaches.
            </p>
            <p className="text-lg mb-6">
              My journey in design began with a fascination for how people interact with technology. This curiosity led me to pursue a career focused on creating digital experiences that are not only visually appealing but also intuitive, accessible, and impactful.
            </p>
            <p className="text-lg mb-6">
              Throughout my career, I've had the privilege of working with diverse teams across various industries, from startups to enterprise organizations. This breadth of experience has given me a unique perspective on how design can drive business success while meeting user needs.
            </p>
            <p className="text-lg">
              Today, I focus on leading design teams, establishing effective design processes, and creating strategic design solutions that deliver measurable results. I'm passionate about mentoring designers and fostering collaborative environments where innovation thrives.
            </p>
          </div>
        </div>
      </Section>
      
      <Section
        title="My Design Philosophy"
        background="soft-white"
        id="design-philosophy"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center mb-12">
            "I believe that great design is invisible. It should feel intuitive and natural, removing friction rather than calling attention to itself."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deep-blue mb-3">User-Centered</h3>
              <p className="text-warm-gray">
                Every design decision should be made with the user's needs, goals, and context in mind.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deep-blue mb-3">Impact-Driven</h3>
              <p className="text-warm-gray">
                Design should drive measurable business outcomes while meeting user needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-deep-blue mb-3">Collaborative</h3>
              <p className="text-warm-gray">
                The best solutions emerge from diverse perspectives and cross-functional collaboration.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section
        title="Professional Journey"
        background="white"
        id="career-timeline"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {careerTimeline.map((item, index) => (
              <div key={index} className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 z-0">
                  {index !== careerTimeline.length - 1 && (
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
                  )}
                </div>
                
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start relative z-10">
                  <div className="md:col-span-1 mb-4 md:mb-0 md:text-right">
                    <div className="md:hidden absolute left-0 top-2 w-6 h-6 rounded-full bg-deep-blue"></div>
                    <div className="hidden md:block absolute left-1/2 top-2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-deep-blue"></div>
                    <span className="text-deep-blue font-semibold">{item.year}</span>
                  </div>
                  
                  <div className="md:col-span-4 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-deep-blue">{item.role}</h3>
                    <p className="text-teal font-medium mb-3">{item.company}</p>
                    <p className="text-warm-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section
        title="My Skills"
        subtitle="Areas of expertise and technical proficiencies"
        background="soft-white"
        id="skills"
      >
        <SkillsList skills={skills} showLevel={true} columns={3} />
      </Section>
      
      <Section
        title="Testimonials"
        subtitle="What colleagues and clients say about working with me"
        background="deep-blue"
        id="testimonials"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </Section>
      
      <Section
        title="Let's Connect"
        subtitle="Interested in working together? Get in touch."
        background="white"
        id="connect"
      >
        <div className="text-center">
          <p className="text-lg max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Me
            </Link>
            <Link href="/resume.pdf" className="btn-secondary">
              Download Resume
            </Link>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
