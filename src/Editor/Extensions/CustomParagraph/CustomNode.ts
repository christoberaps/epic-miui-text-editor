import { Node } from "@tiptap/core";

let n = new Node();
const CustomNode = n.extend({
    addNodeView(){
        console.log();
    }
});

let cn = new CustomNode();
