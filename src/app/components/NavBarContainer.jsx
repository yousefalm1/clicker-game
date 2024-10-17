import React from 'react';
import CurrentBalance from './CurrentBalance';
import Multiplier from './Multiplier';

export const NavBarContainer = ({ currentCurrency }) => {
  return (
    <div className="flex justify-between items-center space-x-2 py-6 px-10">
      <Multiplier />
      <CurrentBalance currentCurrency={currentCurrency} />
    </div>
  );
};
