const CategoryTagItem = ({ name, active }) => {
  return (
    <>
      {active ? (
        <div className="py-1 px-2 text-white bg-second rounded-md tracking-[1px] cursor-pointer">
          {name}
        </div>
      ) : (
        <div className="py-1 px-2 text-black bg-[rgba(221,23,23,0.20)] rounded-md tracking-[1px] cursor-pointer">
          {name}
        </div>
      )}
    </>
  );
};

export default CategoryTagItem;
