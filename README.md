# ImageKit CKEditor 5 Plugin

This plugin integrates ImageKit into a custom CKEditor 5 build, allowing you to use the embedded Media Library Widget from within your CKEditor UI. 

With this plugin, you can directly insert images from your ImageKit account into the editor, as well as upload new images to your Media Library.

<img src="https://gblobscdn.gitbook.com/assets%2F-Lulz44snZCQCyuqQ_vg%2F-MTKIls8r82OVCOK9Ouz%2F-MTKJBxZUiN_G6sSysBN%2Fckeditor-4.png?alt=media&token=ed08a3e0-2912-4d8e-a5b5-5ffdfb85a3c6" alt="Image insertion" />

## Installation

To install this plugin, you should make a custom build of CKEditor 5. Follow the instructions [here](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html).

Install the plugin in your custom CKEditor project folder:

```
cd <path_to_custom_ckeditor_build>
npm install --save-dev imagekit-ckeditor5-plugin
```

## Configuration

To load the plugin, configure your editor by editing the `ckeditor.js` file. To use the Media Library Widget, import it as follows:

```js
// custom plugin
import { ImagekitMediaLibraryWidget } from 'imagekit-ckeditor5-plugin';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  // include custom plugin in build
  ImagekitMediaLibraryWidget,
  // ...other components
];

export default Editor;
```

### Build the editor

```bash
npm run build
``` 

## Include the plugin in the frontend

Import the generated build files in your frontend project and use it as follows:

**Example:**

```html
<div class="editor"></div>

<script src="<path_to_custom_ckeditor_build>/ckeditor.js"></script>
```

Create an editor instance that includes the `imagekitMediaLibraryWidget` plugin on the toolbar.

```js
// ckeditor
var editor;

// initialize ckeditor
ClassicEditor
  .create(document.querySelector('.editor'), {
    toolbar: {
      items: [
        // include custom IK ckeditor plugin
        'imagekitMediaLibraryWidget',
        // other ckeditor plugins
        // ...
      ]
    },
    // other settings
  })
  .then(newEditor => {
    editor = newEditor;
    window.editor = newEditor;
  }).catch(error => {
    console.error(error);
  });
```

## Usage

If configured correctly, the plugin will be super simple and easy to use!

To open ImageKit view, click on the highlighted icon:

<img src="https://gblobscdn.gitbook.com/assets%2F-Lulz44snZCQCyuqQ_vg%2F-MTKIls8r82OVCOK9Ouz%2F-MTKJ1G6xe7_ZasSbmDn%2Fckeditor-1.png?alt=media&token=e79921eb-518b-4bfe-aed8-f7bc7667ca4a" alt="CKEditor custom build" />

If you are not logged in already, do so using your ImageKit username and password.

<img src="https://gblobscdn.gitbook.com/assets%2F-Lulz44snZCQCyuqQ_vg%2F-MTKIls8r82OVCOK9Ouz%2F-MTKJ4y7g3vcZMixU_i5%2Fckeditor-2.png?alt=media&token=226ae5c8-b8dd-46b0-b3c6-56da4eda1947" alt="ImageKit widget view" />

The Media Library view should open right up, letting you search and select existing images, as well as upload new ones directly.

<img src="https://gblobscdn.gitbook.com/assets%2F-Lulz44snZCQCyuqQ_vg%2F-MTKIls8r82OVCOK9Ouz%2F-MTKJ8WKd7dZ9-6JoE4g%2Fckeditor-3.png?alt=media&token=4790b4d7-8fc3-44cc-95f8-4327048f26fb" alt="Media Library" />

To insert one or more images into the CKEditor panel, select them and click the "Insert" button in the top right hand area.

<img src="https://gblobscdn.gitbook.com/assets%2F-Lulz44snZCQCyuqQ_vg%2F-MTKIls8r82OVCOK9Ouz%2F-MTKJBxZUiN_G6sSysBN%2Fckeditor-4.png?alt=media&token=ed08a3e0-2912-4d8e-a5b5-5ffdfb85a3c6" alt="Image insertion" />

The modal dialog will close and selected images will be inserted into the editor automatically!
