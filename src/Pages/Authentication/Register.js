import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [registerForm, setregisterForm] = useState({
    username: "",
    email: "",
    occupation:"",
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
          occupation: registerForm.occupation? registerForm.occupation : '',
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
        occupation:"",
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


  return (
    <div>
      <div className="container h-50">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Create Account</p>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={registerForm.username}
                    onChange={handleChange}
                    text={registerForm.username}
                    name="username"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter new user name"
                  />
                  <label className="form-label" for="form3Example3">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={registerForm.email}
                    onChange={handleChange}
                    text={registerForm.email}
                    name="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    value={registerForm.occupation}
                    onChange={handleChange}
                    text={registerForm.occupation}
                    name="occupation"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter your occupation"
                  />
                  <label className="form-label" for="form3Example4">
                    Occupation
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    value={registerForm.password}
                    onChange={handleChange}
                    text={registerForm.password}
                    name="password"
                    id="form3Example5"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" for="form3Example5">
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
                    <label className="form-check-label" for="form2Example3">
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
                    onClick={btnRegister}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link to="/" className="link-danger">
                      Login
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
export default Register;
