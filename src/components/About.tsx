import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import trustImg from '@/assets/trust-pics.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
              className="transform-3d"
            >
              <div className="relative glass-light rounded-2xl p-8 shadow-luxury gold-glow-hover">
                <div className="aspect-square overflow-hidden rounded-xl mb-6">
                  <img 
                    src={trustImg} 
                    alt="Trust Agbi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold mb-2">Trust Agbi</h3>
                  <p className="text-gold font-medium">Web Developer</p>
                </div>
                
                {/* Floating Accent */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-gold rounded-full opacity-20 blur-xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gold font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Building Digital Experiences with a{' '}
              <span className="italic text-gold">Creative Perspective</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                I'm <span className="text-foreground font-medium">Trust Agbi</span> — a web developer passionate about building beautiful and interactive websites.
              </p>
              <p>
                I help brands and creators turn ideas into{' '}
                <span className="text-gold font-medium">engaging web experiences</span> that not only look good but also perform flawlessly.
              </p>
              <p>
                With expertise in HTML, CSS, JavaScript, React, and UI/UX design, I craft sophisticated solutions for startups and businesses seeking to stand out in the digital landscape.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '30+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-gold bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;