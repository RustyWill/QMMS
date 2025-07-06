import React, { useState } from 'react'
import './ColorLevels.css'

const initialLines = { solid: [''], dashed: [''] }

export default function ColorLevels() {
  const [columns] = useState([
    { name: 'Blue',   tint: '#E6F2FF' },
    { name: 'Orange', tint: '#FFF4E6' },
    { name: 'Black',  tint: '#F5F5F5' },
    { name: 'Teal',   tint: '#E6FFFA' },
  ])

  const [levels, setLevels] = useState(
    columns.map(() => ({ ...initialLines }))
  )

  const addLine = (colIdx, type) => {
    setLevels(l => {
      const copy = [...l]
      copy[colIdx][type] = [...copy[colIdx][type], '']
      return copy
    })
  }

  const removeLine = (colIdx, type, idx) => {
    setLevels(l => {
      const copy = [...l]
      copy[colIdx][type] = copy[colIdx][type].filter((_, i) => i !== idx)
      return copy
    })
  }

  const updateValue = (colIdx, type, idx, value) => {
    setLevels(l => {
      const copy = [...l]
      copy[colIdx][type][idx] = value
      return copy
    })
  }

  return (
    <div className="columns-container">
      {columns.map((col, colIdx) => (
        <div
          key={col.name}
          className="color-column"
          style={{ backgroundColor: col.tint }}
        >
          <div className="color-title">{col.name} Levels</div>

          <div className="subheading">Solid Lines</div>
          {levels[colIdx].solid.map((val, i) => (
            <div className="line-row" key={`s-${i}`}>
              <label>Solid {i + 1}:</label>
              <input
                type="text"
                value={val}
                onChange={e =>
                  updateValue(colIdx, 'solid', i, e.target.value)
                }
              />
              <button
                className="remove-button"
                onClick={() => removeLine(colIdx, 'solid', i)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="add-button"
            onClick={() => addLine(colIdx, 'solid')}
          >
            + Add Solid
          </button>

          <div className="subheading">Dashed Lines</div>
          {levels[colIdx].dashed.map((val, i) => (
            <div className="line-row" key={`d-${i}`}>
              <label>Dashed {i + 1}:</label>
              <input
                type="text"
                value={val}
                onChange={e =>
                  updateValue(colIdx, 'dashed', i, e.target.value)
                }
              />
              <button
                className="remove-button"
                onClick={() => removeLine(colIdx, 'dashed', i)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="add-button"
            onClick={() => addLine(colIdx, 'dashed')}
          >
            + Add Dashed
          </button>
        </div>
      ))}
    </div>
  )
}
