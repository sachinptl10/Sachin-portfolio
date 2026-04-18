import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Twitter, Linkedin, Code, Youtube, Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

// Custom LeetCode SVG icon
const LeetCodeIcon = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

// FormSubmit.co — zero setup required!
// Just submit the form once → you'll receive ONE confirmation email in your Gmail → click Allow → done!
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/sachin.patel.cg@gmail.com';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' });

  const socials = [
    { icon: Twitter,     href: 'https://x.com/SachinPate71591' },
    { icon: Linkedin,    href: 'https://www.linkedin.com/in/sachin-patel-73a331388/' },
    { icon: LeetCodeIcon, href: 'https://leetcode.com/u/sachinpatell/' },
    { icon: Code,        href: 'https://www.sololearn.com/en/profile/36179940' },
    { icon: Youtube,     href: 'https://www.youtube.com/@SachinPatel-codes' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;

    setStatus('sending');
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.from_name,
          email: form.from_email,
          message: form.message,
          _subject: `Portfolio Contact from ${form.from_name}`,
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setForm({ from_name: '', from_email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4">
            SAY <span className="text-outline">HELLO</span>
          </h2>
          <p className="text-on-surface-variant">Let's create something extraordinary together.</p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Name */}
            <div className="relative group">
              <input
                required
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 py-4 text-white focus:ring-0 focus:border-primary focus:outline-none transition-colors placeholder:text-outline-variant font-headline text-sm uppercase tracking-widest"
                placeholder="Full Name"
                type="text"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-500" />
            </div>

            {/* Email */}
            <div className="relative group">
              <input
                required
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 py-4 text-white focus:ring-0 focus:border-primary focus:outline-none transition-colors placeholder:text-outline-variant font-headline text-sm uppercase tracking-widest"
                placeholder="Email Address"
                type="email"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-500" />
            </div>
          </div>

          {/* Message */}
          <div className="relative group">
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 py-4 text-white focus:ring-0 focus:border-primary focus:outline-none transition-colors placeholder:text-outline-variant font-headline text-sm uppercase tracking-widest resize-none"
              placeholder="Your Message"
              rows={4}
            />
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-focus-within:w-full transition-all duration-500" />
          </div>

          {/* Submit button */}
          <div className="flex justify-center pt-8">
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
              className="relative px-12 py-5 bg-primary-container text-white font-headline font-bold uppercase tracking-[0.3em] transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.3)] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <Send size={16} /> Send Message
                  </motion.span>
                )}
                {status === 'sending' && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 text-green-300"
                  >
                    <CheckCircle2 size={16} /> Message Sent!
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 text-red-300"
                  >
                    <XCircle size={16} /> Failed — Try Again
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.form>

        {/* Socials + Resume */}
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
            className="bg-surface-container px-10 py-4 border border-outline-variant/20 font-headline uppercase tracking-widest text-xs transition-all flex items-center gap-3 text-white"
          >
            Download Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
}
