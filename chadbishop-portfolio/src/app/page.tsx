import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import Testimonial from '@/components/Testimonial';
import SkillsList from '@/components/SkillsList';
import Link from 'next/link';

export default function Home() {
  // Sample data for featured projects
  const featuredProjects = [
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
  ];

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
  ];

  // Sample testimonial
  const testimonial = {
    quote: "Chad's leadership in UX strategy transformed our product. His ability to balance user needs with business goals resulted in a solution that delighted our customers and improved our key metrics significantly.",
    author: "Jane Smith",
    role: "VP of Product",
    company: "Enterprise Solutions Inc.",
  };

  return (
    <main>
      <Navbar />
      
      <Hero
        title="Senior Product Design Leader"
        subtitle="I help organizations create exceptional user experiences through strategic design leadership, innovative thinking, and user-centered approaches."
        ctaText="View My Work"
        ctaLink="/work"
        secondaryCtaText="Contact Me"
        secondaryCtaLink="/contact"
        imageSrc="/images/hero-image.jpg"
      />
      
      <Section
        title="Featured Work"
        subtitle="Explore some of my recent projects and case studies"
        background="soft-white"
        id="featured-work"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
        <div className="text-center mt-12">
          <Link href="/work" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </Section>
      
      <Section
        title="About Me"
        subtitle="A passionate design leader with a focus on creating impactful user experiences"
        background="white"
        id="about-preview"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              With over 15 years of experience in product design and UX leadership, I've helped organizations transform their digital products through strategic design thinking and user-centered approaches.
            </p>
            <p className="text-lg mb-6">
              My expertise spans UX strategy, design systems, team leadership, and enterprise solutions. I'm passionate about creating experiences that balance user needs with business goals.
            </p>
            <div className="mt-8">
              <Link href="/about" className="btn-secondary">
                Learn More About Me
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-deep-blue mb-6">My Skills</h3>
            <SkillsList skills={skills} showLevel={true} columns={2} />
          </div>
        </div>
      </Section>
      
      <Section
        title="What People Say"
        subtitle="Feedback from clients and colleagues"
        background="deep-blue"
        id="testimonials"
      >
        <div className="max-w-3xl mx-auto">
          <Testimonial
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            company={testimonial.company}
          />
        </div>
      </Section>
      
      <Section
        title="Let's Work Together"
        subtitle="Have a project in mind? Let's discuss how I can help."
        background="soft-white"
        id="contact-cta"
      >
        <div className="text-center">
          <p className="text-lg max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities to create exceptional user experiences and help organizations achieve their goals through strategic design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/work" className="btn-secondary">
              View My Portfolio
            </Link>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
