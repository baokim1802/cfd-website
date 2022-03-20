import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  const btnClick = (ev) => {
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
      navigate("/ca-nhan");
      // alert("Validated successfully!");
      // call api
    }
  };
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
