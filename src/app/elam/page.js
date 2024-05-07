import { DynamicContainer } from "@/components/common";
import useBukhari from "@/hooks/useBukhari";

const Elam = async () => {
  const { bukhari } = await useBukhari();
  return (
    <>
      {bukhari?.elam ? (
        <DynamicContainer
          oddayNo={bukhari?.elam?.oddayNo}
          pageData={bukhari?.elam?.data}
          pageName={bukhari?.elam?.pageName}
        />
      ) : (
        <p className="flex items-center justify-center h-full text-4xl">No data found!</p>
      )}
    </>
  );
};

export default Elam;
