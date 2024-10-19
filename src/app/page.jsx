'use client';

import { useState } from 'react';

import rewards from './data/rewards';

import UpgradeShopContainer from './components/UpgradeShopContainer';
import CurrentBalance from './components/CurrentBalance';
import { NavBarContainer } from './components/NavBarContainer';
import { ClickerIcon } from './components/ClickerIcon';
import ClickerStorageContainer from './components/ClickerStorageContainer';
import ClickCounter from './components/ClickCounter';
import Modal from './components/Modal';
import ProgressBar from './components/ProgressBar';

const Home = () => {
  const [count, setCount] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(0);

  const [currentMultiplier, setMultiplier] = useState(1);
  const [currentClickerStorage, setCurrentClickerStorage] = useState([]);

  const [currentGoalCount, setCurrentGoalCount] = useState(rewards[0].count);
  const [currentRewardDescription, setCurrentRewardDescription] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false); // Function to close modal

  // Helper Function To Calculate The Percentage
  const calculateProgress = (count, nextGoal) => {
    return nextGoal ? Math.min((count / nextGoal) * 100, 100) : 100;
  };

  // Find the next goal
  const nextGoal = rewards.find((reward) => reward.count > count);

  const progress = calculateProgress(count, nextGoal && nextGoal.count);

  const handleClick = () => {
    setCount((count) => {
      const newCount = count + currentMultiplier;
      let newCurrency = currentCurrency + currentMultiplier;

      // Check if the user reaches a reward
      const reward = rewards.find((reward) => reward.count === newCount);
      if (reward) {
        newCurrency = newCurrency + reward.reward;
        setCurrentRewardDescription(reward.description);
        setShowModal(true);
      }
      setCurrentCurrency(newCurrency);

      // Update the next goal if needed
      const updatedGoal = rewards.find((reward) => reward.count > newCount);
      if (updatedGoal) {
        setCurrentGoalCount(updatedGoal.count);
      }

      return newCount;
    });
  };

  return (
    <div className="mx-auto">
      <Modal
        showModal={showModal}
        currentRewardDescription={currentRewardDescription}
        handleCloseModal={handleCloseModal}
      />

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

      <ProgressBar progress={progress} nextGoal={nextGoal} count={count} />
    </div>
  );
};

export default Home;
