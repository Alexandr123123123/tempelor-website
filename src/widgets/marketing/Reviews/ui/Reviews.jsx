import React from 'react';
import { motion } from 'framer-motion';
import styles from './Reviews.module.css';

const Reviews = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const reviewsList = [
    {
      name: "Michael R.",
      role: "Homeowner",
      text: "Tempelor completely rewired our 1950s house. The team was incredibly professional, clean, and the final panel looks like a work of art. I sleep much better knowing our home is safe."
    },
    {
      name: "Sarah Jenkins",
      role: "Architect",
      text: "As an architect, I appreciate contractors who understand both functionality and aesthetics. Tempelor's smart home integration was flawless. Highly recommended for luxury builds."
    },
    {
      name: "David T.",
      role: "Business Owner",
      text: "We hired them for a custom lighting and electrical setup in our new smart home. They finished exactly on schedule and passed all city inspections on the very first try."
    }
  ];

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className={styles.label}>
            <span className={styles.accentSlash}>//</span> Testimonials
          </div>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {reviewsList.map((review, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.text}>{review.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.role}>{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
