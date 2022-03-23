import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import { courseService } from "../../services/course";

export default function Course() {
  const [courses, setCourses] = useState();

  useEffect(() => {
    courseService.getList().then((res) => setCourses(res.data));
  }, []);

  // const { data: courses } = useQuery(() => courseService.getList(), []);

  // const { data: gallery } = useQuery(() => homeService.gallery());
  // const { data: review } = useQuery(() => homeService.review());

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
          <div className="list row" style={{ margin: "50px" }}>
            {courses?.map((e) => (
              <CourseCard key={e.id} {...e} />
            ))}
          </div>
        </div>
      </section>
      {/* <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <CourseCard
              status="Đã kết thúc"
              userCount="12"
              heartCount="100"
              name="Front-end căn bản"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img7.png"

            />
            <CourseCard
              status="Đã kết thúc"
              userCount="12"
              heartCount="100"
              name="Front-end nâng cao"
              description="One of the best corporate fashion brands in Sydney???"
              instructor="Trần Nghĩa"
              img="/img/img8.png"
            />
            <CourseCard
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
      </section> */}
    </>
  );
}
