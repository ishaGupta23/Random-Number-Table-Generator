import React, { useState } from "react";

function App() {
  // State to store the number
  const [number, setNumber] = useState(5);

  // Function to generate the table rows
  const generateTable = () => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{i * number}</td>
        </tr>
      );
    }
    return rows;
  };

  // Function to update the state with a random value
  const updateNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <h1>Number Table</h1>
      <p>Number: {number}</p>
      <button onClick={updateNumber}>Generate Random Number</button><hr/>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
}

export default App;
