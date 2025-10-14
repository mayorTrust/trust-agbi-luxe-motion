import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Luxury background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gold/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-beige/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm">Available for Premium Projects</span>
          </motion.div>

          {/* Main Heading with 3D Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 transform-3d"
          >
            <span className="block">Trust Agbi</span>
            <motion.span 
              className="block bg-gradient-gold bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.3)',
                  '0 0 40px rgba(212, 175, 55, 0.5)',
                  '0 0 20px rgba(212, 175, 55, 0.3)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Creative Designer
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light italic"
          >
            Designing Digital Experiences that Define Luxury
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-gold border-0 text-base px-8 py-6 hover:shadow-glow group"
            >
              Let's Create Something Timeless
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 border-gold/30 hover:bg-gold/10 hover:border-gold"
            >
              View Portfolio
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;