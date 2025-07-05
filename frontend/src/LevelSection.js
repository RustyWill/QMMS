// frontend/src/LevelSection.js
import React from 'react';

export default function LevelSection({ color, supports, resistances }) {
  return (
    <section className="bg-white rounded shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-['#' + color]">
        {color.charAt(0).toUpperCase() + color.slice(1)} Levels
      </h2>

      <div className="grid grid-cols-5 gap-4 mb-4">
        {resistances.map((val, i) => (
          <input
            key={i}
            value={val}
            placeholder={`S${i + 1}`}
            className="border rounded px-2 py-1 focus:ring focus:border-blue-300"
          />
        ))}
      </div>

      <div className="grid grid-cols-5 gap-4">
        {supports.map((val, i) => (
          <input
            key={i}
            value={val}
            placeholder={`D${i + 1}`}
            className="border rounded px-2 py-1 focus:ring focus:border-blue-300"
          />
        ))}
      </div>
    </section>
  );
}
