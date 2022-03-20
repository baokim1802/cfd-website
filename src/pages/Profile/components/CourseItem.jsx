import React from "react";

export default function CourseItem({
  title,
  date,
  numHours,
  numVideos,
  numStudents,
  progress,
  img,
}) {
  const percentage = (progress || "0") + "%";
  return (
    <div className="item">
      <div className="cover">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <a href="#" className="name">
          {title}
        </a>
        <div className="date">{date}</div>
        <div className="row">
          <div className="">
            <img src="/img/clock.svg" alt="" className="icon" />
            {numHours} giờ
          </div>
          <div className="">
            <img src="/img/play.svg" alt="" className="icon" />
            {numVideos} video
          </div>
          <div className="">
            <img src="/img/user.svg" alt="" className="icon" />
            {numStudents} học viên
          </div>
        </div>
        <div className="process">
          <div className="line">
            <div className="rate" style={{ width: percentage }} />
          </div>
          {percentage}
        </div>
        <div className="btn overlay round btn-continue">Tiếp tục học</div>
      </div>
    </div>
  );
}
