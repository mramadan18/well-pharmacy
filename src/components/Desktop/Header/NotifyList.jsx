import { useDispatch, useSelector } from "react-redux";
import NotifyItem from "./NotifyItem";
import { useEffect } from "react";
import { getNotifications } from "@/toolkit/slices/notificationsSlice";
import Loading from "@/components/Utilities/Loading";

const NotifyList = ({ notifyListRef, notifyAllReadRef }) => {
  const { loading, notifications, error } = useSelector(
    (state) => state.notifications
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  return (
    <div
      ref={notifyListRef}
      className="absolute top-[40px] right-[10px] bg-white shadow-[0_18px_40px_0_rgba(0,0,0,0.16)] rounded-lg p-4 w-[400px] h-[600px] overflow-y-scroll"
    >
      <div
        ref={notifyAllReadRef}
        className="text-right text-[#2C6ECB] font-semibold tracking-[1px] mb-4 cursor-pointer"
      >
        Make all as read
      </div>
      <h6 className="mb-3 font-semibold tracking-[1px]">New</h6>
      {loading ? (
        <div className="text-center mx-auto absolute top-10 left-1/2 -translate-x-1/2">
          <Loading />
        </div>
      ) : (
        <>
          {notifications?.results.map((notification) => {
            if (!notification.read) {
              return (
                <NotifyItem
                  key={notification.id}
                  newNotify={true}
                  data={notification}
                />
              );
            }
          })}
          <hr />
          {notifications?.results.map((notification) => {
            if (notification.read) {
              return <NotifyItem key={notification.id} data={notification} />;
            }
          })}
        </>
      )}
    </div>
  );
};

export default NotifyList;
