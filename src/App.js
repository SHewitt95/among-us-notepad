import React, { useState } from "react";
import "./App.css";

class Player {
  constructor({ name }) {
    this.name = name;
  }
}

const NOTES = {
  unsure: "Unsure",
  innocent: "Innocent",
  imposter: "Imposter",
  dead: "Dead",
};

const NoteDropdown = ({ selected = NOTES.unsure }) => {
  const COLORS = {
    Innocent: "#53FD5F",
    Unsure: "#EBFD68",
    Imposter: "#FC6969",
    Dead: "#68E6FD",
  };

  const [color, setColor] = useState(COLORS[selected]);
  return (
    <select
      style={{ backgroundColor: color }}
      onChange={(e) => setColor(COLORS[e.target.value])}
      defaultValue={NOTES.unsure}
    >
      {Object.values(NOTES).map((note, idx) => (
        <option value={note} key={idx}>
          {note}
        </option>
      ))}
    </select>
  );
};

function App() {
  const [rows, addRow] = useState([]);
  const [columns, addColumn] = useState([]);
  return (
    <>
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
            {columns.map((_, idx) => (
              <td key={idx}>{`R${idx + 2}`}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((player, idx) => (
            <tr key={idx}>
              <td suppressContentEditableWarning={true} contentEditable="true">
                {player.name}
              </td>
              <td>
                <NoteDropdown />
              </td>
              {columns.map((_, idx) => (
                <td key={idx}>
                  <NoteDropdown />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
