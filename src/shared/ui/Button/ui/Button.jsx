import React from 'react';
import styles from './Button.module.css';

export const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const Tag = href ? 'a' : 'button';
  const classes = `${styles.btn} ${styles[variant]} ${className}`;

  return (
    <Tag href={href} className={classes} onClick={onClick}>
      {children}
    </Tag>
  );
};
