const ClickersInStorage = ({ clickers }) => {
  return (
    <div className="flex flex-col justify-end min-w-[477px]  rounded-3xl ms-5 mx-5 py-9 px-3 items-center border-zinc-800/[.4] border-2 bg-zinc-900">
      <h1 className="text-2xl font-bold text-slate-300">Cosmetic Chest</h1>
      {clickers.map((item, index) => {
        const Icon = item.IconComponent;

        return (
          <div
            key={index}
            className="ms-5 mt-5 mx-auto flex items-center rounded-3xl text-black px-4 "
          >
            {Icon ? (
              <Icon className="icon-class w-8 h-8" />
            ) : (
              <div className="w-8 h-8 bg-gray-200" />
            )}

            <div className="flex-1 ml-4">
              <p className="text-lg text-zinc-300 font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white cursor-pointer font-bold py-2 px-4 rounded-full w-40 text-center ms-4">
              Equip
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ClickersInStorage;
