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
          className="ms-5 mt-5 flex items-center rounded-3xl text-black px-4"
        >
          <p className="flex-1 text-zinc-300">{level.description}</p>
          <button
            onClick={() => handleBuyUpgradeClick(level)}
            className={`${
              level.cost <= currentCurrency
                ? 'bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'
                : 'bg-blue-500/[.2] text-white/[.2] cursor-not-allowed'
            }  font-bold py-2 px-4 rounded-full w-40 text-center ms-4`}
          >
            ${level.cost}
          </button>
        </div>
      ))}
    </>
  );
};

export default UpgradeStore;
