import { DynamicContainer } from "@/components/common";
import useBukhari from "@/hooks/useBukhari";

const Gusol = async () => {
  const { bukhari } = await useBukhari();
  return (
    <>
      {bukhari?.gusol ? (
        <DynamicContainer
          oddayNo={bukhari?.gusol?.oddayNo}
          pageData={bukhari?.gusol?.data}
          pageName={bukhari?.gusol?.pageName}
        />
      ) : (
        <p className="flex items-center justify-center h-full text-4xl">No data found!</p>
      )}
    </>
  );
};

export default Gusol;