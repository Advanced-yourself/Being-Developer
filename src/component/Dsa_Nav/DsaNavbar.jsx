
import React,{useState} from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import CodeIcon from "@mui/icons-material/Code";
import "../Navbar/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const pages = ["HOME", "YOUR SHEETS", "ALL SHEETS"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const DsaNavbar = ({toggleTheme, theme}) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

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
  return (
    <>
      <AppBar position="static" className="navbar">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <CodeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "0rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
            
              Being Developer
            </Typography>
            
            

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                    <Link to="/dsa"><Typography textAlign="center">{page}</Typography></Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
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
                page === "DSA" ? (
    <Link to="/dsa" key={page} onClick={handleCloseNavMenu}>
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
  ) : (
    // Render regular Button component for other pages
    <Button
      key={page}
      onClick={handleCloseNavMenu}
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
  )
              ))}
            </Box>

            <Box sx={{ flexGrow: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
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
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <div>
              <input type="checkbox" className="checkbox" id="checkbox" onChange={toggleTheme} checked={theme === "dark"}/>
              <label htmlFor="checkbox" className="checkbox-label">
              <FontAwesomeIcon icon={faMoon} className="moon"/>
              <FontAwesomeIcon icon={faSun} className="sun"/>
              <span className="ball"></span>
              </label>
              
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default DsaNavbar;
