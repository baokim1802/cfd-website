import React from "react";
import CourseItem from "./components/CourseItem";

export default function Course() {
  return (
    <div className="tab2" style={{ display: "block" }}>
      <CourseItem
        title="front-end căn bản"
        date="Khai giảng ngày 09/09/2019"
        numHours="54"
        numVideos="25"
        numStudents="20"
        progress="60"
        img="/img/img8.png"
      />
      <CourseItem
        title="front-end nâng cao"
        date="Khai giảng ngày 09/18/2019"
        numHours="81"
        numVideos="36"
        numStudents="18"
        progress="35"
        img="/img/img7.png"
      />
    </div>
  );
}
