import React, { useState } from "react";
import Input from "../components/Input";

export default function Register() {
  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  const btnClick = (ev) => {
    ev.preventDefault();

    const errorObj = {};

    if (!form.username) {
      errorObj.username = "Username is required";
    }

    if (!form.phone) {
      errorObj.phone = "Phone is required";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObj.phone = "Phone number is invalid.";
    }

    if (!form.email) {
      errorObj.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errorObj.email = "Email is invalid.";
    }

    if (!form.facebook) {
      errorObj.facebook = "Facebook is required";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      alert("Validated successfully!");
      // call api
    }
  };
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <form className="form">
              <Input
                label="Họ và tên"
                onChange={(ev) => (form.username = ev.target.value)}
                placeholder="Họ và tên bạn"
                error={errors.username}
                required
              />
              <Input
                label="Số điện thoại"
                onChange={(ev) => (form.phone = ev.target.value)}
                placeholder="Số điện thoại"
                error={errors.phone}
                required
              />
              <Input.Email
                label="Email"
                onChange={(ev) => (form.email = ev.target.value)}
                placeholder="Email của bạn"
                error={errors.email}
                required
              />
              <Input
                label="URL Facebook"
                onChange={(ev) => (form.facebook = ev.target.value)}
                placeholder="https://facebook.com"
                error={errors.facebook}
                required
              />
              <Input.Number
                label="Age"
                onChange={(ev) => (form.age = ev.target.value)}
                placeholder="Enter age"
              />

              {/* <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  <input type="checkbox" checked="checked" />
                  <span className="checkmark"></span>
                </div>
              </label>
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a href="#">Chuyển khoản</a>
                    <a href="#">Thanh toán tiền mặt</a>
                  </div>
                </div>
              </label> */}
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
              </label>
              <button className="btn main rect" onClick={btnClick}>
                đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
