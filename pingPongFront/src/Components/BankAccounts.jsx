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
import { useLocation } from 'react-router-dom';
import AppBarLoc from './AppBar';
import Sidebar from './Sidebar';
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

function BankAccounts() {

    //const [userInfo, setUserInfo] = useState()
    //const location = useLocation()
    //console.log("location state: ", location.state)
    const [bankAccountsArr, setBankAccountsArr] = useState()
    const {user: userInfo} = useContext(UserContext)
    console.log(userInfo)
    const userId = userInfo.id

    useEffect(()=>{
      console.log("UserID es: " + userId)
      //10.33.147.9>8081
        axios.get(`http://localhost:8081/signup/bank?user=${userId}`)
        .then((response) => {
          console.log("objeto que vuerve: " + JSON.stringify(response.data))
            setBankAccountsArr(response.data)
        })
        .catch((error) => {
          console.error("error.response: ", (error.response))
        })
        //.finally(console.log(userInfo))  
    },[])

  
    //console.log("Adri asks: " + userInfo[0])
    console.log("banksss: ", bankAccountsArr)
  return (
    
    <div>
            
        <div>
    
    <AppBarLoc></AppBarLoc>
        </div>
        <div>
        <StyledDrawer variant="permanent" anchor="left">
            <div>

                {userInfo ? (<div><p><p>{userInfo.firstname} {userInfo.lastname}</p>
                <p>{userInfo.email}</p></p></div>) : (<div><p>Edgar J</p><p>@_KathatrinaBernier</p></div>)}

                
                <p><b>$ 1,681</b><br/><span>Account Balance</span></p>
            </div>
      <Sidebar userData={userInfo}></Sidebar>
    </StyledDrawer>
        </div>
        <div className='bankAccountBody'>
    <Paper>
        <h4>Bank Accounts</h4>
        <div>
        {bankAccountsArr
        ?(bankAccountsArr.map((bankAccount, index) => {
          return <p key={index}>{bankAccount.accountName}</p>
        })) : (<p>O'Hara - Labadie Bank</p>)} 
            
        </div>
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