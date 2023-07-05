import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios"

function SignUp() {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  const handleFirstName = (e) => setFirstname(e.target.value);
  const handleLastName = (e) => setLastname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value)
  const handleConfirmPassword = (e) => setConfirmpassword(e.target.value)
  
  function handleSignupSubmit() {

    const requestBody = { firstname, lastname, email, password };

    axios.post("http://localhost:8081/signup/add", requestBody).then
  }

  return (
    <div>
      <h1 className='app-logo'>Real World App</h1>
      <h2 className='st-tittle'>Sign Up</h2>
      <form onSubmit={handleSignupSubmit}>
        <div>
          <TextField    
                required
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="firstname"
                label="First Name"
                value={firstname}
                onChange={handleFirstName}
                >
                  
                </TextField>
        </div>
        <div>
          <TextField
          required
          id='outlined-basic'
          variant="outlined"
          type='text'
          name='lastname'
          label="Last Name"
          value={lastname}
          onChange={handleLastName}
          >
          </TextField>
        </div>
        <div>
          <TextField
          required
          id='outlined-basic'
          variant="outlined"
          type='email'
          name='userName'
          label="Username"
          value={email}
          onChange={handleEmail}
          >
          </TextField>
        </div>
        <div>
          <TextField
          required
          id='outlined-basic'
          variant="outlined"
          type='password'
          name='password'
          label="Password"
          value={password}
          onChange={handlePassword}
          >
          </TextField>
        </div>
        <div>
          <TextField
          required
          id='outlined-basic'
          variant="outlined"
          type='password'
          name='confirmpassword'
          label="Confirm Password"
          value={confirmpassword}
          onChange={handleConfirmPassword}
          >
          </TextField>
        </div>

        <Button sx={{ width: "14rem" }} variant="contained" type="submit">
            Sign Up
          </Button>


      </form>
    </div>
  )
}

export default SignUp