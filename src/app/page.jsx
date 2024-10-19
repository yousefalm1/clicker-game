'use client';

import { useState } from 'react';

import rewards from './data/rewards';

import UpgradeShopContainer from './components/UpgradeShopContainer';
import CurrentBalance from './components/CurrentBalance';
import { NavBarContainer } from './components/NavBarContainer';
import { ClickerIcon } from './components/ClickerIcon';
import ClickerStorageContainer from './components/ClickerStorageContainer';
import ClickCounter from './components/ClickCounter';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(0);

  const [currentMultiplier, setMultiplier] = useState(1);
  const [currentClickerStorage, setCurrentClickerStorage] = useState([]);

  const [currentGoalCount, setCurrentCount] = useState(rewards[0].count);

  // Helper Function To Calculate The Percentage
  const calculateProgress = (count, newGoal) => {
    newGoal ? Math.min((count / newGoal) * 100, 100) : 100;
  };

  //
  const getNextGoal = (currentCount) =>
    rewards.find((reward) => reward.count > currentCount);

  // Calculate Progress Bar

  const handleClick = () => {
    setCount((count) => {
      const newCount = count + currentMultiplier;

      let newCurrency = currentCurrency + currentMultiplier;

      const reward = rewards.find((reward) => reward.count === newCount);
      if (reward) {
        newCurrency = newCurrency + reward.reward;
      }

      setCurrentCurrency(newCurrency);
      return newCount;
    });
  };

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

      <ClickCounter count={count} />

      <div class="flex justify-center">
        <div class="w-full max-w-md bg-gray-200 rounded-full h-6">
          <div class="bg-blue-600 h-6 rounded-full"></div>
          <h1 className=" text-center text-4xl">{currentGoalCount}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
