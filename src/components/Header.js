import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = (props) => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;