import { IoMenuOutline } from "react-icons/io5";

const MobileCategoryNavigation = () => {
  return (
    <>
      <button className="bg-white p-3 rounded-lg flex items-center gap-x-3 w-full">
        <span className="text-3xl font-semibold">
          <IoMenuOutline />
        </span>
        <p className="text-lg font-medium">সহিহ বুখারী</p>
      </button>
    </>
  );
};

export default MobileCategoryNavigation;
