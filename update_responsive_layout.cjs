const fs = require('fs');

const jsxPath = 'c:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/about/AboutFinal/ui/AboutFinal.jsx';
const cssPath = 'c:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/about/AboutFinal/ui/AboutFinal.module.css';

const desktop = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5 },
  card1: { x: 582, y: 210, rotate: 0, zIndex: 2, w: 400, h: 220 },
  card2: { x: 69, y: -194, rotate: 3, zIndex: 1, w: 460, h: 520 },
  card3: { x: -50, y: -480, rotate: 0, zIndex: 5, w: 190, h: 180 },
  card4: { x: 0, y: -249, rotate: 0, zIndex: 1, w: 280, h: 220, snap: 'right' },
  card5: { x: -693, y: 17, rotate: -5, zIndex: 1, w: 320, h: 220 },
  card6: { x: 272, y: -220, rotate: 0, zIndex: 1, w: 360, h: 300 },
  extraCard1: { x: 0, y: -298, rotate: 0, zIndex: 1, w: 260, h: 260, snap: 'left', type: 'photo' },
  extraCard2: { x: 469, y: -169, rotate: 0, zIndex: 1, w: 200, h: 200, type: 'photo' }
};

const layout1363 = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5 },
  card1: { x: 582, y: 210, rotate: 0, zIndex: 2, width: 400, height: 220 },
  card2: { x: 69, y: -194, rotate: 3, zIndex: 1, width: 460, height: 520 },
  card3: { x: -50, y: -480, rotate: 0, zIndex: 5, width: 190, height: 180 },
  card4: { x: 0, y: -249, rotate: 0, zIndex: 1, width: 280, height: 220, snap: 'right' },
  card5: { x: -693, y: 17, rotate: -5, zIndex: 1, width: 320, height: 220 },
  card6: { x: 272, y: -220, rotate: 0, zIndex: 1, width: 360, height: 300 },
  extraCard1: { x: 0, y: -298, rotate: 0, zIndex: 1, width: 260, height: 260, snap: 'left', type: 'photo' },
  extraCard2: { x: 469, y: -169, rotate: 0, zIndex: 1, width: 200, height: 200, type: 'photo' }
};

// Wait, the user's 1363 layout is EXACTLY identical to the desktop layout! 
// Let's check: card1 x:582, card2 x:69, card5 x:-693. Yes, identical.

const layout1170 = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5 },
  card1: { x: 0, y: 207, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'right' },
  card2: { x: 9, y: -199, rotate: 3, zIndex: 0, width: 420, height: 480 },
  card3: { x: -50, y: -480, rotate: 0, zIndex: 5, width: 190, height: 180 },
  card4: { x: 0, y: -249, rotate: 0, zIndex: 0, width: 280, height: 220, snap: 'right' },
  card5: { x: -566, y: 80, rotate: -5, zIndex: 1, width: 320, height: 220 },
  card6: { x: 251, y: -152, rotate: 0, zIndex: 1, width: 360, height: 300 },
  extraCard1: { x: 0, y: -298, rotate: 0, zIndex: 1, width: 260, height: 260, snap: 'left', type: 'photo' },
  extraCard2: { x: 352, y: -160, rotate: 0, zIndex: 1, width: 200, height: 200 }
};

const layout969 = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5, width: 520, height: 237 },
  card1: { x: -69, y: 357, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'right' },
  card2: { x: -8, y: -197, rotate: 3, zIndex: 0, width: 420, height: 480 },
  card3: { x: -72, y: -476, rotate: 0, zIndex: 5, width: 190, height: 180 },
  card4: { x: 0, y: -264, rotate: 0, zIndex: 0, width: 240, height: 180, snap: 'right' },
  card5: { x: -566, y: 80, rotate: -5, zIndex: 1, width: 320, height: 220 },
  card6: { x: 220, y: -137, rotate: 0, zIndex: 1, width: 360, height: 300 },
  extraCard1: { x: 0, y: -218, rotate: 0, zIndex: 1, width: 220, height: 220, snap: 'left' },
  extraCard2: { x: 246, y: 0, rotate: 0, zIndex: 1, width: 200, height: 200 }
};

