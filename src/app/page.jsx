'use client';
import Image from 'next/image';
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="mx-auto">
      <div className=" flex justify-center mt-56 ">
        <h1 className=" text-7xl ">{count}</h1>
      </div>

      <div className="flex justify-center">
        <button
          className="py-5 bg-slate-800 px-8 rounded-full hover:bg-slate-900 my-4"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Home;
