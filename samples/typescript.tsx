import React, { useState } from 'react';

/**
 * A sample component to verify Lumen Themes syntax.
 */
export const VerificationComponent: React.FC<{ title: string }> = ({ title }) => {
  const [count, setCount] = useState<number>(0);

  // Logic accented in Noir (orange), colored in Blanc
  if (count > 10) {
    console.log("Max count reached");
  }

  const handleIncrement = () => {
    setCount(prev => prev + 1); // function call
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      {count === 0 && <span>Starting...</span>}
    </div>
  );
};
