import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import NetNavBar from "./Components/NetNavBar";
import NetContainer from "./Components/NetContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./Components/TVShows";
import NetProfile from "./Components/NetProfile";
import NetFooter from "./Components/NetFooter";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NetNavBar />
        <Routes>
          <Route path="/" element={<NetContainer />} />
          <Route path="/TVShows" element={<TVShows />} />
          <Route path="/MyProfile" element={<NetProfile />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        </Routes>
        <NetFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
