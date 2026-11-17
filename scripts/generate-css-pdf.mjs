import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const outDir = path.resolve(process.cwd(), 'public');
const outPath = path.join(outDir, 'chahna-shah-css-changes.pdf');
const portraitPath = path.join(outDir, 'assets', 'chahna-portrait.jpg');

fs.mkdirSync(outDir, { recursive: true });

const COLORS = {
  canvas: '#FAF9F6',
  surface: '#FFFFFF',
  tint: '#F2F1EC',
  accentSoft: '#E6EBE4',
  accent: '#2F4838',
  ink: '#1C1D1A',
  inkSecondary: '#54564E',
  inkMuted: '#707368',
  hairline: '#E3E1D8',
};

const PAGE_W = 595.28; // A4 width in pt
const PAGE_H = 841.89; // A4 height in pt
const MARGIN = 44;
const CONTENT_W = PAGE_W - MARGIN * 2;

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: MARGIN, bottom: 20, left: MARGIN, right: MARGIN },
  bufferPages: true,
  info: {
    Title: 'Chahna Shah - CSS Design, Typography & Visual Changes Report',
    Author: 'Chahna Shah',
    Subject: 'IIM Bangalore BBA (DBE) Assignment - Resume Website CSS Upgrade',
  },
});

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

function drawPageChrome(pageIndex, totalPages) {
  // Subtle top accent rule
  doc
    .save()
    .fillColor(COLORS.accent)
    .rect(MARGIN, 24, CONTENT_W, 2)
    .fill()
    .restore();

  // Footer rule & text safely above bottom margin
  const footerY = PAGE_H - 36;
  doc
    .save()
    .strokeColor(COLORS.hairline)
    .lineWidth(0.75)
    .moveTo(MARGIN, footerY - 7)
    .lineTo(PAGE_W - MARGIN, footerY - 7)
    .stroke()
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor(COLORS.inkMuted)
    .text(
      'Chahna Shah  |  IIM Bangalore BBA (DBE) Assignment  |  CSS Design & Typography Report',
      MARGIN,
      footerY,
      { width: CONTENT_W - 75, align: 'left', lineBreak: false },
    )
    .font('Courier')
    .text(`Page ${pageIndex} of ${totalPages}`, PAGE_W - MARGIN - 75, footerY, {
      width: 75,
      align: 'right',
      lineBreak: false,
    })
    .restore();
}

function drawSectionHeading(kicker, title, yPos) {
  let y = yPos;
  doc
    .font('Courier-Bold')
    .fontSize(8.5)
    .fillColor(COLORS.accent)
    .text(kicker, MARGIN, y);
  y = doc.y + 3;
  doc
    .font('Times-Bold')
    .fontSize(16.5)
    .fillColor(COLORS.ink)
    .text(title, MARGIN, y);
  y = doc.y + 5;
  doc
    .strokeColor(COLORS.hairline)
    .lineWidth(1)
    .moveTo(MARGIN, y)
    .lineTo(PAGE_W - MARGIN, y)
    .stroke();
  return y + 10;
}

// ============================================================================
// PAGE 1: COVER SUMMARY, BEFORE/AFTER COMPARISON & COLOR TOKENS
// ============================================================================
const coverTop = 36;
const coverKicker =
  'IIM BANGALORE BBA (DBE) ASSIGNMENT  ·  CSS DESIGN & TYPOGRAPHY DOCUMENTATION';
const coverTitle = 'Chahna Shah — Resume Website CSS Upgrade';
const coverSubtitle =
  'A structured breakdown of the CSS concepts, custom properties, fluid typography, architectural grid layouts, motion accessibility, and print stylesheet enhancements applied to transform the portfolio website.';

