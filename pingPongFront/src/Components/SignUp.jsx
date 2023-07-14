import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router";
import { UserContext } from "../../Context/UserContext";

function SignUp() {
  const { setUserInfo } = useContext(UserContext);

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  const navigate = useNavigate();

  const handleFirstName = (e) => setFirstname(e.target.value);
  const handleLastName = (e) => setLastname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmpassword(e.target.value);
  const phone = "";
  const balance = 1681.37;

  //10.33.147.9:8081
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (email == "solera@solera.com" && password == "bootcamp2") {
      const requestBody = {
        firstname,
        lastname,
        email,
        password,
        phone,
        balance,
      };
      //10.33.147.9:8081
      //localhost:8081
      axios
        .post("http://10.33.147.9:8081/signup/add", requestBody)
        .then((response) => {
          setUserInfo(response.data);
          navigate("/bankaccounts");
        })
        .catch((error) => {
          console.error("error.response: ", error.response);
        });
    }
  };

  return (
    <div>
      <h1 className="app-logo">Real World App</h1>
      <h2 className="st-tittle">Sign Up</h2>
      <form className="signupForm" onSubmit={handleSignupSubmit}>
        <div className="signInput">
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="firstname"
            label="First Name"
            value={firstname}
            onChange={handleFirstName}
          ></TextField>
        </div>
        <div className="signInput">
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            type="text"
            name="lastname"
            label="Last Name"
            value={lastname}
            onChange={handleLastName}
          ></TextField>
        </div>
        <div className="signInput">
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            type="email"
            name="userName"
            label="Username"
            value={email}
            onChange={handleEmail}
          ></TextField>
        </div>
        <div className="signInput">
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={handlePassword}
          ></TextField>
        </div>
        <div className="signInput">
          <TextField
            required
            id="outlined-basic"
            variant="outlined"
            type="password"
            name="confirmpassword"
            label="Confirm Password"
            value={confirmpassword}
            onChange={handleConfirmPassword}
          ></TextField>
        </div>

        <Button sx={{ width: "14rem", marginTop: "0.5rem", height: "3rem" }} variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
