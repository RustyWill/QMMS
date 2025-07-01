import React, { useState } from 'react';
const colors = ['Blue','Orange','Black','Teal'];
export default function LevelEntry() {
  const [levels, setLevels] = useState(colors.reduce((a,c)=>{a[c]={solid:Array(4).fill(''),dashed:Array(5).fill('')};return a;},{}));
  const handleChange=(color,type,i)=>(e)=> {
    const copy = {...levels};
    copy[color][type][i] = e.target.value;
    setLevels(copy);
  };
  const handleSubmit=()=> console.log('Submitted levels:', levels);
  return (
    <div className="grid gap-8">
      {colors.map(color=>(
        <div key={color}>
          <h2 className="text-xl">{color} Levels</h2>
          <div className="grid grid-cols-4 gap-2">
            {levels[color].solid.map((v,i)=>
              <input key={i} type="number" placeholder={`S${i+1}`} value={v}
                onChange={handleChange(color,'solid',i)} className="bg-gray-800 p-2 rounded"/>
            )}
          </div>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {levels[color].dashed.map((v,i)=>
              <input key={i} type="number" placeholder={`D${i+1}`} value={v}
                onChange={handleChange(color,'dashed',i)} className="bg-gray-800 p-2 rounded"/>
            )}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} className="mt-4 p-2 rounded bg-blue-600">Submit All Levels</button>
    </div>
  );
}
