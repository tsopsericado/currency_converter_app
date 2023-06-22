import React from 'react'

export default function CurrencyBox(props) {

  return (
    <div className="currency">
      <p>Convert</p>
      <input type="number" className="input" />
      <select name="">
        <option value="USD">USD</option>
        <option value="EURO">EURO</option>
        <option value="XAF">XAF</option>
      </select>
      <p>=</p>
      <input type="number" className="input" />
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
