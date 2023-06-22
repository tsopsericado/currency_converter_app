import React from 'react'
import "./UsersBalance.css";

export default function UsersBalance() {
  return (
    <div className="container">
      <ol>
        <h1 className="header">Users Balance</h1>
        <p>Default currency: </p>
        <select name="" id="">
          <option value="USD">USD</option>
          <option value="EURO">EURO</option>
          <option value="XAF">XAF</option>
        </select>
        <li>
          <p className="amount">100</p>
          <p>
            <span>USD</span>
          </p>
        </li>
        <li>
          <p className="amount">500</p>
          <p>
            <span>EURO</span>
          </p>
        </li>
        <li>
          <p className="amount">10000</p>
          <p>
            <span>XAF</span>
          </p>
        </li>
        <li>
          <p>Total:</p>
          <p  className='default'>736.667 USD</p>
        </li>
        <button>Confirm</button>
      </ol>
    </div>
  );
}
