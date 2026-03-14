import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    'Programming Languages': ['Python', 'C', 'Java', 'SQL'],
    'Web Technologies': ['HTML', 'CSS', 'Javascript'],
    'Tools': ['Git', 'GitHub', 'VSCode', 'Power BI'],
    'Soft Skills': ['Effective communication', 'Collaborative Teamwork', 'Analytical Thinking', 'Decision Making']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="section-container" style={{ padding: '80px 20px' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: idx % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)' }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {items.map((skill, i) => (
                  <span key={i} style={{
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
