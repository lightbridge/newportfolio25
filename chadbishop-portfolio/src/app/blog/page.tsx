import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';

export default function BlogPage() {
  // Sample data for blog posts
  const blogPosts = [
    {
      title: "Designing for Enterprise: Balancing Complexity and Usability",
      excerpt: "How to create intuitive experiences for complex enterprise applications without sacrificing functionality.",
      date: "March 15, 2025",
      author: "Chad Bishop",
      imageSrc: "/images/blog/enterprise-design.jpg",
      category: "Enterprise UX",
      href: "/blog/enterprise-design",
      readTime: "8 min read",
    },
    {
      title: "The Evolution of Design Systems in 2025",
      excerpt: "An exploration of how design systems have evolved and where they're headed in the coming years.",
      date: "February 28, 2025",
      author: "Chad Bishop",
      imageSrc: "/images/blog/design-systems.jpg",
      category: "Design Systems",
      href: "/blog/design-systems-evolution",
      readTime: "6 min read",
    },
    {
      title: "Leading Design Teams Through Digital Transformation",
      excerpt: "Strategies for design leaders to guide their teams through organizational change and digital transformation.",
      date: "January 20, 2025",
      author: "Chad Bishop",
      imageSrc: "/images/blog/design-leadership.jpg",
      category: "Leadership",
      href: "/blog/design-leadership",
      readTime: "10 min read",
    },
    {
      title: "User Research Methods for Complex Enterprise Products",
      excerpt: "Effective research methodologies for understanding users of complex enterprise applications.",
      date: "December 12, 2024",
      author: "Chad Bishop",
      imageSrc: "/images/blog/user-research.jpg",
      category: "Research",
      href: "/blog/user-research-methods",
      readTime: "7 min read",
    },
    {
      title: "Measuring the Business Impact of UX Design",
      excerpt: "Frameworks and methodologies for quantifying the ROI of design investments.",
      date: "November 5, 2024",
      author: "Chad Bishop",
      imageSrc: "/images/blog/ux-metrics.jpg",
      category: "UX Metrics",
      href: "/blog/ux-business-impact",
      readTime: "9 min read",
    },
    {
      title: "Accessibility in Enterprise Applications: A Comprehensive Guide",
      excerpt: "Best practices for creating accessible enterprise applications that work for everyone.",
      date: "October 18, 2024",
      author: "Chad Bishop",
      imageSrc: "/images/blog/accessibility.jpg",
      category: "Accessibility",
      href: "/blog/accessibility-guide",
      readTime: "12 min read",
    },
  ];

  // Blog categories
  const categories = [
    "All",
    "Enterprise UX",
    "Design Systems",
    "Leadership",
    "Research",
    "UX Metrics",
    "Accessibility",
  ];

  return (
    <main>
      <Navbar />
      
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 bg-deep-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              Thoughts, insights, and perspectives on UX design, leadership, and strategy
            </p>
          </div>
        </div>
      </div>
      
      <Section
        background="white"
        id="blog-categories"
        className="py-8 md:py-12"
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0
                  ? 'bg-deep-blue text-white'
                  : 'bg-gray-100 text-deep-blue hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>
      
      <Section
        title="Latest Articles"
        background="soft-white"
        id="blog-posts"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.title}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              imageSrc={post.imageSrc}
              category={post.category}
              href={post.href}
              readTime={post.readTime}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="btn-secondary">
            Load More Articles
          </button>
        </div>
      </Section>
      
      <Section
        title="Newsletter"
        subtitle="Subscribe to receive my latest articles and insights"
        background="deep-blue"
        id="newsletter"
      >
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-amber"
              required
            />
            <button type="submit" className="btn-primary bg-amber text-deep-blue hover:bg-opacity-90">
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-4 text-center">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>
      
      <Footer />
    </main>
  );
}
