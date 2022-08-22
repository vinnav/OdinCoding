**Add to parent**
diplay: flex

**Add to child**
flex: 1
that equals
    flex-grow: 1
        flex-item’s “growth factor”, relative to grow of other items
    flex-shrink: 1 
        similar to growth but applied only if the size of all flex items is larger than their parent container, useful for elements that should not shrink
    flex-basis: 0
        sets the initial size of a flex item, so any sort of flex-growing or flex-shrinking starts from that baseline size. Using auto as a flex-basis tells the item to check for a width declaration (e.g. width: 250px).
or
    flex: 1 1 0

In practice you will likely not be using complex values for flex-grow, flex-shrink or flex-basis. Generally, you’re most likely to use declarations like flex: 1; to make divs grow evenly and flex-shrink: 0 to keep certain divs from shrinking.