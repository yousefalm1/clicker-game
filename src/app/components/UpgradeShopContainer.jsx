import levels from '../data/levels';
import cosmeticUpgrades from '../data/cosmeticClicker';

import UpgradeStore from './UpgradeStore';
import Tabs from './Tab';
import CosmeticStore from './CosmeticStore';
import { useState } from 'react';

const UpgradeShopContainer = ({
  setCurrentCurrency,
  currentCurrency,
  currentMultiplier,
  setMultiplier,
  setCurrentClickerStorage,
  currentClickerStorage,
}) => {
  const options = ['Upgrade Store', 'Cosmetic Store'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="flex justify-start flex-col mt-[-105px]  w-[577px] h-[664px] rounded-3xl ms-5 py-9 px-3 items-center border-zinc-800/[.4] border-2  bg-zinc-900 ">
      <Tabs
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      {selectedOption === 'Upgrade Store' ? (
        <UpgradeStore
          levels={levels}
          setCurrentCurrency={setCurrentCurrency}
          currentCurrency={currentCurrency}
          currentMultiplier={currentMultiplier}
          setMultiplier={setMultiplier}
        />
      ) : (
        <CosmeticStore
          setCurrentCurrency={setCurrentCurrency}
          currentCurrency={currentCurrency}
          cosmeticUpgrades={cosmeticUpgrades}
          setCurrentClickerStorage={setCurrentClickerStorage}
          currentClickerStorage={currentClickerStorage}
        />
      )}
    </div>
  );
};

export default UpgradeShopContainer;
