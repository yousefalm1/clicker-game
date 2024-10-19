import ViewJourneyModal from './ViewJourneyModal';

const ProgressBar = ({ progress, nextGoal, count }) => {
  return (
    <>
      <div className="flex justify-center my-4">
        <div className="w-full max-w-md bg-white rounded-full h-6">
          <div
            className="bg-slate-600 h-6 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <p className="text-center text-slate-300 font-bold ">
        Progress to next goal: {Math.floor(progress)}%
      </p>
      <p className="text-center text-slate-300">
        Next goal at: {nextGoal ? nextGoal.count : 'Max Reached'} clicks
      </p>

      <ViewJourneyModal count={count} />
    </>
  );
};

export default ProgressBar;
