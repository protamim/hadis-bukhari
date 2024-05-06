const CategoryNavigation = () => {
  return (
    <>
      {/* For larger devices */}
      <div className="bg-white mx-5 my-6 flex gap-x-5">
        {/* tab */}
        <button>বই</button>
        <button>অধ্যায়</button>
      </div>
    </>
  );
};

export default CategoryNavigation;
