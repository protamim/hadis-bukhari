import { kfgq } from "@/app/layout";

const ArabicText = ({ children, className }) => {
  return (
    <>
      <p
        className={`${kfgq.className} ${className} font-['kfgq'] text-[22px] font-normal text-right leading-[2] my-5`}
        style={{ wordSpacing: "5px" }}
      >
        {children}
      </p>
    </>
  );
};

export default ArabicText;
