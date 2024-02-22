import React, {useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ForYou() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <div>
        <button className="nav-button"
            id="for-you-button"
            aria-controls={open ? 'for-you-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            For You
        </button>
        <Menu 
        className="nav-dropdown"
        id="for-you-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'for-you-button',
        }}
        >
            <MenuItem onClick={handleClose}>Children</MenuItem>
            <MenuItem onClick={handleClose}>Adolescents</MenuItem>
            <MenuItem onClick={handleClose}>Adults</MenuItem>
            <MenuItem onClick={handleClose}>Seniors</MenuItem>
        </Menu>
    </div>
  )
}