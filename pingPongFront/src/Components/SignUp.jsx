import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios"

function SignUp() {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, SetEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  
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