import React, { useContext, useEffect, useState } from "react";
import "./BankAccounts";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Paper, TextField } from "@mui/material";
import AppBarLoc from "./AppBar";
import { UserContext } from "../../Context/UserContext";
import UserDetails from "./UserDetails";
import Sidebar from "./Sidebar";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import PersonalPpl from "./PersonalPpl";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

//10.33.147.9:8081
//localhost:8081

const getPersonalPpl = async () => {
  const { data } = await axios.get("http://10.33.146.35:8081/signup/personal");
  return data;
};

function Personal() {
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useContext(UserContext);
  const [personalPpl, setPersonalPpl] = useState([]);

  useEffect(() => {
    getPersonalPpl().then((response) => {
      setPersonalPpl([...response]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div>
          <AppBarLoc></AppBarLoc>
        </div>
        <StyledDrawer variant="permanent" anchor="left">
          <UserDetails userInfo={userInfo} />
          <Sidebar />
        </StyledDrawer>
        <div className="personalBody">
          <Paper sx={{ margin: "4rem 2rem", height: "700px" }}>
            <Button
              sx={{ width: "10rem", borderRadius: "25px", margin: "2rem" }}
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
            <h5 style={{ marginLeft: "2rem" }}>Personal</h5>
            <div className="personalPplBody">
            {personalPpl ? (
              personalPpl.map((person) => (
                <PersonalPpl person={person} userInfo={userInfo} />
                ))
                ) : (
                  <p>No Transactions</p>
                  )}
                  </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default Personal;
