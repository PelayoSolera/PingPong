import React, { useContext } from "react";
import AppBarLoc from "./AppBar";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import UserDetails from "./UserDetails";
import { Paper, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

function Transaction() {
  const location = useLocation();
  const { userInfo } = location.state;
  const { person } = location.state;

  console.log("userInfo", userInfo);
  console.log("person", person);

  return (
    <div>
      <div>
        <AppBarLoc></AppBarLoc>
      </div>
      <div>
        <StyledDrawer variant="permanent" anchor="left">
          {userInfo ? (
            <UserDetails userInfo={userInfo} />
          ) : (
            <div>
              <p>Edgar J</p>
              <p>@_KathatrinaBernier</p>
            </div>
          )}
          <Sidebar />
        </StyledDrawer>
        <div>
          <Paper
            sx={{ margin: "4rem 18rem", padding: "1.5rem", height: "700px" }}
          >
            <h4 className="transh4">Transaction Detail</h4>

            <div className="transactionBody">
              <div>
                <div className="transAvatar">
                  <Avatar
                    sx={{ width: 64, height: 64,  margin: "0 0.5rem" }}
                    className="transactionAvatar"
                    alt="Remy Sharp"
                    src={`https://unavatar.io/github/${person.firstname}`}
                  />
                  <Avatar
                    sx={{ width: 64, height: 64, margin: "0 0.5rem" }}
                    className="transactionAvatar"
                    alt="Remy Sharp"
                    src={`https://unavatar.io/github/${userInfo.firstname}`}
                  />
                </div>
                <div className="">
                  <p>
                    {person.firstname} {person.lastname} paid{" "}
                    {userInfo.firstname} {userInfo.lastname}
                  </p>
                  <p>
                    Payment: {person.id_fake} to {userInfo.fake_id}
                  </p>
                  <div className="thumbieUp">
                  <p>0</p><ThumbUpOffAltIcon sx={{ fontSize: "3rem", color: "#1769aa"}} />
                  </div>
                </div>
                <div>
                    <TextField
                    sx={{ width: "80%" }}
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    name="comment"
                    label="Write a comment..."
                    ></TextField>
                </div>
              </div>
              <div className="personalCardAmount">
                <p className="amountP">{person.amount}</p>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
