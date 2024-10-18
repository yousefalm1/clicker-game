'use client';

import { useState } from 'react';
import TreeIcon from './assets/tree.svg';
import GoldCoinIcon from './assets/gold-coin.svg';

import rewards from './data/rewards';
import UpgradeShopContainer from './components/UpgradeShopContainer';
import CurrentBalance from './components/CurrentBalance';
import { NavBarContainer } from './components/NavBarContainer';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const [currentMultiplier, setMultiplier] = useState(1);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    handleClick();
  };

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

      <div className="flex justify-center cursor-pointer">
        <GoldCoinIcon
          width={500}
          onClick={handleClick}
          height={500}
          onMouseDown={() => handleMouseDown}
          onMouseUp={() => handleMouseUp}
          className={`transition-transform duration-100 ease-in-out -mt-[250px] 
          ${isClicked ? 'scale-95 brightness-90' : 'scale-100'}`}
        />
      </div>

      <div className=" flex justify-center mt-10  ">
        <h1 className=" text-7xl ">{count}</h1>
      </div>
    </div>
  );
};

export default Home;
