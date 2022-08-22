Basic Syntax
============
**Selector**: HTML elements to which CSS rules apply
*Universal selector*: * applies to elements of any type
e.g.
* {
  color: purple;
}

*Type selector*: selects all elements of a given type
e.g. <div>
div {
  color: white;
}

*Class selector*: selects all elements with the given class
e.g. <div class="example">
.example {
  color: red;
}

*ID selector*: selects all elements with the given ID
e.g. <div id="example">
#example {
  background-color: red;
}

The major difference between classes and IDs is that an element can only have one ID. An ID cannot be repeated on a single page, and the ID attribute should not contain any whitespace at all.

Multiple selectors
==================

*group selectors together* , groups selectors
.example1,
.example2 {
  color: white;
  background-color: black;
}
.example1 {
  /* several unique declarations */
}
.example2 {
  /* several unique declarations */
}

*chaining selectors*: selects any element that has all included selectors (not type)
<div>
  <div class="example header">Latest Posts</div>
  <p class="example preview" id="id1">This is where a preview for a post might go.</p>
</div>

.example.header {
  color: red;
}
.example#id1 {
  color: blue;
}

*descendant combinator*: space selects parent/child, this will select A & B
<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
  </div>
</div>
<div class="contents"></div> <!-- C -->
.ancestor .contents {
  /* some declarations */
}

Properties
==========

**Color and background-color**

p {
  /* hex example: */
  color: #1100ff;
  /* rgb example: */
  color: rgb(100, 0, 127);
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}

**Typography Basics and Text-Align**

*font-family* can be a single value or a comma-separated list of values, for the browser to use the next one as a fallback
font-family: "Times New Roman", sans-serif;

*font-size* size of the font
font-size: 22px;

*font-weight* boldness of text, assuming the font supports the specified weight
font-weight: bold;
font-weight: 700; (equivalent of bold) - usually 100 to 900

*text-align* align text horizontally within an element
text-align: center

**Image Height and Width**
img {
  height: auto; (to not lose proportions)
  width: 500px;
}

It’s best to include both of these properties for <img> elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a height and width prevents this from happening, as space will be “reserved” on the page and will just appear as a blank space until the image loads.

The Cascade of CSS
==================
The cascade is what determines which rules actually get applied to our HTML

**Specificity**
Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it

1. Inline styles
2. ID
3. Class
4. Type

When no declaration has a selector with a higher specificity, a larger amount of a single selector will beat a smaller amount of that same selector

**Inheritance**
Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties are usually inherited

**Rule Order**
Whichever rule was the last defined is the winner

Adding CSS to HTML
==================

**External CSS**
Create an external style.css file and add to html head
<head>
  <link rel="stylesheet" href="styles.css">
</head>

**Internal CSS**
Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself instead of creating a completely separate file. 
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }
  </style>
</head>
<body>...</body>

**Inline CSS**
Inline CSS makes it possible to add styles directly to HTML elements, though this method isn’t as recommended
<body>
  <div style="color: white; background-color: black;">...</div>
</body>