doc.font('Helvetica-Bold').fontSize(8.5);
const kickerH = doc.heightOfString(coverKicker, { width: CONTENT_W - 36 });
doc.font('Times-Bold').fontSize(22);
const titleH = doc.heightOfString(coverTitle, { width: CONTENT_W - 36 });
doc.font('Helvetica').fontSize(9.5);
const subH = doc.heightOfString(coverSubtitle, {
  width: CONTENT_W - 36,
  lineGap: 2.5,
});

const coverH = 16 + kickerH + 6 + titleH + 8 + subH + 16;

doc
  .save()
  .fillColor(COLORS.canvas)
  .rect(MARGIN, coverTop, CONTENT_W, coverH)
  .fill()
  .strokeColor(COLORS.hairline)
  .lineWidth(1)
  .rect(MARGIN, coverTop, CONTENT_W, coverH)
  .stroke()
  .restore();

let cy = coverTop + 16;
doc
  .font('Helvetica-Bold')
  .fontSize(8.5)
  .fillColor(COLORS.accent)
  .text(coverKicker, MARGIN + 18, cy, { width: CONTENT_W - 36 });

cy = doc.y + 6;
doc
  .font('Times-Bold')
  .fontSize(22)
  .fillColor(COLORS.ink)
  .text(coverTitle, MARGIN + 18, cy, { width: CONTENT_W - 36 });

cy = doc.y + 8;
doc
  .font('Helvetica')
  .fontSize(9.5)
  .fillColor(COLORS.inkSecondary)
  .text(coverSubtitle, MARGIN + 18, cy, {
    width: CONTENT_W - 36,
    lineGap: 2.5,
  });

let y = coverTop + coverH + 18;
y = drawSectionHeading(
  '01. BEFORE VS. AFTER TRANSFORMATION',
  'Visual & Architectural Comparison',
  y,
);

const comparisons = [
  {
    area: 'Color System',
    before: 'Flat hex values (--cream, --sage) applied ad-hoc across inline styles and classes.',
    after:
      'Semantic :root CSS variables following a disciplined 60-30-10 palette (#FAF9F6 canvas, #FFFFFF/#F2F1EC surfaces, #2F4838 forest sage accent).',
  },
  {
    area: 'Typography & Scale',
    before:
      'Static pixel font sizes, wide -3px hero letter-spacing, DM Sans + Playfair Display only.',
    after:
      '2+1 typographic hierarchy: Playfair Display with fluid clamp() & text-wrap: balance, Plus Jakarta Sans prose (1.65-1.75 line-height), JetBrains Mono with tabular-nums.',
  },
  {
    area: 'Editorial Hierarchy',
    before: 'Uniform section intro paragraphs and uppercase spaced micro-labels.',
    after:
      'CSS ::first-letter editorial drop cap in About section, balanced measure (54ch-68ch), and restrained normal-case section kickers.',
  },
  {
    area: 'Grid & Containers',
    before: 'Separate white cards with rounded corners and gap spacing; pill capsules on tags.',
    after:
      'Architectural 1px hairline CSS Grid matrices (gap: 1px over #E3E1D8 background) and clean unboxed metadata separated by middle dots (·).',
  },
  {
    area: 'Hero & Portrait',
    before: 'Fixed 160px rounded corners and plain single-column stacking below 700px.',
    after:
      'Asymmetric CSS Grid (1.35fr 0.85fr, align-items: stretch), fluid .portrait-arch clamp() radius, and a 4-column proof strip directly below.',
  },
  {
    area: 'Motion & Print CSS',
    before: 'No interactive hover choreography, no reduced-motion rule, and no print rules.',
    after:
      'Compositor-only transform: scaleX() nav underlines, CSS @keyframes marquee divider, @media (prefers-reduced-motion: reduce), and A4 @media print layout.',
  },
];

