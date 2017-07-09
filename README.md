# react-truncater

React component that handles text truncation based on max characters allowed

## Installation

npm install --save react-truncater

or

yarn add react-truncater

## Usage

The list of available properties:

chars: PropTypes.number.isRequired: max number of characters after which the ellipsis will be displayed

ellipsisClassName: PropTypes.string: css classname for '...',

more: PropTypes.bool: Should clicking on the '...' display the rest of the text?

handleClick: PropTypes.func: what happens when user clicks on the text

## CSS and preprocessors

The component wraps the given text within a &lt;div&gt; element
with the css classname of 'truncater'.  You may choose to customize this
for margins, paddings, etc.

You may also specify a 'ellipsisClassName' parameter value to style
the ellipsis according to your needs



## License

MIT
# react-truncater
