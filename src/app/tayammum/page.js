import { DynamicContainer } from "@/components/common";
import useBukhari from "@/hooks/useBukhari";

const Tayammum = async () => {
  const { bukhari } = await useBukhari();
  return (
    <>
      {bukhari?.tayammum ? (
        <DynamicContainer
          oddayNo={bukhari?.tayammum?.oddayNo}
          pageData={bukhari?.tayammum?.data}
          pageName={bukhari?.tayammum?.pageName}
        />
      ) : (
        <p className="flex items-center justify-center h-full text-4xl">No data found!</p>
      )}
    </>
  );
};

export default Tayammum;