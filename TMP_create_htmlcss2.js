const fs = require('fs');
const path = require('path');

const chunk = `
{
  title:"Day 4 — The Box Model & Sizing",
  sub:"Margin, Border, Padding, Content · Box Sizing · Units",
  concepts:[
    {
      name:"The CSS Box Model",
      desc:"Every HTML element is a rectangular box. CSS determines the block's size based on content, padding, borders, and margins.",
      code:\`/* The Anatomy of a Box */
.box {
  width: 300px;
  height: 200px;
  
  /* Space INSIDE the border (between content and border) */
  padding: 20px;
  
  /* The visible boundary of the box */
  border: 5px solid black;
  
  /* Space OUTSIDE the border (pushes other elements away) */
  margin: 30px;
}\`,
      tip:"Padding affects the color of the element's background. Margin does not; it is transparent space outside the box."
    },
    {
      name:"Box Sizing Reset",
      desc:"By default, padding and borders increase the declared width of a box. This is terrible. We fix it with box-sizing: border-box.",
      code:\`/* Default (content-box): 
   A 100px width with 20px padding is actually 140px wide! */

/* The Universal Fix (Border-Box) */
* {
  box-sizing: border-box;
}

/* Now: A 100px width with 20px padding exactly fits in 100px.
   The padding eats INTO the available width, rather than expanding it. */\`,
      tip:"Almost every professional stylesheet starts with the Universal Reset. It saves hours of debugging why elements don't fit perfectly side-by-side."
    },
    {
      name:"CSS Units (px, em, rem, %)",
      desc:"Never hardcode everything in pixels. Use responsive relative units.",
      code:\`/* Pixels (Absolute) */
font-size: 16px; width: 300px;

/* rem (Relative to root HTML font size) */
font-size: 1.5rem; /* 1.5 * 16px = 24px */

/* em (Relative to parent's font size) */
margin-bottom: 2em; /* 2 * current font size */

/* Percentages (Relative to parent's size) */
width: 50%;
height: 100%;\`,
      tip:"The current standard: set base font-size relative, then use 'rem' for text, margins, and paddings for guaranteed scalability and accessibility."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"An element has: width:200px; padding:20px; border:2px solid black; What is the total horizontal space this element occupies on screen? (Default box-sizing)",
      code:\`width: 200px;
padding: 20px;
border: 2px solid black;\`,
      kind:"mc",
      opts:["200px","240px","244px","156px"],
      correct:2,
      hint:"Total Width = left border + left padding + set width + right padding + right border.",
      sol:\`244px\`,
      explain:"2px (L border) + 20px (L padding) + 200px (content) + 20px (R padding) + 2px (R border) = 244px. This math nightmare is exactly why you need box-sizing: border-box."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"Why is the universal CSS reset missing a critical component?",
      code:\`* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}\`,
      kind:"text",
      answer:["border-box","content-box"],
      hint:"Wait, is content-box the fix we want?",
      sol:\`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}\`,
      explain:"content-box is the flawed browser default, not the solution. Setting box-sizing to border-box prevents width from infinitely expanding whenever padding or borders are applied."
    },
    {
      type:"Write Code", pts:20,
      q:"Write CSS for an element with class 'card' that sets padding on top/bottom to 10px, and left/right to 20px using the shorthand syntax.",
      code:\`/* Complete the rule */\`,
      kind:"text",
      answer:["padding: 10px 20px", "padding:10px 20px;"],
      hint:"The shorthand order is: top, right, bottom, left. A 2-value syntax sets Top/Bottom and then Left/Right.",
      sol:\`.card {\n  padding: 10px 20px;\n}\`,
      explain:"The 2-value syntax (padding: vertical horizontal;) is extremely concise and widely used instead of writing padding-top, padding-bottom, etc., individually."
    }
  ]
},
{
  title:"Day 5 — Auto Layout with Flexbox",
  sub:"Flex Container · Main Axis · Cross Axis · Alignment",
  concepts:[
    {
      name:"Display: Flex",
      desc:"Flexbox is a 1-dimensional layout model. You set display: flex on a parent container, and its direct children automatically become flex items.",
      code:\`/* The Container */
.container {
  display: flex;
  
  /* Which direction do items flow? row | row-reverse | column | column-reverse */
  flex-direction: row; 
  
  /* Do items wrap to a new line if they run out of space? nowrap | wrap */
  flex-wrap: wrap; 
}\`,
      tip:"flex-direction: row makes horizontal layouts, flex-direction: column makes vertical layouts. The axis they flow along is called the 'Main Axis'."
    },
    {
      name:"Alignment: Justify Content",
      desc:"Controls how items align ALONG the Main Axis (the direction they flow in).",
      code:\`.container {
  display: flex;
  
  /* Main Axis Alignment Options: */
  justify-content: flex-start;  /* Default (left) */
  justify-content: flex-end;    /* Right */
  justify-content: center;      /* Center */
  
  /* Spacing */
  justify-content: space-between; /* Space out evenly, touching edges */
  justify-content: space-around;  /* Even space around each item */
  justify-content: space-evenly;  /* Equal space everywhere */
}\`,
      tip:"A quick test trick: If your flex items are squished together and you want them on opposite edges of the navbar, use space-between."
    },
    {
      name:"Alignment: Align Items",
      desc:"Controls how items align ALONG the Cross Axis (the direction perpendicular to how they flow).",
      code:\`.container {
  display: flex;
  
  /* Cross Axis Alignment Options: */
  align-items: stretch;     /* Default (items stretch to fill height) */
  align-items: flex-start;  /* Top */
  align-items: flex-end;    /* Bottom */
  align-items: center;      /* Vertically Center */
}\`,
      tip:"Want to perfectly center something dead in the middle of a screen? \nbody { display: flex; justify-content: center; align-items: center; height: 100vh; }"
    },
    {
      name:"The Gap Property",
      desc:"The easiest way to add space between flex items, without using messy margins.",
      code:\`.container {
  display: flex;
  
  /* Adds exactly 20px gap ONLY between elements (not on edges) */
  gap: 20px; 
  
  /* Specific axis gaps */
  column-gap: 30px;
  row-gap: 10px;
}\`,
      tip:"Always use gap in Flexbox and Grid instead of margin. It eliminates the problem of applying margin-right, and having to remove it from the last-child."
    }
  ],
  exercises:[
    {
      type:"Predict Output", pts:15,
      q:"A navbar has display:flex. Which property places the logo on the far left, and links on the far right?",
      code:\`.navbar {
  display: flex;
  /* Which property here? */
}\`,
      kind:"mc",
      opts:["justify-content: space-around;","align-items: space-between;","justify-content: space-between;","flex-wrap: nowrap;"],
      correct:2,
      hint:"This deals with horizontal spacing (Main Axis for row). Space touches the far left and far right edges.",
      explain:"justify-content: space-between pushes the first item (logo) to the extreme left edge, and the last item (nav links container) to the extreme right edge. Space-around would add extra space before the logo."
    },
    {
      type:"Spot the Bug", pts:20,
      q:"This flexbox is trying to stack items visually top-to-bottom, vertically centering them. Why is align-items doing the horizontal centering instead of vertical?",
      code:\`.menu {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Intended: vertical center */
  align-items: center;     /* Intended: horizontal center */
}\`,
      kind:"text",
      answer:["main axis","swapped","direction","column"],
      hint:"Pay attention to flex-direction. When you switch to a column layout, what happens to the Main and Cross axes?",
      sol:\`/* Code is technically correct, but the logic is swapped */\`,
      explain:"When you change flex-direction to column, the Main Axis becomes Vertical, and the Cross Axis becomes Horizontal. Therefore, justify-content now handles vertical alignment, and align-items handles horizontal alignment. The axes completely rotate!"
    },
    {
      type:"Write Code", pts:15,
      q:"Write the 3 lines of CSS to perfectly center an item horizontally and vertically inside a full-height container using Flexbox.",
      code:\`.hero {
  height: 100vh;
  /* 3 flexbox lines go here */
}\`,
      kind:"text",
      answer:["display: flex", "justify-content: center", "align-items: center"],
      hint:"Set display, center the main axis, and center the cross axis.",
      sol:\`.hero {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\`,
      explain:"This is the famous holy grail of CSS centering. Display flex initiates it, justify adjusts the 'row' axis, align adjusts the 'column' cross-axis."
    }
  ]
},
{
  title:"Day 6 — 2D Layouts with CSS Grid",
  sub:"Grid Container · Columns & Rows · Fractional Units (fr) · Areas",
  concepts:[
    {
      name:"Display: Grid",
      desc:"While Flexbox is 1D (rows OR columns), CSS Grid is 2D (rows AND columns simultaneously). It is designed to define massive page structures.",
      code:\`/* Turn a container into a grid system */
.grid {
  display: grid;
  
  /* Define columns: 3 columns, each 200px wide */
  grid-template-columns: 200px 200px 200px;
  
  /* Define rows: 2 rows, 100px tall */
  grid-template-rows: 100px 100px;
  gap: 20px;
}\`,
      tip:"Grid is for Layout, Flexbox is for Alignment. Use Grid to structure your overall page, and use Flexbox to align content inside those Grid sections."
    },
    {
      name:"The 'fr' Unit",
      desc:"The Fractional Unit (fr) tells the browser to distribute a fraction of the available free space. It mathematically calculates the responsive sizes for you.",
      code:\`/* 3 equal columns spanning the full width */
.grid {
  grid-template-columns: 1fr 1fr 1fr;
}

/* 1st col: auto-sized by content 
   2nd col: takes 2 portions of free space 
   3rd col: takes 1 portion of free space */
.grid-complex {
  grid-template-columns: auto 2fr 1fr;
}\`,
      tip:"Don't use percentages (e.g., 33.333%) when generating equal layouts in grid. 1fr handles the math perfectly and cleanly."
    },
    {
      name:"Auto-fit and minmax (Responsive without Media Queries!)",
      desc:"The absolute most powerful, mind-blowing feature of CSS Grid. Creates a fully responsive card grid that wraps automatically without writing a single media query.",
      code:\`.card-grid {
  display: grid;
  
  /* Automatically fill the row with items. 
     Each item must be at least 250px wide.
     If there's more space, stretch them (1fr). */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  gap: 2rem;
}\`,
      tip:"Memorize this one line: \`repeat(auto-fit, minmax(250px, 1fr))\`. It is the modern web industry standard pattern for responsive grids (products, blogs, feeds)."
    },
    {
      name:"Grid Areas",
      desc:"A visual, literal ASCI art way to define complex layouts. You draw the layout using strings.",
      code:\`.layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 250px 1fr;
}

/* Then assign children to areas */
header { grid-area: header; }
aside  { grid-area: sidebar; }
main   { grid-area: content; }
footer { grid-area: footer; }\`,
      tip:"Grid Areas make writing media queries a breeze. You just redefine the string grid-template-areas on vertical mobile views."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:20,
      q:"Write the single CSS line to create a grid with 4 equal columns using the repeat() function and the fractional unit.",
      code:\`.grid {\n  display: grid;\n  /* Write the line below */\n}\`,
      kind:"text",
      answer:["grid-template-columns", "repeat(4, 1fr)"],
      hint:"grid-template-columns: repeat(count, size);",
      sol:\`grid-template-columns: repeat(4, 1fr);\`,
      explain:"repeat() is a helper function that avoids writing '1fr 1fr 1fr 1fr'. It is essential for clean Grid layouts."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"What does minmax(300px, 1fr) do when applied to a grid column?",
      code:\`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\`,
      kind:"mc",
      opts:["Restricts the element from going smaller than 300px, but allows it to grow and fill available space","Fixed width of 300px, the 1fr is ignored","Flexibly sizes element relative to the viewport height","Forces the grid to have exactly 3 columns"],
      correct:0,
      hint:"min is minimum width before wrapping. max is how much it grows when there is plenty of space.",
      explain:"It sets the column to a minimum of 300px. Once shrinking past 300px, the grid calculates there is no room, so it wraps to a new row. If there is space > 300px, 1fr tells it to stretch."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"You've defined a grid area string array, but the elements aren't showing up correctly. You assigned the children their grid areas incorrectly. Find the issue.",
      code:\`.sidebar {
  grid-area: "sidebar"; /* assigning the area */
}\`,
      kind:"text",
      answer:["quotes","no quotes"],
      hint:"When defining the grid-template-areas string on the parent, it uses quotes. But does assigning grid-area to a child use quotes?",
      sol:\`.sidebar {\n  grid-area: sidebar;\n}\`,
      explain:"When declaring 'grid-template-areas' on the grid parent, you literally use a string array with quotes. However, when assigning to a child, 'grid-area' accepts a custom ident value WITHOUT quotes."
    }
  ]
}
`;

const fileContents = fs.readFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), 'utf8');
const lines = fileContents.split('\\n');
lines.splice(lines.length - 2, 0, ',' + chunk);
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), lines.join('\\n'));
console.log('Days 4-6 injected!');
