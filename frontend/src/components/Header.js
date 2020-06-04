import React, { useContext } from "react";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import colorVariables from "../utils/ColorVariables";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: colorVariables.fontColor1,
    },
    secondary: {
      main: "#ddd",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: colorVariables.backgroundColor1,
    color: colorVariables.fontColor1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  drawer: {
    backgroundColor: colorVariables.backgroundColor1,
  },
  listItem: {
    textDecoration: "none",
    color: colorVariables.fontColor1,
    textAlign: "center",
  },
  fullList: {
    width: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { auth, setLoggedOut } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLoggedOut();
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/" className={classes.listItem}>
          <ListItem button key="home">
            <ListItemIcon>
              <HomeRoundedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/explore" className={classes.listItem}>
          <ListItem button key="explore">
            <ListItemIcon>
              <ViewModuleRoundedIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      {auth.isAuthenticated ? (
        <List>
          <Link to="/create-campaign" className={classes.listItem}>
            <ListItem button key="create">
              <ListItemIcon>
                <AccountCircleRoundedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Create Campaign" />
            </ListItem>
          </Link>
        </List>
      ) : (
        <List>
          <Link to="/signup" className={classes.listItem}>
            <ListItem button key="signup">
              <ListItemIcon>
                <AccountCircleRoundedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Signup" />
            </ListItem>
          </Link>
          <Link to="/signin" className={classes.listItem}>
            <ListItem button key="signup">
              <ListItemIcon>
                <AccountCircleRoundedIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="Signin" />
            </ListItem>
          </Link>
        </List>
      )}
      {}
    </div>
  );

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <div className={classes.root}>
          <AppBar className={classes.appBar} position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Eth-Crowdfunding
              </Typography>
              {auth.isAuthenticated && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Drawer
            classes={{ paper: classes.drawer }}
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Header;
