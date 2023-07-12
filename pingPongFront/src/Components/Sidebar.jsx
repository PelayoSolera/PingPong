import React from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
//import Link from '@mui/material/Link';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Sidebar({userData, children}) {

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
          <Link to="/personal" state={userData}
          >
          <ListItemText primary="My Account" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <Link to="/bankaccounts" state={userData}>
          <ListItemText primary="Bank Accounts" />
          </Link>
        </ListItem>
        <ListItem>
           
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon> 
          <Link to="/user/settings" state={userData}>
          <ListItemText primary="Settings" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      {children}
    </div>
  )
}

export default Sidebar