import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Info from "./pages/Profile/Info";
import ProfileCourse from "./pages/Profile/Course";
import ProfileProject from "./pages/Profile/Project";
import ProfilePayment from "./pages/Profile/Payment";
import Coin from "./pages/Profile/Coin";
import Course from "./pages/Course";
import Cooperate from "./pages/Cooperate";
import Team from "./pages/Team";
import Payment from "./pages/Profile/Payment";
import CourseDetail from "./pages/CourseDetail";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/khoa-hoc" element={<Course />} />
          <Route path="/lien-he" element={<Cooperate />} />
          <Route path="/khoa-hoc/:slug" element={<CourseDetail />} />
          <Route path="/ca-nhan" element={<Profile path="/ca-nhan" />}>
            <Route index element={<Info />} />
            <Route path="khoa-hoc" element={<ProfileCourse />} />
            <Route path="coin" element={<Coin />} />
            <Route path="du-an" element={<ProfileProject />} />
            <Route path="thanh-toan" element={<ProfilePayment />} />
          </Route>
          <Route path="/thanh-vien" element={<Team />} />
          <Route path="/huong-dan-thanh-toan" element={<Payment />} />
          <Route path="/dang-nhap" element={<Login />} />
          <Route path="/dang-ky" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      {/*  <MainLayout>
         <Home />
       </MainLayout> */}
    </div>
  );
}

export default App;
