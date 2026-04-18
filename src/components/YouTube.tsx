import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const videos = [
  {
    id: 'yM2Iav4tFdc',
    title: 'Clone of Airbnb Website using HTML5 & Modern CSS',
    category: 'HTML & CSS',
    url: 'https://youtu.be/yM2Iav4tFdc',
  },
  {
    id: 'DqyL3Bdkg4E',
    title: 'Porsche Clone using HTML & CSS | Frontend Project',
    category: 'FRONTEND',
    url: 'https://youtu.be/DqyL3Bdkg4E',
  },
  {
    id: 'mnTYfgNMTYA',
    title: 'Meal Explorer Clone — Clean UI, Responsive Design & Smooth Layout',
    category: 'UI DESIGN',
    url: 'https://youtu.be/mnTYfgNMTYA',
  },
];

export default function YouTube() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="youtube" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-headline text-5xl font-extrabold text-white">
              WATCH & <span className="text-outline">LEARN</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Sharing knowledge with developers through in-depth tutorials,
              project walkthroughs, and technical insights.
            </p>
          </motion.div>

          <motion.a
            href="https://www.youtube.com/@SachinPatel-codes"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-headline text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            Visit Channel <ExternalLink size={16} />
          </motion.a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface-container rounded-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={(e) => {
                  // Allow opening only when NOT hovering iframe area
                  if (hoveredIndex === index) e.preventDefault();
                }}
              >
                {/* Aspect-ratio container */}
                <div className="aspect-video relative overflow-hidden bg-black">
                  {/* Thumbnail — always rendered behind */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault not available
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />

                  {/* YouTube iframe — shown only on hover */}
                  {hoveredIndex === index && (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&modestbranding=1&rel=0`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={video.title}
                    />
                  )}

                  {/* Play icon overlay — hidden on hover */}
                  {hoveredIndex !== index && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        {/* YouTube-style play triangle */}
                        <svg
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-white fill-white"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Red glow border on hover */}
                  <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-red-500/60 transition-all rounded-lg pointer-events-none" />
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <p className="text-primary text-xs font-headline mb-2 uppercase tracking-widest">
                    {video.category}
                  </p>
                  <h4 className="text-white font-bold text-base line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
