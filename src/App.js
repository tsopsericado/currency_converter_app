import { BrowserRouter, Routes, Route, useState } from "react";
import "./App.css";
import CurrencyBox from "./CurrencyBox";
import UsersBalance from "./UsersBalance";
import MyContext from "./context/context";

function App() {
  const [message1, setMessage1] = useState(30);
  const [message2, setMessage2] = useState(72.5);
  const [message3, setMessage3] = useState(33.0);
  const [message4, setMessage4] = useState(21.9);
  const [select, setSelect] = useState();
  const [ total, setTotal] = useState('100.76 XAF');


  return (
    <div className="app">
      <MyContext.Provider value={{setTotal, total, message1, setMessage1, message2, setMessage2, message3, setMessage3, message4, setMessage4, select, setSelect}}>
        <UsersBalance />
        <CurrencyBox />
      </MyContext.Provider>
    </div>
  );
}

export default App;
