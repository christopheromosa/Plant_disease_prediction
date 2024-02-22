import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "./AuthProvider";

function Login() {
  const { login, loginUser } = useGlobalContext();
  const [loginForm, setloginForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function btnlogin(event) {
    if (loginForm.username === "" && loginForm.password === "") {
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

  return (
    <div>
      <div className="container h-50">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">
                    Log Into Your Account
                  </p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={loginForm.username}
                    onChange={handleChange}
                    text={loginForm.username}
                    name="username"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your username"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={handleChange}
                    text={loginForm.password}
                    name="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={btnlogin}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
