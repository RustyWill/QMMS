// frontend/src/components/EntryPorts.jsx
import React from 'react';

export default function EntryPorts({ ports = [], onSubmit }) {
  return (
    <div>
      <h2>Entry Ports</h2>
      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex', gap: 8 }}>
          {ports.map((port, i) => <input key={i} defaultValue={port} />)}
        </div>
        <button type="submit">Submit All Levels</button>
      </form>
    </div>
  );
}
