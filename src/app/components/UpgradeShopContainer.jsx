import levels from '../data/levels';
import Level from './Level';

const UpgradeShopContainer = ({ setCurrentCurrency, currentCurrency }) => {
  return (
    <div className="flex justify-start flex-col bg-white w-max rounded-3xl ms-5 py-9 px-3  ">
      <h1 className="ms-9 text-2xl font-bold text-black mt-3">Upgrade Shop</h1>

      <Level
        levels={levels}
        setCurrentCurrency={setCurrentCurrency}
        currentCurrency={currentCurrency}
      />
    </div>
  );
};

export default UpgradeShopContainer;
