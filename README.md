# React Rich Text Editor

This is a forked version of react-rte#image-support(by sstur).
I'll remove this package if original package adopts image-support feature.
[Original Package](https://github.com/sstur/react-rte)

## Getting Started

    $ npm install --save react-rte-image

### Toolbar Customization

```javascript

render() {
  // The toolbarConfig object allows you to specify custom buttons, reorder buttons and to add custom css classes.
  // Supported inline styles: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Inline-Styles.md
  // Supported block types: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Custom-Block-Render.md#draft-default-block-render-map
  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'LINK_BUTTONS', 'IMAGE_BUTTON', BLOCK_TYPE_BUTTONS', 'HISTORY_BUTTONS'],
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

## Run the Demo
Clone this project. Run `npm install`. Run `npm run build-dist` then point the server of your choice (like [serv][serv]) to `/demo.html`.

## License

This software is [BSD Licensed](/LICENSE).


[ckeditor]: http://ckeditor.com/
[draft-js]: https://facebook.github.io/draft-js/
[immutablejs]: https://facebook.github.io/immutable-js/
[react-rte-demo]: https://react-rte.org/demo
[rte]: https://www.google.com/search?q=web+based+rich+text+editor
[serv]: https://www.npmjs.com/package/serv
[tinymce]: https://www.tinymce.com/
