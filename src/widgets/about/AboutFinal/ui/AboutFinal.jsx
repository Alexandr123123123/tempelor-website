import { useEffect, useState } from 'react';
import styles from './AboutFinal.module.css';

import panelAfter from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const layout1366 = {
  headerCard: { x: 20, y: 0, rotate: 0, zIndex: 5, width: 700 },
  card1: { x: 855, y: 668, rotate: 0, zIndex: 2, width: 400, height: 220 },
  card2: { x: 684, y: 94, rotate: 3, zIndex: 1, width: 460, height: 520 },
  card3: { x: 428, y: 138, rotate: 0, zIndex: 5, width: 190, height: 180 },
  card4: { x: 0, y: 5, rotate: 0, zIndex: 1, width: 280, height: 220, snap: 'right' },
  card5: { x: 148, y: 629, rotate: -5, zIndex: 1, width: 320, height: 220 },
  card6: { x: 340, y: 346, rotate: 0, zIndex: 1, width: 360, height: 300 },
  extraCard1: { x: 0, y: 262, rotate: 0, zIndex: 1, width: 260, height: 260, snap: 'left' },
  extraCard2: { x: 1152, y: 391, rotate: 0, zIndex: 1, width: 200, height: 200 }
};

const layout1200 = {
  headerCard: { x: 20, y: 0, rotate: 0, zIndex: 5, width: 580, height: 233, snap: null },
  card1: { x: 0, y: 665, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'right' },
  card2: { x: 562, y: 144, rotate: 3, zIndex: 1, width: 420, height: 480, snap: null },
  card3: { x: 346, y: 198, rotate: 0, zIndex: 5, width: 190, height: 180, snap: null },
  card4: { x: 0, y: 5, rotate: 0, zIndex: 0, width: 280, height: 220, snap: 'right' },
  card5: { x: 134, y: 692, rotate: -5, zIndex: 1, width: 320, height: 220 },
  card6: { x: 311, y: 414, rotate: 0, zIndex: 1, width: 360, height: 300 },
  extraCard1: { x: 0, y: 262, rotate: 0, zIndex: 1, width: 260, height: 260, snap: 'left' },
  extraCard2: { x: 952, y: 400, rotate: 0, zIndex: 1, width: 200, height: 200 }
};

const layout700 = {
  headerCard: { x: 20, y: 0, rotate: 0, zIndex: 5, width: 520, height: 213, snap: null },
  card1: { x: 0, y: 765, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'right' },
  card2: { x: 514, y: 150, rotate: 3, zIndex: 1, width: 420, height: 480, snap: null },
  card3: { x: 311, y: 184, rotate: 0, zIndex: 5, width: 190, height: 180, snap: null },
  card4: { x: 0, y: 25, rotate: 0, zIndex: 1, width: 260, height: 200, snap: 'right' },
  card5: { x: -3, y: 686, rotate: -5, zIndex: 1, width: 320, height: 220, snap: null },
  card6: { x: 264, y: 418, rotate: 0, zIndex: 1, width: 380, height: 320, snap: null },
  extraCard1: { x: 0, y: 262, rotate: 0, zIndex: 1, width: 220, height: 220, snap: 'left' },
  extraCard2: { x: 0, y: 536, rotate: 0, zIndex: 1, width: 180, height: 180, snap: 'right' }
};

const layout1000 = {
  headerCard: { x: 20, y: 0, rotate: 0, zIndex: 5, width: 500, height: 213, snap: null },
  card1: { x: 0, y: 825, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'right' },
  card2: { x: 478, y: 166, rotate: 3, zIndex: 1, width: 420, height: 480, snap: null },
  card3: { x: 296, y: 184, rotate: 0, zIndex: 5, width: 170, height: 160, snap: null },
  card4: { x: 0, y: 25, rotate: 0, zIndex: 1, width: 220, height: 200, snap: 'right' },
  card5: { x: -20, y: 864, rotate: -5, zIndex: 1, width: 320, height: 220, snap: null },
  card6: { x: 128, y: 515, rotate: 0, zIndex: 1, width: 420, height: 360, snap: null },
  extraCard1: { x: 0, y: 262, rotate: 0, zIndex: 1, width: 220, height: 220, snap: 'left' },
  extraCard2: { x: 671, y: 627, rotate: 0, zIndex: 7, width: 180, height: 180, snap: null }
};

const layout900 = {
  headerCard: { x: 20, y: 0, rotate: 0, zIndex: 5, width: 460, height: 173, snap: null },
  card1: { x: 0, y: 813, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'right' },
  card2: { x: 433, y: 160, rotate: 3, zIndex: 3, width: 380, height: 420, snap: null },
  card3: { x: 241, y: 215, rotate: 0, zIndex: 5, width: 150, height: 140, snap: null },
  card4: { x: 0, y: 25, rotate: 0, zIndex: 1, width: 180, height: 160, snap: 'right' },
  card5: { x: 4, y: 806, rotate: -5, zIndex: 1, width: 320, height: 220, snap: null },
  card6: { x: 254, y: 479, rotate: 0, zIndex: 5, width: 380, height: 280, snap: null },
  extraCard1: { x: 5, y: 369, rotate: 0, zIndex: 1, width: 220, height: 200, snap: 'left' },
  extraCard2: { x: 677, y: 604, rotate: 0, zIndex: 7, width: 180, height: 180, snap: null }
};

