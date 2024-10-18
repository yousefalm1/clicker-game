import { useState } from 'react';

const RadioButtons = () => {
  const options = ['Upgrade Store', 'Cosmetic Store'];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative flex flex-wrap rounded-lg bg-zinc-800 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] p-1 w-[300px] text-sm  ">
      {options.map((option) => (
        <label key={option} className="flex-auto text-center ">
          <input
            type="radio"
            name="radio"
            value={option}
            checked={selectedOption === option}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="peer hidden"
          />
          <span className="flex cursor-pointer items-center justify-center rounded-lg py-2 text-zinc-200 transition-all duration-150 ease-in-out peer-checked:bg-zinc-600 ">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
