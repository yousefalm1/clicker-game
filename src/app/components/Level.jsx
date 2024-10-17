const Level = ({ levels, currentCurrency, setCurrentCurrency }) => {
  const handleBuyUpgradeClick = (level) => {
    if (currentCurrency >= level.cost) {
      setCurrentCurrency(currentCurrency - level.cost);
    }
  };

  return (
    <>
      {levels.map((level) => (
        <div
          key={level.id}
          className="ms-5 mt-5 flex items-center rounded-3xl text-black px-4"
        >
          <p className="flex-1">{level.description}</p>
          <button
            onClick={() => handleBuyUpgradeClick(level)}
            className={`${
              level.cost <= currentCurrency
                ? 'bg-blue-500 hover:bg-blue-700'
                : 'bg-red-500 hover:bg-red-700'
            } text-white font-bold py-2 px-4 rounded-full w-40 text-center ms-4`}
          >
            ${level.cost}
          </button>
        </div>
      ))}
    </>
  );
};

export default Level;
