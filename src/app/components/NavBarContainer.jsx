import React, { useState } from 'react';
import CurrentBalance from './CurrentBalance';
import Multiplier from './Multiplier';

export const NavBarContainer = ({
  currentCurrency,
  currentMultiplier,
  clickers,
  handleActiveClicker,
}) => {
  return (
    <div className="flex justify-between items-center space-x-2 py-6 px-10">
      <Multiplier currentMultiplier={currentMultiplier} />

      <CurrentBalance
        currentCurrency={currentCurrency}
        clickers={clickers}
        handleActiveClicker={handleActiveClicker}
      />
    </div>
  );
};

export default NavBarContainer;
