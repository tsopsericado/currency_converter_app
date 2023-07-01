import { BrowserRouter, Routes, Route, useState } from "react";
import "./App.css";
import { QuestionProvider } from "./Context";
import Landing from "./Landing/Landing";
import CurrencyBox from "./CurrencyBox/CurrencyBox";

function App() {
  const [message1, setMessage1] = useState(30);
  const [message2, setMessage2] = useState(72.5);
  const [message3, setMessage3] = useState(33.0);
  const [message4, setMessage4] = useState(21.9);
  const [select, setSelect] = useState();
  const [ total, setTotal] = useState('100.76 XAF');


  return (
    <div className="app">
      <BrowserRouter>
        <QuestionProvider
          value={{
            setTotal,
            total,
            message1,
            setMessage1,
            message2,
            setMessage2,
            message3,
            setMessage3,
            message4,
            setMessage4,
            select,
            setSelect,
          }}
        >
          <Routes>
            <Route index path="/" element={<Landing />} />
            <Route path="/currency" element={<CurrencyBox/>}/>
          </Routes>
        </QuestionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
