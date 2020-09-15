import React, { useContext } from 'react';
import authContext from '../context/auth/authContext';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export default function FadeMenu() {
  const { logout, user } = useContext(authContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/"> Home</Link>
        </MenuItem>
        {user ? (
          <div>
            <MenuItem onClick={handleClose}>
              <Link to="/chat"> Chat</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/packinglist"> Your Packing List</Link>
            </MenuItem>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={handleClose}>
              <Link to="/login"> Login</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/register"> Register</Link>
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
}
