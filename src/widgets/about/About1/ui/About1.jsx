import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import styles from './About1.module.css';

import panelAfter from '../../../../assets/panel_after.png';
import heroImg from '../../../../assets/hero.png';

const DraggableCard = ({ id, initialRotate, initialZIndex = 1, className, children, onUpdate, onRemove }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [rotate, setRotate] = useState(initialRotate || 0);
  const [zIndex, setZIndex] = useState(initialZIndex);
  
  // Size state (null means it uses CSS initially)
  const [size, setSize] = useState({ width: null, height: null });
  // Snap state: null, 'left', 'right'
  const [snap, setSnap] = useState(null);

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY > 0 ? 2 : -2;
    const newRot = rotate + delta;
    setRotate(newRot);
    
    const currentW = size.width || cardRef.current?.offsetWidth;
    const currentH = size.height || cardRef.current?.offsetHeight;
    onUpdate(id, { x: x.get(), y: y.get(), rotate: newRot, zIndex, width: currentW, height: currentH, snap });
  };

  const handleDragEnd = () => {
    const currentW = size.width || cardRef.current?.offsetWidth;
    const currentH = size.height || cardRef.current?.offsetHeight;
    onUpdate(id, { x: x.get(), y: y.get(), rotate, zIndex, width: currentW, height: currentH, snap });
  };

  const changeZ = (e, delta) => {
    e.stopPropagation();
    const newZ = zIndex + delta;
    setZIndex(newZ);
    
    const currentW = size.width || cardRef.current?.offsetWidth;
    const currentH = size.height || cardRef.current?.offsetHeight;
    onUpdate(id, { x: x.get(), y: y.get(), rotate, zIndex: newZ, width: currentW, height: currentH, snap });
  };

  const changeWidth = (e, delta) => {
    e.stopPropagation();
    const currentW = size.width || cardRef.current?.offsetWidth || 200;
    const currentH = size.height || cardRef.current?.offsetHeight || 200;
    const newW = currentW + delta;
    setSize(prev => ({ ...prev, width: newW }));
    onUpdate(id, { x: x.get(), y: y.get(), rotate, zIndex, width: newW, height: currentH, snap });
  };

  const changeHeight = (e, delta) => {
    e.stopPropagation();
    const currentW = size.width || cardRef.current?.offsetWidth || 200;
    const currentH = size.height || cardRef.current?.offsetHeight || 200;
    const newH = currentH + delta;
    setSize(prev => ({ ...prev, height: newH }));
    onUpdate(id, { x: x.get(), y: y.get(), rotate, zIndex, width: currentW, height: newH, snap });
  };

  const toggleSnap = (e, direction) => {
    e.stopPropagation();
    const newSnap = snap === direction ? null : direction;
    setSnap(newSnap);
    if (newSnap) {
      x.set(0); // reset x offset so it strictly touches the edge
    }
    const currentW = size.width || cardRef.current?.offsetWidth;
    const currentH = size.height || cardRef.current?.offsetHeight;
    onUpdate(id, { x: newSnap ? 0 : x.get(), y: y.get(), rotate, zIndex, width: currentW, height: currentH, snap: newSnap });
  };

  const dynamicStyles = {
    x, y, rotate, zIndex, cursor: 'grab',
    ...(size.width ? { width: size.width } : {}),
    ...(size.height ? { height: size.height } : {})
  };

  if (snap === 'left') {
    dynamicStyles.left = 0;
    dynamicStyles.right = 'auto';
    dynamicStyles.borderTopLeftRadius = 0;
    dynamicStyles.borderBottomLeftRadius = 0;
  } else if (snap === 'right') {
    dynamicStyles.right = 0;
    dynamicStyles.left = 'auto';
    dynamicStyles.borderTopRightRadius = 0;
    dynamicStyles.borderBottomRightRadius = 0;
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      data-id={id}
      drag
      dragMomentum={false}
      style={dynamicStyles}
      whileDrag={{ cursor: 'grabbing', zIndex: 999, scale: 1.05 }}
      onWheel={handleWheel}
      onDragEnd={handleDragEnd}
      onMouseEnter={() => document.body.style.overflow = 'hidden'}
      onMouseLeave={() => document.body.style.overflow = 'auto'}
    >
      <div className={styles.zControls} onPointerDown={(e) => e.stopPropagation()}>
        Z: {zIndex}
        <button onClick={(e) => changeZ(e, 1)}>+</button>
        <button onClick={(e) => changeZ(e, -1)}>-</button>
        <button className={styles.deleteBtn} onClick={() => onRemove(id)}>❌</button>
      </div>

      <div className={styles.sizeControls} onPointerDown={(e) => e.stopPropagation()}>
        W: 
        <button onClick={(e) => changeWidth(e, 20)}>+</button>
        <button onClick={(e) => changeWidth(e, -20)}>-</button>
        H: 
        <button onClick={(e) => changeHeight(e, 20)}>+</button>
        <button onClick={(e) => changeHeight(e, -20)}>-</button>
        | Snap:
        <button onClick={(e) => toggleSnap(e, 'left')} style={{ background: snap === 'left' ? 'white' : '#ffaa00' }}>⇤</button>
        <button onClick={(e) => toggleSnap(e, 'right')} style={{ background: snap === 'right' ? 'white' : '#ffaa00' }}>⇥</button>
      </div>

      {children}
    </motion.div>
  );
};

