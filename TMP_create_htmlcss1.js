const fs = require('fs');
const path = require('path');

const dataTS = `export type Concept = {
    name: string
    desc: string
    code: string
    tip: string
}
export type Exercise = {
    type: string
    pts: number
    q: string
    code: string
    kind: 'mc' | 'text'
    opts?: string[]
    correct?: number
    answer?: string[]
    hint: string
    sol: string
    explain: string
}
export type DayData = {
    title: string
    sub: string
    concepts: Concept[]
    exercises: Exercise[]
}

export const DAYS: DayData[] = [
{
  title:"Day 1 — HTML Skeleton & Tags",
  sub:"HTML5 Boilerplate · Headings · Paragraphs · Lists",
  concepts:[
    {
      name:"The HTML5 Boilerplate",
      desc:"Every HTML document starts with a specific structure. The <!DOCTYPE html> tells the browser you are using modern HTML5.",
      code:\`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>\`,
      tip:"Type '!' and hit Tab in VS Code (Emmet) to instantly generate this entire boilerplate."
    },
    {
      name:"Text Structure: Headings & Paragraphs",
      desc:"HTML uses tags to give structure and semantic meaning to text. h1-h6 for titles, p for body text.",
      code:\`<h1>Main Title of the Page</h1>
<h2>A Sub-section heading</h2>
<p>
  This is a paragraph. It automatically
  adds some space above and below itself.
</p>

<!-- Line breaks and thematic breaks -->
<p>First line<br>Second line</p>
<hr>\`,
      tip:"Never use <h1> through <h6> just to make text bold or big! Use them to outline the structure of your document for Search Engines (SEO) and screen readers."
    },
    {
      name:"In-line Formatting",
      desc:"Tags that style text without breaking the line block.",
      code:\`<!-- Semantic emphasis -->
<p>This is <strong>important</strong> text!</p>
<p>This is <em>emphasized</em> text.</p>

<!-- Visual only (less ideal for accessibility) -->
<p>This is <b>bold</b> and <i>italic</i>.</p>\`,
      tip:"Strongly prefer <strong> over <b>, and <em> over <i>. They tell screen readers to change voice inflection, whereas b/i only change the visual look."
    },
    {
      name:"Lists: Ordered vs Unordered",
      desc:"Used to group related items together. ul is bulleted, ol is numbered. Both contain li (list item) elements inside.",
      code:\`<!-- Unordered (Bulleted) -->
<ul>
  <li>Apples</li>
  <li>Bananas</li>
</ul>

<!-- Ordered (Numbered) -->
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>\`,
      tip:"You can nest lists inside other list items to create sub-lists. The nested <ul> or <ol> MUST go inside the <li> tag, not directly inside the parent list."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What is the correct tag to use for the most important heading on a page?",
      code:\`<head>
<title>
<h1>
<h6>\`,
      kind:"mc",
      opts:["<head>","<title>","<h1>","<h6>"],
      correct:2,
      hint:"Headings range from 1 to 6. Lower numbers are more important.",
      sol:\`<h1>\`,
      explain:"<h1> is the highest level heading and should generally be used only once per page to define the main topic."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"Find the bug in this nested list structure.",
      code:\`<ul>
  <li>Fruits</li>
  <ul>
    <li>Apple</li>
  </ul>
</ul>\`,
      kind:"text",
      answer:["inside li","inside <li>"],
      hint:"Can a <ul> be a direct child of another <ul>? Look at where the inner <ul> is placed relative to the 'Fruits' <li>.",
      sol:\`<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
    </ul>
  </li>
</ul>\`,
      explain:"A <ul> or <ol> can ONLY contain <li> tags as direct children. Nested lists must be placed INSIDE an <li> tag."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a paragraph containing the text 'Warning:' in bold emphasis, followed by 'System failure'. Use the semantic tag for bold.",
      code:\`// Expected structure: paragraph containing semantic bold tag\`,
      kind:"text",
      answer:["<p>","<strong>Warning:</strong>","System failure","</p>"],
      hint:"Use <p> for paragraph and <strong> for semantic bold.",
      sol:\`<p><strong>Warning:</strong> System failure</p>\`,
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
      code:\`<!-- External link -->
<a href="https://google.com">Go to Google</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank" rel="noopener">New Tab</a>

<!-- Page anchor (jump to element with id="features") -->
<a href="#features">Jump down</a>\`,
      tip:"Always add rel=\"noopener\" when using target=\"_blank\" to prevent a security vulnerability where the new tab can hijack the original tab's process."
    },
    {
      name:"Images",
      desc:"The <img> tag embeds an image. It is an empty tag (has no closing tag) and relies on attributes.",
      code:\`<!-- Absolute URL -->
<img src="https://example.com/cat.jpg" alt="A fluffy orange cat">

<!-- Relative URL -->
<img src="./images/logo.png" alt="Company Logo" width="200">\`,
      tip:"The alt attribute is mandatory for accessibility. If the image is purely decorative, include the alt attribute but leave it empty: alt=\"\"."
    },
    {
      name:"Semantic HTML5 Elements",
      desc:"HTML5 introduced tags that describe their MEANING to both the browser and developer, not just purely containers like <div>.",
      code:\`<body>
  <header>
    <nav>...</nav> <!-- Navigation links -->
  </header>
  
  <main> <!-- The dominant content -->
    <article>...</article> <!-- Independent, self-contained content -->
    <section>...</section> <!-- Thematic grouping of content -->
  </main>
  
  <aside>...</aside> <!-- Sidebar/tangential content -->
  <footer>...</footer>
</body>\`,
      tip:"Why use them? Better SEO (Google knows what's important), better accessibility (screen readers know the page layout), and cleaner code than 100 <div>s."
    }
  ],
  exercises:[
    {
      type:"Predict Output", pts:15,
      q:"A user clicks this link. What exactly happens?",
      code:\`<a href="https://flyeng.in" target="_blank">Take Flight</a>\`,
      kind:"mc",
      opts:["The current page goes to flyeng.in","A new browser tab opens to flyeng.in","The browser downloads the flyeng.in file","Nothing, it's missing the rel attribute"],
      correct:1,
      hint:"Look at the target attribute.",
      sol:\`A new browser tab opens to flyeng.in\`,
      explain:"target='_blank' instructs the browser to open the linked document in a new window or tab."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"This image tag is technically invalid HTML5. What is missing?",
      code:\`<img src="/assets/hero-banner.jpg" class="responsive-img">\`,
      kind:"text",
      answer:["alt","alt=","alt attribute"],
      hint:"What happens if a blind user with a screen reader visits this page? How will they know what the image is?",
      sol:\`<img src="/assets/hero-banner.jpg" alt="Hero banner" class="responsive-img">\`,
      explain:"The alt attribute is strictly required for valid HTML. It provides alternative text for screen readers, and displays if the image fails to load."
    },
    {
      type:"Write Code", pts:20,
      q:"Create a main navigation bar using semantic tags containing a link to '/about' with text 'About Us'.",
      code:\`// Use 3 semantic HTML tags, nested appropriately.\`,
      kind:"text",
      answer:["<nav>","<a href=","'/about'","About Us","</a>","</nav>"],
      hint:"Start with <nav>. Inside it, you can just put the <a> tag.",
      sol:\`<nav>\n  <a href="/about">About Us</a>\n</nav>\`,
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
      code:\`<!-- 1. Inline (Avoid unless dynamic via JS) -->
<h1 style="color: red;">Hello</h1>

<!-- 2. Internal (In the <head>) -->
<style>
  h1 { color: blue; }
</style>

<!-- 3. External (Best Practice) -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>\`,
      tip:"External stylesheets are cached by the browser, making your website load significantly faster across multiple pages."
    },
    {
      name:"CSS Selectors",
      desc:"How CSS finds the HTML elements it wants to style.",
      code:\`/* Element Selector (Styles ALL p tags) */
p { font-size: 16px; }

/* Class Selector (Styles everything with class="btn") - Use a dot . */
.btn { background: blue; }

/* ID Selector (Styles the ONE element with id="nav") - Use a hash # */
#nav { width: 100%; }

/* Grouping Selectors */
h1, h2, h3 { font-family: Arial; }

/* Descendant Selector (span inside a .card) */
.card span { color: gray; }\`,
      tip:"Classes (.) can be used on multiple elements. IDs (#) MUST be unique per page. Best practice: use classes for styling, save IDs for JS hooks or anchor links."
    },
    {
      name:"The Cascade and Specificity",
      desc:"When rules conflict, which one wings? CSS stands for Cascading Style Sheets. Specificity points resolve conflicts.",
      code:\`/* Specificity values: 
   Inline style (1000) > ID (100) > Class (10) > Element (1) */

p { color: black; }           /* (1) point */
.warning { color: yellow; }   /* (10) points */
#alert { color: red; }        /* (100) points */

/* If points tie, the LAST rule parsed wins (the Cascade) */
.box { color: blue; }
.box { color: green; } /* Box will be green */\`,
      tip:"Avoid using !important. It overrides normal specificity and makes your CSS incredibly difficult to maintain and debug."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"What color will the text below be?",
      code:\`<style>
  p { color: blue; }
  .text { color: red; }
  #unique { color: green; }
</style>
<p class="text" id="unique" style="color: purple;">Hello</p>\`,
      kind:"mc",
      opts:["blue","red","green","purple"],
      correct:3,
      hint:"Consider specificity: Inline styles > IDs > Classes > Element selectors.",
      explain:"Inline styles have the highest specificity (1000 points), completely overriding IDs (100), Classes (10), and element selectors (1)."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"Why isn't this CSS targeting the element?",
      code:\`<!-- HTML -->\n<div class="submit-button">Click</div>\n\n/* CSS */\nsubmit-button {\n  background: blue;\n}\`,
      kind:"text",
      answer:[".submit", "dot", "period"],
      hint:"How do you tell CSS that a word is a class name, not an HTML element tag like 'div' or 'p'?",
      sol:\`.submit-button {\n  background: blue;\n}\`,
      explain:"In CSS, a leading period (.) denotes a class selector. Without it, CSS thinks you are looking for an HTML tag literally named <submit-button>."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a CSS selector that targets an <a> tag ONLY when it is inside an element with the class 'nav-menu'. Set its color to white.",
      code:\`/* Write your selector and rule here */\`,
      kind:"text",
      answer:[".nav-menu a", "color: white", "color:white;"],
      hint:"Use the descendant selector (a space between the parent class and the child element tag).",
      sol:\`.nav-menu a {\n  color: white;\n}\`,
      explain:"The space combinator selects descendants. '.nav-menu a' targets any anchor tags nested anywhere inside an element with class='nav-menu'."
    }
  ]
}
// WE TRUNCATED FOR MEMORY. 
];
`;

fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), dataTS);
console.log('Days 1-3 written');
