import { useState } from 'react';
import GoldCoinIcon from '../assets/svg/gold-coin.svg';

export const ClickerIcon = ({
  handleClick,
  currentClickerStorage,
  activeClicker,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  console.log(currentClickerStorage);
  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const Icon = activeClicker.IconComponent;

  return (
    <div className="flex justify-center cursor-pointer mt-[-300px]">
      {Icon && (
        <Icon
          width={500}
          onClick={handleClick}
          height={500}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={`transition-transform duration-100 ease-in-out -mt-[250px] 
            ${isClicked ? 'scale-95 brightness-90' : 'scale-100'}`}
        />
      )}{' '}
      {/* <GoldCoinIcon
        width={500}
        onClick={handleClick}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`transition-transform duration-100 ease-in-out -mt-[250px] 
    ${isClicked ? 'scale-95 brightness-90' : 'scale-100'}`}
      /> */}
    </div>
  );
};
