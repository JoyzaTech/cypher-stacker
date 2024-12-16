import React from 'react';
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

      {/* Main content for the PlayPage */}
      <div className="play-page-content">
        PlayPage Content Goes Here
      </div>
    </div>
  );
};

export default PlayPage;