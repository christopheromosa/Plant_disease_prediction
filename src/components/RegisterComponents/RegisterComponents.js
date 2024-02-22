import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box
} from "@mui/material";
import {AddCircleOutlineOutlined} from "@mui/icons-material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const RegisterComponents = () => {
  const [registerForm, setregisterForm] = useState({
    username: "",
    email: "",
    occupation: "",
    password: "",
  });

  const navigate = useNavigate();

  function btnRegister(event) {
    event.preventDefault();
    if (
      registerForm.username == "" &&
      registerForm.email == "" &&
      registerForm.password == ""
    ) {
      alert("Please fill all the details");
      navigate("/register");
    } else {
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/register",
        data: {
          username: registerForm.username,
          email: registerForm.email,
          occupation: registerForm.occupation ? registerForm.occupation : "",
          password: registerForm.password,
        },
      })
        .then((response) => {
          console.log(response);
          alert(`${response.data.message}`);
          navigate("/");
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            alert(`${error.response.data.detail}`);
            console.log(error.response.status);
            console.log(error.response.headers);
            if (error.response.status === 401) {
              alert("Invalid credentials");
            }
          }
        });

      setregisterForm({
        username: "",
        email: "",
        occupation: "",
        password: "",
      });
    }
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setregisterForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  const paperStyle = { padding: "30px 20px", width: 500, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const padding = { padding: 15 };
   const textField = { marginTop: "1rem" };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlined />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Box style={padding}>
          <TextField
            fullWidth
            label="Username"
            placeholder="Enter new user name"
            value={registerForm.username}
            onChange={handleChange}
            text={registerForm.username}
            name="username"
            style={textField}
          />
          <TextField
            fullWidth
            label="Email"
            value={registerForm.email}
            onChange={handleChange}
            text={registerForm.email}
            name="email"
            placeholder="Enter your email"
            style={textField}
          />

          <TextField
            fullWidth
            label="Occupation"
            type="text"
            value={registerForm.occupation}
            onChange={handleChange}
            text={registerForm.occupation}
            name="occupation"
            placeholder="Enter your occupation"
            style={textField}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={registerForm.password}
            onChange={handleChange}
            text={registerForm.password}
            name="password"
            placeholder="Enter your password"
            style={textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={btnRegister}
            style={textField}
          >
            Register
          </Button>
        </Box>
        <Typography>
          {" "}
          Already have an account ?{" "}
          <Link to="/" className="link-danger">
            Login
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default RegisterComponents;
