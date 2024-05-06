import { Divider } from "@chakra-ui/react";
import BookIcon from "./bookIcon";
import Text from "./text";
import HadishCardTop from "./hadishCardTop";
import ArabicText from "./arabicText";
import Bornito from "./bornito";
import OptionsButton from "./optionsButton";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineBookmarkAdd, MdOutlineReport } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";

const OddayCard = ({ item }) => {
  return (
    <>
      {/* Odday Card */}
      <div className="bg-white p-4 rounded-xl flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2 font-semibold">
          <BookIcon />
          <Text className="!font-semibold !text-base">{item?.range}.</Text>
          <Text className="!font-semibold !text-base">অধ্যায়ঃ</Text>
        </div>
        {/* text */}
        <Text className={`${item?.overview ? "!block" : "!hidden"}`}>
          {item?.overview}
        </Text>
        <Divider display={`${item?.overview ? "block" : "none"}`} />
        <Text className={`${item?.bani ? "!block" : "!hidden"}`}>
          {item?.bani}
        </Text>
      </div>
      {/* Hadish Card */}
      <div className="bg-white px-4 py-6 rounded-xl my-4">
        {/* top */}
        <HadishCardTop slNo={item?.hadishNo} type={item?.type} />
        {/* arabic text */}
        <ArabicText>{item?.ayaat}</ArabicText>
        {/* Bornito */}
        <Bornito>{item?.bornito}</Bornito>
        {/* Translation In bengali */}
        <Text className="pb-7">{item?.translation}</Text>
        <Divider />
        {/* Options */}
        <div className="flex items-center w-full justify-center mt-3 gap-x-10">
          {/* Copy */}
          <OptionsButton label="কপি">
            <IoCopyOutline />
          </OptionsButton>
          {/* Bookmark */}
          <OptionsButton label="বুকমার্ক">
            <MdOutlineBookmarkAdd />
          </OptionsButton>
          {/* Share */}
          <OptionsButton label="শেয়ার">
            <CiShare2 />
          </OptionsButton>
          {/* Report */}
          <OptionsButton label="রিপোর্ট">
            <MdOutlineReport />
          </OptionsButton>
          {/* Direct */}
          <OptionsButton label="ডিরেক্ট">
            <FiExternalLink />
          </OptionsButton>
        </div>
      </div>
    </>
  );
};

export default OddayCard;
