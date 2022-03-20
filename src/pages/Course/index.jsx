import React from "react";
import Thumbnail from "../../components/Thumbnail";

export default function Course() {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <Thumbnail
              status="Đã kết thúc"
              userCount="12"
              heartCount="100"
              name="Front-end căn bản"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              link="front-end-can-ban"
              img="/img/img2.png"
            />
            <Thumbnail
              status="Đang diễn ra"
              userCount="12"
              heartCount="100"
              name="React JS"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Vương Đặng"
              link="react-js"
              img="/img/img1.png"
            />
            <Thumbnail
              status="Sắp khai giảng"
              userCount="12"
              heartCount="100"
              name="Animation"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              link="animation"
              img="/img/img3.png"
            />
            <Thumbnail
              status="Sắp khai giảng"
              userCount="12"
              heartCount="100"
              name="Scss, Grunt JS và Boostrap 4"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              link="scss-grunt-bootstrap4"
              img="/img/img4.png"
            />
            <Thumbnail
              status="Sắp khai giảng"
              userCount="12"
              heartCount="100"
              name="UX/UI Design"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              link="ux-ui"
              img="/img/img5.png"
            />
            <Thumbnail
              status="Sắp khai giảng"
              userCount="12"
              heartCount="100"
              name="Web Responsive"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              link="web-responsive"
              img="/img/img6.png"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <Thumbnail
              status="Đã kết thúc"
              userCount="12"
              heartCount="100"
              name="Front-end căn bản"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img7.png"
            />
            <Thumbnail
              status="Đã kết thúc"
              userCount="12"
              heartCount="100"
              name="Front-end nâng cao"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img8.png"
            />
            <Thumbnail
              status="Đã kết thúc"
              userCount="12"
              heartCount="100"
              name="Laravel framework"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img1.png"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}
