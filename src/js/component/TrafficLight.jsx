
import React, { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState('red');

  const handleClick = (clickedColor) => {
    setColor(clickedColor);
  };

  return (
    <div>
      <div className="palo"></div>
      <div className="container">
        <div
        className={`light red ${color === 'red' ? 'active' : ''}`}
        onClick={() => handleClick('red')}
      ></div>
      <div
        className={`light yellow ${color === 'yellow' ? 'active' : ''}`}
        onClick={() => handleClick('yellow')}
      ></div>
      <div
        className={`light green ${color === 'green' ? 'active' : ''}`}
        onClick={() => handleClick('green')}
      ></div>
     </div>
     </div>
  );
}


export default TrafficLight;