const TabButtons = () => {
  return (
    <>
      <div className="flex gap-x-5 justify-between border-b border-gray-300 h-14 w-full">
        {/* tab */}
        <button className="text-2xl bg-white font-medium h-full w-full rounded-tl-xl">বই</button>
        <button className="h-full w-full text-2xl font-medium bg-primary text-white rounded-tr-xl">
          অধ্যায়
        </button>
      </div>
    </>
  );
};

export default TabButtons;
