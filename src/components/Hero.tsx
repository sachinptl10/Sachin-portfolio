import Spline from '@splinetool/react-spline';
import { motion, animate } from 'motion/react';
import { Twitter, Linkedin, Code, Youtube, ChevronDown } from 'lucide-react';
import React, { useEffect, useState, Suspense, Component, ReactNode } from 'react';

// Error Boundary to prevent React from crashing when an invalid Spline URL is provided
class SplineErrorBoundary extends Component<{ children: ReactNode, onError: () => void }, { hasError: boolean }> {
  constructor(props: { children: ReactNode, onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.error("Spline failed to load:", error);
    this.props.onError();
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// ─── Spline scene URL ─────────────────────────────────────────────────────────
// The URL below is a placeholder because the one you shared is a Community File, NOT an exported scene.
// To use YOUR specific scene, you MUST:
// 1. Go to https://app.spline.design/community/file/7f09bdc4-93c5-496e-b9fe-3505948c7721
// 2. Click "Remix" at the top right to copy it to your account
// 3. In the editor, click "Export" (top right) -> "Publish for web" -> "Update" or "Publish"
// 4. Copy the URL shown (it will look like: https://prod.spline.design/XXXXXXXX/scene.splinecode)
// 5. Paste it below!
const SPLINE_SCENE = ''; // Leaving blank so it falls back to the glowing orbs until you add your URL.
// ─────────────────────────────────────────────────────────────────────────────

// Custom LeetCode icon
const LeetCodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

export default function Hero() {
  const socialLinks = [
    { name: 'Twitter',   icon: Twitter,     href: 'https://x.com/SachinPate71591' },
    { name: 'LinkedIn',  icon: Linkedin,    href: 'https://www.linkedin.com/in/sachin-patel-73a331388/' },
    { name: 'LeetCode', icon: LeetCodeIcon, href: 'https://leetcode.com/u/sachinpatell/' },
    { name: 'SoloLearn', icon: Code,        href: 'https://www.sololearn.com/en/profile/36179940' },
    { name: 'YouTube',   icon: Youtube,     href: 'https://www.youtube.com/@SachinPatel-codes' },
  ];

  const fullTagline = "I'm not just a coder. I'm a problem solver who builds real things.";
  const [displayText, setDisplayText] = useState('');
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const controls = animate(0, fullTagline.length, {
      duration: 3,
      ease: 'easeInOut',
      onUpdate(latest) {
        setDisplayText(fullTagline.slice(0, Math.round(latest)));
      },
    });
    return controls.stop;
  }, []);

  return (
    <header
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-background px-6 pt-20"
    >
      {/* ── Spline 3D Background ─────────────────────────────────── */}
      {!splineError && SPLINE_SCENE && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <SplineErrorBoundary onError={() => setSplineError(true)}>
            <Suspense fallback={null}>
              <Spline
                scene={SPLINE_SCENE}
                onError={() => setSplineError(true)}
                style={{ width: '100%', height: '100%', opacity: 0.55 }}
              />
            </Suspense>
          </SplineErrorBoundary>
          {/* Dark vignette so text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
        </div>
      )}

      {/* ── Fallback ambient glows (always render, visible if Spline fails/is empty) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: (splineError || !SPLINE_SCENE) ? 1 : 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: (splineError || !SPLINE_SCENE) ? 1 : 0.2, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px] pointer-events-none"
      />

      {/* ── Hero text content ─────────────────────────────────────── */}
      <div className="z-10 text-center space-y-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-headline text-primary uppercase tracking-[0.4em] text-sm md:text-base"
        >
          Mern Stack Developer &amp; Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-10"
      >
        <ChevronDown className="text-outline-variant" size={40} />
      </motion.div>
    </header>
  );
}
