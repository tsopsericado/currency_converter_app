import React, { useEffect, useState } from "react";
import ReactDropdown from "react-dropdown";



export default function CurrencyBox() {
  //Declaring and initializing our States
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EURO");
  const [defaultCurrency, setDefaultCurrency] = useState("USD");
  const [Sum, setSum] = useState(0);
  const [wallet, setWallet] = useState([
    { name: "USD", amount: 100 },
    { name: "EURO", amount: 100 },
    { name: "XAF", amount: 100 },
  ]);
  const [deposit, setDeposit] = useState("XAF");
  const [options, SetOptions] = useState([]);
  const [rates, setRates] = useState();

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${defaultCurrency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setRates(res[defaultCurrency]);
        SetOptions([...Object.keys(res[defaultCurrency])]);
      });
    if (rates !== undefined) {
      let tempSum = 0;

      wallet?.forEach(({ name, amount}) => {
        tempSum += (amount /rates[name]) * rates[defaultCurrency];
      });
      const calculatedSum = (tempSum/ rates[defaultCurrency]) * rates[defaultCurrency];
      setSum(calculatedSum);

    }
  }, [defaultCurrency]);

  //Getting the total in default currency after conversion 

  function handleConvert(){
    const rate = rates;
    const results = (input / rate[from]) * rate[to];
    const holder = wallet; 

    holder.map((elmt) => {
      if(elmt === from) {
        elmt.amount -= input;
      }else if(elmt.name === to) {
        elmt.amount += results;
      }
      return elmt;
    });
    setWallet([...holder]);

    if (rates !== undefined) {
      let tempSum = 0;

      wallet?.forEach(({name, amount}) =>{
        tempSum += (amount / rates[name]) * rates[defaultCurrency];
      });
      const calculatedSum = (tempSum / rates[defaultCurrency]) * rates[defaultCurrency];
      setSum(calculatedSum);
    }
  }

  // Getting total default currency after deposit
  
  function handleConfirm(){
    wallet.map((elmt) =>{
      if (elmt.name === deposit){
        elmt.amount += input;
      }
      return elmt;
    });
    setWallet([...wallet]);

    if(rates !== undefined) {
      let tempSum = 0;
      
  //     wallet?.forEach(({name, amount})=>{
  //       tempSum +=(amount / rates[name])  * rates[defaultCurrency];
  //     });
  //     const calculatedSum = (tempSum / rates[defaultCurrency]) * rates[defaultCurrency];
  //     setSum(calculatedSum);
  //   }
  // }


  return (
    <div className="currency">
     <div className="converter"
     onSubmit={(e)=>{
      e.preventDefault();
      handleConvert();
     }}>
      <h2>convert</h2>
      <div className="input"></div>
      
      </div>   
 
    </div>
  );
}
