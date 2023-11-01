import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing/Landing";
import CurrencyBox from "./CurrencyBox/CurrencyBox";
import Register from "./Organism/Register";
import Login from "./Organism/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/currency" element={<CurrencyBox />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
