import React from "react";
import { Link } from "react-router-dom";

export default function Thumbnail({
  status,
  name,
  description,
  instructor,
  userCount,
  heartCount,
  img,
  link,
  buttonText,
  className,
}) {
  return (
    <div className={className || "col-md-4 course"}>
      <div className="wrap">
        <Link className="cover" to={`/khoa-hoc/${link || "chi-tiet"}`}>
          <img src={img || "/img/img1.png"} alt="" />
          {status && <span className="badge b1">{status}</span>}
          <div className="hover">
            <div className="top">
              {userCount && (
                <div className="user">
                  <img src="/img/icon-user-white.svg" alt="" />
                  {userCount}
                </div>
              )}
              {heartCount && (
                <div className="heart">
                  <img src="/img/icon-heart.svg" alt="" /> {heartCount}
                </div>
              )}
            </div>
            <div className="share">
              <img src="/img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <a className="name" href="#">
            {name}
          </a>
          <p className="des">{description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="/img/avt.png" alt="" />
            </div>
            <div className="name">{instructor}</div>
          </div>
          <div className="register-btn">{buttonText || "Đăng Ký"}</div>
        </div>
      </div>
    </div>
  );
}
