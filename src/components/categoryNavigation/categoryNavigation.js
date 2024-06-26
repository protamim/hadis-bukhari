import SeacrhField from "./searchField/searchField";
import OddayList from "./oddayList/oddayList";
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
      <div className="px-4 h-[calc(100vh-280px)] overflow-y-auto custom-scrollbar">
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
  { id: "৩", title: "ইল্‌ম", range: "৫৯ - ১৩৪", path: "/elam" },
  { id: "৪", title: "ওজু", range: "১৩৫ - ২৪৭", path: "/oju" },
  { id: "৫", title: "গোসল", range: "২৪৮ - ২৯৩", path: "/gusol" },
  { id: "৬", title: "হায়েজ", range: "২৯৪ - ৩৩৩", path: "/hayej" },
  { id: "৭", title: "তায়াম্মুম", range: "৩৩৪ - ৩৪৮", path: "/tayammum" },
];
