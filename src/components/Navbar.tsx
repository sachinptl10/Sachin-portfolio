import { motion } from 'motion/react';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto shadow-[0_0_40px_rgba(79,70,229,0.08)]">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-widest text-white font-headline uppercase"
      >
        SACHIN PATEL
      </motion.div>
      
      <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight uppercase text-sm">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`transition-colors hover:text-white ${
              item.name === 'Home' ? 'text-indigo-500 font-bold border-b-2 border-indigo-500 pb-1' : 'text-white/70'
            }`}
          >
            {item.name}
          </motion.a>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 0.95 }}
        className="bg-primary-container text-white px-6 py-2 text-xs font-headline uppercase tracking-widest transition-all duration-200"
      >
        Download Resume
      </motion.button>
    </nav>
  );
}
