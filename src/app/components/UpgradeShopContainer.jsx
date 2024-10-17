import levels from '../data/levels';
import Level from './Level';
import RadioButtons from './Tab';

const UpgradeShopContainer = ({ setCurrentCurrency, currentCurrency }) => {
  return (
    <div className="flex justify-start flex-col  w-max rounded-3xl ms-5 py-9 px-3 items-center border-zinc-800/[.4] border-2  bg-zinc-900 ">
      <RadioButtons />
      <Level
        levels={levels}
        setCurrentCurrency={setCurrentCurrency}
        currentCurrency={currentCurrency}
      />
    </div>
  );
};

export default UpgradeShopContainer;
