const ClickersInBag = ({ clickers, handleActiveClicker }) => {
  return (
    <>
      {clickers.map((clicker) => {
        const Icon = clicker.IconComponent;
        return (
          <div
            key={clicker.id}
            className="ms-5 mt-5 mx-auto flex items-center rounded-3xl text-black px-4"
          >
            {Icon ? (
              <Icon className="icon-class w-16 h-16" />
            ) : (
              <div className="w-16 h-16 bg-gray-200" />
            )}
            <div className="flex-1 ml-4">
              <p className="text-xl text-zinc-300 font-semibold">
                {clicker.name}
              </p>
              <p className="text-base text-gray-500">{clicker.description}</p>
            </div>
            <button
              onClick={() => handleActiveClicker(clicker)}
              class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-3xl"
            >
              Equip
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ClickersInBag;
