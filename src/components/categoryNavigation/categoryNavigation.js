import SeacrhField from "./searchField";
import OddayList from "./oddayList";
import TabButtons from "./tabButtons/tabButtons";

const CategoryNavigation = () => {
  return (
    <>
      {/* For larger devices */}
      <div className="sticky top-0 bg-white z-40 rounded-t-xl">
        {/* Tab Buttons */}
        <TabButtons />
        {/* Search Field */}
        <SeacrhField />
      </div>
      {/* Odday */}
      <div className="px-4 h-[calc(100vh-280px)] overflow-y-auto">
        <div className="flex items-center flex-col gap-y-2">
          {/* Items */}
          <OddayList data={ODDAY} />
        </div>
      </div>
    </>
  );
};

export default CategoryNavigation;

const ODDAY = [
  { id: "১", title: "ওহীর সূচনা অধ্যায়", range: "১ - ৭" },
  { id: "২", title: "ঈমান", range: "৮ - ৫৮" },
  { id: "৩", title: "ইল্‌ম", range: "৫৯ - ১৩৪" },
  { id: "৪", title: "ওজু", range: "১৩৫ - ২৪৭" },
  { id: "৫", title: "গোসল", range: "২৪৮ - ২৯৩" },
  { id: "৬", title: "হায়েজ", range: "২৯৪ - ৩৩৩" },
  { id: "৭", title: "তায়াম্মুম", range: "৩৩৪ - ৩৪৮" },
];
