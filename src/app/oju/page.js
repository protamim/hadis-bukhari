import { DynamicContainer } from "@/components/common";
import useBukhari from "@/hooks/useBukhari";

const Oju = async () => {
  const { bukhari } = await useBukhari();
  return (
    <>
      {bukhari?.oju ? (
        <DynamicContainer
          oddayNo={bukhari?.oju?.oddayNo}
          pageData={bukhari?.oju?.data}
          pageName={bukhari?.oju?.pageName}
        />
      ) : (
        <p className="flex items-center justify-center h-full text-4xl">No data found!</p>
      )}
    </>
  );
};

export default Oju;