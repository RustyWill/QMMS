import React, { useState } from 'react';
import ColorLevels from './components/ColorLevels';

const emptyLevels = { sLevels: ['', '', '', ''], dLevels: ['', '', '', '', ''] };

function App() {
  const [blue, setBlue]     = useState({ ...emptyLevels });
  const [orange, setOrange] = useState({ ...emptyLevels });
  const [black, setBlack]   = useState({ ...emptyLevels });
  const [teal, setTeal]     = useState({ ...emptyLevels });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { blue, orange, black, teal };
    try {
      const res = await fetch('http://localhost:5000/api/levels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('Levels submitted successfully!');
      } else {
        setStatus('Error submitting levels');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network error');
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto' }}>
      <h1>QMMS Trading System</h1>
      <form onSubmit={handleSubmit}>
        <ColorLevels color="blue"   levels={blue}   setLevels={setBlue}   />
        <ColorLevels color="orange" levels={orange} setLevels={setOrange} />
        <ColorLevels color="black"  levels={black}  setLevels={setBlack}  />
        <ColorLevels color="teal"   levels={teal}   setLevels={setTeal}   />
        <button
          type="submit"
          style={{ padding: '0.5em 1em', fontSize: '1em', marginTop: '1em' }}
        >
          Submit Levels
        </button>
      </form>
      {status && <p style={{ marginTop: 16 }}>{status}</p>}
    </div>
  );
}

export default App;
