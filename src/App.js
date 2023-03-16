import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Searvises from "./components/Searvises";
import Agile from "./components/Agile";
import Footer from "./components/Footer";
import Integer from "./components/Integer";
import Long from "./components/Long";
import Success from "./components/Success";
import Team from "./components/Team";
import PreLoader from "./components/PreLoader";
import Backtop from "./components/BackToTOp";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Backtop />
      <PreLoader />
      <div className="min_vh_xl_70 d-flex flex-column bg-black overflow_x_hidden overflow-hidden ">
        {" "}
        <NavBar />
        <div className="d-flex flex-column flex-grow-1 justify-content-center">
          {" "}
          <Header />
        </div>
      </div>
      <Featured />
      <Integer />
      <Searvises />
      <Long />
      <Agile />
      <Team />
      <Success />
      <Footer />
    </>
  );
}

export default App;
