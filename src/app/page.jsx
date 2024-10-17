import Image from 'next/image';

const Home = () => {
  return (
    <div className="mx-auto">
      <div className=" flex justify-center mt-56 ">
        <h1 className=" text-7xl ">1</h1>
      </div>

      <div className="flex justify-center">
        <button className="py-5 bg-slate-800 px-8 rounded-full hover:bg-slate-900">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Home;
