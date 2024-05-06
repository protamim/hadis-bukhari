import { IoIosSearch } from "react-icons/io";

const SeacrhField = () => {
  return (
    <>
      <form className="px-4 mt-6 mb-4">
        <div className="relative h-12">
          <span className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-500 text-lg">
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Search for filter"
            className="rounded-lg h-full w-full pl-8 outline-none text-[1.16rem] bg-gray-100"
          />
        </div>
      </form>
    </>
  );
};

export default SeacrhField;
