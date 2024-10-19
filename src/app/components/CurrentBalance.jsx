import React, { useState } from 'react';

import CurrencyIcon from '../assets/svg/currencyCoin.svg';
import Bag from '../assets/svg/Bag.svg';

const CurrentBalance = ({ currentCurrency, clickers }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex items-center space-x-2">
      <Bag className="cursor-pointer" onClick={handleOpenModal} />

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-5xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4 text-zinc-300">
                <Bag className="w-20 h-20 text-slate-300" />
                <h2 className="text-3xl font-bold tracking-wide">
                  Your BackPack
                </h2>
              </div>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-3 rounded"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>

            {clickers.map((clicker) => {
              const Icon = clicker.IconComponent;
              return (
                <div
                  key={clicker.id}
                  className="ms-5 mt-5 mx-auto flex items-center rounded-3xl text-black px-4"
                >
                  {Icon ? (
                    <Icon className="icon-class w-20 h-20" />
                  ) : (
                    <div className="w-24 h-24 bg-gray-200" />
                  )}
                  <div className="flex-1 ml-4">
                    <p className="text-xl text-zinc-300 font-semibold">
                      {clicker.name}
                    </p>
                    <p className="text-base text-gray-500">
                      {clicker.description}
                    </p>
                  </div>
                  <button class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-3xl">
                    Equip
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <CurrencyIcon />

      <h2 className="text-5xl font-bold text-slate-300">{currentCurrency}</h2>
    </div>
  );
};

export default CurrentBalance;
