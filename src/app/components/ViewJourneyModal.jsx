import React, { useState } from 'react';
import Rewards from './Rewards';

const ViewJourneyModal = ({ count }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex justify-center items-center ">
      <div className="flex space-x-64">
        <button
          onClick={handleOpenModal}
          class="bg-[#292929] border-2 border-[#3e3e3e] rounded-full mt-4 text-white px-14 py-3 text-base hover:border-[#fff] cursor-pointer transition"
        >
          View Your Coding Journey
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-5xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-300">
                Your Coding Journey
              </h2>
              <button
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-1 px-3 rounded"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>

            <Rewards count={count} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewJourneyModal;
