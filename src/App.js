import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Home from "./Pages/Home";
import CreatePatient from "./Pages/CreatePatient";
import Connection from "./Pages/Connection";
import SearchPatient from "./Pages/SearchPatient";
import IpDirection from "./Pages/IpDirection";


function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/create" element={<CreatePatient />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/search" element={<SearchPatient />} />
              <Route path="/ip" element={<IpDirection />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
