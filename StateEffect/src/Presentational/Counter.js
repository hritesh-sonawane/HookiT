import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count: ${count}`);
  });

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Clean Up Effects
  //   const [clickCount, setClickCount] = useState(0);
  //   const increment = () => setClickCount((prev) => prev + 1);
  //   useEffect(() => {
  //     document.addEventListener("mousedown", increment);
  //     return () => {
  //       document.removeEventListener("mousedown", increment);
  //     };
  //   });

  return (
    <div>
      {/* <h1>Document Clicks: {clickCount}</h1> */}
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
