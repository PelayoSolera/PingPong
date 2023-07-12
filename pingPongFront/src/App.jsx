import { React, useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Settings from './Components/Settings.jsx';
import Personal from './Components/Personal.jsx';
import SignUp from './Components/SignUp.jsx';
import BankAccounts from './Components/BankAccounts.jsx';



const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp/>,
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


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
