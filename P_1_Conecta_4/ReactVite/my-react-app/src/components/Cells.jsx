import React from 'react';

const Cell = ({ value, onClick }) => {
  const getColor = () => {
    if (value === 1) return 'red';
    if (value === 2) return 'yellow';
    return 'white';
  };

  return (
    <div
      onClick={onClick}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: getColor(),
        border: '1px solid black',
        display: 'inline-block'
      }}
    ></div>
  );
};

export default Cell;
