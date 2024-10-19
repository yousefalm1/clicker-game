const UpgradeStore = ({
  levels,
  currentCurrency,
  setCurrentCurrency,
  currentMultiplier,
  setMultiplier,
}) => {
  const handleBuyUpgradeClick = (level) => {
    if (currentCurrency >= level.cost) {
      setCurrentCurrency(currentCurrency - level.cost);
      setMultiplier((c) => c * level.multiplier);
    }
  };

  return (
    <>
      {levels.map((level) => (
        <div
          key={level.id}
          className="mx-6 mt-5 - flex  justify-between w-full rounded-3xl text-black px-4"
        >
          <div className="flex-1 m1-4">
            <p className="text-lg text-zinc-300 font-semibold">{level.name}</p>
            <p className="text-sm text-gray-500">{level.description}</p>
          </div>

          <button
            onClick={() => handleBuyUpgradeClick(level)}
            className={`${
              level.cost <= currentCurrency
                ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                : 'bg-blue-500/[.2] text-white/[.2] cursor-not-allowed'
            }  py-2 px-4 rounded-full w-40 text-center ms-4 font-bold`}
          >
            ${level.cost}
          </button>
        </div>
      ))}
    </>
  );
};

export default UpgradeStore;
