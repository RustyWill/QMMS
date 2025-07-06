import React from 'react';

export default function ColorLevels({ color, levels, setLevels }) {
  const { sLevels, dLevels } = levels;

  const handleChange = (type, idx) => e => {
    const val = e.target.value;
    const key = type === 'solid' ? 'sLevels' : 'dLevels';
    const updatedArr = levels[key].map((v, i) => i === idx ? val : v);
    setLevels({ ...levels, [key]: updatedArr });
  };

  return (
    <fieldset
      style={{
        border: `2px solid ${color}`,
        padding: '1em',
        margin: '1em 0',
        borderRadius: '8px'
      }}
    >
      <legend style={{ color, fontSize: '1.2em' }}>
        {color.charAt(0).toUpperCase() + color.slice(1)} Levels
      </legend>

      <div>
        <strong>Solid Levels:</strong>
        {sLevels.map((val, i) => (
          <input
            key={i}
            type="number"
            placeholder={`S#${i + 1}`}
            value={val}
            onChange={handleChange('solid', i)}
            style={{ width: 80, margin: '0 .5em' }}
          />
        ))}
      </div>

      <div style={{ marginTop: '0.5em' }}>
        <strong>Dashed Levels:</strong>
        {dLevels.map((val, i) => (
          <input
            key={i}
            type="number"
            placeholder={`D#${i + 1}`}
            value={val}
            onChange={handleChange('dashed', i)}
            style={{ width: 80, margin: '0 .5em' }}
          />
        ))}
      </div>
    </fieldset>
  );
}
