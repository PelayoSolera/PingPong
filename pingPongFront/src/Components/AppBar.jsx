import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';



function AppBarLoc() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 28, alignItems: "center", justifyContent: "center", alignContent: "center",  }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <LocalAtmIcon sx={{marginLeft: "35rem"}}/> Real World App
        </Typography>
        <Button sx={{backgroundColor: "green"}} color="inherit">$ NEW</Button>
        <NotificationsIcon/>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default AppBarLoc