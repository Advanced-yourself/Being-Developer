import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { Logo, ProfileIcon } from "../../utils/image";

const pages = ["HOME", "YOUR SHEET", "ALL SHEETS", "BOOKMARK"];
const settings = ["Profile", "Logout"];

const DsaNavbar = ({ toggleTheme, theme }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    console.log("Logout button clicked"); // Check if this message is logged
    localStorage.removeItem("token");
    navigate("/login");
  };


  function getPageLink(page) {
    if (page === "HOME") {
      return "/dsa";
    } else if (page === "YOUR SHEET") {
      return "/dsa/YourSheet";
    } else if (page === "ALL SHEETS") {
      return "/dsa/AllSheets";
    } else if (page === "BOOKMARK") {
      return "/dsa/bookmark";
    } else {
      return "/dsa";
    }
  }

  return (
    <>
      <AppBar position="sticky" className="navbar">
        <Container maxWidth="lg">
          <Toolbar disableGutters className="navbar-mobile">
            <Link
              to="/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  src={Logo}
                  alt="Logo"
                  width="60"
                  height="60"
                  style={{
                    animation: "none",
                    transition: "none",
                    // marginRight: "10px",
                  }}
                  id="logo-img"
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontFamily: "Open Sans,sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0rem",
                    color: "inherit",
                    textDecoration: "none",
                    marginTop: "-10px", // Adjust this value to reduce the space
                  }}
                  className="logo-text"
                >
                  Being Developer
                </Typography>
              </div>
            </Link>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              className="hamburg"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={getPageLink(page)}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 2,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={getPageLink(page)}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      marginLeft: "40px",
                      marginRight: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User Img"
                    src={ProfileIcon}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {setting === "Profile" ? (
                       <Link to="/profile"> {/* Use Link to navigate to '/profile' */}
                       <Button color="primary">
                         <Typography textAlign="center">{setting}</Typography>
                       </Button>
                     </Link>
                    ) : setting === "Logout" ? (
                      <Button onClick={handleLogout} color="primary">
                        <Typography textAlign="center">{setting}</Typography>
                      </Button>
                    ) : (
                      <Typography textAlign="center">{setting}</Typography>
                    )}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <div className="mode-size-mobile">
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <label htmlFor="checkbox" className="checkbox-label">
                <FontAwesomeIcon icon={faMoon} className="moon" />
                <FontAwesomeIcon icon={faSun} className="sun" />
                <span className="ball"></span>
              </label>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default DsaNavbar;
