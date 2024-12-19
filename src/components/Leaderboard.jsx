import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]); 

  // **Replace with your actual data fetching logic**
  useEffect(() => {
    // Fetch leaderboard data from an API, database, or local storage
    const fetchData = async () => {
      try {
        // Example: Fetching data from a mock API
        const response = await fetch('/api/leaderboard'); 
        const data = await response.json();
        setLeaderboardData(data); 
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Link to="/leaderboard"><MdLeaderboard className='white-icon'/></Link>,
    <FaUser className='white-icon'/>,
    <FaQuestion className='white-icon'/>,
    <div className="leaderboard-container">
      <header className="leaderboard-header">
        {/* Add content for your top bar here (e.g., logo, title) */}
      </header>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th> 
          </tr>
        </thead>
        <tbody>
          {leaderboardData.slice(0, 10).map((player, index) => ( 
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name || 'Player'}</td> 
              <td>{player.score || 0}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;