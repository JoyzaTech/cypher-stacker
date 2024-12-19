import React, { useState, useEffect } from 'react';
import CipherGenerator from './CipherGenerator'; 
import IconBar from './IconBar';
import Logo from './Logo';
import { FaUser} from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import cipherData from './data'; 
import { useNavigate, Link } from 'react-router-dom'; 
import '../styles/PlayPage.css';

const PlayPage = () => {
  const customIcons = [
    <Link to="/leaderboard"><MdLeaderboard className='white-icon'/></Link>,
    <FaUser className='white-icon'/>,
    <FaQuestion className='white-icon'/>,
  ];

  const navigate = useNavigate(); 

  const [level, setLevel] = useState(0); // Default level index
  const [currentLevelData, setCurrentLevelData] = useState(null); 

  useEffect(() => {
    const selectedData = cipherData[level]; 
    if (selectedData) {
      setCurrentLevelData(selectedData); 
    }
  }, [level]); // Dependency array includes 'level' to re-run the effect when level changes

  const [inputs, setInputs] = useState(
    () => Array((currentLevelData?.columns || 5) * (currentLevelData?.rows || 4)).fill('')
  ); 

  const [textValues, setTextValues] = useState(['Key: -', 'Cipher: -']);
  const [submission, setSubmission] = useState('');
  const [cipherOutput, setCipherOutput] = useState({ key: [], cipheredWord: '', correctAnswer: '' }); 

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value.toUpperCase(); 
    setInputs(newInputs);
  };

  const handleSubmissionChange = (value) => {
    setSubmission(value.toUpperCase()); 
  };

  const handleCipherGenerated = (data) => {
    setCipherOutput(data); 
    setTextValues([
      `Key: ${data.key.join('')}`,
      `Cipher: ${data.cipheredWord}`,
    ]);
  };

  const handleSubmit = () => {
    if (submission === cipherOutput.correctAnswer) { 
      alert("Correct! Proceeding to the next level...");
      setLevel((prevLevel) => prevLevel + 1); 
      setSubmission(''); 
    } else {
      alert("Incorrect! Try again.");
    }
  };

  const handleQuit = () => {
    navigate('/'); // Navigate to the home page
  };

  const renderGrid = () => {
    return inputs.map((value, index) => (
      <input
        key={index}
        type="text"
        maxLength={1}
        className="grid-box"
        value={value} 
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
    ));
  };

  const renderTextValues = () => (
    <div className="text-area">
      <div className="text-box">
        <p>{textValues[0]}</p>
        <p>{textValues[1]}</p>
      </div>
    </div>
  );

  return (
    <div className="play-page">
      <CipherGenerator 
        id={level} 
        onCipherGenerated={handleCipherGenerated} 
        columns={currentLevelData?.columns || 0} 
        rows={currentLevelData?.rows || 0} 
      /> 
      <IconBar icons={customIcons} size="20px" color="white" />
      <Logo />
      {/* Back button and level field */}
      <div className="back-and-level">
        <input
          type="text"
          className="level-field"
          value={`Level ${level + 1}`} // Display level number as read-only
          readOnly
        />
      </div>
      {renderTextValues()}
      <div 
        className="grid-container" 
        style={{ 
          gridTemplateColumns: `repeat(${currentLevelData?.columns || 5}, 1fr)`, 
          gridTemplateRows: `repeat(${currentLevelData?.rows || 4}, auto)`, 
        }}
      >
        {renderGrid()}
      </div>
      <div className="submission-area">
        <div className="submission-field">
          <input
            type="text"
            className="submission-box"
            value={submission}
            onChange={(e) => handleSubmissionChange(e.target.value)}
            placeholder="Enter your answer"
          />
        </div>
        <div className="button-group">
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          <button className="quit-button" onClick={handleQuit}>
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayPage;