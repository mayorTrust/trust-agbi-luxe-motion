import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import trustImg from '@/assets/trust-img.png';

const projects = [
  {
    id: 1,
    title: 'Luxury E-Commerce Platform',
    category: 'Web Development & UI/UX Design',
    description: 'A sophisticated e-commerce experience for a premium jewelry brand. Built with React, it features smooth product animations, advanced filtering, and a seamless checkout flow.',
    image: project1,
    tags: ['React', 'UI/UX', 'E-Commerce', 'JavaScript'],
    caseStudy: 'Designed and developed a complete e-commerce solution that increased conversion rates by 45% and reduced cart abandonment by 30%.',
  },
  {
    id: 2,
    title: 'Creative Portfolio Website',
    category: 'Web Development',
    description: 'A modern and creative portfolio website for a photographer. The website is built with React and features a unique layout and smooth animations.',
    image: project2,
    tags: ['React', 'JavaScript', 'CSS', 'Vibe Coding'],
    caseStudy: 'Developed a creative portfolio website that helped the photographer attract more clients and win multiple design awards.',
  },
  {
    id: 3,
    title: 'Interactive Web Application',
    category: 'Web Development & UI/UX Design',
    description: 'A complex web application for a data visualization company. The application is built with React and features a highly interactive and customizable interface.',
    image: project3,
    tags: ['React', 'JavaScript', 'UI/UX', 'Data Viz'],
    caseStudy: 'Designed and developed a highly interactive web application that helped the company visualize complex data and gain new insights.',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" ref={ref} className="py-32 relative bg-gradient-luxury">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm mb-4 block">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Portfolio of{' '}
            <span className="italic text-gold">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming visions into memorable digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -12 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="glass-light rounded-2xl overflow-hidden shadow-elegant hover:shadow-luxury transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-charcoal" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-sm text-gold font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl glass-light border-gold/20">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-heading">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gold text-lg">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full rounded-xl mb-6"
                />
                <h4 className="text-xl font-heading font-bold mb-3">Case Study</h4>
                <p className="text-muted-foreground mb-4">
                  {selectedProject.description}
                </p>
                <p className="text-foreground">
                  {selectedProject.caseStudy}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-sm px-4 py-2 rounded-full bg-gold/10 text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;