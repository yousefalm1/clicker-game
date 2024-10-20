import React, { useState } from 'react';

import CurrencyIcon from '../assets/svg/currencyCoin.svg';
import Bag from '../assets/svg/Bag.svg';

import ClickersInBag from './ClickersInBag';

const CurrentBalance = ({ currentCurrency, clickers, handleActiveClicker }) => {
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

            <ClickersInBag
              clickers={clickers}
              handleActiveClicker={handleActiveClicker}
            />
          </div>
        </div>
      )}

      <CurrencyIcon />

      <h2 className="text-5xl font-bold text-slate-300">
        {currentCurrency.toLocaleString()}
      </h2>
    </div>
  );
};

export default CurrentBalance;
