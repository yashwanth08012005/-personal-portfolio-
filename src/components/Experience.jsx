import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Python Development Intern',
      company: 'Cognifyz Technologies',
      date: 'Completed June 2025',
      points: [
        'Completed an intensive internship applying Python libraries in problem-solving.',
        'Developed automation scripts using Python (Pandas, NumPy) to enhance data efficiency.',
        'Reduced data processing time by 40%.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'Vignan Institute of Technology and Science, Hyderabad',
      date: '2023 - Present',
      score: 'GPA: 9.0/10.0'
    },
    {
      degree: 'Intermediate in MPC',
      institution: 'MJPTBCWR Junior College - Chandrayangutta',
      date: '2021 - 2023',
      score: 'Marks: 954/1000'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="experience" className="section-container" style={{ padding: '80px 20px' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
          Experience & <span className="text-gradient">Education</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <motion.h3 variants={itemVariants} style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>Experience</motion.h3>
            {experiences.map((exp, idx) => (
              <motion.div variants={itemVariants} key={idx} className="glass-panel" style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.role}</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  {exp.company} | {exp.date}
                </p>
                <ul style={{ paddingLeft: '1.2rem', color: '#d1d5db', fontSize: '0.95rem' }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h3 variants={itemVariants} style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-purple)' }}>Education</motion.h3>
            {education.map((edu, idx) => (
              <motion.div variants={itemVariants} key={idx} className="glass-panel" style={{ marginBottom: '1.5rem', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  {edu.institution} | {edu.date}
                </p>
                <p style={{ fontWeight: 600, color: 'var(--accent-pink)' }}>{edu.score}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
