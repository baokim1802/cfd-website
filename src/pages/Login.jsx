import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { handleLogin, user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  const btnClick = async (ev) => {
    ev.preventDefault();

    const errorObj = {};

    if (!form.username) {
      errorObj.username = "Username is required";
    }

    if (!form.password) {
      errorObj.password = "Password is required";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      const message = await handleLogin(form);
      if (message) {
        setErrorMessage(message);
      }
      // navigate("/ca-nhan");
      // alert("Validated successfully!");
      // call api
    }
  };

  if (user) return <Navigate to="/" />;
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">LOGIN</div>
            <form className="form">
              <Input
                label="Username"
                onChange={(ev) => (form.username = ev.target.value)}
                placeholder="Enter username"
                error={errors.username}
                required
              />
              <Input.Password
                label="Password"
                onChange={(ev) => (form.password = ev.target.value)}
                placeholder="Enter password"
                error={errors.password}
                required
              />

              {errorMessage && <p className="error-text">{errorMessage}</p>}
              <button className="btn main rect" onClick={btnClick}>
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
