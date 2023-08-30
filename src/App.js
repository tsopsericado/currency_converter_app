import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing/Landing";
import CurrencyBox from "./CurrencyBox/CurrencyBox";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/currency" element={<CurrencyBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
