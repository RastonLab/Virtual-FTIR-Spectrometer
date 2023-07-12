import React from "react";

// components
import { ReactComponent as RLLogo } from "./components/svgs/RastonLabLogo.svg";
import Popup from "./components/Popup";

// dictionary
import { menuItems } from "./dictionaries/menuItems";

// router
import { Outlet, Link } from "react-router-dom";

// style
import "./style/App.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DevMode from "./components/DevMode";

export default function App() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorFileMenu, setAnchorFileMenu] = React.useState(null);
  const [menuOptions, setMenuOptions] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenOptionsMenu = (event, page) => { 
    setAnchorFileMenu(event.currentTarget);
    setMenuOptions(page.submenu)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseOptionsMenu = () => {
    setAnchorFileMenu(null);
    setMenuOptions(null);
  };

  return (  
    <div>  
      <AppBar className="nav-area" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Start Small Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="Menu and Navigation"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {menuItems.map((page) => (
                <>
                  <Button
                    key={page.label}
                    onMouseEnter={(e) => handleOpenOptionsMenu(e, page)}
                    sx={{ my: 2, color: "white", display: 'block', width: "100%" }}
                    className="menu-items"
                  >
                    {page.label}
                  </Button>
                  <Menu
                  sx={{ mt: '45px', display:{ xs: 'flex', md: 'none' } }}
                  id="menu-appbar"
                  anchorEl={anchorFileMenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'right',
                    horizontal: 'top',
                  }}
                  open={Boolean(anchorFileMenu)}
                  onClose={handleCloseOptionsMenu}
                  className="dropdown-items"
                  >
                    {menuOptions && menuOptions.map((submenu) => {
                      if (submenu.button) {
                        return (
                          <li key={submenu}  >
                            <Popup
                              label={submenu.label}
                              title={submenu.title}
                              text={submenu.text}
                            />
                          </li>
                        );
                      } else if (submenu.link) {
                        return (
                          <li key={submenu} style={{padding: "0.3rem 0.2rem"}} >
                            <Link to={submenu.link ?? "#"}>
                              {submenu.label}
                            </Link>
                          </li>
                        );
                      } else {
                        return (<ul>{submenu.component}</ul>)
                      }
                    })}
                  </Menu>
                </>
              ))}
              </Menu>
            </Box>
            {/* End Small Menu */}

            {/* Start Logo and Title */}
            <a className="logolink" target="_blank" rel="noreferrer" href="https://www.rastonlab.org/">
              <RLLogo width={50} height={50} viewBox="0 0 100 100" />
            </a>
            <Link className="logo" to="/" >
              FTIR-SIS
            </Link>
            {/* End Logo and Title */}

            {/* Start Full Sized Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {menuItems.map((page) => (
                <>
                  <Button
                    key={page.label}
                    onClick={(e) => handleOpenOptionsMenu(e, page)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    className="menu-items"
                  >
                    {page.label}
                  </Button>
                  <Menu
                  sx={{ mt: '45px', display:{ xs: 'none', md: 'flex' } }}
                  id="menu-appbar"
                  anchorEl={anchorFileMenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorFileMenu)}
                  onClose={handleCloseOptionsMenu}
                  className="dropdown-items"
                  >
                    {menuOptions && menuOptions.map((submenu) => {
                      if (submenu.button) {
                        return (
                          <li key={submenu}  >
                            <Popup
                              label={submenu.label}
                              title={submenu.title}
                              text={submenu.text}
                            />
                          </li>
                        );
                      } else if (submenu.link) {
                        return (
                          <li key={submenu}  >
                            <Link to={submenu.link ?? "#"} onClick={submenu.action}>
                              {submenu.label}
                            </Link>
                          </li>
                        );
                      } else {
                        return (<ul>{submenu.component}</ul>)
                      }
                    })}
                  </Menu>
                </>
              ))}
            </Box>
            {/* End Full Sized Menu */}
            <DevMode />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet/>
    </div>
  );
}
