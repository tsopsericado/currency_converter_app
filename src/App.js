// import {BrowserRouter as Router, Routes, Route} from 'react';
import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyBox from  "./CurrencyBox";
import UsersBalance from './UsersBalance';


// const BASE_URL ='https://api.exchangeratesapi.io/latest'


function App() {

  // const [currencyLists, setCurrencyList] = useState([]);
  // const [fromCurrency, setFromCurrency] = useState()
  // const [toCurrency, setToCurrency] = useState()
  // const [exchangeRate, setExchangeRate] = useState()
  // const [amount, setAmount] = useState(1)
  // const [amountInFromCurrency, setAmountInFromCurrency] = useState()

  // fetch the data for the first time you open the application


  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then((res) => res.json())
  //     .then((data) =>  {
  //         const firstcurrency = Object.keys(data.rates)[0] 
  //         setCurrencyList([data.base, ...Object.keys(data.rates)])
  //         setFromCurrency(data.base)
  //         setToCurrency(firstcurrency);
  //         setExchangeRate(data.rate[firstcurrency])
  //       });
  // }, [])    

  return (
    <div className='app'>
      <UsersBalance />
      <CurrencyBox />
    </div>
  );
}

export default App;
