# React Rich Text Editor

This is a forked version of react-rte#image-support(by sstur).
There is an **image button** which can upload images by **url**.
I'll remove this package if original package adopts image-support feature.
[Original Package](https://npmjs.com/package/react-rte)


## Getting Started

    $ npm install --save react-rte-image

`RichTextEditor` is the main editor component. It is comprised of the Draft.js `<Editor>`, some UI components (e.g. toolbar) and some helpful abstractions around getting and setting content with HTML/Markdown.

`RichTextEditor` is designed to be used like a `textarea` except that instead of `value` being a string, it is an object with `toString` on it. Creating a `value` from a string is also easy using `createValueFromString(markup, 'html')`.

### Example Usage:

This example uses newer JavaScript and JSX. For an example in old JavaScript, [see below](#example-with-es5-and-no-jsx).

```javascript
import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte-image';

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
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
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

This software is [ISC Licensed](/LICENSE).


[ckeditor]: http://ckeditor.com/
[draft-js]: https://facebook.github.io/draft-js/
[immutablejs]: https://facebook.github.io/immutable-js/
[react-rte-demo]: https://react-rte.org/demo
[rte]: https://www.google.com/search?q=web+based+rich+text+editor
[serv]: https://www.npmjs.com/package/serv
[tinymce]: https://www.tinymce.com/
