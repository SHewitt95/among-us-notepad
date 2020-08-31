import React, { useState } from "react";
import "./App.css";

function App() {
  const [rows, addRow] = useState([]);
  return (
    <div className="App">
      <table>
        <tbody>
          {rows.map((data) => (
            <tr>
              <td>Hello</td>
            </tr>
          ))}
          <tr>
            <td>
              <button
                onClick={() => {
                  addRow((prevRows) => [...prevRows, 0]);
                }}
              >
                Add Player
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
