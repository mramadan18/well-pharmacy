import NotifyItem from "./NotifyItem";

const NotifyList = ({ notifyListRef, notifyAllReadRef }) => {
  return (
    <div
      ref={notifyListRef}
      className="absolute top-[40px] right-[10px] bg-white shadow-[0_18px_40px_0_rgba(0,0,0,0.16)] rounded-lg p-4 w-[400px]"
    >
      <div
        ref={notifyAllReadRef}
        className="text-right text-[#2C6ECB] font-semibold tracking-[1px] mb-4 cursor-pointer"
      >
        Make all as read
      </div>
      <h6 className="mb-3 font-semibold tracking-[1px]">New</h6>
      <NotifyItem newNotify={true} />
      <NotifyItem newNotify={true} />
      <NotifyItem newNotify={true} />
      <hr />
      <NotifyItem />
      <NotifyItem />
      <NotifyItem />
      <NotifyItem />
    </div>
  );
};

export default NotifyList;
