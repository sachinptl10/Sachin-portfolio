import { motion } from 'motion/react';
import { Play, ExternalLink } from 'lucide-react';

export default function YouTube() {
  const videos = [
    {
      title: 'Mastering Server Components in Next.js 14',
      category: 'ADVANCED REACT',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6mfetV0x6oFb11R5uwoY3yEVoNTinaynJRJR36QV8EHR8ITSoOaTL2Y7KXsHSeA9Z3PJYOJwddBBpxhAK10J6Ou1xkiQGRoPDWgChScm4rz55p5vlE2f_kEflvRp6z57m1yMHGD39PPX11BvWOwp4X1iInyeSCFJWQH38SUh_GIghctTWS9DYKkDBPIWNWy8NRvDIH3Kl70ZsaQUT5_XewUBfTY-YOqtx9xX1E6EA1QrwH1lrcu9cypU9hKRdlhE_KgIUnNK_kE4'
    },
    {
      title: 'Build a Real-time Chat App with Socket.io',
      category: 'FULL STACK',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcCqZjBm45ZrZGUEjfbgNE9y6Fyc7FLJ0qLZxgU8zk0pfUIXR3c4O0iAI7IKEjGwNGzsW1TpLgsMbGWWHjiU-inhLnMrpZ-WEB0wh2FjhNrH0CfQAZLMlAYcde0abtRB4VotH9UCLQM1y_PgU5ATkXOFY-RaIh4eC4Q7Z4tbRKQRgo6W1UPmR_Pitos1XV5SEi-guoO_ygBOtJSxnCqYH6wGV5bzc_LLB0boWbpGclEL9J7g0p1RKOUcBmn9-51-CgeNmz3pYX22I'
    },
    {
      title: 'Authentication & JWT Best Practices 2024',
      category: 'SECURITY',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9CgE4aT0tU11DconSLs3eGLzKM_Z9YJrHaUFjEM3cELsrrYpwDCJK6iCbDWdmXGNVSiLvEIZJlxDTsj95kjAZUa0HEvWlneKrwly7fOaWTUC3QUaESHwIXPO70R-KrWr0hZNSAmHCGuA3qqiBIlKUwt3EE4zZdd8KRSwYpvAl7qslpgNrnsQVDe9Rrp2srC6qIWvsMtypEtO0aC_V1-Qi-Npf3SnL-C7-4hiw83yllBhKJ8GjuS8bFVJnnqt2RQPA4f_YTmkU00'
    }
  ];

  return (
    <section id="youtube" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-headline text-5xl font-extrabold text-white">WATCH & <span className="text-outline">LEARN</span></h2>
            <p className="text-on-surface-variant max-w-xl">Sharing knowledge with over 12,000 developers through in-depth tutorials, project walkthroughs, and technical insights.</p>
          </motion.div>
          <motion.a 
            href="https://www.youtube.com/@SachinPatel-v3q"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-headline text-xs uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            Visit Channel <ExternalLink size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface-container rounded-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <motion.img 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={video.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:opacity-100 transition-all"
                  >
                    <Play className="text-white" size={32} fill="white" />
                  </motion.div>
                </div>
                {/* Simulated "Video plays on hover" effect with a subtle overlay pulse */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none animate-pulse"></div>
              </div>
              <div className="p-6">
                <p className="text-primary text-xs font-headline mb-2">{video.category}</p>
                <h4 className="text-white font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
