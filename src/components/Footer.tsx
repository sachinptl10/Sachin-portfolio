export default function Footer() {
  const links = [
    { name: 'X', href: 'https://x.com/SachinPate71591' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sachin-patel-73a331388/' },
    { name: 'SoloLearn', href: 'https://www.sololearn.com/en/profile/36179940' },
    { name: 'YouTube', href: 'https://www.youtube.com/@SachinPatel-v3q' },
  ];

  return (
    <footer className="w-full py-12 px-8 bg-[#131313] flex flex-col md:flex-row justify-between items-center gap-6 font-headline text-xs tracking-wider border-t border-outline-variant/10">
      <div className="text-lg font-black text-white uppercase">SACHIN PATEL</div>
      <div className="text-zinc-500">© 2024 Sachin Patel. All rights reserved.</div>
      <div className="flex gap-6">
        {links.map((link) => (
          <a 
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-zinc-500 hover:text-white hover:scale-110 transition-all ${link.name === 'YouTube' ? 'text-indigo-500 font-bold' : ''}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
