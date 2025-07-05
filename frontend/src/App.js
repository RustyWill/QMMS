// frontend/src/App.js
import React, { useState } from 'react';
import ColorLevels from './components/ColorLevels';
import EntryPorts from './components/EntryPorts';

function App() {
  // each color has 4 S‐levels and 5 D‐levels
  const emptyLevels = { sLevels: ['', '', '', ''], dLevels: ['', '', '', '', ''] };

  const [blue,   setBlue]   = useState({ ...emptyLevels });
  const [orange, setOrange] = useState({ ...emptyLevels });
  const [black,  setBlack]  = useState({ ...emptyLevels });
  const [teal,   setTeal]   = useState({ ...emptyLevels });

  const handleSubmit = (e) => {
    e.preventDefault();
    // you now have blue, orange, black, teal in state – send them to your API
    console.log({ blue, orange, black, teal });
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>QMMS Trading System</h1>

      <ColorLevels
        color="Blue"
        sLevels={blue.sLevels}
        dLevels={blue.dLevels}
      />

      <ColorLevels
        color="Orange"
        sLevels={orange.sLevels}
        dLevels={orange.dLevels}
      />

      <ColorLevels
        color="Black"
        sLevels={black.sLevels}
        dLevels={black.dLevels}
      />

      <ColorLevels
        color="Teal"
        sLevels={teal.sLevels}
        dLevels={teal.dLevels}
      />

      <EntryPorts
        // if you have any port defaults, pass here; otherwise leave empty array
        ports={[]}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
