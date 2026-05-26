const fs = require('fs');

const jsxPath = 'c:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/about/AboutFinal/ui/AboutFinal.jsx';
const cssPath = 'c:/Users/a4674/OneDrive/Desktop/tempelor/src/widgets/about/AboutFinal/ui/AboutFinal.module.css';

const desktop = {
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

let content = fs.readFileSync(jsxPath, 'utf8');

// Replace standard style={{ transform: '...' }} block
const regex = /style=\{\{\s*transform:\s*'translate\([^)]*\)\s*rotate\([^)]*\)',\s*'--hover-transform':\s*'translate\([^)]*\)\s*rotate\([^)]*\)',\s*zIndex:\s*(\d+),\s*width:\s*(\d+),\s*height:\s*(\d+)(.*?)\}\}/g;

const ids = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'extraCard1', 'extraCard2'];
let idIdx = 0;

content = content.replace(regex, (match, zIndex, width, height, extraProps) => {
  if (idIdx >= ids.length) return match;
  const id = ids[idIdx++];
  const d = desktop[id];
  const l1 = layout1170[id];
  const l2 = layout969[id];

  return `style={{
            '--x': '${d.x}px', '--y': '${d.y}px', '--rot': '${d.rotate}deg', '--w': '${d.width}px', '--h': '${d.height}px',
            '--l1-x': '${l1.x}px', '--l1-y': '${l1.y}px', '--l1-rot': '${l1.rotate}deg', '--l1-w': '${l1.width}px', '--l1-h': '${l1.height}px',
            '--l2-x': '${l2.x}px', '--l2-y': '${l2.y}px', '--l2-rot': '${l2.rotate}deg', '--l2-w': '${l2.width}px', '--l2-h': '${l2.height}px',
            zIndex: ${zIndex}${extraProps}
          }}`;
});

fs.writeFileSync(jsxPath, content, 'utf8');

let cssContent = fs.readFileSync(cssPath, 'utf8');

const cardCss = `.card {
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
}`;

cssContent = cssContent.replace(/\.card\s*\{[\s\S]*?transition:[^}]*\}/, cardCss);

if (!cssContent.includes('transform: scale(1.05) translate(var(--card-x), var(--card-y))')) {
  cssContent = cssContent.replace(/transform: scale\(1\.05\).*!important;/, 'transform: scale(1.05) translate(var(--card-x), var(--card-y)) rotate(var(--card-rot)) !important;');
}

const mediaQueries = `
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
`;

if (!cssContent.includes('@media (max-width: 1250px)')) {
  cssContent = cssContent.replace('@media (max-width: 900px)', mediaQueries + '\n@media (max-width: 900px)');
}

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Update finished.');
