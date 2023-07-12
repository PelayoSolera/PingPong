import React, { useContext } from "react";
import "./BankAccounts";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Paper, TextField } from "@mui/material";
import AppBarLoc from "./AppBar";
import { UserContext } from "../../Component/UserContext";
import Sidebar from "./Sidebar";

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
  const { user } = useContext(UserContext);
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
            <p>
              $ 1,681
              <br />
              <span>Account Balance</span>
            </p>
          </div>
          <Sidebar></Sidebar>
        </StyledDrawer>
      </div>
      <div className="bankAccountBody">
        <Paper sx={{ margin: "5rem, 10rem", height: "700px" }}>
          <Button
            sx={{ width: "10rem", borderRadius: "25px" }}
            variant="outlined"
          >
            Date: ALL
          </Button>
          <Button
            sx={{ width: "15rem", borderRadius: "25px" }}
            variant="outlined"
          >
            Amount: $0 - $1000
          </Button>
        </Paper>
      </div>
    </div>
  );
}

export default Personal;
