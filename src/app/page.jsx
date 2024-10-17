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

  const [multiplier, setMultiplier] = useState(0);
  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
    handleClick(); // This will increment the count and handle the rewards
  };
  const handleClick = () => {
    setCount(count + 1);

    const reward = rewards.find((reward) => reward.count === count);
    if (reward) {
      setCurrentCurrency(reward.reward + currentCurrency);
    }
  };

  return (
    <div className="mx-auto">
      <NavBarContainer currentCurrency={currentCurrency} />

      <UpgradeShopContainer
        setCurrentCurrency={setCurrentCurrency}
        currentCurrency={currentCurrency}
      />

      <div className="flex justify-center">
        <GoldCoinIcon
          width={500}
          height={500}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={`cursor-pointer transition-transform duration-100 ease-in-out -mt-[250px] 
          ${isClicked ? 'scale-95 brightness-90' : 'scale-100'}`}
        />
        {/* <button
          class="cursor-pointer transition-all bg-blue-500 text-white px-28 py-4 rounded-lg
          border-blue-600
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={handleClick}
        >
          Button
        </button> */}
        {/* <button className="py-5 px-8 rounded-full bg-white my-4 text-black font-bold hover:bg-slate-200">
          Click me
        </button> */}
      </div>

      <div className=" flex justify-center mt-10  ">
        <h1 className=" text-7xl ">{count}</h1>
      </div>
    </div>
  );
};

export default Home;
