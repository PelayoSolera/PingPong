import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { element } from 'prop-types';
import Settings from './Components/Settings.jsx';
import Personal from './Components/Personal.jsx';

import BankAccounts from './Components/BankAccounts.jsx';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <App />,
  },
{
  path: "/bankaccounts",
  element: <BankAccounts/>,
},
{
  path: "/user/settings",
  element: <Settings/>,
},
{
  path: "/personal",
  element: <Personal/>
}

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
