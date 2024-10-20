import React, { useState } from "react";
import levels from "../data/levels";
import cosmeticUpgrades from "../data/cosmeticClicker";
import UpgradeStore from "./UpgradeStore";
import Tabs from "./Tab";
import CosmeticStore from "./CosmeticStore";
import BackgroundStore from "./BackgroundComponent";
import backgrounds from "../data/Background"; // Import background data

const UpgradeShopContainer = ({
  setCurrentCurrency,
  currentCurrency,
  currentMultiplier,
  setMultiplier,
  setCurrentClickerStorage,
  currentClickerStorage,
}) => {
  const options = ["Upgrade Store", "Cosmetic Store", "Background"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const renderContent = () => {
    switch (selectedOption) {
      case "Upgrade Store":
        return (
          <UpgradeStore
            levels={levels}
            setCurrentCurrency={setCurrentCurrency}
            currentCurrency={currentCurrency}
            currentMultiplier={currentMultiplier}
            setMultiplier={setMultiplier}
          />
        );
      case "Cosmetic Store":
        return (
          <CosmeticStore
            setCurrentCurrency={setCurrentCurrency}
            currentCurrency={currentCurrency}
            cosmeticUpgrades={cosmeticUpgrades}
            setCurrentClickerStorage={setCurrentClickerStorage}
            currentClickerStorage={currentClickerStorage}
          />
        );
      case "Background":
        return (
          <BackgroundStore
            setCurrentCurrency={setCurrentCurrency}
            currentCurrency={currentCurrency}
            backgrounds={backgrounds} // Pass the backgrounds data correctly
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-start flex-col w-[577px] h-[664px] rounded-3xl ms-5 py-9 px-3 items-center border-zinc-800/[.4] border-2 bg-zinc-900">
      <Tabs
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {renderContent()}
    </div>
  );
};

export default UpgradeShopContainer;
