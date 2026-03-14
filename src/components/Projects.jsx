import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Track my Student',
      description: "Designed a web app to improve student monitoring for parents, administrators, and educators. Offers a centralised platform where users can track a student's performance in class regarding academics, behaviour, and skills.",
      tech: ['Web App', 'Frontend', 'Backend'],
      link: '#',
      github: '#'
    },
    {
      title: 'Employee Payroll Management',
      description: 'Built a full-stack web application system to automate salary calculations, tax deductions, and employee record management using Python and SQL.',
      tech: ['Python', 'SQL', 'Full-stack'],
      link: '#',
      github: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="section-container" style={{ padding: '80px 20px' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-panel"
              whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2)' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: '#d1d5db', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ 
                    padding: '4px 12px', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    color: 'var(--text-secondary)',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    border: '1px solid var(--glass-border)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Github size={20} /> Code
                </a>
                <a href={project.link} style={{ color: 'var(--accent-purple)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
