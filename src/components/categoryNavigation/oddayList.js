"use client";
import Link from "next/link";
import { useState } from "react";

const OddayList = ({ data }) => {
  const [isActive, setIsActive] = useState(0);

  const handleActive = (index) => {
    setIsActive(index);
  };
  return (
    <>
      {data.map((item, index) => (
        <Link
          key={item.id}
          href={item.path}
          onClick={() => handleActive(index)}
          className={`${
            isActive === index ? "bg-green-100" : "bg-transparent"
          } flex items-start gap-x-3 w-full px-5 py-6 rounded-lg transition-all ease-in-out duration-300 group hover:bg-green-100 hover:cursor-pointer`}
        >
          {/* SL No */}
          <div className="h-12 w-12 sm-max:w-10 xl:w-10  flex items-center justify-center relative">
            <h6
              className={`${
                isActive === index ? "text-white" : "text-gray-500"
              }  group-hover:text-white absolute`}
            >
              {item.id}
            </h6>
            <svg
              className={`${
                isActive === index ? "fill-primary" : "fill-slate-200"
              }  group-hover:fill-primary `}
              width="56"
              height="62"
              viewBox="0 0 56 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
          {/* Contents */}
          <div className="flex items-start flex-col gap-y-1">
            <h5 className="text-lg font-medium">{item.title}</h5>
            <p className="flex items-center gap-x-2 text-gray-400 text-sm">
              <span>হাদিসের রেঞ্জ:</span>
              <span>{item.range}</span>
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default OddayList;
