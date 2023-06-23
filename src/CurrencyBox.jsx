import React, {useEffect, useState} from 'react'


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
const [ rates, setRates] = useState();

useEffect(()=>{
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${defaultCurrency}.json`
  )
  .then((res) => res.json())
  .then((res)=>{
    setRates(res[defaultCurrency]);
    SetOptions([...Object.keys(res[defaultCurrency])]);
  });
  if(rates)
})

  return (
    <div className="currency">
      <p>Convert</p>
      <input className="input" type="number" />
      <select name="">
        <option value="USD">USD</option>
        <option value="EURO">EURO</option>
        <option value="XAF">XAF</option>
      </select>
      <p>=</p>
      <input className="input" type="number" />
      <select name="">
        <option value="USD">USD</option>
        <option value="EURO">EURO</option>
        <option value="XAF">XAF</option>
      </select>
      <li>
        <input type="number" />
        <select name="" id="">
          <option value="USD">USD</option>
          <option value="EURO">EURO</option>
          <option value="XAF">XAF</option>
        </select>
        <button>Deposite</button>
      </li>
    </div>
  );
}
