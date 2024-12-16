import React from 'react';

const IconBar = ({ icons, size, color }) => {
  return (
    <div
      className="icon-bar"
      style={{
        position: 'absolute',
        top: '20px', // Move to the top of the page
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
        color: 'white',
      }}
    >
      {icons.map((Icon, index) => (
        <div
          key={index}
          style={{
            fontSize: size || '30px',
            color: color || 'white',
          }}
        >
          {Icon}
        </div>
      ))}
    </div>
  );
};

export default IconBar;