// Draw table header
doc
  .save()
  .fillColor(COLORS.tint)
  .rect(MARGIN, y, CONTENT_W, 21)
  .fill()
  .strokeColor(COLORS.hairline)
  .lineWidth(0.75)
  .rect(MARGIN, y, CONTENT_W, 21)
  .stroke()
  .font('Helvetica-Bold')
  .fontSize(8.2)
  .fillColor(COLORS.ink)
  .text('DESIGN DIMENSION', MARGIN + 8, y + 6.5, { width: 98 })
  .text('ORIGINAL HTML/CSS', MARGIN + 112, y + 6.5, { width: 174 })
  .text('UPGRADED CSS ARCHITECTURE', MARGIN + 296, y + 6.5, {
    width: CONTENT_W - 304,
  })
  .restore();

y += 21;

for (const row of comparisons) {
  doc.font('Helvetica').fontSize(8.3);
  const beforeH = doc.heightOfString(row.before, { width: 172, lineGap: 1.8 });
  const afterH = doc.heightOfString(row.after, {
    width: CONTENT_W - 306,
    lineGap: 1.8,
  });
  const rowH = Math.max(beforeH, afterH, 22) + 12;

  doc
    .save()
    .fillColor(COLORS.surface)
    .rect(MARGIN, y, CONTENT_W, rowH)
    .fill()
    .strokeColor(COLORS.hairline)
    .lineWidth(0.75)
    .rect(MARGIN, y, CONTENT_W, rowH)
    .stroke()
    .moveTo(MARGIN + 106, y)
    .lineTo(MARGIN + 106, y + rowH)
    .stroke()
    .moveTo(MARGIN + 290, y)
    .lineTo(MARGIN + 290, y + rowH)
    .stroke()
    .font('Helvetica-Bold')
    .fontSize(8.3)
    .fillColor(COLORS.accent)
    .text(row.area, MARGIN + 8, y + 6, { width: 92 })
    .font('Helvetica')
    .fontSize(8.3)
    .fillColor(COLORS.inkSecondary)
    .text(row.before, MARGIN + 112, y + 6, { width: 172, lineGap: 1.8 })
    .fillColor(COLORS.ink)
    .text(row.after, MARGIN + 296, y + 6, {
      width: CONTENT_W - 306,
      lineGap: 1.8,
    })
    .restore();

  y += rowH;
}

y += 16;
y = drawSectionHeading(
  '02. COLOR TOKENS & 60-30-10 PALETTE',
  'CSS Custom Properties (:root Design System)',
  y,
);

const tokens = [
  { name: '--canvas', hex: '#FAF9F6', role: '60% Dominant Warm Alabaster Page Ground' },
  { name: '--surface', hex: '#FFFFFF', role: '30% Crisp Editorial Card & Grid Cell Surface' },
  { name: '--surface-tint', hex: '#F2F1EC', role: '30% Tinted Bands (Marquee, Filters, Contact)' },
  { name: '--hairline', hex: '#E3E1D8', role: '1px Architectural Grid & Section Dividers' },
  { name: '--ink', hex: '#1C1D1A', role: 'Primary Display & Body Copy (WCAG AAA)' },
  { name: '--ink-secondary', hex: '#54564E', role: 'Descriptions, Dates & Secondary Navigation' },
  { name: '--accent', hex: '#2F4838', role: '10% Botanical Forest Sage Accent & CTAs' },
  { name: '--accent-hover', hex: '#223529', role: 'High-Contrast Hover & Active Action State' },
];

const colW = (CONTENT_W - 12) / 2;
tokens.forEach((tok, idx) => {
  const col = idx % 2;
  const row = Math.floor(idx / 2);
  const bx = MARGIN + col * (colW + 12);
  const by = y + row * 31;

  doc
    .save()
    .fillColor(COLORS.surface)
    .rect(bx, by, colW, 25)
    .fill()
    .strokeColor(COLORS.hairline)
    .lineWidth(0.75)
    .rect(bx, by, colW, 25)
    .stroke()
    .fillColor(tok.hex)
    .rect(bx + 6, by + 4.5, 16, 16)
    .fill()
    .strokeColor(COLORS.hairline)
    .rect(bx + 6, by + 4.5, 16, 16)
    .stroke()
    .font('Courier-Bold')
    .fontSize(7.8)
    .fillColor(COLORS.ink)
    .text(`${tok.name} (${tok.hex})`, bx + 28, by + 4, { width: colW - 34 })
    .font('Helvetica')
    .fontSize(7.4)
    .fillColor(COLORS.inkSecondary)
    .text(tok.role, bx + 28, by + 13.5, { width: colW - 34 })
    .restore();
});

