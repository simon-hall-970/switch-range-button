# Switch range control component for React

This project is to build a UI component that uses different mouse events to control both a switch and range input with a single element.

## Intended functionality
On a single div element:

- a single left click on the element will act as a switch to toggle a "checked" state between true or false.
- holding down a right click while moving the mouse up and down will control a range input and set the state accordingly.
- the range input only works when "checked" is set to true.

## Styles
The component uses styled-components for the styling.  This allows a single element to be styled conditionally and make use of js variables as properties of the css attributes.

Specifically the user will receive visual feedback when using a control.  The div will change style based on the true or false nature of the "checked" state.  When "checked" is true the background will fill from bottom to top as the range moves from it's minimum to it's maximum.




Check it works on mobile devices as well.
