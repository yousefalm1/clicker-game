'use client';

import { useState } from 'react';

import rewards from './data/rewards';
import UpgradeShop from './components/UpgradeShopContainer';
import CurrentBalance from './components/CurrentBalance';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currentCurrency, setCurrency] = useState(0);

  const [level, setLevel] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

    const reward = rewards.find((reward) => reward.count === count);
    if (reward) {
      setCurrency(reward.reward + currentCurrency);
    }
  };

  const handleLevel = () => {};

  return (
    <div className="mx-auto">
      <CurrentBalance currency={currentCurrency} />
      <UpgradeShop />

      <div className=" flex justify-center mt-56 ">
        <h1 className=" text-7xl ">{count}</h1>
      </div>

      <div className="flex justify-center">
        <button
          className="py-5 px-8 rounded-full bg-white my-4 text-black font-bold hover:bg-slate-200"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Home;
