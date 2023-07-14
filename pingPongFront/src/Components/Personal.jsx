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
  const { data } = await axios.get("http://10.33.147.9:8081/signup/personal");
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
          <Paper sx={{ margin: "10rem, 10rem", height: "700px" }}>
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

            {personalPpl ? (
              personalPpl.map((person) => <PersonalPpl person={person} userInfo={userInfo}/>)
            ) : (
              <p>not really</p>
            )}

            {/* <div>
              {personalPpl ? (
                <div className="personalCard">
                  <div className="personalCardwitImg">
                    <Avatar
                      alt="Remy Sharp"
                      src={`https://unavatar.io/github/${personalPpl[0].firstname}`}
                    />
              
                  </div>
                    <div className="personalCardBody">
                      <p>
                        {personalPpl[0].firstname} {personalPpl[0].lastname}{" "}
                        paid {userInfo.firstname} {userInfo.lastname}
                      </p>
                      <p>Payment: {personalPpl[0].id_fake}</p>
                    </div>
                  <div className="personalCardAmount">
                    {personalPpl[0].amount}
                  </div>
                </div>
              ) : (
                <p>Transaction</p>
              )}
            </div>
            <div>
              {personalPpl ? (
                <div className="personalCard">
                  <div className="personalCardwitImg">
                    <Avatar
                      alt="Remy Sharp"
                      src={`https://unavatar.io/github/${personalPpl[1].firstname}`}
                    />
                  </div>

                    <div className="personalCardBody">
                      <p>
                        {personalPpl[1].firstname} {personalPpl[1].lastname}{" "}
                        paid {userInfo.firstname} {userInfo.lastname}
                      </p>
                      <p>Payment: {personalPpl[1].id_fake}</p>
                    </div>
                  <div className="personalCardAmount">
                    {personalPpl[1].amount}
                  </div>
                </div>
              ) : (
                <p>Transaction</p>
              )}
            </div>
            <div>
              {personalPpl ? (
                <div className="personalCard">
                  <div className="personalCardwitImg">
                    <Avatar
                      alt="Remy Sharp"
                      src={`https://unavatar.io/github/${personalPpl[2].firstname}`}
                    />

                  </div>
                    <div className="personalCardBody">
                      <p>
                        {personalPpl[2].firstname} {personalPpl[2].lastname}{" "}
                        paid {userInfo.firstname} {userInfo.lastname}
                      </p>
                      <p>Payment: {personalPpl[2].id_fake}</p>
                    </div>
                  <div className="personalCardAmount">
                    {personalPpl[2].amount}
                  </div>
                </div>
              ) : (
                <p>Transaction</p>
              )}
            </div> */}

            {/* {
            <div>
            {personalPpl?.map((person, index) => {
              return (
                <div style={{ backgroundColor: "red" }} key={index}>
                <p>{person.firstName}</p>
                <p>{person.lastName}</p>
                </div>
                );
              })}
              </div>
            } */}
          </Paper>
        </div>
      </div>
    );
  }
}

export default Personal;
