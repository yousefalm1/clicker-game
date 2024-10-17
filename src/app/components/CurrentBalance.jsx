import MyIcon from '../assets/card.svg';

const CurrentBalance = ({ currentCurrency }) => {
  return (
    <div className="flex justify-end items-center space-x-2 py-6 px-10 ">
      <MyIcon width={60} height={60} className="text-or" />
      <h2 className="text-5xl font-bold text-slate-300   ">
        {currentCurrency}
      </h2>
    </div>
  );
};

export default CurrentBalance;
