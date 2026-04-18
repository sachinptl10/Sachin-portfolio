import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NovaCloud Dashboard',
    description: 'A full-stack cloud management dashboard with real-time analytics, user management, and resource monitoring.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgsK87mmHr_NZ2gB9EmFs0LiKAQ7-SKPHqZbE3RhuaI4m3XBYdtMqZXdTw4TkWxPOYnpLWaBZv0urIswOYTUBixXa3Gc0IWnJwZI3tuyug-PuGY6WPuAAuaEB4lUYFEnCnDxRMXuT95eZr-kfKME6UmzSNkODFaDmr_fbdxjfgAMqrU22JmKeX9IIKVzO-z9NMfE3lxI9T0t43K6CuseT-eHUfhHDA8bXwr64wPiDGBzONHpxs2U-w_fXFsdkCwVcC1E5HazfX4Ps',
    featured: true,
    live: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-surface-container-low px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="space-y-4">
            <h2 className="font-headline text-5xl font-extrabold text-white">
              FEATURED <span className="text-outline">PROJECTS</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Hand-crafted digital experiences — from concept to deployment.
            </p>
          </div>
        </motion.div>

        {/* Featured Project — full width */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-surface-container rounded-2xl overflow-hidden"
          >
            <div className="relative h-[480px]">
              <img
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={project.image}
                referrerPolicy="no-referrer"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <span className="text-primary font-headline text-xs tracking-widest uppercase mb-3">
                  Featured Project
                </span>
                <h3 className="text-white text-4xl font-bold font-headline mb-4">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm max-w-xl mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-headline uppercase tracking-wider border border-white/20 text-white/80 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-container text-white px-6 py-2.5 text-xs font-headline uppercase tracking-widest hover:scale-95 transition-all rounded-sm"
                  >
                    <ExternalLink size={14} /> Live Preview
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/20 text-white px-6 py-2.5 text-xs font-headline uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm"
                  >
                    <Github size={14} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Available for Hire card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-primary-container p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-white font-headline font-bold uppercase tracking-widest mb-2 text-lg">
              Available for Hire
            </h4>
            <p className="text-white/80 text-sm">
              Looking for a Frontend Developer for your next big thing?
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-3 bg-white text-black font-headline text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition-all rounded-sm"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