// ============================================================================
// PAGE 2: DETAILED CSS CONCEPTS & CODE IMPLEMENTATION
// ============================================================================
doc.addPage();
y = 40;

y = drawSectionHeading(
  '03. CSS CONCEPTS APPLIED',
  'Typography, Layout Grids, Motion & Accessibility',
  y,
);

const concepts = [
  {
    num: '01',
    title: 'Fluid Typography & Editorial Polish (clamp, text-wrap, ::first-letter)',
    bullets: [
      'Hero h1 scales fluidly across viewports using clamp(2.9rem, 5.8vw, 5.25rem) with line-height: 1.04 and -0.03em display tracking.',
      'Applied text-wrap: balance (.headline-balance) to section titles and project headings to eliminate isolated orphan words.',
      'Added an editorial drop cap (.editorial-dropcap::first-letter) styled in Playfair Display (3.4em, line-height: 0.82, float: left) in About.',
      'Applied font-variant-numeric: tabular-nums (.tabular-figures) with JetBrains Mono so dates (2024, 2026) and scores (97.2%, 94.83%) align cleanly.',
    ],
  },
  {
    num: '02',
    title: 'Architectural CSS Grid & Hairline Matrix (gap-px Pattern)',
    bullets: [
      'Replaced isolated floating cards with a cohesive 1px hairline matrix: parent containers use bg-[var(--hairline)] + 1px border + gap-px, while child cells use bg-[var(--surface)].',
      'Built an asymmetric Hero Split via CSS Grid (lg:grid-cols-[1.35fr_0.85fr] items-stretch) pairing typographic hierarchy with a height-matched portrait arch.',
      'Structured the About section using a 12-column editorial grid (4-col heading column + 8-col narrative and 2-column hairline-divided pillar grid).',
    ],
  },
  {
    num: '03',
    title: 'Zero-Pill Metadata Discipline & Responsive Arch Framing',
    bullets: [
      'Removed rounded pill capsules from static project tags and skill labels, rendering metadata as unboxed text separated by middle dots (·).',
      'Shaped the portrait frame (.portrait-arch) using fluid border-radius: clamp(7.5rem, 15vw, 13rem) clamp(7.5rem, 15vw, 13rem) 0.5rem 0.5rem with object-fit: cover.',
      'Added a CSS gradient-mesh fallback container if the portrait fails to load, ensuring zero broken image boxes.',
    ],
  },
  {
    num: '04',
    title: 'Compositor-Only Micro-Interactions, Keyframes & Reduced Motion',
    bullets: [
      'Navigation links (.nav-link-underline::after) animate only transform: scaleX() with alternating transform-origin (right -> left) over 200ms cubic-bezier(0.16, 1, 0.3, 1).',
      'Created a smooth CSS @keyframes editorial-marquee divider ribbon between Education and Experience that pauses on :hover without JavaScript.',
      'Enforced high-contrast :focus-visible outlines (2px solid var(--accent), outline-offset: 3px) and @media (prefers-reduced-motion: reduce) overrides.',
    ],
  },
  {
    num: '05',
    title: 'Print Stylesheet Architecture (@media print & @page)',
    bullets: [
      'Configured @page { size: A4; margin: 14mm 16mm; } and print typography (10.5pt, 1.45 line-height, crisp #111 ink on #FFFFFF).',
      'Tagged sticky header, filter bars, marquee ribbon, and interactive buttons with .no-print (display: none !important) and cards with break-inside: avoid.',
    ],
  },
];

