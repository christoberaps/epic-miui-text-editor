import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Chip } from '@mui/material';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    maxWidth: 380,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function AnnotationButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    {
      "color": "#24b6ff",
      "name": "doi"
    },
    {
      "color": "#932a2a",
      "name": "suffix"
    },
    {
      "color": "#d7a8d1",
      "name": "pages"
    },
    {
      "color": "#4ccda6",
      "name": "etal"
    },
    {
      "color": "#37b3d2",
      "name": "editor"
    },
    {
      "color": "#c78ab6",
      "name": "pubid"
    },
    {
      "color": "#ffe01a",
      "name": "author"
    },
    {
      "color": "#337ab7",
      "name": "title"
    },
    {
      "color": "#7f6b66",
      "name": "issn"
    },
    {
      "color": "#07ab7a",
      "name": "year"
    },
    {
      "color": "#8f679e",
      "name": "day"
    },
    {
      "color": "#00f074",
      "name": "publisher-name"
    },
    {
      "color": "#a08c27",
      "name": "collab"
    },
    {
      "color": "#337ab7",
      "name": "publisher-loc"
    },
    {
      "color": "#0da01e",
      "name": "issue"
    },
    {
      "color": "#0be5c4",
      "name": "volume"
    },
    {
      "color": "#a615f4",
      "name": "edition"
    },
    {
      "color": "#735ace",
      "name": "given"
    },
    {
      "color": "#2ae5ad",
      "name": "firstname"
    },
    {
      "color": "#2fb41d",
      "name": "surname"
    },
    {
      "color": "#98ec9d",
      "name": "translator"
    },
    {
      "color": "#00d5ff",
      "name": "source"
    },
    {
      "color": "#11e8e5",
      "name": "url"
    },
    {
      "color": "#bab0b0",
      "name": "x"
    },
    {
      "color": "#f5cdb2",
      "name": "label"
    },
    {
      "color": "#55a5a0",
      "name": "month"
    },
    {
      "color": "#ffea00",
      "name": "person"
    },
    {
      "color": "#e89a11",
      "name": "date-in-citation"
    },
    {
      "color": "#a4bcb6",
      "name": "prefix"
    },
    {
      "color": "#9d9390",
      "name": "isbn"
    }
  ]

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        size='small'
        color='inherit'
        onClick={handleClick}
      // endIcon={<KeyboardArrowDownIcon />}
      >
        Annotation
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

        {options.map((item, index) => {
          return (
            <Chip
              key={index}
              label={item.name}
              style={{ backgroundColor: item.color, margin: '2px', cursor: 'pointer' }}
              size="small"
            />
          )
        })}
      </StyledMenu>
    </div>
  );
}