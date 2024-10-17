'use client';

import { useState } from 'react';

import rewards from './data/rewards';
import UpgradeShopContainer from './components/UpgradeShopContainer';
import CurrentBalance from './components/CurrentBalance';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(0);

  const [multiplier, setMultiplier] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

    const reward = rewards.find((reward) => reward.count === count);
    if (reward) {
      setCurrentCurrency(reward.reward + currentCurrency);
    }
  };

  // const handleLevelClick = () => {
  //   setMultiplier();
  // };

  return (
    <div className="mx-auto">
      <div>
        <CurrentBalance currentCurrency={currentCurrency} />
      </div>

      <UpgradeShopContainer
        setCurrentCurrency={setCurrentCurrency}
        currentCurrency={currentCurrency}
      />

      <div className=" flex justify-center  ">
        <h1 className=" text-7xl ">{count}</h1>
      </div>

      <div className="flex justify-center">
        <button
          class="cursor-pointer transition-all bg-blue-500 text-white px-28 py-4 rounded-lg
          border-blue-600
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          onClick={handleClick}
        >
          Button
        </button>
        {/* <button className="py-5 px-8 rounded-full bg-white my-4 text-black font-bold hover:bg-slate-200">
          Click me
        </button> */}
      </div>
    </div>
  );
};

export default Home;
