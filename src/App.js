import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Agile from "./components/Agile";
import Footer from "./components/Footer";
import Integer from "./components/Integer";
import Long from "./components/Long";
import Success from "./components/Success";
import Team from "./components/Team";
function App() {
  return (
    <>
      <Integer />
      <Long />
      <Agile />
      <Team />
      <Success />
      <Footer />
    </>
  );
}

export default App;
