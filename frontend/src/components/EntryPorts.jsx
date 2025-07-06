import React, { useState } from 'react'

export default function EntryPorts() {
  const [ports, setPorts] = useState(Array(4).fill(''))

  const handleChange = (i, v) => {
    const a = [...ports]; a[i] = v; setPorts(a)
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-3">Entry Ports</h2>
      {ports.map((val, i) => (
        <div key={i} className="flex items-center mb-1">
          <label className="w-20">P{i+1}:</label>
          <input
            type="text"
            value={val}
            onChange={e => handleChange(i, e.target.value)}
            className="flex-1 bg-gray-700 text-white rounded px-2 py-1 mr-2"
          />
          <button
            onClick={() => setPorts(ports.filter((_, idx) => idx!==i))}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={() => setPorts([...ports, ''])}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm mt-1"
      >
        Add Port
      </button>
    </div>
  )
}
