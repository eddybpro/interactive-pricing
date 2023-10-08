import { useState } from "react";
import "./App.css";

import CheckIcon from "./assets/icon-check.svg";
import { useRef } from "react";

function App() {
  const [rangeVal, setRangeVal] = useState(0);
  const sliderEl = useRef(null);

  const handleChange = (e) => {
    setRangeVal(e.target.value);

    const progress = (e.target.value / sliderEl.current?.max) * 100;

    sliderEl.current.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, var(--color-site-5) ${progress}%)`;
  };

  return (
    <>
      <header>
        <h1 className="Title">Simple, traffic-based pricing</h1>
        <p className="Para">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </header>
      <main>
        <div className="BillingBox">
          <h2 className="BillingBox-Title">100k pageviews</h2>
          <input
            type="range"
            name="slider"
            id="slider"
            className="InputRange"
            min="0"
            max="100"
            value={rangeVal}
            onChange={handleChange}
            ref={sliderEl}
          />
          <div className="BillingBox-Bill">
            <strong>$16.00</strong>
            <span>/month</span>
          </div>
        </div>
        <div className="BillingMethod">
          <label htmlFor="bill">
            Monthly billing
            <input type="checkbox" name="bill" id="bill" />
          </label>
          <span className="BillingMethod-Year">yearly billing</span>
          <p className="BillingMethod-Discount">
            <span className="Mobile">-</span>
            25% <span className="Desktop">discount</span>
          </p>
        </div>
        <div className="TrialBox">
          <ul className="TrialBox-Features">
            <li>
              <img src={CheckIcon} alt="" />
              Unlimited websites
            </li>
            <li>
              <img src={CheckIcon} alt="" />
              100% data ownership
            </li>
            <li>
              <img src={CheckIcon} alt="" />
              Email reports
            </li>
          </ul>
          <button className="TrialBox-TrialBtn">Start my trial</button>
        </div>
      </main>
    </>
  );
}

export default App;
