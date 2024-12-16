import React from 'react';
import '../styles/logo.css';

const Logo = () => {
  return (
    <div>
      <h1 className="logo">
        <span className="brackets">&lt;&gt;</span><br />
        <span className="cipher">cipher</span><br />
        <span className="stacker">stacker</span><br />
        <span className="brackets">&lt;/&gt;</span>
      </h1>
    </div>
  );
};

export default Logo;