import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard";
import { courseService } from "../../services/course";
import useQuery from "../../hooks/useQuery";

export default function Course() {
  // const [courses, setCourses] = useState();

  // useEffect(() => {
  //   courseService.getList().then((res) => setCourses(res.data));
  // }, []);

  const { data: courses } = useQuery(() => courseService.getList(), []);

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
    </>
  );
}
