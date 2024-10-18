import cosmeticUpgrades from '../data/cosmeticClicker';
import Boxer from '../assets/svg/Boxer.svg';
const CosmeticStore = ({
  setCurrentCurrency,
  currentCurrency,
  onCosmeticUpgradeClick,
}) => {
  return (
    <>
      {cosmeticUpgrades.map((cosmeticUpgrade) => {
        const Icon = cosmeticUpgrade.IconComponent;
        return (
          <div
            key={cosmeticUpgrade.id}
            className="ms-5 mt-5 flex items-center rounded-3xl text-black px-4"
          >
            {/* Render the SVG icon */}
            <Boxer className="w-10 h-10 mr-4" />

            <div className="flex-1">
              <p className="text-lg text-zinc-300 font-semibold">
                {cosmeticUpgrade.name}
              </p>
              <p className="text-sm text-gray-500">
                {cosmeticUpgrade.description}
              </p>
            </div>

            <button
              onClick={() => onCosmeticUpgradeClick(cosmeticUpgrade)}
              className={`${
                cosmeticUpgrade.cost <= currentCurrency
                  ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                  : 'bg-blue-500/[.2] text-white/[.2] cursor-not-allowed'
              } font-bold py-2 px-4 rounded-full w-40 text-center ms-4`}
              disabled={cosmeticUpgrade.cost > currentCurrency}
            >
              ${cosmeticUpgrade.cost}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CosmeticStore;
