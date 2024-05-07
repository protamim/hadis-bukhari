import { DynamicContainer } from "@/components/common";
import useBukhari from "@/hooks/useBukhari";

const OherSuchona = async () => {
  const { bukhari } = await useBukhari();
  return (
    <>
      <DynamicContainer
        oddayNo={bukhari?.suchona?.oddayNo}
        pageData={bukhari?.suchona?.data}
        pageName={bukhari?.suchona?.pageName}
      />
    </>
  );
};

export default OherSuchona;
