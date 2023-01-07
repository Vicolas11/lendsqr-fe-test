import { Dna, Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute z-30 bg-[#00000099] mx-auto top-0 left-0 flex justify-center items-center w-full h-full">
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{ color: "#213f7d" }}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
