import React, { useState } from "react";
import "./App.css";

class Player {
  constructor({ name }) {
    this.name = name;
  }
}

const NOTES = {
  innocent: "Innocent",
  unsure: "Unsure",
  imposter: "Imposter",
  dead: "Dead",
};

function App() {
  const [rows, addRow] = useState([]);
  const [columns, addColumn] = useState([]);
  return (
    <div className="App">
      <button
        onClick={() => {
          addRow((prevRows) => [
            ...prevRows,
            new Player({ name: `Player ${rows.length + 1}` }),
          ]);
        }}
      >
        Add Player
      </button>
      <button
        onClick={() => {
          addColumn((prevCol) => [...prevCol, columns.length + 2]);
        }}
      >
        Add Round
      </button>
      <table>
        <thead>
          <tr>
            <td>Players</td>
            <td>R1</td>
            {columns.map((col, idx) => (
              <td key={idx}>{`R${col}`}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((player, idx) => (
            <tr key={idx}>
              <td contenteditable="true">{player.name}</td>
              <td>
                <select>
                  {Object.values(NOTES).map((note, idx) => (
                    <option key={idx}>{note}</option>
                  ))}
                </select>
              </td>
              {columns.map((_, idx) => (
                <td key={idx}>
                  <select>
                    {Object.values(NOTES).map((note, idx) => (
                      <option key={idx}>{note}</option>
                    ))}
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
