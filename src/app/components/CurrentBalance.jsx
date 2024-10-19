import MyIcon from '../assets/svg/currencyCoin.svg';

const CurrentBalance = ({ currentCurrency }) => {
  return (
    <div className="flex items-center space-x-2">
      <MyIcon width={60} height={60} />
      <h2 className="text-5xl font-bold text-slate-300">{currentCurrency}</h2>
    </div>
  );
};

export default CurrentBalance;
