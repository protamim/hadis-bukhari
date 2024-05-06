import React from "react";

const CategoryTitle = ({ slNo, title }) => {
  return (
    <>
      <div className="flex items-center gap-x-4 bg-white rounded-lg p-4 mb-5">
        <span className="bg-primary flex px-4 py-2 rounded-lg text-white">
          {slNo}
        </span>
        <h4 className="text-xl font-medium">{title}</h4>
      </div>
    </>
  );
};

export default CategoryTitle;
