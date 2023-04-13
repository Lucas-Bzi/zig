import { Extension } from '@tiptap/core';

const KeyboardControl = Extension.create({
    addKeyboardShortcuts() {
        return {
            Tab: () => {
                this.editor
                    .chain()
                    .sinkListItem('listItem')
                    .command(({ tr }) => {
                        tr.insertText('    ');
                        return true;
                    })
                    .run();

                return true;
            },
        };
    },
});

export default KeyboardControl;
