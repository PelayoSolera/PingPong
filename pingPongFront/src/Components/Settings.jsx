import React, { useEffect, useState } from 'react'
import  "./BankAccounts";
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Paper, TextField } from '@mui/material';
import axios from 'axios';
import AppBarLoc from './AppBar';
import Sidebar from './Sidebar';

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
    //TODO: Use Context!!!

    useEffect(()=>{
      //10.33.147.9>8081
        axios.get('http://localhost:8081/signup/bank?user=1')
        .then((response) => {
            setUserInfo(response.data)
        })
        .catch((error) => {
          console.error("error.response: ", (error.response))
        })
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
      <Sidebar></Sidebar>
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