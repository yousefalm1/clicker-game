import rewards from '../data/rewards';

export const Rewards = ({ count }) => {
  return (
    <div className="grid grid-cols-3 gap-6 bg-gray-800 p-6 rounded-lg shadow-lg">
      {rewards.map((reward) => (
        <div
          key={reward.name}
          className={`${
            count >= reward.count ? 'bg-gray-500' : 'bg-gray-700'
          } p-4 rounded-md shadow-md '}`}
        >
          <h1 className="text-lg font-bold text-slate-200 ">{reward.name}</h1>
          <p className="text-base font-medium text-slate-400 ">
            Goal Count:
            <span className="text-slate-300"> {reward.count}</span>
          </p>
          <p className="text-base font-medium text-slate-400">
            Reward:
            <span className="text-slate-300"> {reward.reward}</span>{' '}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Rewards;
