import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LOGIN_PATH } from "../constants/path";
import { AuthContext } from "../context/AuthContext";

export default function Header({}) {
  const { user, handleLogout } = useContext(AuthContext);
  const toggleMenu = () => {
    document.body.classList.toggle("menu-is-show");
  };

  // console.log("Header rerender");
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={toggleMenu}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {user ? (
            <div className="have-login">
              <div className="account">
                <Link to="/ca-nhan" className="info">
                  <div className="name">{user.name}</div>
                  <div className="avatar">
                    <img src={user.avatar} alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <NavLink to="/ca-nhan/khoa-hoc">Khóa học của tôi</NavLink>
                <NavLink to="/ca-nhan" end>
                  Thông tin tài khoản
                </NavLink>
                <a href="#" onClick={handleLogout}>
                  Đăng xuất
                </a>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none">
              <Link to={LOGIN_PATH} className="btn-register">
                Đăng nhập
              </Link>
              <a href="login.html" className="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
