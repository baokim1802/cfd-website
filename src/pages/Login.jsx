import React, { useState } from "react";
import Input from "../components/Input";

export default function Login() {
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  const btnClick = (en) => {
    en.preventDefault();

    const errorObj = {};

    if (!form.username) {
      errorObj.username = "Username is required";
    }

    if (!form.password) {
      errorObj.facebook = "Password is required";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      console.log("Validated successfully!");
      // call api
    }
  };
  return (
    <main class="register-course" id="main">
      <section>
        <div class="container">
          <div class="wrap container">
            <div class="main-sub-title">ĐĂNG NHAP</div>
            <div class="form">
              <Input
                label="Họ và tên"
                onChange={(ev) => (form.username = ev.target.value)}
                placeholder="Họ và tên bạn"
                error={errors.username}
              />
              <Input.Password
                label="Password"
                onChange={(ev) => (form.password = ev.target.value)}
                placeholder="Password của bạn"
                error={errors.password}
              />

              <div onClick="btnClick(en)" class="btn main rect">
                Login
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
