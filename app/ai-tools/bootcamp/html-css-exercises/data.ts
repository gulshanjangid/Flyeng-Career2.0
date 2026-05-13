export type Concept = {
    name: string;
    desc: string;
    code: string;
    tip: string;
}
export type Exercise = {
    type: string;
    pts: number;
    q: string;
    code: string;
    kind: 'mc' | 'text';
    opts?: string[];
    correct?: number;
    answer?: string[];
    hint: string;
    sol: string;
    explain: string;
}
export type DayData = {
    title: string;
    sub: string;
    concepts: Concept[];
    exercises: Exercise[];
}
export const DAYS: DayData[] = [
{
  title:"Day 1 — HTML Skeleton & Tags",
  sub:"HTML5 Boilerplate · Headings · Paragraphs · Lists",
  concepts:[
    {
      name:"The HTML5 Boilerplate",
      desc:"Every HTML document starts with a specific structure. The <!DOCTYPE html> tells the browser you are using modern HTML5.",
      code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>`,
      tip:"Type '!' and hit Tab in VS Code (Emmet) to instantly generate this entire boilerplate."
    },
    {
      name:"Text Structure: Headings & Paragraphs",
      desc:"HTML uses tags to give structure and semantic meaning to text. h1-h6 for titles, p for body text.",
      code:`<h1>Main Title of the Page</h1>
<h2>A Sub-section heading</h2>
<p>
  This is a paragraph. It automatically
  adds some space above and below itself.
</p>

<!-- Line breaks and thematic breaks -->
<p>First line<br>Second line</p>
<hr>`,
      tip:"Never use <h1> through <h6> just to make text bold or big! Use them to outline the structure of your document for Search Engines (SEO) and screen readers."
    },
    {
      name:"In-line Formatting",
      desc:"Tags that style text without breaking the line block.",
      code:`<!-- Semantic emphasis -->
<p>This is <strong>important</strong> text!</p>
<p>This is <em>emphasized</em> text.</p>

<!-- Visual only (less ideal for accessibility) -->
<p>This is <b>bold</b> and <i>italic</i>.</p>`,
      tip:"Strongly prefer <strong> over <b>, and <em> over <i>. They tell screen readers to change voice inflection, whereas b/i only change the visual look."
    },
    {
      name:"Lists: Ordered vs Unordered",
      desc:"Used to group related items together. ul is bulleted, ol is numbered. Both contain li (list item) elements inside.",
      code:`<!-- Unordered (Bulleted) -->
<ul>
  <li>Apples</li>
  <li>Bananas</li>
</ul>

<!-- Ordered (Numbered) -->
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>`,
      tip:"You can nest lists inside other list items to create sub-lists. The nested <ul> or <ol> MUST go inside the <li> tag, not directly inside the parent list."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What is the correct tag to use for the most important heading on a page?",
      code:`<head>
<title>
<h1>
<h6>`,
      kind:"mc",
      opts:["<head>","<title>","<h1>","<h6>"],
      correct:2,
      hint:"Headings range from 1 to 6. Lower numbers are more important.",
      sol:`<h1>`,
      explain:"<h1> is the highest level heading and should generally be used only once per page to define the main topic."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"Find the bug in this nested list structure.",
      code:`<ul>
  <li>Fruits</li>
  <ul>
    <li>Apple</li>
  </ul>
</ul>`,
      kind:"text",
      answer:["inside li","inside <li>"],
      hint:"Can a <ul> be a direct child of another <ul>? Look at where the inner <ul> is placed relative to the 'Fruits' <li>.",
      sol:`<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
    </ul>
  </li>
</ul>`,
      explain:"A <ul> or <ol> can ONLY contain <li> tags as direct children. Nested lists must be placed INSIDE an <li> tag."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a paragraph containing the text 'Warning:' in bold emphasis, followed by 'System failure'. Use the semantic tag for bold.",
      code:`// Expected structure: paragraph containing semantic bold tag`,
      kind:"text",
      answer:["<p>","<strong>Warning:</strong>","System failure","</p>"],
      hint:"Use <p> for paragraph and <strong> for semantic bold.",
      sol:`<p><strong>Warning:</strong> System failure</p>`,
      explain:"<strong> is the semantic HTML5 tag representing text with strong importance, preferred over <b>."
    }
  ]
},
{
  title:"Day 2 — Links, Images & Semantics",
  sub:"Anchors · img attributes · Semantic HTML5 elements",
  concepts:[
    {
      name:"Links (The Anchor Tag)",
      desc:"The <a> (anchor) tag creates hyperlinks to other pages, files, or locations on the same page.",
      code:`<!-- External link -->
<a href="https://google.com">Go to Google</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank" rel="noopener">New Tab</a>

<!-- Page anchor (jump to element with id="features") -->
<a href="#features">Jump down</a>`,
      tip:"Always add rel=\"noopener\" when using target=\"_blank\" to prevent a security vulnerability where the new tab can hijack the original tab's process."
    },
    {
      name:"Images",
      desc:"The <img> tag embeds an image. It is an empty tag (has no closing tag) and relies on attributes.",
      code:`<!-- Absolute URL -->
<img src="https://example.com/cat.jpg" alt="A fluffy orange cat">

<!-- Relative URL -->
<img src="./images/logo.png" alt="Company Logo" width="200">`,
      tip:"The alt attribute is mandatory for accessibility. If the image is purely decorative, include the alt attribute but leave it empty: alt=\"\"."
    },
    {
      name:"Semantic HTML5 Elements",
      desc:"HTML5 introduced tags that describe their MEANING to both the browser and developer, not just purely containers like <div>.",
      code:`<body>
  <header>
    <nav>...</nav> <!-- Navigation links -->
  </header>
  
  <main> <!-- The dominant content -->
    <article>...</article> <!-- Independent, self-contained content -->
    <section>...</section> <!-- Thematic grouping of content -->
  </main>
  
  <aside>...</aside> <!-- Sidebar/tangential content -->
  <footer>...</footer>
</body>`,
      tip:"Why use them? Better SEO (Google knows what's important), better accessibility (screen readers know the page layout), and cleaner code than 100 <div>s."
    }
  ],
  exercises:[
    {
      type:"Predict Output", pts:15,
      q:"A user clicks this link. What exactly happens?",
      code:`<a href="https://flyeng.in" target="_blank">Take Flight</a>`,
      kind:"mc",
      opts:["The current page goes to flyeng.in","A new browser tab opens to flyeng.in","The browser downloads the flyeng.in file","Nothing, it's missing the rel attribute"],
      correct:1,
      hint:"Look at the target attribute.",
      sol:`A new browser tab opens to flyeng.in`,
      explain:"target='_blank' instructs the browser to open the linked document in a new window or tab."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This image tag is technically invalid HTML5. What is missing?",
      code:`<img src="/assets/hero-banner.jpg" class="responsive-img">`,
      kind:"text",
      answer:["alt","alt=","alt attribute"],
      hint:"What happens if a blind user with a screen reader visits this page? How will they know what the image is?",
      sol:`<img src="/assets/hero-banner.jpg" alt="Hero banner" class="responsive-img">`,
      explain:"The alt attribute is strictly required for valid HTML. It provides alternative text for screen readers, and displays if the image fails to load."
    },
    {
      type:"Write Code", pts:20,
      q:"Create a main navigation bar using semantic tags containing a link to '/about' with text 'About Us'.",
      code:`// Use 3 semantic HTML tags, nested appropriately.`,
      kind:"text",
      answer:["<nav>","<a href=","'/about'","About Us","</a>","</nav>"],
      hint:"Start with <nav>. Inside it, you can just put the <a> tag.",
      sol:`<nav>\n  <a href="/about">About Us</a>\n</nav>`,
      explain:"The <nav> element represents a section of a page whose purpose is to provide navigation links. Placing <a> tags inside it is the standard semantic pattern."
    }
  ]
},
{
  title:"Day 3 — CSS Basics & Selectors",
  sub:"Inline vs Internal vs External · Selectors · Colors",
  concepts:[
    {
      name:"How to add CSS",
      desc:"Three ways to style an HTML document. External is the gold standard.",
      code:`<!-- 1. Inline (Avoid unless dynamic via JS) -->
<h1 style="color: red;">Hello</h1>

<!-- 2. Internal (In the <head>) -->
<style>
  h1 { color: blue; }
</style>

<!-- 3. External (Best Practice) -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>`,
      tip:"External stylesheets are cached by the browser, making your website load significantly faster across multiple pages."
    },
    {
      name:"CSS Selectors",
      desc:"How CSS finds the HTML elements it wants to style.",
      code:`/* Element Selector (Styles ALL p tags) */
p { font-size: 16px; }

/* Class Selector (Styles everything with class="btn") - Use a dot . */
.btn { background: blue; }

/* ID Selector (Styles the ONE element with id="nav") - Use a hash # */
#nav { width: 100%; }

/* Grouping Selectors */
h1, h2, h3 { font-family: Arial; }

/* Descendant Selector (span inside a .card) */
.card span { color: gray; }`,
      tip:"Classes (.) can be used on multiple elements. IDs (#) MUST be unique per page. Best practice: use classes for styling, save IDs for JS hooks or anchor links."
    },
    {
      name:"The Cascade and Specificity",
      desc:"When rules conflict, which one wings? CSS stands for Cascading Style Sheets. Specificity points resolve conflicts.",
      code:`/* Specificity values: 
   Inline style (1000) > ID (100) > Class (10) > Element (1) */

p { color: black; }           /* (1) point */
.warning { color: yellow; }   /* (10) points */
#alert { color: red; }        /* (100) points */

/* If points tie, the LAST rule parsed wins (the Cascade) */
.box { color: blue; }
.box { color: green; } /* Box will be green */`,
      tip:"Avoid using !important. It overrides normal specificity and makes your CSS incredibly difficult to maintain and debug."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What color will the text below be?",
      code:`<style>
  p { color: blue; }
  .text { color: red; }
  #unique { color: green; }
</style>
<p class="text" id="unique" style="color: purple;">Hello</p>`,
      kind:"mc",
      opts:["blue","red","green","purple"],
      correct:3,
      hint:"Consider specificity: Inline styles > IDs > Classes > Element selectors.",
      explain:"Inline styles have the highest specificity (1000 points), completely overriding IDs (100), Classes (10), and element selectors (1)."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"Why isn't this CSS targeting the element?",
      code:`<!-- HTML -->\n<div class="submit-button">Click</div>\n\n/* CSS */\nsubmit-button {\n  background: blue;\n}`,
      kind:"text",
      answer:[".submit", "dot", "period"],
      hint:"How do you tell CSS that a word is a class name, not an HTML element tag like 'div' or 'p'?",
      sol:`.submit-button {\n  background: blue;\n}`,
      explain:"In CSS, a leading period (.) denotes a class selector. Without it, CSS thinks you are looking for an HTML tag literally named <submit-button>."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a CSS selector that targets an <a> tag ONLY when it is inside an element with the class 'nav-menu'. Set its color to white.",
      code:`/* Write your selector and rule here */`,
      kind:"text",
      answer:[".nav-menu a", "color: white", "color:white;"],
      hint:"Use the descendant selector (a space between the parent class and the child element tag).",
      sol:`.nav-menu a {\n  color: white;\n}`,
      explain:"The space combinator selects descendants. '.nav-menu a' targets any anchor tags nested anywhere inside an element with class='nav-menu'."
    }
  ]
},
{
  title:"Day 4 — The Box Model & Sizing",
  sub:"Margin, Border, Padding, Content · Box Sizing · Units",
  concepts:[
    {
      name:"The CSS Box Model",
      desc:"Every HTML element is a rectangular box. CSS determines the block's size based on content, padding, borders, and margins.",
      code:`/* The Anatomy of a Box */
.box {
  width: 300px;
  height: 200px;
  
  /* Space INSIDE the border (between content and border) */
  padding: 20px;
  
  /* The visible boundary of the box */
  border: 5px solid black;
  
  /* Space OUTSIDE the border (pushes other elements away) */
  margin: 30px;
}`,
      tip:"Padding affects the color of the element's background. Margin does not; it is transparent space outside the box."
    },
    {
      name:"Box Sizing Reset",
      desc:"By default, padding and borders increase the declared width of a box. This is terrible. We fix it with box-sizing: border-box.",
      code:`/* Default (content-box): 
   A 100px width with 20px padding is actually 140px wide! */

/* The Universal Fix (Border-Box) */
* {
  box-sizing: border-box;
}

/* Now: A 100px width with 20px padding exactly fits in 100px.
   The padding eats INTO the available width, rather than expanding it. */`,
      tip:"Almost every professional stylesheet starts with the Universal Reset. It saves hours of debugging why elements don't fit perfectly side-by-side."
    },
    {
      name:"CSS Units (px, em, rem, %)",
      desc:"Never hardcode everything in pixels. Use responsive relative units.",
      code:`/* Pixels (Absolute) */
font-size: 16px; width: 300px;

/* rem (Relative to root HTML font size) */
font-size: 1.5rem; /* 1.5 * 16px = 24px */

/* em (Relative to parent's font size) */
margin-bottom: 2em; /* 2 * current font size */

/* Percentages (Relative to parent's size) */
width: 50%;
height: 100%;`,
      tip:"The current standard: set base font-size relative, then use 'rem' for text, margins, and paddings for guaranteed scalability and accessibility."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"An element has: width:200px; padding:20px; border:2px solid black; What is the total horizontal space this element occupies on screen? (Default box-sizing)",
      code:`width: 200px;
padding: 20px;
border: 2px solid black;`,
      kind:"mc",
      opts:["200px","240px","244px","156px"],
      correct:2,
      hint:"Total Width = left border + left padding + set width + right padding + right border.",
      sol:`244px`,
      explain:"2px (L border) + 20px (L padding) + 200px (content) + 20px (R padding) + 2px (R border) = 244px. This math nightmare is exactly why you need box-sizing: border-box."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"Why is the universal CSS reset missing a critical component?",
      code:`* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}`,
      kind:"text",
      answer:["border-box","content-box"],
      hint:"Wait, is content-box the fix we want?",
      sol:`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
      explain:"content-box is the flawed browser default, not the solution. Setting box-sizing to border-box prevents width from infinitely expanding whenever padding or borders are applied."
    },
    {
      type:"Write Code", pts:20,
      q:"Write CSS for an element with class 'card' that sets padding on top/bottom to 10px, and left/right to 20px using the shorthand syntax.",
      code:`/* Complete the rule */`,
      kind:"text",
      answer:["padding: 10px 20px", "padding:10px 20px;"],
      hint:"The shorthand order is: top, right, bottom, left. A 2-value syntax sets Top/Bottom and then Left/Right.",
      sol:`.card {\n  padding: 10px 20px;\n}`,
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
      code:`/* The Container */
.container {
  display: flex;
  
  /* Which direction do items flow? row | row-reverse | column | column-reverse */
  flex-direction: row; 
  
  /* Do items wrap to a new line if they run out of space? nowrap | wrap */
  flex-wrap: wrap; 
}`,
      tip:"flex-direction: row makes horizontal layouts, flex-direction: column makes vertical layouts. The axis they flow along is called the 'Main Axis'."
    },
    {
      name:"Alignment: Justify Content",
      desc:"Controls how items align ALONG the Main Axis (the direction they flow in).",
      code:`.container {
  display: flex;
  
  /* Main Axis Alignment Options: */
  justify-content: flex-start;  /* Default (left) */
  justify-content: flex-end;    /* Right */
  justify-content: center;      /* Center */
  
  /* Spacing */
  justify-content: space-between; /* Space out evenly, touching edges */
  justify-content: space-around;  /* Even space around each item */
  justify-content: space-evenly;  /* Equal space everywhere */
}`,
      tip:"A quick test trick: If your flex items are squished together and you want them on opposite edges of the navbar, use space-between."
    },
    {
      name:"Alignment: Align Items",
      desc:"Controls how items align ALONG the Cross Axis (the direction perpendicular to how they flow).",
      code:`.container {
  display: flex;
  
  /* Cross Axis Alignment Options: */
  align-items: stretch;     /* Default (items stretch to fill height) */
  align-items: flex-start;  /* Top */
  align-items: flex-end;    /* Bottom */
  align-items: center;      /* Vertically Center */
}`,
      tip:"Want to perfectly center something dead in the middle of a screen? \nbody { display: flex; justify-content: center; align-items: center; height: 100vh; }"
    },
    {
      name:"The Gap Property",
      desc:"The easiest way to add space between flex items, without using messy margins.",
      code:`.container {
  display: flex;
  
  /* Adds exactly 20px gap ONLY between elements (not on edges) */
  gap: 20px; 
  
  /* Specific axis gaps */
  column-gap: 30px;
  row-gap: 10px;
}`,
      tip:"Always use gap in Flexbox and Grid instead of margin. It eliminates the problem of applying margin-right, and having to remove it from the last-child."
    }
  ],
  exercises:[
    {
      type:"Predict Output", pts:15,
      q:"A navbar has display:flex. Which property places the logo on the far left, and links on the far right?",
      code:`.navbar {
  display: flex;
  /* Which property here? */
}`,
      kind:"mc",
      opts:["justify-content: space-around;","align-items: space-between;","justify-content: space-between;","flex-wrap: nowrap;"],
      correct:2,
      hint:"This deals with horizontal spacing (Main Axis for row). Space touches the far left and far right edges.",
      explain:"justify-content: space-between pushes the first item (logo) to the extreme left edge, and the last item (nav links container) to the extreme right edge. Space-around would add extra space before the logo."
    },
    {
      type:"Spot the Bug", pts:20,
      q:"This flexbox is trying to stack items visually top-to-bottom, vertically centering them. Why is align-items doing the horizontal centering instead of vertical?",
      code:`.menu {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Intended: vertical center */
  align-items: center;     /* Intended: horizontal center */
}`,
      kind:"text",
      answer:["main axis","swapped","direction","column"],
      hint:"Pay attention to flex-direction. When you switch to a column layout, what happens to the Main and Cross axes?",
      sol:`/* Code is technically correct, but the logic is swapped */`,
      explain:"When you change flex-direction to column, the Main Axis becomes Vertical, and the Cross Axis becomes Horizontal. Therefore, justify-content now handles vertical alignment, and align-items handles horizontal alignment. The axes completely rotate!"
    },
    {
      type:"Write Code", pts:15,
      q:"Write the 3 lines of CSS to perfectly center an item horizontally and vertically inside a full-height container using Flexbox.",
      code:`.hero {
  height: 100vh;
  /* 3 flexbox lines go here */
}`,
      kind:"text",
      answer:["display: flex", "justify-content: center", "align-items: center"],
      hint:"Set display, center the main axis, and center the cross axis.",
      sol:`.hero {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
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
      code:`/* Turn a container into a grid system */
.grid {
  display: grid;
  
  /* Define columns: 3 columns, each 200px wide */
  grid-template-columns: 200px 200px 200px;
  
  /* Define rows: 2 rows, 100px tall */
  grid-template-rows: 100px 100px;
  gap: 20px;
}`,
      tip:"Grid is for Layout, Flexbox is for Alignment. Use Grid to structure your overall page, and use Flexbox to align content inside those Grid sections."
    },
    {
      name:"The 'fr' Unit",
      desc:"The Fractional Unit (fr) tells the browser to distribute a fraction of the available free space. It mathematically calculates the responsive sizes for you.",
      code:`/* 3 equal columns spanning the full width */
.grid {
  grid-template-columns: 1fr 1fr 1fr;
}

/* 1st col: auto-sized by content 
   2nd col: takes 2 portions of free space 
   3rd col: takes 1 portion of free space */
.grid-complex {
  grid-template-columns: auto 2fr 1fr;
}`,
      tip:"Don't use percentages (e.g., 33.333%) when generating equal layouts in grid. 1fr handles the math perfectly and cleanly."
    },
    {
      name:"Auto-fit and minmax (Responsive without Media Queries!)",
      desc:"The absolute most powerful, mind-blowing feature of CSS Grid. Creates a fully responsive card grid that wraps automatically without writing a single media query.",
      code:`.card-grid {
  display: grid;
  
  /* Automatically fill the row with items. 
     Each item must be at least 250px wide.
     If there's more space, stretch them (1fr). */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  gap: 2rem;
}`,
      tip:"Memorize this one line: \`repeat(auto-fit, minmax(250px, 1fr))\`. It is the modern web industry standard pattern for responsive grids (products, blogs, feeds)."
    },
    {
      name:"Grid Areas",
      desc:"A visual, literal ASCI art way to define complex layouts. You draw the layout using strings.",
      code:`.layout {
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
footer { grid-area: footer; }`,
      tip:"Grid Areas make writing media queries a breeze. You just redefine the string grid-template-areas on vertical mobile views."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:20,
      q:"Write the single CSS line to create a grid with 4 equal columns using the repeat() function and the fractional unit.",
      code:`.grid {\n  display: grid;\n  /* Write the line below */\n}`,
      kind:"text",
      answer:["grid-template-columns", "repeat(4, 1fr)"],
      hint:"grid-template-columns: repeat(count, size);",
      sol:`grid-template-columns: repeat(4, 1fr);`,
      explain:"repeat() is a helper function that avoids writing '1fr 1fr 1fr 1fr'. It is essential for clean Grid layouts."
    },
    {
      type:"Multiple Choice", pts:15,
      q:"What does minmax(300px, 1fr) do when applied to a grid column?",
      code:`grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`,
      kind:"mc",
      opts:["Restricts the element from going smaller than 300px, but allows it to grow and fill available space","Fixed width of 300px, the 1fr is ignored","Flexibly sizes element relative to the viewport height","Forces the grid to have exactly 3 columns"],
      correct:0,
      hint:"min is minimum width before wrapping. max is how much it grows when there is plenty of space.",
      explain:"It sets the column to a minimum of 300px. Once shrinking past 300px, the grid calculates there is no room, so it wraps to a new row. If there is space > 300px, 1fr tells it to stretch."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"You've defined a grid area string array, but the elements aren't showing up correctly. You assigned the children their grid areas incorrectly. Find the issue.",
      code:`.sidebar {
  grid-area: "sidebar"; /* assigning the area */
}`,
      kind:"text",
      answer:["quotes","no quotes"],
      hint:"When defining the grid-template-areas string on the parent, it uses quotes. But does assigning grid-area to a child use quotes?",
      sol:`.sidebar {\n  grid-area: sidebar;\n}`,
      explain:"When declaring 'grid-template-areas' on the grid parent, you literally use a string array with quotes. However, when assigning to a child, 'grid-area' accepts a custom ident value WITHOUT quotes."
    }
  ]
},
{
  title:"Day 7 — Responsive Design & Media Queries",
  sub:"Viewport Meta Tag · Breakpoints · Mobile-First CSS",
  concepts:[
    {
      name:"The Viewport Meta Tag",
      desc:"Without this single line in the <head>, responsive design literally does not work. Mobile browsers will scale your site down to a microscopic 980px zoom.",
      code:`<!-- The most important line in web development: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
      tip:"Emmet's '!' shortcut generates this automatically for you. Don't ever forget it."
    },
    {
      name:"Media Queries",
      desc:"CSS rules that only apply when certain conditions are met, most commonly the width of the browser window.",
      code:`/* Base styles (Mobile First) */
.card { width: 100%; }

/* Tablet and larger */
@media (min-width: 768px) {
  .card { width: 50%; }
}

/* Desktop and larger */
@media (min-width: 1024px) {
  .card { width: 33.333%; }
}`,
      tip:"A 'Mobile First' approach uses min-width media queries. Start by writing CSS for a tiny phone screen (base styles). Then add breakpoints for larger screens as needed."
    },
    {
      name:"Responsive Images",
      desc:"A massive image will quickly overflow a tiny phone screen, causing horizontal scrolling (which is the cardinal sin of web design).",
      code:`img {
  /* Never exceed container width */
  max-width: 100%;
  
  /* Maintain aspect ratio */
  height: auto;
}`,
      tip:"Adding max-width: 100% to images makes them scale down perfectly infinitely."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"Why is max-width preferred over width for responsive images?",
      code:`width: 100%;
/* VS */
max-width: 100%;`,
      kind:"mc",
      opts:["width:100% causes infinite growing; max-width caps it","max-width maintains the aspect ratio, width distorts it","No difference between the two realistically","width:100% is actually better"],
      correct:0,
      hint:"What happens if a 200px wide image is inside a 3000px wide container?",
      explain:"width: 100% forces the image to stretch and stretch until it fills the whole container, turning blocky and pixelated. max-width: 100% allows the image to scale DOWN if the container is tiny, but never scale UP past its true 200px resolution."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a media query using the mobile-first approach where an element with class '.container' switches from flex-direction 'column' to 'row' at 768px minimum width.",
      code:`.container {
  display: flex;
  flex-direction: column; /* Mobile first */
}
/* Complete the MediaQuery below */`,
      kind:"text",
      answer:["@media", "min-width: 768px", "flex-direction: row"],
      hint:"@media (min-width: 768px) { .container { ... } }",
      sol:`@media (min-width: 768px) {\n  .container {\n    flex-direction: row;\n  }\n}`,
      explain:"This defines a breakpoint where any screen size of 768px or greater triggers the horizontal row layout."
    }
  ]
},
{
  title:"Day 8 — CSS Positioning & Transforms",
  sub:"Static, Relative, Absolute, Fixed, Sticky · 2D Transforms",
  concepts:[
    {
      name:"CSS Position Values",
      desc:"Controls how elements are placed, overriding the default document flow.",
      code:`.element {
  /* Default: Stays precisely where the browser puts it */
  position: static;
  
  /* Shifts position relative to where it normally is */
  position: relative;
  
  /* Removed entirely from flow, floats above everything.
     Anchors to the nearest 'relative' parent container! */
  position: absolute;
  
  /* Removed from flow, anchors to the browser viewport */
  position: fixed;
  
  /* Acts as 'static' until scrolled past, then acts 'fixed' */
  position: sticky;
}`,
      tip:"The cardinal rule of absolute positioning: An absolute element will look up the DOM tree until it finds a parent with position: relative, and anchor itself to that parent."
    },
    {
      name:"The Z-Index",
      desc:"Controls the stacking order of overlapping elements. The higher the number, the closer to the user.",
      code:`.element {
  position: absolute;
  z-index: 10;
}
.modal {
  position: fixed;
  z-index: 9999; /* Shows above most things */
}`,
      tip:"z-index ONLY works on elements that have a position value other than static."
    },
    {
      name:"Transforms",
      desc:"Allows you to visually move, rotate, scale, or skew elements without affecting document layout or performance.",
      code:`/* Shifting elements purely horizontally/vertically */
transform: translate(-50%, -50%);

/* Rotating degrees */
transform: rotate(45deg);

/* Growing or shrinking (1.5x) */
transform: scale(1.5);

/* Applying multiple transforms (Requires spaces, no commas) */
transform: translate(10px) rotate(10deg);`,
      tip:"To achieve GPU accelerated butter-smooth animations, always animate the 'transform' property, NEVER top/left or width/height."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:15,
      q:"An element has position: absolute; top: 0; left: 0; but it is snapping to the top left of the entire browser screen, ignoring its tiny parent container. Why?",
      code:`<div class="parent">
  <div class="absolute-child"></div>
</div>`,
      kind:"mc",
      opts:["Absolute elements always snap to the browser screen","The parent needs position: relative","top: 0 is fundamentally broken in CSS3","A z-index is missing"],
      correct:1,
      hint:"Check the cardinal rule of absolute positioning.",
      explain:"By default, absolute elements anchor to the body/HTML tag. Giving the parent 'position: relative' traps the absolute child inside the bounds of its parent container."
    },
    {
      type:"Spot the Bug", pts:20,
      q:"Why isn't z-index applying to this box?",
      code:`.box {
  background: red;
  width: 100px;
  height: 100px;
  z-index: 50;
}`,
      kind:"text",
      answer:["position", "static"],
      hint:"What is the default position of every element in HTML, and does z-index work on it?",
      sol:`.box {\n  background: red;\n  width: 100px;\n  height: 100px;\n  position: relative;\n  z-index: 50;\n}`,
      explain:"z-index has entirely no effect if position is static (the default). It requires position: relative, absolute, fixed, or sticky to function."
    }
  ]
},
{
  title:"Day 9 — CSS Transitions & Animations",
  sub:"Hover states · CSS Transitions · Keyframes",
  concepts:[
    {
      name:"Transitions",
      desc:"The easiest way to animate state changes (like hovers). It automatically interpolates values over a specified time duration.",
      code:`.btn {
  background: blue;
  
  /* Which property to watch, how long, what easing pacing */
  /* all | width | background etc...  time    easing */
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background: green; /* Smoothly changes over 0.3s */
  transform: scale(1.05); /* Buttons slightly grow */
}`,
      tip:"Never put the transition property on the :hover state, always put it on the original base state! Otherwise the exit transition disappears completely when the mouse leaves."
    },
    {
      name:"Keyframe Animations",
      desc:"For complex, multi-step looping animations completely independent of hover states.",
      code:`/* Define the animation steps */
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}

/* Call the animation on an element */
.ball {
  /* name   duration timing-function iterations */
  animation: bounce 2s ease-in-out infinite;
}`,
      tip:"Animations are highly performant when dealing with opacity and transform properties (GPU acceleration). Avoid animating padding/margin/width/height/border which forces the browser to expensively recalculate layouts constantly."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:15,
      q:"A button smoothly changes color when hovered over. However, when the mouse leaves, it snaps instantly back. Write the CSS code to fix the broken exit animation.",
      code:`.btn:hover {
  background: green;
  transition: background 0.3s ease;
}`,
      kind:"text",
      answer:[".btn {", "transition: background 0.3s"],
      hint:"Where should the transition property actually live?",
      sol:`.btn {\n  transition: background 0.3s ease;\n}\n\n.btn:hover {\n  background: green;\n}`,
      explain:"Transitions must live on the base `.btn` selecter, not the pseudo `.btn:hover`. This guarantees that both the enter-hover and exit-hover directions are smoothly interpolated."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"Which CSS properties are best practice and performant for animations because they are handled by the computer's GPU hardware?",
      code:`/* A */ transition: width 0.3s ease;
/* B */ transition: padding-left 0.3s ease;
/* C */ transition: transform 0.3s ease;
/* D */ transition: margin-top 0.3s ease;`,
      kind:"mc",
      opts:["A","B","C","D"],
      correct:2,
      hint:"Which of these doesn't physically disrupt or push around surrounding layout geometry elements?",
      explain:"Only 'transform' and 'opacity' completely bypass layout recalculation and push straight to the graphics card composite pipeline perfectly achieving 60fps locking. Width, Margin, Padding force expensive redraws."
    }
  ]
},
{
  title:"Day 10 — Building a Modern Landing Page",
  sub:"HTML5 Structure · Variables · Tailwind vs CSS",
  concepts:[
    {
      name:"CSS Variables (Custom Properties)",
      desc:"Just like JavaScript let/const variables, but built straight into CSS. Drastically reduces hardcoded bloat.",
      code:`:root {
  /* Defined on the root document level */
  --primary-color: #6366f1;
  --bg-color: #0f172a;
}

h1 {
  /* Using the var() function to recall definitions */
  color: var(--primary-color);
}`,
      tip:"You can re-define variables inside @media queries! Example: change --primary-color to red on mobile screens and instantly impact every button everywhere."
    },
    {
      name:"The BEM Methodology",
      desc:"A popular naming convention for classes to prevent CSS spaghetti and specificity scaling chaos.",
      code:`/* Block (The overarching component) */
.card { ... }

/* Element (A child strictly inside the block, using two underscores) */
.card__title { ... }
.card__image { ... }

/* Modifier (A variation of a block/element, using two dashes) */
.card--featured { ... }
.card__button--disabled { ... }`,
      tip:"A huge asset for large scaling CSS, however utility frameworks like Tailwind CSS have largely superseded strict BEM usage."
    },
    {
      name:"A Professional Landing Page Flow",
      desc:"Combining the 10 Days into a standard layout.",
      code:`<body>
  <nav class="max-w-7xl mx-auto flex justify-between">...</nav>
  
  <header class="min-h-screen flex items-center justify-center text-center">
     <h1>Hero Headline</h1>
  </header>
  
  <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
     <!-- Feature Cards -->
  </section>
  
  <footer class="bg-gray-900 text-white">...</footer>
</body>`,
      tip:"The combination of Flexbox for the inner-component alignment plus Grid for macro section alignment solves 99% of complex landing page layouts seamlessly."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"In BEM naming conventions, what does two dashes (--) indicate?",
      code:`.btn--primary`,
      kind:"mc",
      opts:["A child element","A modifier or variation","A CSS Variable","A specific page"],
      correct:1,
      hint:"BEM stands for Block, Element, Modifier.",
      explain:"Two dashes (--) indicate a Modifier (e.g., .btn--large or .btn--disabled), signifying a variation of a block element. Two underscores (__) indicate a child Element."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"A developer attempts to define a root CSS variable, but it throws syntax errors and remains undefined.",
      code:`:root {
  primary-color: #0f172a;
}\n
h1 {
  color: var(--primary-color);
}`,
      kind:"text",
      answer:["--", "dash"],
      hint:"Look meticulously at the variable definition inside :root. Is a special prefix required?",
      sol:`:root {\n  --primary-color: #0f172a;\n}`,
      explain:"CSS Variables MUST natively begin directly with a strict double dash (--). This unique syntax prefix was implemented specifically by design so future native CSS properties never risk colliding with developer namespace declarations."
    }
  ]
}
];
