import React, { useState } from 'react';
import IconBar from './IconBar'; // Import the IconBar component
import Logo from './Logo'; // Import the Logo component
import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import '../styles/PlayPage.css'; // Import the PlayPage CSS file

const PlayPage = () => {
  const customIcons = [
    <MdLeaderboard />,
    <FaUser />,
    <FaQuestion />,
  ];

  const gridWidth = 5; // Number of columns
  const gridHeight = 4; // Number of rows

  // Initialize state for input box values
  const [inputs, setInputs] = useState(
    Array(gridWidth * gridHeight).fill('')
  );

  // Handle input changes and enforce capitalization
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase().replace(' ', '_').slice(0, 1); // Replace space with underscore, uppercase, 1 char
    setInputs(newInputs);
  };

  // Generate the grid with input boxes
  const renderGrid = () => {
    return inputs.map((value, index) => (
      <input
        key={index}
        type="text"
        maxLength={1} /* Allow only one character */
        className="grid-box"
        value={value}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
    ));
  };

  return (
    <div className="play-page">
      {/* Icon bar at the top */}
      <IconBar 
        icons={customIcons} 
        size="20px" 
        color="white" 
      />

      {/* Logo below the IconBar */}
      <Logo />

      {/* Grid of input boxes */}
      <div 
        className="grid-container" 
        style={{ 
          gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
          gridTemplateRows: `repeat(${gridHeight}, auto)`
        }}
      >
        {renderGrid()}
      </div>
    </div>
  );
};

export default PlayPage;