import React, {useState} from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function WhyHealtho() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        console.log('handleClick called');
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        console.log('handleClose called');
        setAnchorEl(null);
    }

  return (
    <div>
        <button className="nav-button"
            id="why-healtho-button"
            aria-controls={open ? 'why-healtho-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Why Healtho
        </button>
        <Menu 
        className="nav-dropdown"
        id="why-healtho-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': 'why-healtho-button',
        }}
        >
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Solutions</MenuItem>
            <MenuItem onClick={handleClose}>Resources</MenuItem>
        </Menu>
    </div>
  )
}