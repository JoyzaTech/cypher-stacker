// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Button from './Button';
import Logo from './Logo';
import IconBar from './IconBar';
import { FaUser } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import '../styles/HomePage.css';

const HomePage = () => {
  const customIcons = [
    <Link to="/leaderboard"><MdLeaderboard className='white-icon'/></Link>,
    <FaUser className='white-icon'/>,
    <FaQuestion className='white-icon'/>,
  ];

  return (
    <div className="home-page">
            <IconBar
        icons={customIcons}
        size="20px"
        color="white"
      />
      <Logo />

      {/* Play button, which navigates to /play */}
      <Link to="/play">
        <Button
          text="play"
          onClick={() => {}}
          className="primary-btn"
        />
      </Link>

      {/* Login button */}
      <Button
        text="login"
        onClick={() => alert('Login functionality here!')}
        className="primary-btn"
      />

      {/* Icon bar at the bottom */}

    </div>
  );
};

export default HomePage;