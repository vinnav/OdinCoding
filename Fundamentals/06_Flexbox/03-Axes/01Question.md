**How do you make flex items arrange themselves vertically instead of horizontally?**
flex-direction: column;

**In a column flex-container, what does flex-basis refer to?**
height

**In a row flex-container, what does flex-basis refer to?**
width

**Why do the previous two questions have different answers?**
flex-containers have 2 axes: the main axis and the cross axis. 
It is the direction of these axes that changes when the flex-direction is changed. 
In most circumstances, flex-direction: row puts the main axis horizontal (left-to-right), and column puts the main axis vertical (top-to-bottom).

https://flexbox.malven.co/

**align-items**
The align-items property will align the items on the cross axis.
- stretch
- flex-start
- flex-end
- center
- baseline

**justify-content**
The justify-content property is used to align the items on the main axis, the direction in which flex-direction has set the flow
- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

**align-self**
Align-items property sets the align-self property on all of the flex items as a group. This means you can explicitly declare the align-self property to target a single item. The align-self property accepts all of the same values as align-items plus a value of auto, which will reset the value to that which is defined on the flex container.

**align-content**
If you have a wrapped multiple-line flex container then you might also want to use the align-content property to control the distribution of space between the rows.
- flex-start
- flex-end
- center
- space-between
- space-around
- stretch
- space-evenly

Aligning childs to the end can be done by assigning them margin-left: auto

**Gaps**
To create a gap between flex items, use the gap, column-gap, and row-gap properties. The column-gap property creates gaps between items on the main axis. The row-gap property creates gaps between flex lines, when you have flex-wrap set to wrap. The gap property is a shorthand that sets both together.

**Typical use cases**
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/



