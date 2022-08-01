import logo from "../components/Zimages/index/loading_logo.png";

const Spinner = () => {
  return (
    <div className="bg-mblue flex h-screen w-screen justify-center items-center scrollbar-hidden">
      <div className="spinner"></div>
      <img src={logo} className="absolute h-48 z-10" alt="logo" />
    </div>
  );
};

export default Spinner;
