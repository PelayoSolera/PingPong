import React from 'react'
import  "./BankAccounts";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Paper, TextField } from '@mui/material';
import axios from 'axios';
import { padding } from '@mui/system';


const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

function BankAccounts() {



  return (
    <div>
        <div>
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
        </div>
        <div>
        <StyledDrawer variant="permanent" anchor="left">
            <div>
                
                <p>Edgar J</p>
                <p>@Katharina_Bernier</p>
                <p>$ 1,681<br/><span>Account Balance</span></p>
            </div>
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Bank Accounts" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </StyledDrawer>
        </div>
        <div className='bankAccountBody'>
    <Paper>
        <h4>User Settings</h4>
        <div className='bankAccountsForm'>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield'>Edgar</TextField>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield'>Johns</TextField>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield'>Norene@yahoo.com</TextField>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield'>625-316-9882</TextField>

        <Button sx={{ width: "10rem" }} variant="contained" type="submit">SAVE</Button>
        </div>

    </Paper>
        </div>
        </div>
  )
}

export default BankAccounts