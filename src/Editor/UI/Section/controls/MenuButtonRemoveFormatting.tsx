import { FormatClear } from "@mui/icons-material";
import { useEdtiorContext } from "../../../Context/EditorContext";
import MenuButton, { type MenuButtonProps } from "./MenuButton";

export type MenuButtonRemoveFormattingProps = Partial<MenuButtonProps>;

/**
 * A control button removes all inline formatting of marks by calling Tiptap’s
 * unsetAllMarks command (https://tiptap.dev/api/commands/unset-all-marks).
 */
export default function MenuButtonRemoveFormatting(
  props: MenuButtonRemoveFormattingProps
) {
  const {editor} = useEdtiorContext();
  return (
    <MenuButton
      tooltipLabel="Remove inline formatting"
      IconComponent={FormatClear}
      disabled={!editor?.isEditable || !editor.can().unsetAllMarks()}
      onClick={() => editor?.chain().focus().unsetAllMarks().run()}
      {...props}
    />
  );
}
