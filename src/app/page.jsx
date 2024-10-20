"use client";

import { useState } from "react";

import rewards from "./data/rewards";
import GoldCoinIcon from "./assets/svg/gold-coin.svg";

import UpgradeShopContainer from "./components/UpgradeShopContainer";
import { NavBarContainer } from "./components/NavBarContainer";
import { ClickerIcon } from "./components/ClickerIcon";
import ClickCounter from "./components/ClickCounter";
import Modal from "./components/Modal";
import ProgressBar from "./components/ProgressBar";

const Home = () => {
  const [count, setCount] = useState(0);

  const [currentCurrency, setCurrentCurrency] = useState(500);

  const [currentMultiplier, setMultiplier] = useState(1);

  const [currentClickerStorage, setCurrentClickerStorage] = useState([
    {
      id: "default_clicker",
      name: "Gold Coin Clicker",
      description: "We all need a bit of luck to start!",
      cost: 0,
      IconComponent: GoldCoinIcon,
    },
  ]);

  const [activeClicker, setActiveClicker] = useState(currentClickerStorage[0]);

  const [currentGoalCount, setCurrentGoalCount] = useState(rewards[0].count);

  const [currentRewardDescription, setCurrentRewardDescription] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [backgroundSettings, setBackgroundSettings] = useState("bg-black-500");

  const handleActiveClicker = (clicker) => {
    if (currentClickerStorage.includes(clicker)) setActiveClicker(clicker);
  };

  const handleCloseModal = () => setShowModal(false);

  const calculateProgress = (count, nextGoal) => {
    return nextGoal ? Math.min((count / nextGoal) * 100, 100) : 100;
  };

  const nextGoal = rewards.find((reward) => reward.count > count);

  const progress = calculateProgress(count, nextGoal && nextGoal.count);

  const handleClick = () => {
    setCount((count) => {
      const newCount = count + currentMultiplier;
      let newCurrency = currentCurrency + currentMultiplier;

      const reward = rewards.find((reward) => reward.count === newCount);
      if (reward) {
        newCurrency = newCurrency + reward.reward;
        setCurrentRewardDescription(reward.description);
        setShowModal(true);
      }
      setCurrentCurrency(newCurrency);

      const updatedGoal = rewards.find((reward) => reward.count > newCount);
      if (updatedGoal) {
        setCurrentGoalCount(updatedGoal.count);
      }

      return newCount;
    });
  };

  return (
    <div className={`mx-auto ${backgroundSettings}`}>
      {" "}
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
        // backgroundSettings={backgroundSettings}
        // setBackgroundSettings={setBackgroundSettings}
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
