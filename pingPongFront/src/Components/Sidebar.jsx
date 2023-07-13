import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Sidebar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  function deleteUserContext(e) {
    e.preventDefault;
    setUserInfo({});
  }
  //const navigate = useNavigate()
  return (
    <div>
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Link to="/personal">
            <ListItemText primary="My Account" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <Link to="/bankaccounts">
            <ListItemText primary="Bank Accounts" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Link to="/user/settings">
            <ListItemText primary="Settings" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <Link to="/signup" onClick={deleteUserContext}>
            <ListItemText primary="Logout" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
