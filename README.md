# Javascript 30 - Day 3 - CSS Variables and JS
&nbsp;

This mini project was created for the Javascript 30 challenge. Here's the [link].

[link]: https://bryanwzc.github.io/day3-js30/

&nbsp;
### Instructions
&nbsp;

Modify the spacing and blur through the range dial given. Click on the color block to activate the color picker and change the color.

&nbsp;
### Lessons Learned
&nbsp;

- Learned abour CSS elements and how to use JS to update them
  - Usually declared on root which is similar to html element which is the highest level
  - Starting with `--` to declare the variables
- `querySelector` gives you a node list. Not an array as it does not have all the methods that an array does.
- `change` event for `addEventListener` when there is a change
- `mousemove` event executes event when mouse is moved
  - On chrome developer tool, ensure that device tool bar is not enabled in order for it to be on `computer mode` instead of devices using touch screens
- 'touchmove' is similar to above bt for touchscreen devices
- `dataset` is an object that contains all the data attributes
- `||` operator used to return left operand if true and right operand if false (from undefined value obtained)
- `document.documentElement` refers to the root element of the document
  - Used to grab the variables specified in `:root` of CSS

&nbsp;
##### Further Notes: Using CSS Custom Properties
&nbsp;

- Custom properties known also as CSS variables or cascading variables
- Values are not stored like variables but used when needed
- Used for websites with repeated values of CSS and improves readability 
- Custom properties inherit. If no preperties are set at that level, it will bubble up to the level until it finds the value associated
- You can include fall back values. See example below:

```
.two {
  color: var(--my-var, red); /* Red if --my-var is not defined */
}
```

- Invalid variables are ignored and the eleent defaults to its default value or inherits the value from it's parent

