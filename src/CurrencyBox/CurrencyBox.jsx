import { useContext } from "react";
import "./CurrencyBox.css";
import { QuestionContext } from "../context/context";
import logo2 from "..images/logo2.png";

function CurrencyBox() {
  //Using the providers value

  const {
    message1,
    setMessage1,
    message2,
    setMessage2,
    message3,
    setMessage3,
    message4,
    setMessage4,
    total,
    setTotal,
  } = useContext(QuestionContext);

  const handleSubmit = (event) => {
    let ans1 = 0;
    let ans2 = 0;
    let ans3 = 0;
    let ans4 = 0;

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    if (values.currency === "USD") {
      ans1 = message1 + +values.Amount;
      setMessage1(ans1);
    } else if (values.currency === "EUR") {
      ans2 = message2 + +values.Amount;
      setMessage2(ans2);
    } else if (values.currency === "XAF") {
      ans3 = message3 + +values.Amount;
      setMessage3(ans3);
    } else if (values.currency === "CNY") {
      ans4 = message4 + +values.Amount;
      setMessage4(ans4);
    }
    if (values.defaultCurrency === "USD") {
      const operation1 = (
        message2 * 0.93 +
        message1 +
        message3 * 0.0016 +
        message4 * 0.15
      ).toFixed(2);
      const unit1 = `${operation1} USD`;
      setTotal(unit1);
    } else if (values.defaultCurrency === "EUR") {
      const operation2 =( 
        message1 * 0.93 + message2 + message3 * 0.01 + message4 * 0.14
        ).toFixed(2);
        const unit2 = `${operation2} EUR`;
        setTotal(unit2);
    } else if (values.defaultCurrency === 'XAF') {
      const operation3 =
      (
        message1 * 611.64 +
        message2 * 658.13 +
        message3 +
        message4 * 90.23
      ).toFixed(2);
      const unit3 = `${operation3} XAF`;
      setTotal(unit3);
    } else {
      const operation4 = (
        message1 * 6.78 +
        message2 * 7.29 +
        message3 * 0.01 +
        message4
      ).toFixed(2);
      const unit4 = `${operation4} CNY`;
      setTotal(unit4);
    }
    };


  function doExchange(event) {
    event.preventDefault();

    const change = new FormData(event.currentTarget);
    const values2 = Object.fromEntries(change.entries());

    if (values2.from === values2.too) {
      alert('currency for exchange are similar');
    }

    if (values2.too === 'USD') {
      if (values2.from === 'XAF' && values2.deposite < message3) {
        const val1 = message3 - values2.deposite;
        setMessage3(val1);
        setMessage1(message1 + val1 * 0.01);
      } else if (values2.from === 'EUR' && values2.deposite < message2) {
        const val1 = message2 - values2.deposite;
        setMessage2(val1);
        setMessage1(message1 + val1 * 0.93);
      } else if (values2.from === 'CNY' && values2.deposite < message4) {
        const val1 = message4 - values2.deposite;
        setMessage4(val1);
        setMessage1(message1 + val1 * 0.14);
      } else {
        alert('Insufficient amount in wallet');
      }
    } else if (values2.too === 'EUR') {
      if (values2.from === 'XAF' && values2.deposite < message3) {
        const val1 = message3 - values2.deposite;
        setMessage3(val1);
        setMessage2(message2 + val1 * 0.01);
      } else if (values2.from === 'USD' && values2.deposite < message1) {
        const val1 = message1 - values2.deposite;
        setMessage1(val1);
        setMessage2(message2 + val1 * 0.93);
      } else if (values2.from === 'CNY' && values2.deposite < message4) {
        const val1 = message4 - values2.deposite;
        setMessage4(val1);
        setMessage2(message2 + val1 * 0.14);
      } else {
        alert('Insufficient amount in wallet');
      }
    } else if (values2.too === 'CNY') {
      if (values2.from === 'XAF' && values2.deposite < message3) {
        const val1 = message3 - values2.deposite;
        setMessage3(val1);
        setMessage4(message4 + val1 * 0.01);
      } else if (values2.from === 'USD' && values2.deposite < message1) {
        const val1 = message1 - values2.deposite;
        setMessage1(val1);
        setMessage4(message4 + val1 * 6.78);
      } else if (values2.from === 'EUR' && values2.deposite < message2) {
        const val1 = message2 - values2.deposite;
        setMessage2(val1);
        setMessage4(message4 + val1 * 7.29);
      } else {
        alert('Insufficient amount in wallet');
      }
    } else if (values2.too === 'XAF') {
      if (values2.from === 'CNY' && values2.deposite < message4) {
        const val1 = message4 - values2.deposite;
        setMessage4(val1);
        setMessage3(message3 + val1 * 90.23);
      } else if (values2.from === 'USD' && values2.deposite < message1) {
        const val1 = message1 - values2.deposite;
        setMessage1(val1);
        setMessage3(message3 + val1 * 611.64);
      } else if (values2.from === 'EUR' && values2.deposite < message2) {
        const val1 = message2 - values2.deposite;
        setMessage2(val1);
        setMessage3(message3 + val1 * 658.13);
      } else {
        alert('Insufficient amount in wallet');
      }
    }
  }

 








  
  
    return (
      <div className="main">
        <div className="main__holder__left">
          <div className="main__wallet">
            <i className="fa-solid fa-wallet"/>
            <h3>Wallet</h3>
          </div>
          <div className="currency__option">

          </div>
        </div>
      </div>
    );
    
 }
export default CurrencyBox