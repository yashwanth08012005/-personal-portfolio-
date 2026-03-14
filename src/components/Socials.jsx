import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Socials() {
  const socials = [
    { icon: <Github size={20} />, href: 'https://github.com/gogikar-yashwanth', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/gogikar-yashwanth/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:gogikaryashwanth2005@gmail.com', label: 'Email' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        bottom: '0',
        left: '40px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}
    >
      {socials.map((social, idx) => (
        <motion.a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, color: 'var(--accent-cyan)' }}
          style={{
            color: 'var(--text-secondary)',
            transition: 'color 0.2s ease',
          }}
        >
          {social.icon}
        </motion.a>
      ))}
      {/* Decorative vertical line */}
      <div style={{
        width: '1px',
        height: '90px',
        background: 'var(--glass-border)',
        marginTop: '0.5rem'
      }}></div>
    </motion.div>
  );
}
