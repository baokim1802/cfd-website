import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import "./assets/dest/style.min.css";
import "./assets/dest/stylelibs.min.css";
import "./assets/dest/fonts.css";
import "./assets/styles.scss";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
}

export default App;
