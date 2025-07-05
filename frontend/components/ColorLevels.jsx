// frontend/src/components/ColorLevels.jsx
import React from 'react';

export default function ColorLevels({ color, sLevels = [], dLevels = [] }) {
  return (
    <div>
      <h2>{color} Levels</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        {sLevels.map((lvl, i) => <input key={i} defaultValue={lvl} />)}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {dLevels.map((lvl, i) => <input key={i} defaultValue={lvl} />)}
      </div>
    </div>
  );
}
