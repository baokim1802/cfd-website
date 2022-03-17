import React from "react";
import icon_user_white from "/src/assets/img/icon-user-white.svg";
import icon_heart from "/src/assets/img/icon-heart.svg";
import icon_viewmore from "/src/assets/img/icon-viewmore.svg";
import avt from "/src/assets/img/avt.png";
import img1 from "/src/assets/img/img1.png";

export default function Course({
  status,
  name,
  description,
  instructor,
  userCount,
  heartCount,
}) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src={img1} alt="" />
          <span className="badge b1">{status}</span>
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src={icon_user_white} alt="" />
                {userCount}
              </div>
              <div className="heart">
                <img src={icon_heart} alt="" /> {heartCount}
              </div>
            </div>
            <div className="share">
              <img src={icon_viewmore} alt="" />
            </div>
          </div>
        </a>
        <div className="info">
          <a className="name" href="#">
            {name}
          </a>
          <p className="des">{description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={avt} alt="" />
            </div>
            <div className="name">{instructor}</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}
