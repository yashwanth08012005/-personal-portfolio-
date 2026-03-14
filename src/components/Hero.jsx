import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="section-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '10vh', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap-reverse', minHeight: '80vh', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ zIndex: 10, flex: '1 1 50%', maxWidth: '600px' }}
      >
        <p style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '1rem' }}>
          Hi, I am
        </p>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
          GOGIKAR YASHWANTH
        </h1>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          AI & <span className="text-gradient">Data Science</span> Engineer
        </h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: 1.6, color: '#d1d5db', marginBottom: '3rem' }}>
          Detail-oriented data analyst with expertise in artificial intelligence and data science. Proficient in Python, Java, and statistical modelling, with a passion for extracting actionable insights from complex datasets. A problem solver who thrives both independently and in collaborative environments, seeking to contribute to impactful, real-world projects.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button style={{
            background: 'var(--text-primary)',
            color: 'var(--bg-color)',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
          }} 
          onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseOver={e => e.currentTarget.style.opacity = 0.9} onMouseOut={e => e.currentTarget.style.opacity = 1}>
            Explore My Work
          </button>
          <button style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--glass-border)',
            padding: '12px 28px',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }} 
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', position: 'relative' }}
      >
        {/* Decorative rotating glow behind the image */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, transparent 0%, var(--accent-cyan) 30%, transparent 60%)',
            opacity: 0.4,
            filter: 'blur(15px)'
          }}
        />
        
        {/* Floating image container with glassmorphic border */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            padding: '10px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0, 255, 255, 0.05) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#1E1E1E',
          }}>
            <img 
              src={profileImg} 
              alt="Gogikar Yashwanth" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }} 
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