const layout800 = {
  headerCard: { x: 20, y: 0, rotate: 0, zIndex: 5, width: 460, height: 173, snap: null },
  card1: { x: 0, y: 877, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'right' },
  card2: { x: 322, y: 159, rotate: 3, zIndex: 3, width: 380, height: 420, snap: null },
  card3: { x: 116, y: 151, rotate: 0, zIndex: 5, width: 150, height: 140, snap: null },
  card4: { x: 0, y: 25, rotate: 0, zIndex: 1, width: 180, height: 160, snap: 'right' },
  card5: { x: 4, y: 806, rotate: -5, zIndex: 1, width: 320, height: 220, snap: null },
  card6: { x: 188, y: 485, rotate: 0, zIndex: 5, width: 380, height: 280, snap: null },
  extraCard1: { x: 6, y: 318, rotate: 0, zIndex: 1, width: 220, height: 200, snap: 'left' },
  extraCard2: { x: 585, y: 616, rotate: 0, zIndex: 7, width: 180, height: 180, snap: null }
};

const layout700Exact = {
  headerCard: { x: 20, y: 0, rotate: 0, zIndex: 5, width: 360, height: 173, snap: null },
  card1: { x: 0, y: 901, rotate: 0, zIndex: 2, width: 360, height: 200, snap: 'right' },
  card2: { x: 295, y: 143, rotate: 3, zIndex: 2, width: 340, height: 320, snap: null },
  card3: { x: 103, y: 163, rotate: 0, zIndex: 5, width: 130, height: 120, snap: null },
  card4: { x: -4, y: 22, rotate: 0, zIndex: 2, width: 160, height: 140, snap: 'right' },
  card5: { x: 2, y: 783, rotate: -5, zIndex: 1, width: 280, height: 200, snap: null },
  card6: { x: 134, y: 484, rotate: 0, zIndex: 5, width: 380, height: 280, snap: null },
  extraCard1: { x: 6, y: 318, rotate: 0, zIndex: 1, width: 220, height: 200, snap: 'left' },
  extraCard2: { x: 487, y: 659, rotate: 0, zIndex: 7, width: 180, height: 180, snap: null }
};

const layout600 = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5, width: 360, height: 180, snap: 'left' },
  card1: { x: 121, y: 851, rotate: 0, zIndex: 2, width: 400, height: 220 },
  card2: { x: -43, y: 299, rotate: 5, zIndex: 3, width: 200, height: 200 },
  card3: { x: 108, y: 152, rotate: 0, zIndex: 5, width: 130, height: 120 },
  card4: { x: 309, y: 509, rotate: 0, zIndex: 3, width: 180, height: 160 },
  card5: { x: -7, y: 609, rotate: -5, zIndex: 1, width: 280, height: 200 },
  card6: { x: 0, y: 209, rotate: 0, zIndex: 2, width: 400, height: 340, snap: 'right' },
  extraCard1: { x: 0, y: 18, rotate: 0, zIndex: 6, width: 140, height: 140, snap: 'right' },
  extraCard2: { x: 0, y: 654, rotate: 0, zIndex: 2, width: 180, height: 160, snap: 'right' }
};

const layout528 = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5, width: 320, height: 180, snap: 'left' },
  card1: { x: 0, y: 792, rotate: 0, zIndex: 2, width: 400, height: 220, snap: 'left' },
  card2: { x: -16, y: 499, rotate: 5, zIndex: 3, width: 200, height: 200 },
  card3: { x: 83, y: 152, rotate: 0, zIndex: 5, width: 130, height: 120 },
  card4: { x: 241, y: 509, rotate: 0, zIndex: 3, width: 180, height: 160 },
  card5: { x: 228, y: 989, rotate: -5, zIndex: 1, width: 280, height: 200 },
  card6: { x: 0, y: 209, rotate: 0, zIndex: 2, width: 400, height: 340, snap: 'right' },
  extraCard1: { x: 0, y: 18, rotate: 0, zIndex: 6, width: 140, height: 140, snap: 'right' },
  extraCard2: { x: 0, y: 654, rotate: 0, zIndex: 2, width: 180, height: 160, snap: 'right' }
};

const layout370 = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5, width: 320, height: 180, snap: 'left' },
  card1: { x: 0, y: 916, rotate: 0, zIndex: 1, width: '100%', height: 220, snap: 'left' },
  card2: { x: -42, y: 598, rotate: 5, zIndex: 3, width: 200, height: 200 },
  card3: { x: 30, y: 196, rotate: 0, zIndex: 5, width: 130, height: 120, snap: null },
  card4: { x: 103, y: 784, rotate: 0, zIndex: 3, width: 160, height: 140 },
  card5: { x: 58, y: 1124, rotate: -5, zIndex: 1, width: 280, height: 200 },
  card6: { x: 0, y: 286, rotate: 0, zIndex: 2, width: '100%', height: 340, snap: 'right' },
  extraCard1: { x: -4, y: 149, rotate: 0, zIndex: 6, width: 160, height: 160, snap: 'right' },
  extraCard2: { x: 0, y: 654, rotate: 0, zIndex: 2, width: 180, height: 160, snap: 'right' }
};

