import { PacmanLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div className="absolute w-full h-full flex items-center justify-center bg-white/70 z-50 top-0 left-0">
        <PacmanLoader color="#00BFFF" size={50} />
      </div>
    </>
  );
};

export default Loading;
