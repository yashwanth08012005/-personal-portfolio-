import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-container" style={{ padding: '80px 20px', minHeight: 'unset', marginBottom: '100px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel"
        style={{ textAlign: 'center', padding: '4rem 2rem' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          I am currently seeking opportunities to contribute to impactful, real-world projects. Feel free to reach out.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <a href="mailto:gogikaryashwanth2005@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem' }}>
            <div style={{ padding: '12px', background: 'rgba(255, 0, 127, 0.1)', borderRadius: '50%', color: 'var(--accent-pink)' }}>
              <Mail size={24} />
            </div>
            gogikaryashwanth2005@gmail.com
          </a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
            <div style={{ padding: '12px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '50%', color: 'var(--accent-cyan)' }}>
              <Phone size={24} />
            </div>
            +91 7816096545
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', fontSize: '1.1rem' }}>
            <div style={{ padding: '12px', background: 'rgba(179, 0, 255, 0.1)', borderRadius: '50%', color: 'var(--accent-purple)' }}>
              <MapPin size={24} />
            </div>
            Hyderabad, India
          </div>
        </div>
      </motion.div>
    </section>
  );
}