const layout350 = {
  headerCard: { x: 0, y: 0, rotate: 0, zIndex: 5, width: '100%', height: 180, snap: 'left' },
  card1: { x: 0, y: 916, rotate: 0, zIndex: 1, width: '100%', height: 220, snap: 'left' },
  card2: { x: -14, y: 613, rotate: 5, zIndex: 3, width: 280, height: 180, snap: null },
  card3: { x: 30, y: 196, rotate: 0, zIndex: 5, width: 130, height: 120, snap: null },
  card4: { x: 103, y: 784, rotate: 0, zIndex: 3, width: 160, height: 140 },
  card5: { x: 58, y: 1124, rotate: -5, zIndex: 3, width: 280, height: 200, snap: null },
  card6: { x: 0, y: 286, rotate: 0, zIndex: 2, width: '100%', height: 340, snap: 'right' },
  extraCard1: { x: -4, y: 149, rotate: 0, zIndex: 6, width: 160, height: 160, snap: 'right' },
  extraCard2: { x: 0, y: 1321, rotate: 0, zIndex: 2, width: 180, height: 160, snap: 'left' }
};

const getCurrentLayout = () => {
  if (typeof window === 'undefined') {
    return layout1366;
  }

  const w = window.innerWidth;
  if (w > 1300) return layout1366;
  if (w > 1100) return layout1200;
  if (w > 1000) return layout700;
  if (w > 900) return layout1000;
  if (w > 800) return layout900;
  if (w > 700) return layout800;
  if (w > 600) return layout700Exact;
  if (w > 528) return layout600;
  if (w > 450) return layout528;
  if (w > 370) return layout370;
  if (w > 320) return layout350;
  return layout350;
};

const cards = [
  {
    id: 'headerCard',
    className: 'textCard headerCard',
    content: (
      <>
        <span className={styles.label}>
          <span className={styles.accentSlash}>//</span> About us
        </span>
        <h2 className={styles.title}>Precision. Safety. Innovation.</h2>
      </>
    )
  },
  {
    id: 'card1',
    className: 'textCard card1',
    content: (
      <>
        <h3 className={styles.cardTitle}>Why Choose Us</h3>
        <p className={styles.cardDesc}>
          Reliable, innovative, and always on time. We bring safety and modern convenience to every home.
        </p>
      </>
    )
  },
  {
    id: 'card2',
    className: 'card2 imageCard',
    content: <img src={panelAfter} alt="Modern Electrical Panel" />
  },
  {
    id: 'card3',
    className: 'textCard card3',
    content: (
      <>
        <div className={styles.statValue}>15+</div>
        <div className={styles.statLabel}>Years Experience</div>
      </>
    )
  },
  {
    id: 'card4',
    className: 'textCard card4',
    content: (
      <>
        <div className={styles.statValue}>100%</div>
        <div className={styles.statLabel}>Satisfied Clients</div>
      </>
    )
  },
  {
    id: 'card5',
    className: 'card5 imageCard',
    content: <img src={heroImg} alt="Smart Home" />
  },
  {
    id: 'card6',
    className: 'textCard card6',
    content: (
      <>
        <h3 className={styles.cardTitle}>Who We Are</h3>
        <p className={styles.cardDesc}>
          Dedicated professionals committed to excellence. We treat every home with the highest level of care and expertise.
        </p>
      </>
    )
  },
  {
    id: 'extraCard1',
    className: 'extraCard imageCard',
    content: <img src={heroImg} alt="Custom" />
  },
  {
    id: 'extraCard2',
    className: 'extraCard imageCard',
    content: <img src={heroImg} alt="Custom" />
  }
];

const getCardStyle = (layoutItem = {}) => ({
  '--x': `${layoutItem.x || 0}px`,
  '--y': `${layoutItem.y || 0}px`,
  '--rot': `${layoutItem.rotate || 0}deg`,
  width: typeof layoutItem.width === 'number' ? `${layoutItem.width}px` : layoutItem.width,
  height: typeof layoutItem.height === 'number' ? `${layoutItem.height}px` : layoutItem.height,
  zIndex: layoutItem.zIndex ?? 1,
  ...(layoutItem.snap === 'left' ? {
    left: 0,
    right: 'auto',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  } : {}),
  ...(layoutItem.snap === 'right' ? {
    left: 'auto',
    right: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  } : {})
});

const AboutFinal = () => {
  const [layout, setLayout] = useState(getCurrentLayout);

  useEffect(() => {
    const handleResize = () => setLayout(getCurrentLayout());

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.about} id="about-final">
      <div className={styles.unifiedContainer}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${styles.card} ${card.className
              .split(' ')
              .map((className) => styles[className])
              .join(' ')}`}
            style={getCardStyle(layout[card.id])}
          >
            {card.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFinal;
