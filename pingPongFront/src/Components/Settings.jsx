import React, { useContext, useState } from "react";
import "./BankAccounts";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Paper, TextField } from "@mui/material";
import AppBarLoc from "./AppBar";
import Sidebar from "./Sidebar";
import UserDetails from "./UserDetails";
import { UserContext } from "../../Context/UserContext";
import axios from 'axios';

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
  const [phone, setPhone] = useState();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handlePhone = (e) => setPhone(e.target.value);

  const updatedUserInfo = { ...userInfo, phone };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setUserInfo(updatedUserInfo);
    const requestBody = { phone };
    console.log("phone", requestBody)
    console.log("userinfooo", userInfo.id)
    axios.put(`http://10.33.147.9:8081/signup/${userInfo.id}/phone-number`, requestBody)
    .then((response) => {
      console.log(response)
    }).catch((error) => {
      console.error("error.response: ", (error.response))
    })
  }
 
  return (
    <div>
      <div>
        <AppBarLoc></AppBarLoc>
      </div>
      <div>
        <StyledDrawer variant="permanent" anchor="left">
          <UserDetails userInfo={userInfo} />
          <Sidebar></Sidebar>
        </StyledDrawer>
      </div>
      <div className="bankAccountBody">
        <Paper>
          <h4>User Settings</h4>
          <form onSubmit={handlePhoneSubmit}>
          <div className="bankAccountsForm">
            <TextField
              sx={{ padding: "0.5rem" }}
              className="bankAccountsTextfield"
              type="text"
              disabled={true}
              value={userInfo ? userInfo.firstname : "Edgar"}
            ></TextField>
            <TextField
              sx={{ padding: "0.5rem" }}
              className="bankAccountsTextfield"
              type="text"
              disabled={true}
              value={userInfo ? userInfo.lastname : "Johns"}
            ></TextField>
            <TextField
              sx={{ padding: "0.5rem" }}
              className="bankAccountsTextfield"
              type="email"
              disabled={true}
              value={userInfo ? userInfo.email : "Norene39@yahoo.com"}
            ></TextField>
            <TextField
              sx={{ padding: "0.5rem" }}
              type="text"
              name="phone"
              className="bankAccountsTextfield"
              value={userInfo.phone ? userInfo.phone : ""}
              onChange={handlePhone}
            >
              625-316-9882
            </TextField>

            <Button sx={{ width: "10rem" }} variant="contained" type="submit">
              SAVE
            </Button>
            
          </div>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default Settings;
