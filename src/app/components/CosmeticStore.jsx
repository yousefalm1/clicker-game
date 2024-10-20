const CosmeticStore = ({
  setCurrentCurrency,
  cosmeticUpgrades,
  currentCurrency,
  setCurrentClickerStorage,
  currentClickerStorage,
}) => {
  const handleBuyCosmeticClick = (cosmeticUpgrade) => {
    const alreadyInStorage = currentClickerStorage.some(
      (clicker) => clicker.id == cosmeticUpgrade.id
    );
    if (!alreadyInStorage && currentCurrency >= cosmeticUpgrade.cost) {
      setCurrentClickerStorage((c) => {
        setCurrentCurrency(currentCurrency - cosmeticUpgrade.cost);
        const updateStorage = [...c, cosmeticUpgrade];
        return updateStorage;
      });
    }
  };

  return (
    <>
      {cosmeticUpgrades.map((cosmeticUpgrade) => {
        const alreadyInStorage = currentClickerStorage.some(
          (clicker) => clicker.id == cosmeticUpgrade.id
        );
        const Icon = cosmeticUpgrade.IconComponent;
        return (
          <div
            key={cosmeticUpgrade.id}
            className="mx-6 mt-5 flex  justify-between w-full rounded-3xl text-black px-4 "
          >
            {Icon ? (
              <Icon className="icon-class w-8 h-8" />
            ) : (
              <div className="w-8 h-8 bg-gray-200" />
            )}

            <div className="flex-1 ml-4">
              <p className="text-lg text-zinc-300 font-semibold">
                {cosmeticUpgrade.name}
              </p>
              <p className="text-sm text-gray-500">
                {cosmeticUpgrade.description}
              </p>
            </div>
            <button
              className={`
                ${
                  alreadyInStorage
                    ? 'bg-green-500 hover:bg-green-600 text-white '
                    : cosmeticUpgrade.cost <= currentCurrency
                    ? 'bg-blue-500 hover:bg-blue-600 text-white '
                    : 'bg-blue-500/[.2] text-white/[.2] '
                } font-bold py-2 px-4 rounded-full w-40 text-center ms-4`}
              onClick={() => handleBuyCosmeticClick(cosmeticUpgrade)}
            >
              {alreadyInStorage
                ? 'Owned'
                : `$${cosmeticUpgrade.cost.toLocaleString()}`}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CosmeticStore;
