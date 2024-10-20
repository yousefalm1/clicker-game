import React, { useState } from "react";
import backgroundsData from "../data/Background";

const BackgroundStore = ({ currentCurrency, setCurrentCurrency }) => {
  const [backgrounds, setBackgrounds] = useState(backgroundsData);
  const [equippedBackground, setEquippedBackground] = useState(null);

  const handleBuyBackground = (background) => {
    if (currentCurrency >= background.cost) {
      setCurrentCurrency(currentCurrency - background.cost);

      setBackgrounds((prevBackgrounds) =>
        prevBackgrounds.map((bg) =>
          bg.id === background.id ? { ...bg, purchased: true } : bg
        )
      );

      setEquippedBackground(background.id);
    }
  };

  const handleEquipBackground = (background) => {
    setEquippedBackground(background.id);
  };

  return (
    <>
      {backgrounds.map((background) => (
        <div
          key={background.id}
          className={`mx-6 mt-5 flex justify-between w-full rounded-3xl text-black px-4 
          ${
            equippedBackground === background.id ? "bg-gray-700" : "bg-gray-800"
          }`}
        >
          <div className="flex-1 ml-4">
            <p className="text-lg text-zinc-300 font-semibold">
              {background.name}
            </p>
            <p className="text-sm text-gray-500">{background.description}</p>
          </div>

          <button
            onClick={() =>
              background.purchased
                ? handleEquipBackground(background)
                : handleBuyBackground(background)
            }
            className={`py-2 px-4 rounded-full w-40 text-center ms-4 font-bold
            ${
              background.cost <= currentCurrency && !background.purchased
                ? "bg-green-500 hover:bg-green-600 text-white"
                : background.purchased
                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                : "bg-blue-500/[.2] text-white/[.2] cursor-not-allowed"
            }`}
          >
            {background.purchased
              ? equippedBackground === background.id
                ? "Equipped"
                : "Equip"
              : `$${background.cost.toLocaleString()}`}
          </button>
        </div>
      ))}
    </>
  );
};

export default BackgroundStore;