const jsxContent = \`import React from 'react';
import styles from './AboutFinal.module.css';

import panelAfter from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const AboutFinal = () => {
  return (
    <section className={styles.about} id="about-final">
      <div className={styles.container}>
        <div className={\`\${styles.card} \${styles.textCard} \${styles.headerCard}\`}>
          <span className={styles.label}>
            <span className={styles.accentSlash}>//</span> About Tempelor
          </span>
          <h2 className={styles.title}>Precision. Safety. Innovation.</h2>
        </div>
      </div>

      <div className={styles.chaoticContainer}>
        {/* Card 1 */}
        <div 
          className={\`\${styles.card} \${styles.textCard} \${styles.card1}\`}
          style={{
            '--x': '\${desktop.card1.x}px', '--y': '\${desktop.card1.y}px', '--rot': '\${desktop.card1.rotate}deg', '--w': '\${desktop.card1.w}px', '--h': '\${desktop.card1.h}px',
            '--l1-x': '\${layout1170.card1.x}px', '--l1-y': '\${layout1170.card1.y}px', '--l1-rot': '\${layout1170.card1.rotate}deg', '--l1-w': '\${layout1170.card1.width}px', '--l1-h': '\${layout1170.card1.height}px',
            '--l2-x': '\${layout969.card1.x}px', '--l2-y': '\${layout969.card1.y}px', '--l2-rot': '\${layout969.card1.rotate}deg', '--l2-w': '\${layout969.card1.width}px', '--l2-h': '\${layout969.card1.height}px',
            zIndex: \${desktop.card1.zIndex}
          }}
        >
          <h3 className={styles.cardTitle}>Who We Are</h3>
          <p className={styles.cardDesc}>
            Premier electrical contractor redefining residential power systems with modern tech.
          </p>
        </div>

        {/* Card 2 */}
        <div 
          className={\`\${styles.card} \${styles.imageCard} \${styles.card2}\`}
          style={{
            '--x': '\${desktop.card2.x}px', '--y': '\${desktop.card2.y}px', '--rot': '\${desktop.card2.rotate}deg', '--w': '\${desktop.card2.w}px', '--h': '\${desktop.card2.h}px',
            '--l1-x': '\${layout1170.card2.x}px', '--l1-y': '\${layout1170.card2.y}px', '--l1-rot': '\${layout1170.card2.rotate}deg', '--l1-w': '\${layout1170.card2.width}px', '--l1-h': '\${layout1170.card2.height}px',
            '--l2-x': '\${layout969.card2.x}px', '--l2-y': '\${layout969.card2.y}px', '--l2-rot': '\${layout969.card2.rotate}deg', '--l2-w': '\${layout969.card2.width}px', '--l2-h': '\${layout969.card2.height}px',
            zIndex: \${desktop.card2.zIndex}
          }}
        >
          <img src={panelAfter} alt="Modern Electrical Panel" />
        </div>

        {/* Card 3 */}
        <div 
          className={\`\${styles.card} \${styles.textCard} \${styles.card3}\`}
          style={{
            '--x': '\${desktop.card3.x}px', '--y': '\${desktop.card3.y}px', '--rot': '\${desktop.card3.rotate}deg', '--w': '\${desktop.card3.w}px', '--h': '\${desktop.card3.h}px',
            '--l1-x': '\${layout1170.card3.x}px', '--l1-y': '\${layout1170.card3.y}px', '--l1-rot': '\${layout1170.card3.rotate}deg', '--l1-w': '\${layout1170.card3.width}px', '--l1-h': '\${layout1170.card3.height}px',
            '--l2-x': '\${layout969.card3.x}px', '--l2-y': '\${layout969.card3.y}px', '--l2-rot': '\${layout969.card3.rotate}deg', '--l2-w': '\${layout969.card3.width}px', '--l2-h': '\${layout969.card3.height}px',
            zIndex: \${desktop.card3.zIndex}
          }}
        >
          <div className={styles.statValue}>15+</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>

        {/* Card 4 */}
        <div 
          className={\`\${styles.card} \${styles.textCard} \${styles.card4}\`}
          style={{
            '--x': '\${desktop.card4.x}px', '--y': '\${desktop.card4.y}px', '--rot': '\${desktop.card4.rotate}deg', '--w': '\${desktop.card4.w}px', '--h': '\${desktop.card4.h}px',
            '--l1-x': '\${layout1170.card4.x}px', '--l1-y': '\${layout1170.card4.y}px', '--l1-rot': '\${layout1170.card4.rotate}deg', '--l1-w': '\${layout1170.card4.width}px', '--l1-h': '\${layout1170.card4.height}px',
            '--l2-x': '\${layout969.card4.x}px', '--l2-y': '\${layout969.card4.y}px', '--l2-rot': '\${layout969.card4.rotate}deg', '--l2-w': '\${layout969.card4.width}px', '--l2-h': '\${layout969.card4.height}px',
            zIndex: \${desktop.card4.zIndex},
            left: 'auto', right: 0,
            borderTopRightRadius: 0, borderBottomRightRadius: 0
          }}
        >
          <div className={styles.statValue}>500+</div>
          <div className={styles.statLabel}>Projects Done</div>
        </div>

        {/* Card 5 */}
        <div 
          className={\`\${styles.card} \${styles.imageCard} \${styles.card5}\`}
          style={{
            '--x': '\${desktop.card5.x}px', '--y': '\${desktop.card5.y}px', '--rot': '\${desktop.card5.rotate}deg', '--w': '\${desktop.card5.w}px', '--h': '\${desktop.card5.h}px',
            '--l1-x': '\${layout1170.card5.x}px', '--l1-y': '\${layout1170.card5.y}px', '--l1-rot': '\${layout1170.card5.rotate}deg', '--l1-w': '\${layout1170.card5.width}px', '--l1-h': '\${layout1170.card5.height}px',
            '--l2-x': '\${layout969.card5.x}px', '--l2-y': '\${layout969.card5.y}px', '--l2-rot': '\${layout969.card5.rotate}deg', '--l2-w': '\${layout969.card5.width}px', '--l2-h': '\${layout969.card5.height}px',
            zIndex: \${desktop.card5.zIndex}
          }}
        >
          <img src={heroImg} alt="Smart Home" />
        </div>

        {/* Card 6 */}
        <div 
          className={\`\${styles.card} \${styles.textCard} \${styles.card6}\`}
          style={{
            '--x': '\${desktop.card6.x}px', '--y': '\${desktop.card6.y}px', '--rot': '\${desktop.card6.rotate}deg', '--w': '\${desktop.card6.w}px', '--h': '\${desktop.card6.h}px',
            '--l1-x': '\${layout1170.card6.x}px', '--l1-y': '\${layout1170.card6.y}px', '--l1-rot': '\${layout1170.card6.rotate}deg', '--l1-w': '\${layout1170.card6.width}px', '--l1-h': '\${layout1170.card6.height}px',
            '--l2-x': '\${layout969.card6.x}px', '--l2-y': '\${layout969.card6.y}px', '--l2-rot': '\${layout969.card6.rotate}deg', '--l2-w': '\${layout969.card6.width}px', '--l2-h': '\${layout969.card6.height}px',
            zIndex: \${desktop.card6.zIndex}
          }}
        >
          <h3 className={styles.cardTitle}>100% Certified</h3>
          <p className={styles.cardDesc}>
            Fully licensed professionals compliant with all electrical codes.
          </p>
        </div>

        {/* Extra Card 1 */}
        <div 
          className={\`\${styles.card} \${styles.imageCard} \${styles.extraCard}\`}
          style={{
            '--x': '\${desktop.extraCard1.x}px', '--y': '\${desktop.extraCard1.y}px', '--rot': '\${desktop.extraCard1.rotate}deg', '--w': '\${desktop.extraCard1.w}px', '--h': '\${desktop.extraCard1.h}px',
            '--l1-x': '\${layout1170.extraCard1.x}px', '--l1-y': '\${layout1170.extraCard1.y}px', '--l1-rot': '\${layout1170.extraCard1.rotate}deg', '--l1-w': '\${layout1170.extraCard1.width}px', '--l1-h': '\${layout1170.extraCard1.height}px',
            '--l2-x': '\${layout969.extraCard1.x}px', '--l2-y': '\${layout969.extraCard1.y}px', '--l2-rot': '\${layout969.extraCard1.rotate}deg', '--l2-w': '\${layout969.extraCard1.width}px', '--l2-h': '\${layout969.extraCard1.height}px',
            zIndex: \${desktop.extraCard1.zIndex},
            left: 0, right: 'auto',
            borderTopLeftRadius: 0, borderBottomLeftRadius: 0
          }}
        >
          <img src={panelAfter} alt="Extra Photo 1" />
        </div>

        {/* Extra Card 2 */}
        <div 
          className={\`\${styles.card} \${styles.imageCard} \${styles.extraCard}\`}
          style={{
            '--x': '\${desktop.extraCard2.x}px', '--y': '\${desktop.extraCard2.y}px', '--rot': '\${desktop.extraCard2.rotate}deg', '--w': '\${desktop.extraCard2.w}px', '--h': '\${desktop.extraCard2.h}px',
            '--l1-x': '\${layout1170.extraCard2.x}px', '--l1-y': '\${layout1170.extraCard2.y}px', '--l1-rot': '\${layout1170.extraCard2.rotate}deg', '--l1-w': '\${layout1170.extraCard2.width}px', '--l1-h': '\${layout1170.extraCard2.height}px',
            '--l2-x': '\${layout969.extraCard2.x}px', '--l2-y': '\${layout969.extraCard2.y}px', '--l2-rot': '\${layout969.extraCard2.rotate}deg', '--l2-w': '\${layout969.extraCard2.width}px', '--l2-h': '\${layout969.extraCard2.height}px',
            zIndex: \${desktop.extraCard2.zIndex}
          }}
        >
          <img src={heroImg} alt="Extra Photo 2" />
        </div>

      </div>
    </section>
  );
};

export default AboutFinal;
\`;

fs.writeFileSync(jsxPath, jsxContent, 'utf8');

let cssContent = fs.readFileSync(cssPath, 'utf8');

const cardCss = \`.card {
  position: absolute;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  --card-x: var(--x, 0px);
  --card-y: var(--y, 0px);
  --card-rot: var(--rot, 0deg);
  width: var(--w, 300px);
  height: var(--h, 200px);
  transform: translate(var(--card-x), var(--card-y)) rotate(var(--card-rot));
  
  transition: transform 1s cubic-bezier(0.25, 1, 0.5, 1), width 1s cubic-bezier(0.25, 1, 0.5, 1), height 1s cubic-bezier(0.25, 1, 0.5, 1), z-index 0s;
}\`;

// Replace the old inline card styling if it exists
if (cssContent.includes('transform: translate(var(--card-x)')) {
  cssContent = cssContent.replace(/\\.card \\{[\\s\\S]*?transition:[^}]*\\}/, cardCss);
} else {
  // It was restored, so just replace standard card
  cssContent = cssContent.replace(/\\.card \\{[\\s\\S]*?transition:[^}]*\\}/, cardCss);
}

// Ensure the hover uses CSS variables
if (!cssContent.includes('transform: scale(1.05) translate(var(--card-x), var(--card-y))')) {
  cssContent = cssContent.replace(/transform: scale\\(1.05\\).*!important;/, 'transform: scale(1.05) translate(var(--card-x), var(--card-y)) rotate(var(--card-rot)) !important;');
}

const mediaQueries = \`
@media (max-width: 1250px) {
  .card {
    --card-x: var(--l1-x, var(--x));
    --card-y: var(--l1-y, var(--y));
    --card-rot: var(--l1-rot, var(--rot));
    width: var(--l1-w, var(--w));
    height: var(--l1-h, var(--h));
  }
}

@media (max-width: 1050px) {
  .card {
    --card-x: var(--l2-x, var(--l1-x));
    --card-y: var(--l2-y, var(--l1-y));
    --card-rot: var(--l2-rot, var(--l1-rot));
    width: var(--l2-w, var(--l1-w));
    height: var(--l2-h, var(--l1-h));
  }
}
\`;

if (!cssContent.includes('@media (max-width: 1250px)')) {
  cssContent = cssContent.replace('@media (max-width: 900px)', mediaQueries + '\\n@media (max-width: 900px)');
}

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Update finished.');
