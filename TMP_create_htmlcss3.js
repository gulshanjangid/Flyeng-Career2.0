const fs = require('fs');
const path = require('path');

const chunk = `
{
  title:"Day 7 — Responsive Design & Media Queries",
  sub:"Viewport Meta Tag · Breakpoints · Mobile-First CSS",
  concepts:[
    {
      name:"The Viewport Meta Tag",
      desc:"Without this single line in the <head>, responsive design literally does not work. Mobile browsers will scale your site down to a microscopic 980px zoom.",
      code:\`<!-- The most important line in web development: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">\`,
      tip:"Emmet's '!' shortcut generates this automatically for you. Don't ever forget it."
    },
    {
      name:"Media Queries",
      desc:"CSS rules that only apply when certain conditions are met, most commonly the width of the browser window.",
      code:\`/* Base styles (Mobile First) */
.card { width: 100%; }

/* Tablet and larger */
@media (min-width: 768px) {
  .card { width: 50%; }
}

/* Desktop and larger */
@media (min-width: 1024px) {
  .card { width: 33.333%; }
}\`,
      tip:"A 'Mobile First' approach uses min-width media queries. Start by writing CSS for a tiny phone screen (base styles). Then add breakpoints for larger screens as needed."
    },
    {
      name:"Responsive Images",
      desc:"A massive image will quickly overflow a tiny phone screen, causing horizontal scrolling (which is the cardinal sin of web design).",
      code:\`img {
  /* Never exceed container width */
  max-width: 100%;
  
  /* Maintain aspect ratio */
  height: auto;
}\`,
      tip:"Adding max-width: 100% to images makes them scale down perfectly infinitely."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"Why is max-width preferred over width for responsive images?",
      code:\`width: 100%;
/* VS */
max-width: 100%;\`,
      kind:"mc",
      opts:["width:100% causes infinite growing; max-width caps it","max-width maintains the aspect ratio, width distorts it","No difference between the two realistically","width:100% is actually better"],
      correct:0,
      hint:"What happens if a 200px wide image is inside a 3000px wide container?",
      explain:"width: 100% forces the image to stretch and stretch until it fills the whole container, turning blocky and pixelated. max-width: 100% allows the image to scale DOWN if the container is tiny, but never scale UP past its true 200px resolution."
    },
    {
      type:"Write Code", pts:20,
      q:"Write a media query using the mobile-first approach where an element with class '.container' switches from flex-direction 'column' to 'row' at 768px minimum width.",
      code:\`.container {
  display: flex;
  flex-direction: column; /* Mobile first */
}
/* Complete the MediaQuery below */\`,
      kind:"text",
      answer:["@media", "min-width: 768px", "flex-direction: row"],
      hint:"@media (min-width: 768px) { .container { ... } }",
      sol:\`@media (min-width: 768px) {\n  .container {\n    flex-direction: row;\n  }\n}\`,
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
      code:\`.element {
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
}\`,
      tip:"The cardinal rule of absolute positioning: An absolute element will look up the DOM tree until it finds a parent with position: relative, and anchor itself to that parent."
    },
    {
      name:"The Z-Index",
      desc:"Controls the stacking order of overlapping elements. The higher the number, the closer to the user.",
      code:\`.element {
  position: absolute;
  z-index: 10;
}
.modal {
  position: fixed;
  z-index: 9999; /* Shows above most things */
}\`,
      tip:"z-index ONLY works on elements that have a position value other than static."
    },
    {
      name:"Transforms",
      desc:"Allows you to visually move, rotate, scale, or skew elements without affecting document layout or performance.",
      code:\`/* Shifting elements purely horizontally/vertically */
transform: translate(-50%, -50%);

/* Rotating degrees */
transform: rotate(45deg);

/* Growing or shrinking (1.5x) */
transform: scale(1.5);

/* Applying multiple transforms (Requires spaces, no commas) */
transform: translate(10px) rotate(10deg);\`,
      tip:"To achieve GPU accelerated butter-smooth animations, always animate the 'transform' property, NEVER top/left or width/height."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:15,
      q:"An element has position: absolute; top: 0; left: 0; but it is snapping to the top left of the entire browser screen, ignoring its tiny parent container. Why?",
      code:\`<div class="parent">
  <div class="absolute-child"></div>
</div>\`,
      kind:"mc",
      opts:["Absolute elements always snap to the browser screen","The parent needs position: relative","top: 0 is fundamentally broken in CSS3","A z-index is missing"],
      correct:1,
      hint:"Check the cardinal rule of absolute positioning.",
      explain:"By default, absolute elements anchor to the body/HTML tag. Giving the parent 'position: relative' traps the absolute child inside the bounds of its parent container."
    },
    {
      type:"Spot the Bug", pts:20,
      q:"Why isn't z-index applying to this box?",
      code:\`.box {
  background: red;
  width: 100px;
  height: 100px;
  z-index: 50;
}\`,
      kind:"text",
      answer:["position", "static"],
      hint:"What is the default position of every element in HTML, and does z-index work on it?",
      sol:\`.box {\n  background: red;\n  width: 100px;\n  height: 100px;\n  position: relative;\n  z-index: 50;\n}\`,
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
      code:\`.btn {
  background: blue;
  
  /* Which property to watch, how long, what easing pacing */
  /* all | width | background etc...  time    easing */
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  background: green; /* Smoothly changes over 0.3s */
  transform: scale(1.05); /* Buttons slightly grow */
}\`,
      tip:"Never put the transition property on the :hover state, always put it on the original base state! Otherwise the exit transition disappears completely when the mouse leaves."
    },
    {
      name:"Keyframe Animations",
      desc:"For complex, multi-step looping animations completely independent of hover states.",
      code:\`/* Define the animation steps */
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}

/* Call the animation on an element */
.ball {
  /* name   duration timing-function iterations */
  animation: bounce 2s ease-in-out infinite;
}\`,
      tip:"Animations are highly performant when dealing with opacity and transform properties (GPU acceleration). Avoid animating padding/margin/width/height/border which forces the browser to expensively recalculate layouts constantly."
    }
  ],
  exercises:[
    {
      type:"Write Code", pts:15,
      q:"A button smoothly changes color when hovered over. However, when the mouse leaves, it snaps instantly back. Write the CSS code to fix the broken exit animation.",
      code:\`.btn:hover {
  background: green;
  transition: background 0.3s ease;
}\`,
      kind:"text",
      answer:[".btn {", "transition: background 0.3s"],
      hint:"Where should the transition property actually live?",
      sol:\`.btn {\n  transition: background 0.3s ease;\n}\n\n.btn:hover {\n  background: green;\n}\`,
      explain:"Transitions must live on the base `.btn` selecter, not the pseudo `.btn:hover`. This guarantees that both the enter-hover and exit-hover directions are smoothly interpolated."
    },
    {
      type:"Multiple Choice", pts:10,
      q:"Which CSS properties are best practice and performant for animations because they are handled by the computer's GPU hardware?",
      code:\`/* A */ transition: width 0.3s ease;
/* B */ transition: padding-left 0.3s ease;
/* C */ transition: transform 0.3s ease;
/* D */ transition: margin-top 0.3s ease;\`,
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
      code:\`:root {
  /* Defined on the root document level */
  --primary-color: #6366f1;
  --bg-color: #0f172a;
}

h1 {
  /* Using the var() function to recall definitions */
  color: var(--primary-color);
}\`,
      tip:"You can re-define variables inside @media queries! Example: change --primary-color to red on mobile screens and instantly impact every button everywhere."
    },
    {
      name:"The BEM Methodology",
      desc:"A popular naming convention for classes to prevent CSS spaghetti and specificity scaling chaos.",
      code:\`/* Block (The overarching component) */
.card { ... }

/* Element (A child strictly inside the block, using two underscores) */
.card__title { ... }
.card__image { ... }

/* Modifier (A variation of a block/element, using two dashes) */
.card--featured { ... }
.card__button--disabled { ... }\`,
      tip:"A huge asset for large scaling CSS, however utility frameworks like Tailwind CSS have largely superseded strict BEM usage."
    },
    {
      name:"A Professional Landing Page Flow",
      desc:"Combining the 10 Days into a standard layout.",
      code:\`<body>
  <nav class="max-w-7xl mx-auto flex justify-between">...</nav>
  
  <header class="min-h-screen flex items-center justify-center text-center">
     <h1>Hero Headline</h1>
  </header>
  
  <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
     <!-- Feature Cards -->
  </section>
  
  <footer class="bg-gray-900 text-white">...</footer>
</body>\`,
      tip:"The combination of Flexbox for the inner-component alignment plus Grid for macro section alignment solves 99% of complex landing page layouts seamlessly."
    }
  ],
  exercises:[
    {
      type:"Multiple Choice", pts:10,
      q:"In BEM naming conventions, what does two dashes (--) indicate?",
      code:\`.btn--primary\`,
      kind:"mc",
      opts:["A child element","A modifier or variation","A CSS Variable","A specific page"],
      correct:1,
      hint:"BEM stands for Block, Element, Modifier.",
      explain:"Two dashes (--) indicate a Modifier (e.g., .btn--large or .btn--disabled), signifying a variation of a block element. Two underscores (__) indicate a child Element."
    },
    {
      type:"Spot the Bug", pts:15,
      q:"A developer attempts to define a root CSS variable, but it throws syntax errors and remains undefined.",
      code:\`:root {
  primary-color: #0f172a;
}\n
h1 {
  color: var(--primary-color);
}\`,
      kind:"text",
      answer:["--", "dash"],
      hint:"Look meticulously at the variable definition inside :root. Is a special prefix required?",
      sol:\`:root {\n  --primary-color: #0f172a;\n}\`,
      explain:"CSS Variables MUST natively begin directly with a strict double dash (--). This unique syntax prefix was implemented specifically by design so future native CSS properties never risk colliding with developer namespace declarations."
    }
  ]
}
`;

const fileContents = fs.readFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), 'utf8');
const lines = fileContents.split('\\n');
lines.splice(lines.length - 2, 0, ',' + chunk);
fs.writeFileSync(path.join(__dirname, 'app/ai-tools/bootcamp/html-css-exercises/data.ts'), lines.join('\\n'));
console.log('Days 7-10 injected!');
