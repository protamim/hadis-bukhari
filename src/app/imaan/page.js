import { DynamicContainer } from "@/components/common";
import useBukhari from "@/hooks/useBukhari";

const Imaan = async () => {
  const {bukhari} = await useBukhari();
  return (
    <>
      <DynamicContainer
        oddayNo={bukhari?.imaan?.oddayNo}
        pageData={bukhari?.imaan?.data}
        pageName={bukhari?.imaan?.pageName}
      />
    </>
  );
};

export default Imaan;
