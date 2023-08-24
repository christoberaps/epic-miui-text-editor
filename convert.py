import json

with open('content.json', 'r') as json_file:
    data = json.load(json_file)


blockTags = {
    "doc": parserFunciton("doc"),
    "heading": parserFunciton("heading"),
    "taskList": parserFunciton("taskList"),
    "taskItem": parserFunciton("taskItem"),
    "blockquote": parserFunciton("blockquote"),
    "hardBreak": parserFunciton("hardBreak"),
}

markTags = {
    "code": "w:code",
    "link": "w:link",
    "underline": "w:underline",
}

def innterContent(innerNodes):
    if innerNodes is not None:
        # return ''.join(map(marksParser, innerNodes))
        print(innerNodes)
    return ""

def jsonToHTML(nodes):

    def nodesParser(node):
        tag = node['type']  
        if tag == "text":
            return node['text']
        else:
            return f"<{blockTags[tag]}>" + innterContent(node.get('content')) + f"</{blockTags[tag]}>"
    return ''.join(map(nodesParser, nodes))

print(f"<doc>" + jsonToHTML(data['content']) + "</doc>")