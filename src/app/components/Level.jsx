const Level = ({ levels }) => {
  return (
    <>
      {levels.map((level) => (
        <div key={level.id} className=" ms-5 mt-5 flex items-center gap-3">
          <p>{level.id}</p>
          <p>{level.description}</p>
          <button className=" bg-red-500 py-2 px-5 rounded-2xl">
            Buy upgrade
          </button>
        </div>
      ))}
    </>
  );
};

export default Level;
