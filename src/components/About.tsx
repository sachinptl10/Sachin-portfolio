import { motion } from 'motion/react';


export default function About() {
  return (
    <section id="about" className="py-32 bg-surface-container-low px-8 md:px-20 lg:px-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-primary-container/20 blur-2xl group-hover:bg-primary-container/30 transition-all"></div>
          <div className="aspect-square bg-surface-container overflow-hidden rounded-lg relative transition-all duration-700">
            <img 
              alt="Sachin Patel" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              src="https://res.cloudinary.com/dywetnk5t/image/upload/v1775643927/FINAL_-PROFESSIONSL-02_vjvbyi.png"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white leading-tight uppercase">
            NOT JUST A CODER. <br/><span className="text-primary">A PROBLEM SOLVER.</span>
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            <p>I focus on creating fast, smart, and impactful digital solutions — not just writing code, but making ideas work in the real world.</p>
            <p>My work connects clean logic with practical execution. I don't just build projects; I build experiences that people can actually use.</p>
            <p>From hackathons to real-world applications, I turn concepts into working products. Based online, building for everywhere.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
            <div>
              <p className="text-primary font-display text-4xl font-bold">10+</p>
              <p className="font-headline text-xs uppercase tracking-widest text-outline-variant">Projects Built</p>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
