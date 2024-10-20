'use client';

import { useState } from 'react';

import rewards from './data/rewards';

import GoldCoinIcon from './assets/svg/gold-coin.svg';

import UpgradeShopContainer from './components/UpgradeShopContainer';
import { NavBarContainer } from './components/NavBarContainer';
import { ClickerIcon } from './components/ClickerIcon';
import ClickCounter from './components/ClickCounter';
import Modal from './components/Modal';
import ProgressBar from './components/ProgressBar';

const Home = () => {
  // MOST IMPORTANT STATE
  const [count, setCount] = useState(0);

  const [currentCurrency, setCurrentCurrency] = useState(0);

  const [currentMultiplier, setMultiplier] = useState(1);

  // CLICKER STORAGE
  const [currentClickerStorage, setCurrentClickerStorage] = useState([
    {
      id: 'default_clicker',
      name: 'Gold Coin Clicker',
      description: 'We all need a bit of luck to start!',
      cost: 0,
      IconComponent: GoldCoinIcon,
    },
  ]);

  // WOULD LIKE TO CREDIT @mshll for help with active Clicker , the confetti and the product store alignment

  const [activeClicker, setActiveClicker] = useState(currentClickerStorage[0]);

  const [currentGoalCount, setCurrentGoalCount] = useState(rewards[0].count);

  const [currentRewardDescription, setCurrentRewardDescription] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleActiveClicker = (clicker) => {
    if (currentClickerStorage.includes(clicker)) setActiveClicker(clicker);
  };

  const handleCloseModal = () => setShowModal(false);

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
        clickers={currentClickerStorage}
        handleActiveClicker={handleActiveClicker}
      />

      <UpgradeShopContainer
        setCurrentCurrency={setCurrentCurrency}
        currentCurrency={currentCurrency}
        setMultiplier={setMultiplier}
        currentMultiplier={currentMultiplier}
        setCurrentClickerStorage={setCurrentClickerStorage}
        currentClickerStorage={currentClickerStorage}
      />

      <ClickerIcon
        handleClick={handleClick}
        currentClickerStorage={currentClickerStorage}
        activeClicker={activeClicker}
      />

      <ClickCounter count={count} />

      <ProgressBar progress={progress} nextGoal={nextGoal} count={count} />
    </div>
  );
};

export default Home;
