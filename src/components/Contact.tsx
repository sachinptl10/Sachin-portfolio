import { motion } from 'motion/react';
import { Twitter, Linkedin, Code, Youtube } from 'lucide-react';

export default function Contact() {
  const socials = [
    { icon: Twitter, href: 'https://x.com/SachinPate71591' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-patel-73a331388/' },
    { icon: Code, href: 'https://www.sololearn.com/en/profile/36179940' },
    { icon: Youtube, href: 'https://www.youtube.com/@SachinPatel-v3q' },
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4">SAY <span className="text-outline">HELLO</span></h2>
          <p className="text-on-surface-variant">Let's create something extraordinary together.</p>
        </motion.div>

        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <input 
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 py-4 text-white focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant font-headline text-sm uppercase tracking-widest" 
                placeholder="Full Name" 
                type="text"
              />
            </div>
            <div className="relative">
              <input 
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 py-4 text-white focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant font-headline text-sm uppercase tracking-widest" 
                placeholder="Email Address" 
                type="email"
              />
            </div>
          </div>
          <div className="relative">
            <textarea 
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 py-4 text-white focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant font-headline text-sm uppercase tracking-widest" 
              placeholder="Your Message" 
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-center pt-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-primary-container text-white font-headline font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.3)]"
            >
              Send Message
            </motion.button>
          </div>
        </form>

        <div className="mt-24 flex flex-col items-center gap-10">
          <div className="flex gap-10">
            {socials.map((social, i) => (
              <motion.a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.25, color: '#c3c0ff' }}
                className="text-on-surface-variant transition-all duration-300"
              >
                <social.icon size={36} />
              </motion.a>
            ))}
          </div>
          <motion.button 
            whileHover={{ backgroundColor: '#c3c0ff', color: '#000', scale: 1.05 }}
            className="bg-surface-container px-10 py-4 border border-outline-variant/20 font-headline uppercase tracking-widest text-xs transition-all flex items-center gap-3"
          >
            Download Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
}
