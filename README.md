# React Rich Text Editor

![Build Status](https://travis-ci.org/sstur/react-rte.svg?branch=master)

This is a UI component built completely in React that is meant to be a full-featured textarea replacement similar to [CKEditor][ckeditor], [TinyMCE][tinymce] and other [rich text "WYSIWYG" editors][rte]. It's based on the excellent, open source [Draft.js][draft-js] from Facebook which is performant and production-tested.

## Demo

Try the editor here: [react-rte.org/demo][react-rte-demo]

[![Screenshot 1](https://dl.dropboxusercontent.com/u/341900/images/2016-03-08-073550.png)][react-rte-demo]


## Getting Started

    $ npm install --save react-rte

`RichTextEditor` is the main editor component. It is comprised of the Draft.js `<Editor>`, some UI components (e.g. toolbar) and some helpful abstractions around getting and setting content with HTML/Markdown.

`RichTextEditor` is designed to be used like a `textarea` except that instead of `value` being a string, it is an object with `toString` on it. Creating a `value` from a string is also easy using `createValueFromString(markup, 'html')`.

### Example Usage:

This example uses newer JavaScript and JSX. For an example in old JavaScript, [see below](#example-with-es5-and-no-jsx).

```javascript
import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

class MyStatefulEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}
```


### Toolbar Customization

```javascript

render() {
  // The toolbarConfig object allows you to specify custom buttons, reorder buttons and to add custom css classes.
  // Supported inline styles: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Inline-Styles.md
  // Supported block types: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Custom-Block-Render.md#draft-default-block-render-map
  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
      {label: 'Italic', style: 'ITALIC'},
      {label: 'Underline', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_DROPDOWN: [
      {label: 'Normal', style: 'unstyled'},
      {label: 'Heading Large', style: 'header-one'},
      {label: 'Heading Medium', style: 'header-two'},
      {label: 'Heading Small', style: 'header-three'}
    ],
    BLOCK_TYPE_BUTTONS: [
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'}
    ]
  };
  return (
    <RichTextEditor toolbarConfig={toolbarConfig} />
  );
}

```

## Motivation

In short, this is a 2016 approach to rich text editing built on modern, battle-hardened components and, importantly, we do not store document state in the DOM, eliminating entire classes of common "WYSIWYG" problems.

This editor is built on [Draft.js][draft-js] from Facebook. Draft.js is more of a low-level framework (`contentEditable` abstraction), however this component is intended to be a fully polished UI component that you can reach for when you need to replace a `<textarea/>` in your application to support bold, italic, links, lists, etc.

The data model in Draft.js allows us to represent the document in a way that is mostly agnostic to the view/render layer or the textual representation (html/markdown) you choose. This data model encapsulates the content/state of the editor and is based on [Immutable.js][immutablejs] to be both performant and easy to reason about.

## Features

 * Pure React and fully declarative
 * Supported formats: HTML and Markdown (coming soon: extensible support for custom formats)
 * Document Model represents your document in a sane way that will [deterministically convert to clean markup](#deterministic-output) regardless of your format choice
 * Takes full advantage of Immutable.js and the excellent performance characteristics that come with it.
 * Reliable undo/redo without a large memory footprint
 * Modern browser support

## Deterministic Output

Unlike typical rich text editors (such as [CKEditor][ckeditor] and [TinyMCE][tinymce]) we keep our content state in a well-architected data model instead of in the view. One important advantage of separating our data model from our view is deterministic output.

Say, for instance, you select some text and add bold style. Then you add italic style. Or what if you add italic first and then bold. The result should be the same either way: the text range has both bold and italic style. But in the browser's view (Document Object Model) is this represented with a `<strong>` inside of an `<em>` or vice versa? Does it depend on the order in which you added the styles? In many web-based editors the HTML output *does* depend on the order of your actions. That means your output is non-deterministic. Two documents that look exactly the same in the editor will have different, sometimes unpredictable, HTML representations.

In this editor we use a pure, deterministic function to convert document state to HTML output. No matter how you *arrived at* the state, the output will be predictable. This makes everything easier to reason about. In our case, the `<strong>` will go inside the `<em>` every time.

## API

### Required Props
  * `value`: Used to represent the content/state of the editor. Initially you will probably want to create an instance using a provided helper such as `RichTextEditor.createEmptyValue()` or `RichTextEditor.createValueFromString(markup, 'html')`.
  * `onChange`: A function that will be called with the "value" of the editor whenever it is changed. The value has a `toString` method which accepts a single `format` argument (either 'html' or 'markdown').

### Other Props
  All the props you can pass to Draft.js `Editor` can be passed to `RichTextEditor` (with the exception of `editorState` which will be generated internally based on the `value` prop).
  
  * `autoFocus`: setting this to true will automatically focus input into the editor when the component is mounted

### EditorValue Class
In Draft.js `EditorState` contains not only the document contents but the entire state of the editor including cursor position and selection. This is helpful for many reasons including undo/redo. To make things easier for you, we have wrapped the state of the editor in an `EditorValue` instance with helpful methods to convert to/from a HTML or Markdown. An instance of this class should be passed to `RichTextEditor` in the `value` prop.

The `EditorValue` class has certain optimizations built in. So let's say you are showing the HTML of the editor contents in your view. If you change your cursor position, that will trigger an `onChange` event (because, remember, cursor position is part of `EditorState`) and you will need to call `toString()` to render your view. However, `EditorValue` is smart enough to know that the *content* didn't actually change since last `toString()` so it will return a cached version of the HTML.

Optimization tip: Try to call `editorValue.toString()` only when you actually need to convert it to a string. If you can keep passing around the `editorValue` without calling `toString` it will be very performant.

### Example with ES5 and no JSX
```javascript
var React = require('react');
var RichTextEditor = require('react-rte');

React.createClass({
  propTypes: {
    onChange: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      value: RichTextEditor.createEmptyValue()
    };
  },

  render: function() {
    return React.createElement(RichTextEditor, {
      value: this.state.value,
      onChange: this.onChange
    });
  },

  onChange: function(value) {
    this.setState({value: value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  }

});
```

## TODO

 - Support images
 - Better test coverage
 - Documentation for using this editor in your projects
 - Fix some issues with Markdown parsing (migrate to `remark` parser)
 - Internationalization
 - Better icons and overall design

## Known Limitations

Currently the biggest limitation is that images are not supported. There is a plan to support inline images (using decorators) and eventually Medium-style block-level images (using a custom block renderer).

Other limitations include missing features such as: text-alignment and text color. These are coming soon.

React prior v15 will log the following superfluous warning:

> A component is contentEditable and contains children managed by
> React. It is now your responsibility to guarantee that none of
> those nodes are unexpectedly modified or duplicated. This is
> probably not intentional.

As all nodes are managed internally by Draft, this is not a problem and this [warning can be safely ignored](https://github.com/facebook/draft-js/issues/53). You can suppress this warning's display completely by duck-punching `console.error` before instantiating your component:

```javascript
console.error = (function(_error) {
  return function(message) {
    if (typeof message !== 'string' || message.indexOf('component is `contentEditable`') === -1) {
      _error.apply(console, arguments);
    }
  };
})(console.error);
```

## Contribute

I'm happy to take pull requests for bug-fixes and improvements (and tests). If you have a feature you want to implement it's probably a good idea to open an issue first to see if it's already being worked on. Please match the code style of the rest of the project (ESLint should enforce this) and please include tests. Thanks!

## Run the Demo
Clone this project. Run `npm install`. Run `npm run build-dist` then point the server of your choice (like [serv][serv]) to `/demo.html`.

## License

This software is [ISC Licensed](/LICENSE).


[ckeditor]: http://ckeditor.com/
[draft-js]: https://facebook.github.io/draft-js/
[immutablejs]: https://facebook.github.io/immutable-js/
[react-rte-demo]: https://react-rte.org/demo
[rte]: https://www.google.com/search?q=web+based+rich+text+editor
[serv]: https://www.npmjs.com/package/serv
[tinymce]: https://www.tinymce.com/
