'use client';

import { useState } from 'react';

import rewards from './data/rewards';
import UpgradeShopContainer from './components/UpgradeShopContainer';
import CurrentBalance from './components/CurrentBalance';
import { NavBarContainer } from './components/NavBarContainer';
import { ClickerIcon } from './components/ClickerIcon';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(0);

  const [currentMultiplier, setMultiplier] = useState(1);

  const handleClick = () => {
    setCount((count) => {
      const newCount = count + currentMultiplier;

      // Check for rewards using newCount
      const reward = rewards.find((reward) => reward.count === newCount);
      if (reward) {
        setCurrentCurrency(
          (currentCurrency) => currentCurrency + reward.reward
        );
      }
      return newCount;
    });
  };
  return (
    <div className="mx-auto">
      <NavBarContainer
        currentCurrency={currentCurrency}
        currentMultiplier={currentMultiplier}
      />
      <UpgradeShopContainer
        setCurrentCurrency={setCurrentCurrency}
        currentCurrency={currentCurrency}
        setMultiplier={setMultiplier}
        currentMultiplier={currentMultiplier}
      />

      <ClickerIcon handleClick={handleClick} />

      <div className=" flex justify-center mt-10  ">
        <h1 className=" text-7xl ">{count}</h1>
      </div>
    </div>
  );
};

export default Home;
