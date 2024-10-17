'use client';

import { useState } from 'react';

import levels from './data/levels';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currency, setCurrency] = useState(0);

  const [level, setLevel] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    if (count === 1) {
      setCurrency(10);
    } else if (count === 5) {
      setCurrency((c) => c + 10);
    } else if (count === 10) {
      setCurrency((c) => c + 20);
    } else if (count === 15) {
      setCurrency((c) => c + 30);
    } else if (count === 20) {
      setCurrency((c) => c + 40);
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-end ">
        <h2 className=" text-7xl me-8 mt-5">${currency}</h2>
      </div>
      <div className="flex justify-start flex-col">
        <h1 className="ms-9 text-2xl">levels</h1>

        <div className=" ms-5 mt-5 flex items-center gap-3">
          <p>level 1</p>
          <button className=" bg-red-500 py-2 px-5 rounded-2xl">
            Buy upgrade
          </button>
        </div>
      </div>

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
