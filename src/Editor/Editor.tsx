import { Lock, LockOpen, TextFields } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography, colors } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  LinkBubbleMenu,
  MenuButton,
  RichTextEditor,
  RichTextReadOnly,
  TableBubbleMenu,
  type RichTextEditorRef,
} from "mui-tiptap";
// import EditorMenuControls from "./EditorMenuControls";
import useExtensions from "./useExtensions";
import Navbar from "./UI/Section/Navbar";
import { Editor as EditorType } from "@tiptap/core";
import { EditorContextType, useEdtiorContext } from "./Context/EditorContext";

const exampleContent =
  // '<annotation type="name">First</annotation> <annotation type="surname">Second</annotation>';
  '<p><annotation type="name">First</annotation> middle <annotation type="surname">Second</annotation></p>';

export default function Editor() {
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });
  const rteRef = useRef<RichTextEditorRef>(null);
  const [isEditable, setIsEditable] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [submittedContent, setSubmittedContent] = useState("");

  const { editor, setEditor } = useEdtiorContext();
  console.log(editor);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
      </Grid>

      {/* <Grid container spacing={2}>
        <Grid bgcolor={colors.grey['400']} item xs={8}>
        </Grid>
        <Grid bgcolor={colors.grey['500']} item xs={4}>
        </Grid>
        <Grid bgcolor={colors.grey['600']} item xs={4}>
        </Grid>
        <Grid bgcolor={colors.grey['700']} item xs={8}>
        </Grid>
      </Grid> */}

      <Grid container>
        <Grid zIndex={'-30'} item bgcolor={colors.grey['400']} xs={2}>
        </Grid>
        <Grid item bgcolor={colors.grey['200']} xs={8}>
          <Box
            bgcolor={colors.grey['A100']}
            sx={{
              // An example of how editor styles can be overridden. In this case,
              // setting where the scroll anchors to when jumping to headings. The
              // scroll margin isn't built in since it will likely vary depending on
              // where the editor itself is rendered (e.g. if there's a sticky nav
              // bar on your site).
              "& .ProseMirror": {
                "& h1, & h2, & h3, & h4, & h5, & h6": {
                  scrollMarginTop: showMenuBar ? 50 : 0,
                },
              },
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            <RichTextEditor
              ref={rteRef}
              extensions={extensions}
              content={exampleContent}
              editable={isEditable}
              // renderControls={() => <EditorMenuControls />}
              onCreate={(props) => {
                window.editor = props.editor;
                setEditor(props.editor);
                // dispatch(initEditor({ editor: props.editor }));
              }}
              RichTextFieldProps={{
                MenuBarProps: {
                  hide: !showMenuBar,
                },
                // Below is an example of adding a toggle within the outlined field
                // for showing/hiding the editor menu bar, and a "submit" button for
                // saving/viewing the HTML content
              }}
            >
              {() => (
                <>
                  <LinkBubbleMenu />
                  <TableBubbleMenu />
                </>
              )}
            </RichTextEditor>
          </Box>
        </Grid>
        <Grid item bgcolor={colors.grey['400']} xs={2}>
        </Grid>
      </Grid>
    </>
  );
}
