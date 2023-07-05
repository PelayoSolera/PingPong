import React, { useEffect, useState } from 'react'
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

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));



function Settings() {

    const [userInfo, setUserInfo] = useState()

    useEffect(()=>{
        axios.get('http://localhost:8081/signup/bank?user=1')
        .then((response) => {
            setUserInfo(response.data)
        })
        .catch((error) => {
          console.error("error.response: ", (error.response))
        }).finally(console.log(userInfo))  
    },[])

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
                
            {userInfo ? (<div><p><p>{userInfo.user.firstname}{userInfo.user.lastname}</p>
                <p>{userInfo.user.email}</p></p></div>) : (<div><p>Edgar J</p><p>@_KathatrinaBernier</p></div>)}
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
    <Paper>
        <h4>User Settings</h4>
        <div className='bankAccountsForm'>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield' value={userInfo ? (userInfo.user.firstname) : ("Edgar")}></TextField>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield' value={userInfo ? (userInfo.user.lastname) : ("Johns") }></TextField>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield' value={userInfo ? (userInfo.user.email) : ("Norene39@yahoo.com") }></TextField>
        <TextField sx={{padding: '0.5rem'}} className='bankAccountsTextfield'>625-316-9882</TextField>

        <Button sx={{ width: "10rem" }} variant="contained" type="submit">SAVE</Button>
        </div>

    </Paper>
        </div>
    </div>
  )
}

export default Settings