const About1 = () => {
  const [layoutData, setLayoutData] = useState({});
  const [extraCards, setExtraCards] = useState([]);
  const [hiddenCards, setHiddenCards] = useState([]);
  const [isEditorMinimized, setIsEditorMinimized] = useState(false);
  const [isEditorActive, setIsEditorActive] = useState(false);

  const handleUpdate = (id, data) => {
    setLayoutData(prev => ({ ...prev, [id]: data }));
  };

  const removeCard = (id) => {
    if (extraCards.some(c => c.id === id)) {
      setExtraCards(prev => prev.filter(c => c.id !== id));
      setLayoutData(prev => {
        const newData = { ...prev };
        delete newData[id];
        return newData;
      });
    } else {
      setHiddenCards(prev => [...prev, id]);
    }
  };

  const copyLayout = () => {
    const exportedExisting = { ...layoutData };
    hiddenCards.forEach(id => delete exportedExisting[id]);

    const output = JSON.stringify({ existing: exportedExisting, extra: extraCards, hidden: hiddenCards }, null, 2);
    navigator.clipboard.writeText(output).then(() => {
      alert('Layout copied to clipboard! Paste it to me in the chat.');
    }).catch(err => {
      alert('Failed to copy. Check console.');
      console.log('LAYOUT DATA:', output);
    });
  };

  const addCard = (type) => {
    const id = `newCard_${Date.now()}`;
    setExtraCards(prev => [...prev, { id, type }]);
  };

  if (!isEditorActive) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', background: '#f8faff' }}>
        <button 
          onClick={() => setIsEditorActive(true)}
          style={{ background: '#0f1115', color: '#00c3ff', padding: '10px 20px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}
        >
          🛠 Open Interactive Layout Editor
        </button>
      </div>
    );
  }

  return (
    <section className={styles.about} id="about1">
      {/* Editor Controls Overlay */}
      <div className={`${styles.editorControls} ${isEditorMinimized ? styles.minimized : ''}`}>
        {isEditorMinimized ? (
          <button className={styles.editorBtn} onClick={() => setIsEditorMinimized(false)}>🛠 Expand Editor</button>
        ) : (
          <>
            <div className={styles.editorTitle}>
              <span>🛠 Edit Mode</span>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className={styles.collapseBtn} onClick={() => setIsEditorMinimized(true)}>—</button>
                <button className={styles.collapseBtn} onClick={() => setIsEditorActive(false)}>✖</button>
              </div>
            </div>
            <button className={styles.editorBtn} onClick={() => addCard('text')}>+ Add Text Card</button>
            <button className={styles.editorBtn} onClick={() => addCard('photo')}>+ Add Photo Card</button>
            <button className={styles.editorBtn} onClick={() => addCard('stat')}>+ Add Stat Card</button>
            <button className={styles.editorBtn} style={{ background: '#ffaa00' }} onClick={copyLayout}>📋 Copy Layout</button>
            <div className={styles.editorInstructions}>
              Drag: move • Scroll: rotate • Z/W/H: buttons
            </div>
          </>
        )}
      </div>

      <div className={styles.container}>
        {!hiddenCards.includes('headerCard') && (
          <DraggableCard id="headerCard" initialRotate={0} initialZIndex={5} className={`${styles.card} ${styles.textCard} ${styles.headerCard}`} onUpdate={handleUpdate} onRemove={removeCard}>
            <div className={styles.cardNumber}>HEADER</div>
            <span className={styles.label}>
              <span className={styles.accentSlash}>//</span> About Tempelor 1
            </span>
            <h2 className={styles.title}>Precision. Safety. Innovation.</h2>
          </DraggableCard>
        )}
      </div>

      <div className={styles.chaoticContainer}>

        {!hiddenCards.includes('card1') && (
          <DraggableCard id="card1" initialRotate={0} className={`${styles.card} ${styles.textCard} ${styles.card1}`} onUpdate={handleUpdate} onRemove={removeCard}>
            <div className={styles.cardNumber}>1</div>
            <h3 className={styles.cardTitle}>Who We Are</h3>
            <p className={styles.cardDesc}>
              Premier electrical contractor redefining residential power systems with modern tech.
            </p>
          </DraggableCard>
        )}

        {!hiddenCards.includes('card2') && (
          <DraggableCard id="card2" initialRotate={3} className={`${styles.card} ${styles.imageCard} ${styles.card2}`} onUpdate={handleUpdate} onRemove={removeCard}>
            <div className={styles.cardNumber}>2</div>
            <img src={panelAfter} alt="Modern Electrical Panel" />
          </DraggableCard>
        )}

        {!hiddenCards.includes('card3') && (
          <DraggableCard id="card3" initialRotate={-4} className={`${styles.card} ${styles.textCard} ${styles.card3}`} onUpdate={handleUpdate} onRemove={removeCard}>
            <div className={styles.cardNumber}>3</div>
            <div className={styles.statValue}>15+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </DraggableCard>
        )}

        {!hiddenCards.includes('card4') && (
          <DraggableCard id="card4" initialRotate={-2} className={`${styles.card} ${styles.textCard} ${styles.card4}`} onUpdate={handleUpdate} onRemove={removeCard}>
            <div className={styles.cardNumber}>4</div>
            <div className={styles.statValue}>500+</div>
            <div className={styles.statLabel}>Projects Done</div>
          </DraggableCard>
        )}

        {!hiddenCards.includes('card5') && (
          <DraggableCard id="card5" initialRotate={5} className={`${styles.card} ${styles.imageCard} ${styles.card5}`} onUpdate={handleUpdate} onRemove={removeCard}>
            <div className={styles.cardNumber}>5</div>
            <img src={heroImg} alt="Smart Home" />
          </DraggableCard>
        )}

        {!hiddenCards.includes('card6') && (
          <DraggableCard id="card6" initialRotate={0} className={`${styles.card} ${styles.textCard} ${styles.card6}`} onUpdate={handleUpdate} onRemove={removeCard}>
            <div className={styles.cardNumber}>6</div>
            <h3 className={styles.cardTitle}>100% Certified</h3>
            <p className={styles.cardDesc}>
              Fully licensed professionals compliant with all electrical codes.
            </p>
          </DraggableCard>
        )}

        {/* Extra dynamically added cards */}
        {extraCards.map(({ id, type }, index) => {
          if (type === 'photo') {
            return (
              <DraggableCard key={id} id={id} initialRotate={0} className={`${styles.card} ${styles.imageCard} ${styles.extraCard}`} onUpdate={handleUpdate} onRemove={removeCard}>
                <div className={styles.cardNumber}>NEW</div>
                <img src={heroImg} alt="Custom" />
              </DraggableCard>
            );
          }
          if (type === 'stat') {
            return (
              <DraggableCard key={id} id={id} initialRotate={0} className={`${styles.card} ${styles.textCard} ${styles.extraCard}`} onUpdate={handleUpdate} onRemove={removeCard}>
                <div className={styles.cardNumber}>NEW</div>
                <div className={styles.statValue}>100%</div>
                <div className={styles.statLabel}>Custom Stat</div>
              </DraggableCard>
            );
          }
          return (
            <DraggableCard key={id} id={id} initialRotate={0} className={`${styles.card} ${styles.textCard} ${styles.extraCard}`} onUpdate={handleUpdate} onRemove={removeCard}>
              <div className={styles.cardNumber}>NEW</div>
              <h3 className={styles.cardTitle}>Custom Text</h3>
              <p className={styles.cardDesc}>Place me anywhere.</p>
            </DraggableCard>
          );
        })}

      </div>
    </section>
  );
};

export default About1;
