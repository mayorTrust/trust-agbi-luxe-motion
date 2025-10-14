import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, LuxeBeauty',
    content: 'Trust transformed our e-commerce platform into an experience our customers love. Sales increased by 60% in just three months. His attention to detail and design excellence is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, TechFlow',
    content: 'Working with Trust was a game-changer. He delivered a sophisticated mobile app that exceeded our expectations. The user feedback has been phenomenal, and our retention rates doubled.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director, Vogue Brands',
    content: 'Trust Agbi is a true creative visionary. He crafted a brand identity that perfectly captures our luxury positioning. Every touchpoint reflects the elegance we sought to achieve.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            What My Clients{' '}
            <span className="italic text-gold">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from brands I've had the privilege to work with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass-light rounded-2xl p-8 h-full relative overflow-hidden gold-glow-hover">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="absolute top-4 right-4 opacity-20"
                >
                  <Quote className="w-12 h-12 text-gold" />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-gold/20 pt-4">
                  <div className="font-heading font-bold text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gold">
                    {testimonial.role}
                  </div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;