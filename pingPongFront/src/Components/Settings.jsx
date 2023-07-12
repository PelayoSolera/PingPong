import React, { useContext } from "react";
import "./BankAccounts";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Paper, TextField } from "@mui/material";
import AppBarLoc from "./AppBar";
import Sidebar from "./Sidebar";
import UserDetails from "./UserDetails";
import { UserContext } from "../../Context/UserContext";

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
  const { userInfo } = useContext(UserContext);

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
          <div className="bankAccountsForm">
            <TextField
              sx={{ padding: "0.5rem" }}
              className="bankAccountsTextfield"
              value={userInfo ? userInfo.firstname : "Edgar"}
            ></TextField>
            <TextField
              sx={{ padding: "0.5rem" }}
              className="bankAccountsTextfield"
              value={userInfo ? userInfo.lastname : "Johns"}
            ></TextField>
            <TextField
              sx={{ padding: "0.5rem" }}
              className="bankAccountsTextfield"
              value={userInfo ? userInfo.email : "Norene39@yahoo.com"}
            ></TextField>
            <TextField
              sx={{ padding: "0.5rem" }}
              className="bankAccountsTextfield"
            >
              625-316-9882
            </TextField>

            <Button sx={{ width: "10rem" }} variant="contained" type="submit">
              SAVE
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Settings;
