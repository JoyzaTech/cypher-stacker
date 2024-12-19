import React from 'react';
import '../styles/TextArea.css'; // Import CSS for styling

const TextArea = ({ width = "300px", height = "150px", backgroundColor = "#3498db", borderRadius = "15px" }) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor,
        borderRadius,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '18px',
      }}
    >
      Rounded Rectangle
    </div>
  );
};

export default TextArea;