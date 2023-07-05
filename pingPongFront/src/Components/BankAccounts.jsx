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

const [userInfo, setUserInfo] = useState()




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

    useEffect(()=>{
        axios.get("http://localhost:8081/signup/bank", { params: { user: 4 } })
        .then((response) => {
            setUserInfo(response)
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
    <Paper>
        <h4>Bank Accounts</h4>
        <div>
            Results from back here
        </div>
        <div>
        <Button sx={{ width: "10rem"  }} variant="contained" type="submit">CREATE</Button>
        <Button sx={{ width: "10rem" }} variant="contained" type="submit">DELETE</Button>
        </div>
    </Paper>
        </div>
        </div>
  )
}

export default BankAccounts