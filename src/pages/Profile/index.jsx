import React from "react";
import { Outlet, NavLink, Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function Profile({ path }) {
  // const [tab, setTab] = useState();

  // const onClick = (i) => {
  //   return (ev) => {
  //     setTab(i)
  //   }
  // }

  // To Use: onClick={onClick(0)}

  const login = true; // change to false if user isn't validated
  return (
    <main className="profile" id="main">
      {!login && <Navigate to="/" />}
      <section>
        <div className="top-info">
          <div className="avatar">
            {/* <span class="text">H</span> */}
            <img src="/img/avatar-lg.png" alt="" />
            <div className="camera" />
          </div>
          <div className="name">trần nghĩa</div>
          <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <NavLink to={`${path}`} end>
                Thông tin tài khoản
              </NavLink>
              <NavLink to={`${path}/khoa-hoc`}>Khóa học của bạn</NavLink>
              <NavLink to={`${path}/du-an`}>Dự án đã làm</NavLink>
              <NavLink to={`${path}/thanh-toan`}>Lịch sử thanh toán</NavLink>
              <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
            <div className="tab-content">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
