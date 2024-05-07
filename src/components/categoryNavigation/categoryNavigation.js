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
  { id: "১", title: "ওহীর সূচনা অধ্যায়", range: "১ - ৭", path: "/" },
  { id: "২", title: "ঈমান", range: "৮ - ৫৮", path: "/imaan" },
  { id: "৩", title: "ইল্‌ম", range: "৫৯ - ১৩৪", path: "#" },
  { id: "৪", title: "ওজু", range: "১৩৫ - ২৪৭", path: "#" },
  { id: "৫", title: "গোসল", range: "২৪৮ - ২৯৩", path: "#" },
  { id: "৬", title: "হায়েজ", range: "২৯৪ - ৩৩৩", path: "#" },
  { id: "৭", title: "তায়াম্মুম", range: "৩৩৪ - ৩৪৮", path: "#" },
];
