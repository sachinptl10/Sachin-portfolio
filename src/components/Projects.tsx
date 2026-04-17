import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export default function Projects() {
  const certifications = [
    { title: 'Google Cloud Professional', date: 'Dec 2023' },
    { title: 'Meta Frontend Developer', date: 'Aug 2023' },
    { title: 'AWS Certified Solutions Architect', date: 'May 2023' }
  ];

  return (
    <section className="py-32 bg-surface-container-low px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Featured Project */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-surface-container rounded-lg overflow-hidden group"
          >
            <div className="relative h-[400px]">
              <img 
                alt="Project One" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgsK87mmHr_NZ2gB9EmFs0LiKAQ7-SKPHqZbE3RhuaI4m3XBYdtMqZXdTw4TkWxPOYnpLWaBZv0urIswOYTUBixXa3Gc0IWnJwZI3tuyug-PuGY6WPuAAuaEB4lUYFEnCnDxRMXuT95eZr-kfKME6UmzSNkODFaDmr_fbdxjfgAMqrU22JmKeX9IIKVzO-z9NMfE3lxI9T0t43K6CuseT-eHUfhHDA8bXwr64wPiDGBzONHpxs2U-w_fXFsdkCwVcC1E5HazfX4Ps"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10">
                <span className="text-primary font-headline text-xs tracking-widest uppercase mb-2">Featured Project</span>
                <h3 className="text-white text-3xl font-bold font-headline mb-4">NovaCloud Dashboard</h3>
                <div className="flex gap-4">
                  <button className="bg-primary-container text-white px-6 py-2 text-xs font-headline uppercase tracking-widest hover:scale-95 transition-all">Case Study</button>
                  <button className="border border-white/20 text-white px-6 py-2 text-xs font-headline uppercase tracking-widest hover:bg-white hover:text-black transition-all">Live Preview</button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background border border-outline-variant/30 p-8 rounded-lg"
            >
              <h4 className="text-white font-headline font-bold uppercase tracking-widest mb-6">Certifications</h4>
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <Award className="text-primary" size={24} />
                    <div>
                      <p className="text-white font-bold text-sm">{cert.title}</p>
                      <p className="text-xs text-on-surface-variant">{cert.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-container p-8 rounded-lg"
            >
              <h4 className="text-white font-headline font-bold uppercase tracking-widest mb-2">Available for Hire</h4>
              <p className="text-white/80 text-sm mb-4">Looking for a Senior MERN Developer or UI/UX Designer for your next big thing?</p>
              <a className="text-white font-bold border-b border-white pb-1 hover:border-transparent transition-all" href="#contact">Get in touch →</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