for (const item of concepts) {
  doc
    .font('Courier-Bold')
    .fontSize(8.5)
    .fillColor(COLORS.accent)
    .text(`${item.num}.`, MARGIN, y);
  doc
    .font('Helvetica-Bold')
    .fontSize(9.8)
    .fillColor(COLORS.ink)
    .text(item.title, MARGIN + 20, y, { width: CONTENT_W - 20 });
  y = doc.y + 3;

  for (const b of item.bullets) {
    doc
      .font('Helvetica')
      .fontSize(8.3)
      .fillColor(COLORS.inkSecondary)
      .text('-', MARGIN + 20, y)
      .text(b, MARGIN + 30, y, { width: CONTENT_W - 30, lineGap: 1.5 });
    y = doc.y + 2;
  }
  y += 5;
}

y += 4;
y = drawSectionHeading(
  '04. KEY CSS IMPLEMENTATION SNIPPETS',
  'Core Rules from src/index.css',
  y,
);

const cssSnippet = `@theme {
  --font-serif: "Playfair Display", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
.headline-balance { text-wrap: balance; }
.tabular-figures  { font-variant-numeric: tabular-nums; }
.editorial-dropcap::first-letter {
  font-family: var(--font-serif); font-size: 3.4em; line-height: 0.82;
  float: left; padding-right: 0.14em; color: var(--accent);
}
.nav-link-underline::after {
  content: ""; position: absolute; left: 0; bottom: -4px; width: 100%; height: 1px;
  background: var(--accent); transform: scaleX(0); transform-origin: right center;
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}
.nav-link-underline:hover::after { transform: scaleX(1); transform-origin: left center; }
.portrait-arch {
  border-radius: clamp(7.5rem, 15vw, 13rem) clamp(7.5rem, 15vw, 13rem) 0.5rem 0.5rem;
}
@media print {
  @page { size: A4; margin: 14mm 16mm; }
  .no-print { display: none !important; }
  .print-break-avoid { break-inside: avoid; }
}`;

doc.font('Courier').fontSize(7.4);
const codeH =
  doc.heightOfString(cssSnippet, { width: CONTENT_W - 22, lineGap: 1.2 }) + 16;

doc
  .save()
  .fillColor(COLORS.tint)
  .rect(MARGIN, y, CONTENT_W, codeH)
  .fill()
  .strokeColor(COLORS.hairline)
  .lineWidth(0.75)
  .rect(MARGIN, y, CONTENT_W, codeH)
  .stroke()
  .font('Courier')
  .fontSize(7.4)
  .fillColor(COLORS.ink)
  .text(cssSnippet, MARGIN + 11, y + 8, {
    width: CONTENT_W - 22,
    lineGap: 1.2,
  })
  .restore();

// ============================================================================
// PAGE 3: REDESIGNED RESUME OUTPUT SNAPSHOT
// ============================================================================
doc.addPage();
y = 40;

y = drawSectionHeading(
  '05. REDESIGNED PORTFOLIO & RESUME SNAPSHOT',
  'Chahna Shah — Rendered Content Overview',
  y,
);

const cardTop = y;
const hasPortrait = fs.existsSync(portraitPath);
const textWidth = hasPortrait ? CONTENT_W - 116 : CONTENT_W - 28;

doc
  .save()
  .fillColor(COLORS.surface)
  .rect(MARGIN, cardTop, CONTENT_W, 122)
  .fill()
  .strokeColor(COLORS.hairline)
  .lineWidth(0.75)
  .rect(MARGIN, cardTop, CONTENT_W, 122)
  .stroke()
  .restore();

if (hasPortrait) {
  doc.save();
  doc.roundedRect(PAGE_W - MARGIN - 96, cardTop + 11, 82, 100, 38);
  doc.clip();
  doc.image(portraitPath, PAGE_W - MARGIN - 96, cardTop + 11, {
    fit: [82, 100],
    align: 'center',
    valign: 'top',
  });
  doc.restore();
  doc
    .save()
    .strokeColor(COLORS.hairline)
    .lineWidth(0.75)
    .roundedRect(PAGE_W - MARGIN - 96, cardTop + 11, 82, 100, 38)
    .stroke()
    .restore();
}

