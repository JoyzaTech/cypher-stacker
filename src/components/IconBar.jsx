// src/IconBar.js
import React from 'react';

const IconBar = ({ icons, size, color }) => {

  return (
    <div className="icon-bar" style={{
      position: 'absolute',
      bottom: '20px', // Adjust position as needed
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '20px',
      color:'white'
    }}>
      {icons.map((Icon, index) => (
        <div key={index} style={{
          fontSize: size || '30px', 
          color: color || 'white',
        }}>
          {Icon}
        </div>
      ))}
    </div>
  );
};

export default IconBar;
