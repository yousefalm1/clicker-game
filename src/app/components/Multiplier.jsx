import React from 'react';

const Multiplier = ({ currentMultiplier }) => {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-yellow-400 tracking-wide uppercase drop-shadow-md glow">
        Multiplier X{currentMultiplier}
      </h1>
    </>
  );
};

export default Multiplier;
