import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message received! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-beige/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="text-gold font-medium tracking-wider uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Let's Bring Your Brand's{' '}
              <span className="italic text-gold">Vision to Life</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to create something extraordinary? Let's start a conversation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12 glass-light border-gold/20 focus:border-gold h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-12 glass-light border-gold/20 focus:border-gold h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="pl-12 pt-4 glass-light border-gold/20 focus:border-gold min-h-32"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-gold border-0 hover:shadow-glow group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass-light rounded-2xl p-8 gold-glow-hover">
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Why Work With Me?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Premium quality designs that convert',
                    'Timely delivery and clear communication',
                    'Unlimited revisions until perfect',
                    'Post-launch support included',
                    'Transparent pricing, no hidden fees',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="glass-light rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✨</div>
                <h4 className="text-xl font-heading font-bold mb-2">
                  Premium Clients Only
                </h4>
                <p className="text-muted-foreground">
                  I work with a limited number of clients to ensure exceptional quality and attention to detail for every project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;