import { GrHomeRounded } from "react-icons/gr";
import { FaLinesLeaning } from "react-icons/fa6";
import { LuBookOpen, LuBookmark, LuSend } from "react-icons/lu";

const QuickNavigationBar = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-x-5 py-2 lg:flex-col lg:gap-y-8">
        {/* Home */}
        <button className="group p-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-slate-100 lg:p-4">
          <GrHomeRounded className="text-[1.35rem] text-gray-600 transition-all ease-in-out duration-75 group-hover:stroke-primary group-hover:fill-primary lg:text-[1.6rem]" />
        </button>
        {/* Goto - active */}
        <button className="p-2 rounded-lg bg-primary lg:p-4">
          <FaLinesLeaning className="text-[1.35rem] fill-white lg:text-[1.6rem]" />
        </button>
        {/* Books */}
        <button className="group p-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-slate-100 lg:p-4">
          <LuBookOpen className="text-[1.35rem] text-gray-600 transition-all ease-in-out duration-75 group-hover:stroke-primary group-hover:fill-primary lg:text-[1.6rem]" />
        </button>
        {/* Bookmark */}
        <button className="group p-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-slate-100 lg:p-4">
          <LuBookmark className="text-[1.35rem] text-gray-600 transition-all ease-in-out duration-75 group-hover:stroke-primary group-hover:fill-primary lg:text-[1.6rem]" />
        </button>
        {/* Send */}
        <button className="group p-2 rounded-lg transition-all ease-in-out duration-100 hover:bg-slate-100 lg:p-4">
          <LuSend className="text-[1.35rem] text-gray-600 transition-all ease-in-out duration-75 group-hover:stroke-primary group-hover:fill-primary lg:text-[1.6rem]" />
        </button>
      </div>
    </>
  );
};

export default QuickNavigationBar;
