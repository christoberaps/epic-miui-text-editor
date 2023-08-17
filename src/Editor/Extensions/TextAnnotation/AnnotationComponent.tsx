import { NodeViewProps, NodeViewWrapper } from '@tiptap/react'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Chip, colors } from '@mui/material';

export default (props: NodeViewProps) => {
    const { node } = props;
    const [show, setShow] = React.useState<boolean>(false)

    return (
        <NodeViewWrapper as={'span'} className="react-component">
            {/* {node.attrs.type} */}
            <Chip
            size='small'
                label={node.attrs.type}
                onClick={() => {}}
                onDelete={() => {}}
                // color={colors.red['100']}
                style={{backgroundColor: colors.red['100']}}
                // deleteIcon={<DeleteIcon />}
                variant="outlined"
            />
        </NodeViewWrapper>
    )
}