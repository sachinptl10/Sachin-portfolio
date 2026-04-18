import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, X, ZoomIn, Calendar, Building2 } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  category: string;
  date: string;
  description: string;
  image: string;
  color: string; // accent color for glow
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Crackathon — Certificate of Participation',
    issuer: 'AAKAAR 18th Edition | IIT Bombay',
    category: 'HACKATHON',
    date: '15th March 2026',
    description:
      'Participated in Crackathon under AAKAAR, the Annual Civil Engineering Technical Festival of the Department of Civil Engineering, IIT Bombay.',
    image: '/cert_aakaar.png',
    color: 'rgba(13, 148, 136, 0.5)', // teal
  },
  {
    id: 2,
    title: 'How To Become A Top Ethical Hacker In GenAI Era',
    issuer: 'WsCube Tech — Upskilling Bharat',
    category: 'MASTERCLASS',
    date: '18th Jan 2026',
    description:
      'Actively participated in the Masterclass on Ethical Hacking in the GenAI Era. Reg. ID: WS/2026/M/38492.',
    image: '/cert_wscube.png',
    color: 'rgba(37, 99, 235, 0.5)', // blue
  },
];

export default function Certificates() {
  const [lightbox, setLightbox] = useState<Certificate | null>(null);

  return (
    <>
      <section id="certificates" className="py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div className="space-y-4">
              <h2 className="font-headline text-5xl font-extrabold text-white">
                MY <span className="text-outline">CERTIFICATES</span>
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                A growing collection of certifications, hackathons, and masterclasses that
                reflect my commitment to continuous learning.
              </p>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full text-on-surface-variant text-sm">
              <Award size={16} className="text-primary" />
              <span>{certificates.length} Certificates Earned</span>
            </div>
          </motion.div>

          {/* Certificate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
                onClick={() => setLightbox(cert)}
                style={{ '--cert-glow': cert.color } as React.CSSProperties}
              >
                {/* Glow layer */}
                <div
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                  style={{ background: cert.color }}
                />

                {/* Card */}
                <div className="relative bg-surface-container rounded-xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-black/40">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileHover={{ scale: 1.1 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2"
                      >
                        <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                          <ZoomIn size={22} className="text-white" />
                        </div>
                        <span className="text-white text-xs font-semibold tracking-widest uppercase">
                          View Full
                        </span>
                      </motion.div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-3 py-1 text-[10px] font-headline font-bold tracking-widest uppercase rounded-full backdrop-blur-md text-white"
                        style={{ background: cert.color }}
                      >
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-white font-bold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>

                    <div className="flex flex-col gap-1.5 text-on-surface-variant text-xs">
                      <div className="flex items-center gap-2">
                        <Building2 size={12} className="text-primary flex-shrink-0" />
                        <span className="truncate">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-primary flex-shrink-0" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <p className="text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                  </div>

                  {/* Bottom shimmer bar */}
                  <div
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-700 ease-out"
                    style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow border */}
              <div
                className="absolute -inset-1 rounded-2xl blur-xl opacity-60"
                style={{ background: lightbox.color }}
              />

              <div className="relative bg-[#111] rounded-2xl overflow-hidden border border-white/10">
                {/* Close button */}
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>

                {/* Certificate image */}
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full object-contain max-h-[75vh]"
                />

                {/* Info bar */}
                <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
                  <div>
                    <p className="text-white font-bold text-sm">{lightbox.title}</p>
                    <p className="text-on-surface-variant text-xs mt-0.5">{lightbox.issuer} · {lightbox.date}</p>
                  </div>
                  <span
                    className="self-start sm:self-center px-3 py-1 text-[10px] font-headline font-bold tracking-widest uppercase rounded-full text-white"
                    style={{ background: lightbox.color }}
                  >
                    {lightbox.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
