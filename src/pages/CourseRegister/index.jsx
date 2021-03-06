import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Head from "../../components/Head";
import Input from "../../components/Input";
import { useCourseDetail } from "../../hooks/useCourseDetail";
import useQuery from "../../hooks/useQuery";
import { courseService } from "../../services/course";
import { currency } from "../../utils/number";

export default function CourseRegister() {
  const { id } = useParams();
  // const { data: detail } = useQuery(
  //   async () => {
  //     const res = await courseService.getDetail(id);
  //     if (res.data.data) {
  //       return res;
  //     } else {
  //       navigate(HOME_PATH);
  //     }
  //   },
  //   [],
  //   {}
  // );

  // const [form, setForm] = useState({});
  // const [errors, setErrors] = useState({});
  // const [detail, setDetail] = useState({});
  // const navigate = useNavigate();

  const detail = useCourseDetail(id);

  useEffect(async () => {
    const res = await courseService.getDetail(id);
    if (res.data) {
      setDetail(res.data);
    }
  }, [id]);

  const btnClick = (ev) => {
    ev.preventDefault();

    const errorObj = {};

    if (!form.username) {
      errorObj.username = "Username is required";
    }

    if (!form.phone) {
      errorObj.phone = "Phone is required";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObj.phone = "Phone number is invalid.";
    }

    if (!form.email) {
      errorObj.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errorObj.email = "Email is invalid.";
    }

    if (!form.facebook) {
      errorObj.facebook = "Facebook is required";
    }

    setErrors(errorObj);
    if (Object.keys(errorObj).length === 0) {
      alert("Validated successfully!");
      // call api
    }
  };
  return (
    <main className="register-course" id="main">
      <Head>
        <title>{detail.title}</title>
      </Head>
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">????NG K??</div>
            <h1 className="main-title">Th???c chi???n {detail.title} </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai gi???ng:</strong> {detail.opening_time}
              </div>
              <div className="time">
                <strong>Th???i l?????ng:</strong> {detail.count_video} bu???i
              </div>
              <div className="time">
                <strong>H???c ph??:</strong>
                {currency(detail.money)}
              </div>
            </div>
            <form className="form">
              <Input
                label="H??? v?? t??n"
                onChange={(ev) => (form.username = ev.target.value)}
                placeholder="H??? v?? t??n b???n"
                error={errors.username}
                required
              />
              <Input
                label="S??? ??i???n tho???i"
                onChange={(ev) => (form.phone = ev.target.value)}
                placeholder="S??? ??i???n tho???i"
                error={errors.phone}
                required
              />
              <Input.Email
                label="Email"
                onChange={(ev) => (form.email = ev.target.value)}
                placeholder="Email c???a b???n"
                error={errors.email}
                required
              />
              <Input
                label="URL Facebook"
                onChange={(ev) => (form.facebook = ev.target.value)}
                placeholder="https://facebook.com"
                error={errors.facebook}
                required
              />
              <Input.Number
                label="Age"
                onChange={(ev) => (form.age = ev.target.value)}
                placeholder="Enter age"
              />
              <label>
                <p>?? ki???n c?? nh??n</p>
                <input
                  type="text"
                  placeholder="Mong mu???n c?? nh??n v?? l???ch b???n c?? th??? h???c."
                />
              </label>
              <button className="btn main rect" onClick={btnClick}>
                ????ng k??
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