doc
  .font('Helvetica-Bold')
  .fontSize(8.5)
  .fillColor(COLORS.accent)
  .text('Student · Entrepreneur · Creative Thinker', MARGIN + 14, cardTop + 14, {
    width: textWidth,
  });

doc
  .font('Times-Bold')
  .fontSize(22)
  .fillColor(COLORS.ink)
  .text('Chahna Shah.', MARGIN + 14, cardTop + 28, { width: textWidth });

doc
  .font('Helvetica')
  .fontSize(9.2)
  .fillColor(COLORS.inkSecondary)
  .text(
    'First-year business student pursuing an Integrated BBA-MBA at Nirma University alongside an online BBA in Digital Business & Entrepreneurship at IIM Bangalore.',
    MARGIN + 14,
    cardTop + 56,
    { width: textWidth, lineGap: 2.5 },
  );

doc
  .font('Courier')
  .fontSize(8.5)
  .fillColor(COLORS.accent)
  .text('chahnashah22@gmail.com', MARGIN + 14, cardTop + 100, {
    width: textWidth,
  });

y = cardTop + 138;

// About
doc
  .font('Courier-Bold')
  .fontSize(8.5)
  .fillColor(COLORS.accent)
  .text('01. ABOUT  —  Curiosity meets creativity.', MARGIN, y);
y = doc.y + 5;
doc
  .font('Helvetica')
  .fontSize(9.2)
  .fillColor(COLORS.ink)
  .text(
    "I'm a commerce student with a keen interest in business, entrepreneurship and design. I enjoy turning ideas into meaningful projects, blending analytical thinking with creativity—from working with spreadsheets and presentations to exploring art and building a jewellery brand.",
    MARGIN,
    y,
    { width: CONTENT_W, lineGap: 3 },
  );
y = doc.y + 16;

// Education 2x2 hairline grid
doc
  .font('Courier-Bold')
  .fontSize(8.5)
  .fillColor(COLORS.accent)
  .text('02. EDUCATION  (Filterable: All · Undergraduate · Schooling)', MARGIN, y);
y = doc.y + 8;

const eduList = [
  {
    period: '2026 - Present',
    school: 'Nirma University',
    detail: 'Integrated BBA-MBA · First Year',
  },
  {
    period: '2026 - Present',
    school: 'IIM Bangalore',
    detail: 'Online BBA in Digital Business & Entrepreneurship · First Year',
  },
  {
    period: 'Class XII · 2026',
    school: 'Udgam School for Children',
    detail: 'Commerce · Board Result: 97.2%',
  },
  {
    period: 'Class X · 2024',
    school: 'St. Kabir School',
    detail: 'Secondary Schooling · Board Result: 94.83%',
  },
];

const halfW = CONTENT_W / 2;
eduList.forEach((ed, idx) => {
  const col = idx % 2;
  const row = Math.floor(idx / 2);
  const bx = MARGIN + col * halfW;
  const by = y + row * 56;

  doc
    .save()
    .fillColor(COLORS.surface)
    .rect(bx, by, halfW, 56)
    .fill()
    .strokeColor(COLORS.hairline)
    .lineWidth(0.75)
    .rect(bx, by, halfW, 56)
    .stroke()
    .font('Courier-Bold')
    .fontSize(8)
    .fillColor(COLORS.accent)
    .text(ed.period, bx + 10, by + 9, { width: halfW - 20 })
    .font('Times-Bold')
    .fontSize(12)
    .fillColor(COLORS.ink)
    .text(ed.school, bx + 10, by + 21, { width: halfW - 20 })
    .font('Helvetica')
    .fontSize(8.5)
    .fillColor(COLORS.inkSecondary)
    .text(ed.detail, bx + 10, by + 37, { width: halfW - 20 })
    .restore();
});

