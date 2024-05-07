import { DynamicContainer } from "@/components/common";
import useBukhari from "@/hooks/useBukhari";

const Hayej = async () => {
  const { bukhari } = await useBukhari();
  return (
    <>
      {bukhari?.hayej ? (
        <DynamicContainer
          oddayNo={bukhari?.hayej?.oddayNo}
          pageData={bukhari?.hayej?.data}
          pageName={bukhari?.hayej?.pageName}
        />
      ) : (
        <p className="flex items-center justify-center h-full text-4xl">No data found!</p>
      )}
    </>
  );
};

export default Hayej;