import { breadcrumbBook } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

const Breadcrumb = () => {
  
  return (
    <>
      <div className="flex items-center gap-x-[3px] py-3 px-4 bg-[#FAFBFB] rounded-t-xl text-gray-500">
        <Link href="#">
          <Image
            src={breadcrumbBook}
            width={20}
            height={20}
            alt="breadcrumb"
            className="w-4 h-4"
          />
        </Link>
        <span className="text-xs">
          <MdArrowForwardIos />
        </span>
        <Link
          href="#"
          className="transition-all ease-in-out duration-300 hover:text-green-800"
        >
          Bukhari
        </Link>
        <span className="text-xs">
          <MdArrowForwardIos />
        </span>
        <Link
          href="#"
          className="transition-all ease-in-out duration-300 hover:text-green-800"
        >
          1
        </Link>
      </div>
    </>
  );
};

export default Breadcrumb;
