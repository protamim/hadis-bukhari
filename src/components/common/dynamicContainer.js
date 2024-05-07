import { Divider } from "@chakra-ui/react";
import Breadcrumb from "./breadcrumb";
import BookName from "./bookName";
import CategoryTitle from "./categoryTitle";
import OddayCard from "./oddayCard";

const DynamicContainer = ({ pageName, pageData, oddayNo }) => {
  return (
    <>
      <div>
        {/* For larger devices only - breadcrumb card */}
        <div className="bg-white mb-6 rounded-xl hidden xl:block">
          {/* breadcrumb */}
          <Breadcrumb />
          <Divider />
          {/* Book name */}
          <BookName />
        </div>
        {/* category title */}
        <CategoryTitle slNo={oddayNo} title={pageName} />
        {/* All Hadish Odday 1 */}
        {pageData.map((item) => (
          <OddayCard key={item?.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default DynamicContainer;
