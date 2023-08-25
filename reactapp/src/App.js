import React from 'react';
import { filterOdd, filterEven, generateRandomList } from './functions/filterOddEven';

function App() {
  const randomList = generateRandomList(); // Returns an array of 7 random numbers
  const oddNumbers = filterOdd(...randomList); // Returns an array of odd numbers
  const evenNumbers = filterEven(...randomList); // Returns an array of even numbers

  return (
    <div>
      <h1>Odd numbers:</h1>
      <ul>
        {oddNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>

      <h1>Even numbers:</h1>
      <ul>
        {evenNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;