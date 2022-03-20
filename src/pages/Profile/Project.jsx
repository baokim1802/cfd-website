import React from "react";
import Thumbnail from "../../components/Thumbnail";

export default function Project() {
  return (
    <div className="tab3" style={{ display: "block" }}>
      <div className="row">
        <Thumbnail
          name="Furnitown"
          description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          instructor="Trần Nghĩa"
          img="/img/img8.png"
          buttonText="Website"
          className="col-md-6 course"
        />
        <Thumbnail
          name="GboxMB"
          description="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
          instructor="Trần Nghĩa"
          img="/img/img5.png"
          buttonText="Website"
          className="col-md-6 course"
        />
      </div>
      <div className="btn-wrap">
        <div className="btn overlay btn-icon round">
          <img src="/img/icon-upload.svg" alt="" /> Tải lên
        </div>
      </div>
    </div>
  );
}
