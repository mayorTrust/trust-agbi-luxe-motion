import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, Sparkles, Layout } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Crafting intuitive, elegant interfaces that users love. From wireframes to high-fidelity prototypes, I create experiences that balance beauty with functionality.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, performant websites with modern technologies. Clean code, smooth animations, and pixel-perfect implementation.',
    features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO Best Practices'],
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Developing cohesive brand systems that tell your story. From logos to complete visual identities that make lasting impressions.',
    features: ['Logo Design', 'Brand Strategy', 'Style Guides', 'Brand Assets'],
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creating stunning visual content that captures attention. Marketing materials, social media graphics, and everything in between.',
    features: ['Marketing Materials', 'Social Media', 'Print Design', 'Illustrations'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm mb-4 block">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Services That Elevate{' '}
            <span className="italic text-gold">Your Brand</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your unique needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
              <div className="glass-light rounded-2xl p-8 h-full gold-glow-hover border-2 border-transparent hover:border-gold/20 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 shadow-luxury"
                >
                  <service.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Accent */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;