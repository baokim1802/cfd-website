import React from "react";
import Course from "../Course";
import { Link } from "react-router-dom";
import TextItem from "./components/TextItem";

export default function Home() {
  return (
    <main className="homepage" id="main">
      <div className="banner jarallax">
        <div className="container">
          <div className="content">
            <h2 className="title">Thực Chiến</h2>
            <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
            <Link to="/khoa-hoc" className="btn main round">
              KHÓA HỌC
            </Link>
          </div>
        </div>
        <div className="jarallax-img">
          <img data-src="/img/bg-cover.jpg" alt="" className="lazyload" />
          <div
            className="video-bg lazyload"
            data-src="video/CFD-video-bg2.mp4"
          />
        </div>
      </div>
      <Course />
      <section className="section-different">
        <div className="container">
          <div className="row">
            <div className="titlebox col-md-6 col-sm-12 col-xs-12">
              <h2 className="main-title white textleft">
                Những điều <br />
                <span>đặc biệt</span> tại CFD
              </h2>
              <div className="videodif" data-src="video/CFD-video-intro.mp4">
                <img src="/img/img-cfd-dac-biet.jpg" alt="" />
                <div className="play-btn btn-video-intro">
                  <img src="/img/play-icon.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="contentbox col-md-6 col-sm-12 col-xs-12">
              <TextItem
                title="Không cam kết đầu ra"
                content="Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như
                  cả người hướng dẫn và người học không thật sự tâm huyết và cố
                  gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các thành
                  viên tạo ra sản phẩm có giá trị, thay vì cam kết."
              />
              <TextItem
                title="Không chỉ là một lớp học"
                content="CFD không phải một lớp học thuần túy, tất cả thành viên là một
                  team, cùng hổ trợ, chia sẻ và giúp đỡ nhau trong suốt quá
                  trình học và sau này, với sự hướng dẫn tận tâm của các thành
                  viên đồng sáng lập."
              />
              <TextItem
                title="Không để ai bị bỏ lại phía sau"
                content="Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ
                  được đội ngũ CFD kèm cặp đặc biệt, cùng sự hổ trợ từ các thành
                  viên khác. Vì mục tiêu cuối cùng là hoàn thành khóa học thật
                  tốt."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-testimonial">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
          </div>
          <div className="testimonial">
            <div className="testimonial-item">
              <div className="item">
                <div className="text">
                  <div className="ct ct-1 active">
                    <div className="info">
                      <div className="name">
                        <h4>Tiến Tài</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="/img/quotes.svg" alt="" />
                      </div>
                    </div>
                    <div className="content">
                      Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập
                      trình front-end qua khóa học. Like cho 4 mentor.
                    </div>
                    <div className="bottom">
                      <a href="#" target="_blank">
                        <img src="/img/facebook.svg" alt="" />
                      </a>
                      <span>09/10/2020</span>
                    </div>
                  </div>
                  <div className="ct ct-2">
                    <div className="info">
                      <div className="name">
                        <h4>Phạm Thành Trung</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="/img/quotes.svg" alt="" />
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sollicitudin libero id magna finibus, in maximus urna
                      tincidunt. Nam at leo lacinia, interdum dolor in, molestie
                      lectus. Aenean porttitor purus at purus euismod tristique
                    </div>
                    <div className="bottom">
                      <a href="#" target="_blank">
                        <img src="/img/facebook.svg" alt="" />
                      </a>
                      <span>01/10/2020</span>
                    </div>
                  </div>
                  <div className="ct ct-3">
                    <div className="info">
                      <div className="name">
                        <h4>Nguyễn Văn Tuấn</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="/img/quotes.svg" alt="" />
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sollicitudin libero id magna finibus, in maximus urna
                      tincidunt. Nam at leo lacinia, interdum dolor in, molestie
                      lectus. Aenean porttitor purus at purus euismod tristique
                    </div>
                    <div className="bottom">
                      <a href="#" target="_blank">
                        <img src="/img/facebook.svg" alt="" />
                      </a>
                      <span>01/10/2020</span>
                    </div>
                  </div>
                </div>
                <div className="images">
                  <div className="list">
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="/img/Intersect.png"
                          />
                          <img data-flickity-lazyload="/img/tes.jpg" alt="" />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4>Tiến Tài</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="/img/quotes.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong
                          lập trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank">
                            <img src="/img/facebook.svg" alt="" />
                          </a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="/img/Intersect.png"
                          />
                          <img data-flickity-lazyload="/img/tes.jpg" alt="" />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4>Nguyễn Văn Tuấn</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="/img/quotes.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong
                          lập trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank">
                            <img src="/img/facebook.svg" alt="" />
                          </a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="/img/Intersect.png"
                          />
                          <img data-flickity-lazyload="/img/tes.jpg" alt="" />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4>Phạm Thành Trung</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="/img/quotes.svg" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong
                          lập trình front-end qua khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank">
                            <img src="/img/facebook.svg" alt="" />
                          </a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dots" />
              <div className="btn_ctr prev" />
              <div className="btn_ctr next" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-gallery">
        <div className="textbox">
          <h2 className="main-title">Chúng ta là một team</h2>
        </div>
        <div className="list">
          <img data-flickity-lazyload="/img/img_team1.png" alt="" />
          <img data-flickity-lazyload="/img/img_team2.png" alt="" />
          <img data-flickity-lazyload="/img/img_team3.png" alt="" />
          <img data-flickity-lazyload="/img/img_team4.png" alt="" />
          <img data-flickity-lazyload="/img/img_team3.png" alt="" />
          <img data-flickity-lazyload="/img/img_team4.png" alt="" />
          <img data-flickity-lazyload="/img/img_team1.png" alt="" />
          <img data-flickity-lazyload="/img/img_team2.png" alt="" />
          <img data-flickity-lazyload="/img/img_team3.png" alt="" />
          <img data-flickity-lazyload="/img/img_team4.png" alt="" />
          <img data-flickity-lazyload="/img/img_team3.png" alt="" />
          <div className="item carousel-cell">
            <img data-flickity-lazyload="/img/img_team4.png" alt="" />
          </div>
        </div>
        <div className="controls">
          <div className="btn_ctr prev" />
          <span>Trượt qua</span>
          <div className="timeline">
            <div className="process" />
          </div>
          <div className="btn_ctr next" />
        </div>
      </section>
      <section className="section-action">
        <div className="container">
          <h3>
            Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?
          </h3>
          <div className="btn main round bg-white">Đăng ký</div>
        </div>
      </section>
    </main>
  );
}
