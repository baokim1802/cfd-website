import { useState } from "react";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import "./assets/dest/style.min.css";
import "./assets/dest/stylelibs.min.css";
import "./assets/dest/fonts.css";
import "./assets/styles.scss";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Register />
      </MainLayout>
    </div>
  );
}

export default App;
