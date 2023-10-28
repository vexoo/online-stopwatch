import React, { useState, useEffect } from 'react';

const TextBox: React.FC = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        padding: '20px'
      }}
    >
      <textarea
        style={{ width: '70%', height: '80%', fontSize: '16px' }}
        placeholder='Type something...'
      />
    </div>
  );
};

export default TextBox;
