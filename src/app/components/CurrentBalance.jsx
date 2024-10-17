import MyIcon from '../../../public/assets/card.svg';

const CurrentBalance = ({ currentCurrency }) => {
  return (
    <div className="flex justify-end items-center space-x-2 me-4 mb-4">
      <MyIcon width={60} height={60} />
      <h2 className="text-7xl font-bold text-white  mt-1 ">
        ${currentCurrency}
      </h2>
    </div>
  );
};

export default CurrentBalance;
