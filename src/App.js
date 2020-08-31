import React, { useState } from "react";
import "./App.css";

class Player {
  constructor({ name }) {
    this.name = name;
    this.notes = [0];
  }

  addNote(note) {
    this.notes.push(note);
  }

  updateNote(index, newNote) {
    this.notes[index] = newNote;
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
      <table>
        <thead>
          <tr>
            <td>Players</td>
            <td>R1</td>
            {columns.map((col, idx) => (
              <td key={idx}>{`R${col}`}</td>
            ))}
            <td>
              <button
                onClick={() => {
                  addColumn((prevCol) => [...prevCol, columns.length + 2]);
                }}
              >
                Add Round
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {rows.map((player, idx) => (
            <tr key={idx}>
              <td>{player.name}</td>
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
          <tr>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
