import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Placeholder from '@tiptap/extension-placeholder';
import styles from './styles/Editor.module.css';
import Indent from './extensions/KeyboardControl';
import './styles/Editor.css';

export function Editor() {
    const editor = useEditor({
        editorProps: {},

        extensions: [
            Document.extend({
                content: 'heading block*',
            }),
            StarterKit.configure({
                codeBlock: false,
                document: false,
            }),
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'Untitled';
                    }

                    if (node.type.name === 'editorBlock') {
                        return '';
                    }

                    return "Type '/' to see commands...";
                },
            }),
            Indent,
        ],
        content: '',
    });

    return <EditorContent className={styles.container} editor={editor} />;
}
