const ClickCounter = ({ count }) => {
  return (
    <div className="flex justify-center mt-10 text-slate-200">
      <h1 className="text-8xl font-extrabold ">{count}</h1>
    </div>
  );
};

export default ClickCounter;