y += 126;

// Experience 3-col hairline grid
doc
  .font('Courier-Bold')
  .fontSize(8.5)
  .fillColor(COLORS.accent)
  .text('03. EXPERIENCE & PROJECTS  (Interactive Modal Case Notes)', MARGIN, y);
y = doc.y + 8;

const expList = [
  {
    kicker: '01 · Entrepreneurship',
    title: 'Co-founder · Chaah Jewels',
    desc: 'Co-founder of an imitation jewellery brand, exploring brand building, product presentation and creative marketing.',
    tags: 'Branding · Entrepreneurship',
  },
  {
    kicker: '02 · Academic Project',
    title: 'Social Mobility Documentary',
    desc: 'Exploring the concept of social mobility through research, interviews and visual storytelling.',
    tags: 'Research · Storytelling',
  },
  {
    kicker: '03 · Creative Practice',
    title: 'Art & Design',
    desc: 'Interested in sketching, painting, resin art and nail art; completed a certified course in nail art.',
    tags: 'Creativity · Design',
  },
];

const thirdW = CONTENT_W / 3;
expList.forEach((ex, idx) => {
  const bx = MARGIN + idx * thirdW;
  doc
    .save()
    .fillColor(COLORS.surface)
    .rect(bx, y, thirdW, 118)
    .fill()
    .strokeColor(COLORS.hairline)
    .lineWidth(0.75)
    .rect(bx, y, thirdW, 118)
    .stroke()
    .font('Courier-Bold')
    .fontSize(7.5)
    .fillColor(COLORS.accent)
    .text(ex.kicker, bx + 10, y + 10, { width: thirdW - 20 })
    .font('Times-Bold')
    .fontSize(11)
    .fillColor(COLORS.ink)
    .text(ex.title, bx + 10, y + 24, { width: thirdW - 20 })
    .font('Helvetica')
    .fontSize(8.2)
    .fillColor(COLORS.inkSecondary)
    .text(ex.desc, bx + 10, y + 52, { width: thirdW - 20, lineGap: 2 })
    .font('Courier')
    .fontSize(7.5)
    .fillColor(COLORS.inkMuted)
    .text(ex.tags, bx + 10, y + 100, { width: thirdW - 20 })
    .restore();
});

y += 134;

// Capabilities
doc
  .font('Courier-Bold')
  .fontSize(8.5)
  .fillColor(COLORS.accent)
  .text('04. CAPABILITIES & TOOLKIT  (Filterable Matrix)', MARGIN, y);
y = doc.y + 8;

const caps = [
  '01 · Canva (Design)',
  '02 · Microsoft Excel (Analytical)',
  '03 · PowerPoint (Communication)',
  '04 · Communication (Communication)',
  '05 · Creative Thinking (Design)',
  '06 · Presentation Design (Design)',
];

caps.forEach((cap, idx) => {
  const col = idx % 3;
  const row = Math.floor(idx / 3);
  const bx = MARGIN + col * thirdW;
  const by = y + row * 28;
  doc
    .save()
    .fillColor(COLORS.tint)
    .rect(bx, by, thirdW, 28)
    .fill()
    .strokeColor(COLORS.hairline)
    .lineWidth(0.75)
    .rect(bx, by, thirdW, 28)
    .stroke()
    .font('Helvetica-Bold')
    .fontSize(8.2)
    .fillColor(COLORS.ink)
    .text(cap, bx + 10, by + 10, { width: thirdW - 20 })
    .restore();
});

// Apply page headers & footers across all pages
const range = doc.bufferedPageRange();
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(i);
  drawPageChrome(i + 1, range.count);
}

doc.end();

stream.on('finish', () => {
  const size = fs.statSync(outPath).size;
  console.log(
    `Generated PDF successfully: ${outPath} (${size} bytes, ${range.count} pages)`,
  );
});
