import React, { useState } from "react";

// components
import { ReactComponent as RLLogo } from "./images/RastonLabLogo.svg";
import DevMode from "./components/DevMode";
import Popup from "./components/Popup";
import LandingPage from "./routes/LandingPage";
import CloseButton from "./components/CloseButton";

// dictionary
import { menuItems } from "./dictionaries/menuItems";

// mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  Drawer,
  Popover,
} from "@mui/material";

// mui icons
import InfoIcon from "@mui/icons-material/Info";
import { GitHub } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

// router
import { Outlet, Link } from "react-router-dom";

// style
import "./style/App.css";

/**
 * "Base" of this project. Contains the MenuBar with room for other "routes" to exist on the rest of the page
 */
export default function App() {
  const [expanded, setExpanded] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [gitHubPopover, setGutHubPopover] = useState(false);
  const [infoPopover, setInfoPopover] = useState(false);

  const [welcomeOpen, setWelcomeOpen] = useState(
    localStorage.getItem("checked") === "true" ? false : true
  );

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleOpenNavMenu = () => {
    setDrawer(true);
  };

  const handleCloseNavMenu = () => {
    setDrawer(false);
  };

  const openGitHubPopover = (event) => {
    setGutHubPopover(event.currentTarget);
  };

  const closeGitHubPopover = () => {
    setGutHubPopover(null);
  };

  const openInfoPopover = (event) => {
    setInfoPopover(event.currentTarget);
  };

  const closeInfoPopover = () => {
    setInfoPopover(null);
  };

  const handleWelcomeClose = () => {
    setWelcomeOpen(false);
  };

  return (
    <div>
      <Dialog
        className="welcome popup"
        open={welcomeOpen}
        onClose={handleWelcomeClose}
      >
        <CloseButton
          id="customized-dialog-title"
          onClose={handleWelcomeClose}
        />
        <LandingPage />
      </Dialog>

      <AppBar className="nav-area" position="static">
        <Container maxWidth="xl" sx={{ paddingLeft: { xs: 0 } }}>
          <Toolbar
            sx={{
              alignItems: "flex-start",
              padding: "10px",
              margin: "0",
              justifySelf: "left",
            }}
          >
            {/* Start Small Menu */}
            <Box sx={{ flexGrow: 0.1, display: { xs: "flex", lg: "none" } }}>
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
              <Drawer
                open={drawer}
                anchor={"left"}
                onClose={handleCloseNavMenu}
                className="mini-menu"
              >
                <Box>
                  {menuItems.map((page) => (
                    <Accordion
                      key={page.label}
                      square
                      expanded={expanded === page.label}
                      onChange={handleChange(page.label)}
                      onMouseLeave={handleChange("")}
                      disableGutters
                    >
                      <AccordionSummary className="menu-items">
                        {page.label}
                      </AccordionSummary>
                      <AccordionDetails className="dropdown">
                        {page.submenu.map((submenu) => {
                          if (submenu.button) {
                            return (
                              <Popup
                                key={submenu.label}
                                label={submenu.label}
                                title={submenu.title}
                                text={submenu.text}
                              />
                            );
                          } else if (submenu.link) {
                            return (
                              <p
                                key={submenu.link}
                                className={"dropdown-items"}
                              >
                                <Link
                                  to={submenu.link ?? "#"}
                                  onClick={submenu.action}
                                >
                                  {submenu.label}
                                </Link>
                              </p>
                            );
                          } else {
                            return (
                              <ul
                                key={submenu.label}
                                className={"dropdown-items"}
                              >
                                {submenu.component}
                              </ul>
                            );
                          }
                        })}
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Drawer>
            </Box>
            {/* End Small Menu */}

            {/* Start Logo and Title */}
            <a
              className="logolink"
              target="_blank"
              rel="noreferrer"
              href="https://www.rastonlab.org/"
            >
              <RLLogo width={50} height={50} viewBox="0 0 100 100" />
            </a>
            <Link className="logo" to="/">
              <span className="red">F</span>
              <span className="orange">T</span>
              <span className="yellow">I</span>
              <span className="green">R</span>
              <span className="teal">-</span>
              <span className="blue">S</span>
              <span className="indigo">I</span>
              <span className="purple">S</span>
            </Link>
            {/* End Logo and Title */}

            {/* Start Full Sized Menu */}
            {menuItems.map((page) => (
              <Accordion
                key={page.label}
                square
                expanded={expanded === page.label}
                onChange={handleChange(page.label)}
                onMouseLeave={handleChange("")}
                sx={{
                  display: { xs: "none", lg: "block" },
                  boxShadow: "none",
                }}
                disableGutters
              >
                <AccordionSummary className="menu-items">
                  {page.label}
                </AccordionSummary>
                <AccordionDetails className="dropdown">
                  {page.submenu.map((submenu) => {
                    if (submenu.button) {
                      return (
                        <Popup
                          key={submenu.label}
                          label={submenu.label}
                          title={submenu.title}
                          text={submenu.text}
                        />
                      );
                    } else if (submenu.link) {
                      return (
                        <p key={submenu.link} className={"dropdown-items"}>
                          <Link
                            to={submenu.link ?? "#"}
                            onClick={submenu.action}
                          >
                            {submenu.label}
                          </Link>
                        </p>
                      );
                    } else {
                      return (
                        <ul key={submenu.label} className={"dropdown-items"}>
                          {submenu.component}
                        </ul>
                      );
                    }
                  })}
                </AccordionDetails>
              </Accordion>
            ))}
            {/* End Full Sized Menu */}
            <div className="left-cluster">
              <DevMode />
              {/* Icons */}
              <a
                href="https://github.com/RastonLab/Virtual-FTIR-Spectrometer#readme"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub
                  className="icon"
                  sx={{ fontSize: "35px" }}
                  onMouseEnter={openGitHubPopover}
                  onMouseLeave={closeGitHubPopover}
                />
              </a>

              <a
                href="https://github.com/radis/radis#readme"
                target="_blank"
                rel="noreferrer"
              >
                <InfoIcon
                  className="icon"
                  sx={{ fontSize: "38px" }}
                  onMouseEnter={openInfoPopover}
                  onMouseLeave={closeInfoPopover}
                />
              </a>

              {/* Icon Popovers */}
              <Popover
                sx={{ pointerEvents: "none" }}
                open={Boolean(gitHubPopover)}
                anchorEl={gitHubPopover}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                If you are interested in the code and tools
                <br /> behind this project check out our GitHub!
              </Popover>

              <Popover
                sx={{ pointerEvents: "none" }}
                open={Boolean(infoPopover)}
                anchorEl={infoPopover}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                A core part of this project is RADIS. <br /> Find out more about
                RADIS here!
              </Popover>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
}
