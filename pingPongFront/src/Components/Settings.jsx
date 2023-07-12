import React, { useEffect, useState } from 'react'
import  "./BankAccounts";

import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Paper, TextField } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import axios from 'axios';
import Link from '@mui/material/Link';
import AppBarLoc from './AppBar';

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
    const location = useLocation()
    console.log("location state at settings: ", location.state)

    useEffect(()=>{
      //10.33.147.9>8081
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
        <AppBarLoc></AppBarLoc>
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