import React from 'react';
import styles from '../styles/component/GlowingBall.module.css';

const GlowingBall = () => {
    return (
      <div className={styles.glowingBallContainer}>
        <div className={styles.glowingBall}>
          <span className={styles.skillText}>Skill</span>
        </div>
      </div>
    );
  };
  
  export default GlowingBall;