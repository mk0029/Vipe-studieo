import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Searvises from "./components/Searvises";

function App() {
  return (
    <>
      <div className="min_vh_xl_70 d-flex flex-column bg-black overflow_x_hidden overflow-hidden ">
        {" "}
        <NavBar />
        <div className="d-flex flex-column flex-grow-1 justify-content-center">
          {" "}
          <Header />
        </div>
      </div>
      <Featured />
      <Searvises />
    </>
  );
}

export default App;
