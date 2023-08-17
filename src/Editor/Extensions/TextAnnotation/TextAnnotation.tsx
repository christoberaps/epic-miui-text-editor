import { Mark, mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react'

import Annotation from './AnnotationComponent.js'


export const textAnnotation = {
    tag: 'annotation',
    name: 'annotation'
};

const { tag, name } = textAnnotation;

// Node

export default Node.create({
    name,

    // group: 'inline',
    // inline: true,
    // draggable: true,
    // content: 'inline*',

    group: "block",
    content: "block+",
    draggable: true,
    isolating: true,

    parseHTML() {
        return [
            {
                tag,
            },
        ]
    },

    addAttributes() {
        return {
            type: {
                name: 'type',
                default: 'Hello',
                parseHTML: (el) => (el as HTMLSpanElement).getAttribute('type'),
                renderHTML: (attrs) => ({ 'type': attrs.type })
            }
        }
    },

    addKeyboardShortcuts() {
        return {
            'Mod-Enter': () => {
                return this.editor.chain().insertContentAt(this.editor.state.selection.head, { type: this.type.name }).focus().run()
            },
        }
    },

    renderHTML({ HTMLAttributes }) {
        return [tag, mergeAttributes(HTMLAttributes), 0]
    },

    addNodeView() {
        return ReactNodeViewRenderer(Annotation, {as: 'span'})
    },
})