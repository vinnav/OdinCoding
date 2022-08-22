*What are the main differences between external, internal, and inline   CSS?*
External is done with a separate file, recommended to be tidier
Internal is included in the Head, useful to style a page differntly than the rest
Inline is done within the element, quick but could get messy

*What is the syntax for class and ID selectors?*
.class 
#id

*How would you apply a single rule to two different selectors?*
comma separated selectors, 
e.g. 
.class1, 
.class2 {

}

*Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?*
#title.primary

*What does the descendant combinator do?*
select only elements descendant of the selected one
e.g.
.parent > .child

*Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?*
Class