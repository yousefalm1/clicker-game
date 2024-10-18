'use client';

import { useState } from 'react';

import rewards from './data/rewards';

import UpgradeShopContainer from './components/UpgradeShopContainer';
import CurrentBalance from './components/CurrentBalance';
import { NavBarContainer } from './components/NavBarContainer';
import { ClickerIcon } from './components/ClickerIcon';
import ClickerStorageContainer from './components/ClickerStorageContainer';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(500);

  const [currentMultiplier, setMultiplier] = useState(1);
  const [currentClickerStorage, setCurrentClickerStorage] = useState([]);

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

  console.log(currentClickerStorage);
  return (
    <div className="mx-auto">
      <NavBarContainer
        currentCurrency={currentCurrency}
        currentMultiplier={currentMultiplier}
      />
      <ClickerStorageContainer clickers={currentClickerStorage} />

      <UpgradeShopContainer
        setCurrentCurrency={setCurrentCurrency}
        currentCurrency={currentCurrency}
        setMultiplier={setMultiplier}
        currentMultiplier={currentMultiplier}
        setCurrentClickerStorage={setCurrentClickerStorage}
        currentClickerStorage={currentClickerStorage}
      />

      <ClickerIcon handleClick={handleClick} />

      <div className=" flex justify-center mt-10  ">
        <h1 className=" text-7xl ">{count}</h1>
      </div>
    </div>
  );
};

export default Home;
