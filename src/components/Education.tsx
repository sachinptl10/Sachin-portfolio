import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const education = [
    {
      year: '2025 - Present',
      title: 'Bachelor of Science in Computer Science (Pursuing)',
      institution: 'Swaminarayan University',
      description: 'Currently in second semester, building strong foundations in programming, data structures, and software development. Actively working on real-world projects and improving problem-solving skills.',
      icon: GraduationCap,
    },
    {
      year: '2022 - 2024',
      title: 'Higher Secondary (Science - PCM)',
      institution: 'Allen Career Institute / Shiv Jyoti Senior Secondary School',
      description: 'Completed senior secondary education with focus on Physics, Chemistry, and Mathematics alongside competitive exam preparation. Built strong problem-solving and logical reasoning skills.',
      icon: BookOpen,
    },
    {
      year: '2010 - 2022',
      title: 'Secondary Education',
      institution: 'Wisdom Academy Senior Secondary Public School, Bilara',
      description: 'Completed foundational education with focus on core academic subjects. Developed early interest in mathematics, logic, and technology.',
      icon: School,
    }
  ];

  return (
    <section id="education" className="py-32 bg-background relative overflow-hidden">
      {/* Ambient glowing effect */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-4 tracking-tighter">
            EDUCATION <span className="text-outline">JOURNEY</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Scroll Progress Line */}
          <div className="absolute left-[27px] md:left-[39px] top-[40px] bottom-0 w-1 md:w-1.5 bg-primary/10 rounded-full hidden sm:block"></div>
          <motion.div 
            className="absolute left-[27px] md:left-[39px] top-[40px] bottom-0 w-1 md:w-1.5 bg-primary rounded-full origin-top hidden sm:block shadow-[0_0_15px_rgba(79,70,229,0.5)]"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <div className="space-y-12 md:space-y-20">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -60, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex flex-col sm:flex-row items-start gap-6 md:gap-12 group"
              >
                {/* Timeline Icon */}
                <div className="hidden sm:flex flex-col items-center shrink-0 mt-2 relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-surface-container border-2 md:border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] group-hover:bg-primary/20 transition-all duration-300 transform rotate-3 z-10 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <item.icon className="text-primary w-6 h-6 md:w-8 md:h-8 z-10" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 bg-surface-container-low p-8 md:p-10 rounded-2xl md:rounded-3xl border-l-[6px] border-primary transition-all duration-300 hover:shadow-[0_0_50px_rgba(79,70,229,0.15)] relative overflow-hidden"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl z-0 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4 sm:hidden">
                          <item.icon className="text-primary w-8 h-8" />
                          <span className="text-primary font-headline font-bold text-sm tracking-widest bg-primary/10 px-4 py-1.5 rounded-full uppercase">{item.year}</span>
                      </div>
                      <span className="hidden sm:inline-block text-primary font-headline font-bold text-sm tracking-widest bg-primary/10 px-4 py-1.5 rounded-full uppercase border border-primary/20 w-fit">{item.year}</span>
                    </div>

                    <h3 className="text-white text-3xl md:text-4xl font-display font-bold leading-tight mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    
                    <p className="text-primary/90 text-lg md:text-xl font-headline font-medium mb-5">
                      {item.institution}
                    </p>
                    
                    <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
