import React, { useContext, useEffect, useState } from "react";
import "./BankAccounts";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Paper } from "@mui/material";
import axios from "axios";
import AppBarLoc from "./AppBar";
import Sidebar from "./Sidebar";
import { UserContext } from "../../Context/UserContext";
import UserDetails from "./UserDetails";

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
  const [bankAccountsArr, setBankAccountsArr] = useState();
  const { userInfo } = useContext(UserContext);
  const userId = userInfo?.id;

  useEffect(() => {
    //10.33.147.9:8081
    axios
      .get(`http://localhost:8081/signup/bank?user=${userId}`)
      .then((response) => {
        //console.log("objeto que vuerve: " + JSON.stringify(response.data));
        setBankAccountsArr(response.data);
      })
      .catch((error) => {
        console.error("error.response: ", error.response);
      });
  }, []);

  
  return (
    <div>
      <div>
        <AppBarLoc></AppBarLoc>
      </div>
      <div>
        <StyledDrawer variant="permanent" anchor="left">
          <UserDetails userInfo={userInfo} />
          <Sidebar />
        </StyledDrawer>
      </div>
      <div className="bankAccountBody">
        <Paper>
          <h4>Bank Accounts</h4>
          <div>
            {bankAccountsArr ? (
              bankAccountsArr.map((bankAccount, index) => {
                return <p key={index}>{bankAccount.accountName}</p>;
              })
            ) : (
              <p>O'Jarra - L abadia Bank</p>
            )}
          </div>
          <div>
            <Button sx={{ width: "10rem" }} variant="contained" type="submit">
              CREATE
            </Button>
            <Button sx={{ width: "10rem" }} variant="contained" type="submit">
              DELETE
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default BankAccounts;
