import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { IoIosSearch, IoMdPhoneLandscape, IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <nav className="h-16 flex items-center text-xl justify-between lg:h-20">
      {/* logo */}
      <div className="flex items-center gap-x-5">
        <Link href="#">
          <Image src={logo} width={36} height={36} alt="logo" />
        </Link>
        {/* Hidden for larger devices */}
        <h5 className="text-[#1fa471] text-xl sm:text-3xl sm:font-medium lg:hidden">
          আল হাদিস
        </h5>
        {/* hidden for small */}
        <div className="hidden lg:flex lg:flex-col lg:gap-y-1">
          <h4 className="text-black text-xl font-bold">হাদিস সমূহ</h4>
          <h6 className="text-black text-sm">হাদিস পড়ুন শিখুন এবং জানুন</h6>
        </div>
      </div>
      {/* Header Icons */}
      <div className="flex items-center gap-x-4">
        {/* hidden for lg - Search */}
        <button className="bg-[#ECEEF0] p-2 rounded-lg flex items-center lg:hidden">
          <span className="text-xl text-black">
            <IoIosSearch />
          </span>
        </button>
        {/* hidden for small - seacrh field */}
        <form className="hidden lg:block lg:mr-10">
          <div className="relative h-12">
            <span className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400">
              <IoIosSearch />
            </span>
            <input type="text" placeholder="Search hadith" className="border-2 border-gray-300 rounded-lg h-full w-full pl-8 outline-none text-[1.16]" />
          </div>
        </form>

        {/* Settings */}
        <button className="bg-primary p-2 rounded-lg flex items-center">
          <span className="text-white text-xl lg:text-2xl">
            <IoMdSettings />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
