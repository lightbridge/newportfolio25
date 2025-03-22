import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import PresentationCard from '@/components/PresentationCard';
import Link from 'next/link';

export default function PresentationsPage() {
  // Sample data for presentations
  const presentations = [
    {
      title: "The Future of UX in Enterprise Software",
      event: "UX Design Summit",
      date: "October 2024",
      description: "An exploration of emerging trends in enterprise UX design and how they will shape the future of work.",
      imageSrc: "/images/presentations/enterprise-ux.jpg",
      videoUrl: "https://youtube.com/watch?v=example1",
      slidesUrl: "/slides/enterprise-ux-future.pdf",
      href: "/presentations/future-of-ux",
    },
    {
      title: "Design Systems at Scale",
      event: "Design Leadership Conference",
      date: "May 2024",
      description: "How to build, implement, and maintain design systems that scale across large organizations.",
      imageSrc: "/images/presentations/design-systems.jpg",
      videoUrl: "https://youtube.com/watch?v=example2",
      slidesUrl: "/slides/design-systems-scale.pdf",
      href: "/presentations/design-systems",
    },
    {
      title: "Leading Design Teams Through Transformation",
      event: "Product Management Summit",
      date: "March 2024",
      description: "Strategies for design leaders to guide their teams through organizational and digital transformation.",
      imageSrc: "/images/presentations/design-leadership.jpg",
      slidesUrl: "/slides/design-leadership.pdf",
      href: "/presentations/design-leadership",
    },
    {
      title: "User-Centered Approaches to Workflow Automation",
      event: "Enterprise Experience Conference",
      date: "November 2023",
      description: "How to apply user-centered design principles to complex workflow automation challenges.",
      imageSrc: "/images/presentations/workflow-automation.jpg",
      videoUrl: "https://youtube.com/watch?v=example3",
      slidesUrl: "/slides/workflow-automation.pdf",
      href: "/presentations/workflow-automation",
    },
    {
      title: "Measuring Design Impact",
      event: "UX Metrics Workshop",
      date: "September 2023",
      description: "Frameworks and methodologies for measuring the business impact of design decisions.",
      imageSrc: "/images/presentations/design-metrics.jpg",
      slidesUrl: "/slides/measuring-design-impact.pdf",
      href: "/presentations/design-metrics",
    },
    {
      title: "Designing for Accessibility in Enterprise Applications",
      event: "Inclusive Design Conference",
      date: "June 2023",
      description: "Best practices for creating accessible enterprise applications that work for everyone.",
      imageSrc: "/images/presentations/accessibility.jpg",
      videoUrl: "https://youtube.com/watch?v=example4",
      slidesUrl: "/slides/accessibility-enterprise.pdf",
      href: "/presentations/accessibility",
    },
  ];

  // Speaking topics
  const speakingTopics = [
    {
      title: "UX Strategy & Leadership",
      description: "Developing effective UX strategies and building high-performing design teams.",
    },
    {
      title: "Enterprise UX Design",
      description: "Creating intuitive experiences for complex enterprise applications and systems.",
    },
    {
      title: "Design Systems",
      description: "Building, implementing, and scaling design systems across organizations.",
    },
    {
      title: "Workflow Automation",
      description: "User-centered approaches to designing workflow automation solutions.",
    },
    {
      title: "Measuring Design Impact",
      description: "Frameworks for measuring and communicating the business value of design.",
    },
  ];

  return (
    <main>
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-deep-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Presentations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              Talks, workshops, and speaking engagements on UX design, leadership, and strategy
            </p>
          </div>
        </div>
      </div>
      
      <Section
        title="Recent Presentations"
        subtitle="Explore my talks at conferences and events"
        background="white"
        id="recent-presentations"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {presentations.map((presentation) => (
            <PresentationCard
              key={presentation.title}
              title={presentation.title}
              event={presentation.event}
              date={presentation.date}
              description={presentation.description}
              imageSrc={presentation.imageSrc}
              videoUrl={presentation.videoUrl}
              slidesUrl={presentation.slidesUrl}
              href={presentation.href}
            />
          ))}
        </div>
      </Section>
      
      <Section
        title="Speaking Topics"
        subtitle="Areas I frequently speak about"
        background="soft-white"
        id="speaking-topics"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakingTopics.map((topic, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-deep-blue mb-3">{topic.title}</h3>
              <p className="text-warm-gray mb-4">{topic.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section
        title="Invite Me to Speak"
        background="deep-blue"
        id="speaking-invite"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            I'm available for speaking engagements, workshops, and panel discussions on UX design, leadership, and strategy. If you'd like me to speak at your event, please get in touch.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-deep-blue hover:bg-gray-100">
            Contact Me About Speaking
          </Link>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
