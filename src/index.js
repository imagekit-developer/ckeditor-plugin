import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
// This SVG file import will be handled by webpack's raw-text loader.
// This means that imagekitLogo will hold the source SVG.
import imagekitLogo from './../theme/icons/imagekit-logo.svg';
import IKMediaLibraryWidgetCore from 'imagekit-media-library-widget';

export class ImagekitMediaLibraryWidget extends Plugin {
    init() {
        const editor = this.editor || window.editor;

        editor.ui.componentFactory.add('imagekitMediaLibraryWidget', locale => {
            const view = new ButtonView(locale);

            const pluginOptions = editor.config.get('imagekitMediaLibraryWidget.config');

            // attach to editor context and initialize core widget plugin 
            IKMediaLibraryWidgetCore.call(this);

            // media-library-widget plugin
            const config = {
                container: pluginOptions.container,
                className: pluginOptions.className,
                dimensions: {
                    height: pluginOptions.dimensions.height,
                    width: pluginOptions.dimensions.width,
                },
                view: 'modal',
                renderOpenButton: false,
            };

            function callback(payload) {
                // consume json payload
                payload.data.map(({ name, url }) => {
                    // insert images at cursor position
                    editor.model.change(writer => {
                        const insertPosition = editor.model.document.selection.getFirstPosition();
                        writer.insertElement('image', { src: url, alt: name }, insertPosition);
                    });
                });
            }

            new IKMediaLibraryWidget(config, callback);

            view.set({
                label: 'ImageKit Media Library',
                icon: imagekitLogo,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
                const modal = document.querySelector('.ik-media-library-widget-modal');
                modal.style.display = "block";
            });

            return view;
        });
    }
}
