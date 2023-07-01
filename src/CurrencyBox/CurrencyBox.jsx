import React, { useEffect, useState } from "react";
import ReactDropdown from "react-dropdown";
import './CurrencyBox.css'

export default function CurrencyBox() {
  //Declaring and initializing our States
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EURO");
  const [defaultCurrency, setDefaultCurrency] = useState("USD");
  const [sum, setSum] = useState(0);
  const [wallet, setWallet] = useState([
    { name: "USD", amount: 100 },
    { name: "EURO", amount: 500 },
    { name: "XAF", amount: 10000 },
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

      wallet?.forEach(({ name, amount }) => {
        tempSum += (amount / rates[name]) * rates[defaultCurrency];
      });
      const calculatedSum =
        (tempSum / rates[defaultCurrency]) * rates[defaultCurrency];
      setSum(calculatedSum);
    }
  }, [defaultCurrency]);

  //Getting the total in default currency after conversion

  function handleConvert() {
    const rate = rates;
    const results = (input / rate[from]) * rate[to];
    const holder = wallet;

    holder.map((elmt) => {
      if (elmt === from) {
        elmt.amount -= input;
      } else if (elmt.name === to) {
        elmt.amount += results;
      }
      return elmt;
    });
    setWallet([...holder]);

    if (rates !== undefined) {
      let tempSum = 0;

      wallet?.forEach(({ name, amount }) => {
        tempSum += (amount / rates[name]) * rates[defaultCurrency];
      });
      const calculatedSum =
        (tempSum / rates[defaultCurrency]) * rates[defaultCurrency];
      setSum(calculatedSum);
    }
  }

  // Getting total default currency after deposit

  function handleConfirm() {
    wallet.map((elmt) => {
      if (elmt.name === deposit) {
        elmt.amount += input;
      }
      return elmt;
    });
    setWallet([...wallet]);

    if (rates !== undefined) {
      let tempSum = 0;

      wallet?.forEach(({ name, amount }) => {
        tempSum += (amount / rates[name]) * rates[defaultCurrency];
      });
      const calculatedSum =
        (tempSum / rates[defaultCurrency]) * rates[defaultCurrency];
      setSum(calculatedSum);
    }
  }
 if (options.lenght > 0) { 
  return (
    <div className="currency">
      <div
        className="converter"
        onSubmit={(e) => {
          e.preventDefault();
          handleConvert();
        }}
      >
        <h2>convert</h2>
        <div className="input">
          <h3>Amount:</h3>
          <input
            type="number"
            id="amount"
            step="any"
            onChange={(e) => setInput(+e.target.value)}
          />
        </div>
        <div className="select-option">
          <h4>From:</h4>
          <ReactDropdown
            className="dropdown"
            options={options}
            value={from.toUpperCase()}
            placeholder="From"
            onChange={(e) => {
              setFrom(e.value);
            }}
          />
          <h4>To:</h4>
          <ReactDropdown
            className="dropdown"
            options={options}
            value={to.toUpperCase()}
            placeholder="to"
            onChange={(e) => {
              setTo(e.value);
            }}
          />
        </div>
        <button type="submit">Convert</button>
      </div>

      <div
        className="converter"
        onSubmit={(e) => {
          e.preventDefault();
          handleConfirm();
        }}
      >
        <h2>Users Acount</h2>
        <div className="input">
          <h3> Amount:</h3>
          <input
            type="number"
            step="any"
            id="amount"
            onChange={(e) => setInput(+e.target.value)}
          />
        </div>
        <div className="select-options">
          <h3>Deposit Currency:</h3>
          <ReactDropdown
            className="dropdowns"
            options={options}
            onChange={(e) => {
              setDeposit(e.value);
            }}
            value={deposit.toUpperCase()}
          />
        </div>
        <button type="submit">Confirm</button>
      </div>
      <div className="converter">
        <h2>User's Wallet</h2>
        <div className="select">
          <h3>Default Currency:</h3>
          <ReactDropdown
            className="dropdowns"
            options={options}
            value={defaultCurrency.toUpperCase()}
            onChange={(e) => {
              setDefaultCurrency(e.value);
            }}
          />
        </div>
        <div className="currencies">
          {wallet.map((elmt, index) =>(
            <p key={index}>
              {elmt.name.toUpperCase()}: {elmt.amount.toFixed(2)}
            </p>
          ))}
        </div>
        <h4 className="total">Total: {sum.toFixed(2)}</h4>
      </div>
    </div>
  );
}
}