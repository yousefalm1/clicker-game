const ClickCounter = ({ count }) => {
  return (
    <div className="flex justify-center mt-10">
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-lg">
        {count}
      </h1>
    </div>
  );
};

export default ClickCounter;
