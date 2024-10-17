import levels from '../data/levels';
import Level from './Level';

const UpgradeShop = () => {
  return (
    <div className="flex justify-start flex-col">
      <h1 className="ms-9 text-2xl font-bold">Upgrade Shop</h1>
      <Level levels={levels} />
    </div>
  );
};

export default UpgradeShop;
