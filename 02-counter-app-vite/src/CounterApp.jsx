import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleApp = (e) => {
    setCounter(
      e.target.name === "+1"
        ? counter + 1
        : e.target.name === "-1"
        ? counter - 1
        : e.target.name === "0"
        ? value
        : console.error("No encontrado")
    );
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button name="+1" onClick={handleApp}>
        +1
      </button>
      <button name="-1" onClick={handleApp}>
        -1
      </button>
      <button aria-label="btn-reset" name="0" onClick={handleApp}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
