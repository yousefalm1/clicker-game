const CurrentBalance = ({ currency }) => {
  return (
    <div className="flex justify-end ">
      <h2 className=" text-7xl me-8 mt-5">${currency}</h2>
    </div>
  );
};

export default CurrentBalance;
