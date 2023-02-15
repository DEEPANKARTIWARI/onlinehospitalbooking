import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import Details from "./component/Details";
import Errror from "./component/Errror";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingPage" element={<Sidebar />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;
