# React Rich Text Editor

This is a UI component built completely in React that is meant to be a full-featured textarea replacement similar to [CKEditor][ckeditor], [TinyMCE][tinymce] and other [rich text "WYSIWYG" editors][rte]. It's based on the excellent, open source [Draft.js][draft-js] from Facebook which is performant and production-tested.

**Note: this is in early stage development. Do not use yet.**

## Demo

Try the editor here: [react-rte.org/demo][react-rte-demo]

![Screenshot 1](https://dl.dropboxusercontent.com/u/341900/images/2016-03-08-073550.png)

## Details

Whereas Draft.js aims to be more of a low-level framework (`contentEditable` abstraction), this component is intended to be a fully polished UI component that you can reach for when you need to replace a `<textarea/>` in your application to support bold, italic, links, lists, etc.

The data model in Draft.js allows us to represent the document in a way that is mostly agnostic to the textual representation (html/markdown) you choose. This data model is encapsulated as EditorState and is based on [Immutable.js][immutablejs] to be both performant and easy to reason about. EditorState contains not only the content in the editor document but its entire state including cursor position and selection.

A text representation (like HTML) alone is not sufficient to describe document state, but it is usually desirable to interface with the editor by providing your data in HTML and likewise receive HTML (or Markdown) as output. This is done via a module that can parse the string format into EditorState and conversely serialize EditorState to a string when needed. HTML and Markdown modules are provided out of the box. This is extensible by creating a module for each custom format you wish to support (like bbcode, wikitext/creole or even docx).

Features / Why choose this editor:

 * Pure React and fully declarative.
 * Document Model: Represents your document in a sane way that will produce dependable, deterministic output regardless of your format choice.
 * Supported formats: HTML and Markdown. Extensible to support custom formats.
 * Takes full advantage of Immutable.js and all the great performance characteristics that come along with that.
 * Reliable undo/redo without a large memory footprint.
 * Modern browser support.

Basically, this is a 2016 approach to rich-text editing built on modern, battle-hardened components and, importantly, we do NOT store document state in the DOM (eliminating entire classes of common "WYSIWYG" problems).

## TODO

 - Allow toolbar customization using props
 - Better test coverage
 - Support images
 - Fix some issues with Markdown parsing (possibly move to `remark` parser)
 - Use CSS Modules
 - Internationalization support
 - Documentation for using this editor in your projects
 - Better icons and overall design

## Contribute

I'm happy to take pull requests for bug-fixes and improvements (and tests). If you have a feature you want to implement it's probably a good idea to open an issue first to see if it's already being worked on. Please match the code style of the rest of the project (ESLint should enforce this) and please include tests. Thanks!

## Run the Demo
Clone this project. Run `npm install`. Run `npm run build-demo` then point the server of your choice (like [serv][serv]) to /demo.html.

## License

This software is [BSD Licensed](/LICENSE).


[ckeditor]: http://ckeditor.com/
[draft-js]: https://facebook.github.io/draft-js/
[immutablejs]: https://facebook.github.io/immutable-js/
[react-rte-demo]: https://react-rte.org/demo
[rte]: https://www.google.com/search?q=web+based+rich+text+editor
[serv]: https://www.npmjs.com/package/serv
[tinymce]: https://www.tinymce.com/
