import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import NetNavBar from "./Components/NetNavBar";
import NetContainer from "./Components/NetContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NetNavBar />
        <Routes>
          <NetContainer />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
