import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../../Pages/Authentication/AuthProvider";

const LoginComponents = () => {
  const { login, loginUser } = useGlobalContext();
  const [loginForm, setloginForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function btnlogin(event) {
    if (loginForm.username =="" && loginForm.password == "") {
      alert("Please fill all the details");
      navigate("/");
    } else {
      axios({
        method: "POST",
        url: "http://127.0.0.1:8000/login",
        data: {
          username: loginForm.username,
          password: loginForm.password,
        },
      })
        .then((response) => {
          // console.log(response.data)
          login(response.data.token);
          loginUser(response.data.user);
          alert("Successfully Login");
          navigate("/overview");
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

      setloginForm({
        username: "",
        password: "",
      });

      event.preventDefault();
    }
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const padding = {padding: "1rem"}
  const textField = { marginTop: "1rem" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlined />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Box sx={padding}>
          <TextField
            label="Username"
            name="username"
            value={loginForm.username}
            onChange={handleChange}
            text={loginForm.username}
            placeholder="Enter username"
            fullWidth
            required
            style={textField}
          />
          <TextField
            label="password"
            placeholder="Enter password"
            type="password"
            value={loginForm.password}
            onChange={handleChange}
            text={loginForm.password}
            name="password"
            fullWidth
            required
            style={textField}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={btnlogin}
            fullWidth
          >
            Sign in
          </Button>
        </Box>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?{" "}
          <Link to="/register" className="link-danger">
            Register
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginComponents;
