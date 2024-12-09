import { useState, useEffect } from 'react';
import { AppBar, Toolbar, ClickAwayListener } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './Topbar.css';

interface TopbarProps {
  mobileOpen?: boolean,
  setMobileOpen?: any,
  display?: any
}

const Topbar: React.FC<TopbarProps> = ({ mobileOpen, setMobileOpen, display }) => {

  //const [user] = useState<any>({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = (event: any) => {
    event.stopPropagation();
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    let handler = (event: any) => {
      if (!event.target.closest(".dropdown-content")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <AppBar
      sx={{
        width: { md: `calc(100%)` },
        ml: { md: '240px' },
      }}
      className='topbar'
    >
      <Toolbar>
        <IconButton
          color="default"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 3, display: { display } }}
        >
          <MenuIcon />
        </IconButton>
        <div className='topbar-avathar'>
          <div className='topbar-text'>Home</div>
          <div className='topbar-text'>API</div>
          <div className='topbar-text'>Samples</div>
        </div>
        {dropdownOpen && (
          <ClickAwayListener onClickAway={() => { setDropdownOpen(false) }}>
            <div className="dropdown-content">
              <ul>
                <li onClick={toggleDropdown}>
                  <PersonOutlineOutlinedIcon className='dropdown-icon' />
                  <span className='dropdown-text'>Profile</span>
                </li>
                <li onClick={toggleDropdown}>
                  <ManageAccountsOutlinedIcon className='dropdown-icon' />
                  <span className='dropdown-text'>Settings</span>
                </li>
                <li onClick={handleLogOut}>
                  <LogoutIcon className='dropdown-icon' />
                  <span className='dropdown-text'>Log out</span>
                </li>
              </ul>
            </div>
          </ClickAwayListener>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;