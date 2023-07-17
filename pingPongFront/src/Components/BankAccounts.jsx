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
import BankAccountItem from "./BankAccountItem";
import { TextField } from "@mui/material";

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
  const [bankAccountsArr, setBankAccountsArr] = useState([]);
  const { userInfo } = useContext(UserContext);
  const userId = userInfo?.id;
  const [bankAccountInput, setBankAccountInput] = useState("");
  const handleBankAccountInput = (e) => setBankAccountInput(e.target.value);

  useEffect(() => {
    //10.33.147.9:8081
    //10.33.146.35
    //localhost:8081
    axios
      .get(`http://10.33.146.35:8081/signup/bank?user=${userId}`)
      .then((response) => {
        setBankAccountsArr(response.data);
      })
      .catch((error) => {
        console.error("error.response: ", error.response);
      });
  }, []);
 
  const requestBody = { accountName: bankAccountInput, user: { id: userId } };
  function createBankAccount() {
    axios
      .post(`http://10.33.146.35:8081/signup/addBank`, requestBody)
      .then((response) => {
        setBankAccountsArr(prevBankAccountsArr => {
          const updatedBankAccountsArr = [...prevBankAccountsArr, response.data];
          return updatedBankAccountsArr;
        });
      })
      .catch((error) => {
        console.error("error.response: ", error.response);
      });
  }

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
        <Paper sx={{ margin: "5rem 4rem", padding: "1.5rem" }}>
          <h4>Bank Accounts</h4>
          <div>
            {bankAccountsArr ? (
              bankAccountsArr.map((bankAccount, index) => {
                return (
                  <BankAccountItem key={index} bankAccount={bankAccount} />
                );
              })
            ) : (
              <p>O'Jarra - L abadia Bank</p>
            )}
          </div>
          <div>
            <TextField
              sx={{ padding: "0.5rem" }}
              type="text"
              name="bankAccount"
              id="bankAccount"
              className="bankAccountsTextfield"
              value={bankAccountInput}
              onChange={handleBankAccountInput}
            ></TextField>
          </div>
          <div>
            <Button
              sx={{ width: "10rem" }}
              variant="contained"
              type="submit"
              onClick={createBankAccount}
            >
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
