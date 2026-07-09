import { useState } from 'react';
import './Layout.css'

export default function Layout() {
  const [count, setCount] = useState(10);

  const subtractOne = () => {
    if (count == 0) {
      setCount(0);
      return;
    }

    setCount(c => c - 1);
  }

  const addOne = () => {
    setCount(c => c + 1)
  }

  const multiplyTwo = () => {
    setCount(c => c * 2)
  }

  const divideTwo = () => {
    setCount(c => c/ 2);
  }

  const setZero = () => {
    setCount(0);
  }

  return (
    <section className="layout">
      <button className="btn btn-danger me-2" onClick={subtractOne}>
        Subtract 1
      </button>
      <button className="btn btn-primary me-2" onClick={addOne}>
        Add 1
      </button>
      <button className="btn btn-success me-2" onClick={multiplyTwo}>
        Multiply * 2
      </button>
      <button className="btn btn-warning me-2" onClick={divideTwo}>
        Divide / 2
      </button>
      <button className="btn border" onClick={setZero}>
        Divide / 2
      </button>

      <hr/>

      <p>Count: {count}</p>
    </section>
  );
}