import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-heading font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-gold bg-clip-text text-transparent">TA</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="animated-underline text-sm font-medium hover:text-gold transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button variant="default" className="bg-gradient-gold border-0 hover:shadow-glow">
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-light mt-4 mx-6 rounded-lg p-6"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-sm font-medium hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button className="w-full mt-4 bg-gradient-gold border-0">
            Let's Talk
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;