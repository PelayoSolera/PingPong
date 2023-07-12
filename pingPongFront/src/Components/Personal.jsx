import React, { useContext, useEffect, useState } from 'react'
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
import SettingsIcon from '@mui/icons-material/Settings';
import axios from 'axios';
import Link from '@mui/material/Link';
import { height } from '@mui/system';
import AppBarLoc from './AppBar';
import { UserContext } from '../../Component/UserContext';


const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

function Personal() {

  const {user} = useContext(UserContext)
  return (
<div>
        <div>
    <AppBarLoc></AppBarLoc>
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
          <Link href="/personal">
          <ListItemText primary="My Account" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <Link href="/bankaccounts">
          <ListItemText primary="Bank Accounts" />
          </Link>
        </ListItem>
        <ListItem>
           
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon> 
          <Link href="/user/settings">
          <ListItemText primary="Settings" />
          </Link>
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
    <Paper sx={{margin:"5rem, 10rem", height:"700px"}}>
    <Button sx={{ width: "10rem", borderRadius:"25px" }} variant="outlined">Date: ALL</Button>
    <Button sx={{ width: "15rem", borderRadius:"25px" }} variant="outlined">Amount: $0 - $1000</Button>
    </Paper>
        </div>
        </div>
  )
}

export default Personal