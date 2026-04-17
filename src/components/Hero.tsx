import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { Twitter, Linkedin, Code, Youtube, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/SachinPate71591' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-patel-73a331388/' },
    { name: 'SoloLearn', icon: Code, href: 'https://www.sololearn.com/en/profile/36179940' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@SachinPatel-v3q' },
  ];

  const fullTagline = "I'm not just a coder. I'm a problem solver who builds real things.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const controls = animate(0, fullTagline.length, {
      duration: 3,
      ease: "easeInOut",
      onUpdate(latest) {
        setDisplayText(fullTagline.slice(0, Math.round(latest)));
      },
    });
    return controls.stop;
  }, []);

  return (
    <header id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background px-6 pt-20">
      {/* Background Aesthetic Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px]" 
      />

      <div className="z-10 text-center space-y-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-headline text-primary uppercase tracking-[0.4em] text-sm md:text-base"
        >
          Mern Stack Developer & Designer
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-black text-6xl md:text-[10rem] leading-none tracking-tighter text-white uppercase relative"
        >
          SACHIN <span className="text-outline">PATEL</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="min-h-[4rem] flex items-center justify-center"
        >
          <span className="font-headline text-xl md:text-3xl text-on-surface-variant font-light tracking-wide italic">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-8 bg-primary ml-1 align-middle"
            />
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 pt-10"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#c3c0ff' }}
              className="flex items-center gap-2 text-on-surface-variant transition-colors duration-300"
            >
              <link.icon size={18} />
              <span className="font-headline text-xs uppercase tracking-widest">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-outline-variant text-4xl" size={40} />
      </motion.div>
    </header>
  );
}
