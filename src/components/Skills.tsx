import { motion } from 'motion/react';
import { Monitor, Database, Brush, Code2 } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend Engineering',
      icon: Monitor,
      skills: ['HTML / CSS', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript'],
      span: 'md:col-span-2'
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      span: 'md:col-span-1'
    },
    {
      title: 'Design & Media',
      icon: Brush,
      skills: ['Figma / Design', 'Adobe Suite', 'Video Editing', 'Motion Design'],
      span: 'md:col-span-1'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-headline text-primary text-xs tracking-widest uppercase mb-2">Capabilities</p>
          <h2 className="font-headline text-5xl font-extrabold text-white">TECHNICAL <span className="text-outline">ARSENAL</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${cat.span} bg-surface-container p-10 rounded-lg group hover:bg-surface-container-high transition-all border border-outline-variant/10`}
            >
              <cat.icon className="text-primary mb-6" size={40} />
              <h3 className="text-white text-xl font-bold mb-4 font-headline uppercase tracking-widest">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-background text-on-surface-variant text-xs rounded border border-outline-variant/20">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-background border border-outline-variant/20 p-10 rounded-lg flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Code2 className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold font-headline uppercase tracking-widest">Core Languages</h3>
                <p className="text-on-surface-variant mt-2">The fundamental pillars of my technical stack.</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {['C / C++', 'JavaScript', 'Python', 'Java'].map(lang => (
                <div key={lang} className="text-center">
                  <p className="text-white font-bold text-lg">{lang}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
