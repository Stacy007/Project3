import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SimpleMenu from './SimpleMenu'
import Colorwheel from '../../colorwheel.png'
import Logo from '../../gtfo.png'
import { Redirect } from 'react-router-dom'


const styles = {
  root: {
    backgroundColor: 'rgba(255, 255, 255, .20)',
    paddingBottom: '0%',
  },
  grow: {
    flexGrow: 1,
    paddingBottom: '0%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  overlayStyle: {
    //backgroundColor: 't ',
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    console.log(event.currentTarget)
    this.setState({ anchorEl: event.currentTarget });
  };

  handleProfileClick = event => {
    console.log(event.currentTarget)
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = (event) => {
    this.props._logout(event);
    // return <Redirect to={{ pathname: "/login" }} />
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar position="static" color='transparent' classes={{ root: classes.root }}>
          <Toolbar>
            <SimpleMenu className={classes.menuButton} onClick={this.handleMenu} color="inherit" aria-label="Menu">
              </SimpleMenu>

            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>               */}
            <Typography variant="title" color="inherit" className={classes.grow}>
            <Link to='/nav'>  
              <img src={Logo} width='15%' height='15%'></img>
              </Link>  

              <img src={Colorwheel} width='8%' height='8%'></img>  
            </Typography>
            {auth && (
              <div>
                <AccountCircle
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleProfileClick}
                  color="inherit"
                >
                  {/* <AccountCircle /> */}
                </AccountCircle>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogout}>Log Out</MenuItem>
                  {/* <MenuItem onClick={this.handleClose}>Profile</MenuItem> */}

                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
