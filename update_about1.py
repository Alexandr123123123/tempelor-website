import re

with open('c:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/about/About1/ui/About1.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

final_layout_str = """
const FINAL_LAYOUT = {
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

const About1 = () => {
"""
content = content.replace('const About1 = () => {', final_layout_str)

hooks_str = """  const [isEditorActive, setIsEditorActive] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const loadFinalLayout = () => {
    setHiddenCards([]);
    setExtraCards([
      { id: 'extraCard1', type: 'photo' },
      { id: 'extraCard2', type: 'photo' }
    ]);
    setLayoutData(FINAL_LAYOUT);
    setResetKey(prev => prev + 1);
  };
"""
content = content.replace('  const [isEditorActive, setIsEditorActive] = useState(false);', hooks_str)

button_str = """<button className={styles.editorBtn} style={{ background: '#ffaa00' }} onClick={copyLayout}>📋 Copy Layout</button>
            <button className={styles.editorBtn} style={{ background: '#00c3ff', color: '#000' }} onClick={loadFinalLayout}>🔄 Load Layout From Below</button>"""
content = content.replace("<button className={styles.editorBtn} style={{ background: '#ffaa00' }} onClick={copyLayout}>📋 Copy Layout</button>", button_str)

draggable_def = """const DraggableCard = ({ 
  id, 
  initialX = 0,
  initialY = 0,
  initialRotate, 
  initialZIndex = 1, 
  initialWidth,
  initialHeight,
  initialSnap,
  className, 
  children, 
  onUpdate, 
  onRemove 
}) => {
  const cardRef = useRef(null);
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const [rotate, setRotate] = useState(initialRotate || 0);
  const [zIndex, setZIndex] = useState(initialZIndex);
  
  const [size, setSize] = useState({ width: initialWidth || null, height: initialHeight || null });
  const [snap, setSnap] = useState(initialSnap || null);"""

content = re.sub(
  r"const DraggableCard = \(\{ id, initialRotate, initialZIndex = 1, className, children, onUpdate, onRemove \}\) => \{.*?const \[snap, setSnap\] = useState\(null\);",
  draggable_def,
  content,
  flags=re.DOTALL
)

def replacer(m):
    id_val = m.group(1)
    orig = m.group(0)
    rot_val = "0"
    if "initialRotate={" in orig:
        match = re.search(r"initialRotate=\{([^}]+)\}", orig)
        if match:
            rot_val = match.group(1)
    elif "initialRotate=" in orig:
        match = re.search(r"initialRotate=({?[0-9-]+}?)", orig)
        if match:
            rot_val = match.group(1).replace('{', '').replace('}', '')
    
    new_props = f"""key={{`{id_val}-${{resetKey}}`}} 
            id="{id_val}" 
            initialX={{layoutData.{id_val}?.x || 0}}
            initialY={{layoutData.{id_val}?.y || 0}}
            initialRotate={{layoutData.{id_val}?.rotate ?? {rot_val}}} 
            initialZIndex={{layoutData.{id_val}?.zIndex || 1}}
            initialWidth={{layoutData.{id_val}?.width}}
            initialHeight={{layoutData.{id_val}?.height}}
            initialSnap={{layoutData.{id_val}?.snap}}"""
    
    orig = re.sub(r'id="' + id_val + r'"\s*initialRotate=\{[^}]+\}', new_props, orig)
    orig = re.sub(r'id="' + id_val + r'"\s*initialRotate=[0-9-]+', new_props, orig)
    return orig

content = re.sub(r'<DraggableCard[^>]+id="([^"]+)"[^>]*>', replacer, content)

extra_repl = """{extraCards.map(({ id, type }, index) => {
          const lData = layoutData[id] || {};
          if (type === 'photo') {
            return (
              <DraggableCard 
                key={`${id}-${resetKey}`} 
                id={id} 
                initialX={lData.x || 0}
                initialY={lData.y || 0}
                initialRotate={lData.rotate || 0} 
                initialZIndex={lData.zIndex || 1}
                initialWidth={lData.width}
                initialHeight={lData.height}
                initialSnap={lData.snap}
                className={`${styles.card} ${styles.imageCard} ${styles.extraCard}`} 
                onUpdate={handleUpdate} 
                onRemove={removeCard}
              >
                <div className={styles.cardNumber}>NEW</div>
                <img src={heroImg} alt="Custom" />
              </DraggableCard>
            );
          }
          if (type === 'stat') {
            return (
              <DraggableCard 
                key={`${id}-${resetKey}`} 
                id={id} 
                initialX={lData.x || 0}
                initialY={lData.y || 0}
                initialRotate={lData.rotate || 0} 
                initialZIndex={lData.zIndex || 1}
                initialWidth={lData.width}
                initialHeight={lData.height}
                initialSnap={lData.snap}
                className={`${styles.card} ${styles.textCard} ${styles.extraCard}`} 
                onUpdate={handleUpdate} 
                onRemove={removeCard}
              >
                <div className={styles.cardNumber}>NEW</div>
                <div className={styles.statValue}>100%</div>
                <div className={styles.statLabel}>Custom Stat</div>
              </DraggableCard>
            );
          }
          return (
            <DraggableCard 
                key={`${id}-${resetKey}`} 
                id={id} 
                initialX={lData.x || 0}
                initialY={lData.y || 0}
                initialRotate={lData.rotate || 0} 
                initialZIndex={lData.zIndex || 1}
                initialWidth={lData.width}
                initialHeight={lData.height}
                initialSnap={lData.snap}
                className={`${styles.card} ${styles.textCard} ${styles.extraCard}`} 
                onUpdate={handleUpdate} 
                onRemove={removeCard}
              >
              <div className={styles.cardNumber}>NEW</div>
              <h3 className={styles.cardTitle}>Custom Text</h3>
              <p className={styles.cardDesc}>Place me anywhere.</p>
            </DraggableCard>
          );
        })}"""

content = re.sub(r'\{extraCards\.map\(\(\{ id, type \}, index\) => \{.*\}\)\}', extra_repl, content, flags=re.DOTALL)

with open('c:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/about/About1/ui/About1.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
