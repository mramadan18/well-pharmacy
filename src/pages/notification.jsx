import NotifyItem from "@/components/Desktop/Header/NotifyItem";
import HeaderMobile from "@/components/Mobile/HeaderMobile";
import Loading from "@/components/Utilities/Loading";
import { getNotifications } from "@/toolkit/slices/notifications/notificationsSlice";
import { readNotifications } from "@/toolkit/slices/notifications/readNotificationsSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Notification = () => {
  const router = useRouter();
  const { loading, notifications } = useSelector(
    (state) => state.notifications
  );
  const dispatch = useDispatch();

  const handleReadAllNotifications = () => {
    dispatch(readNotifications());
    setTimeout(() => {
      dispatch(getNotifications());
    }, 300);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getNotifications());
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <HeaderMobile title="Notification" />

      <div className="bg-white shadow-[0_18px_40px_0_rgba(0,0,0,0.16)] rounded-lg p-4 mt-4 w-full h-[600px] overflow-y-scroll">
        <div
          className="text-right text-[#2C6ECB] font-semibold tracking-[1px] mb-4 cursor-pointer"
          onClick={handleReadAllNotifications}
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
            {notifications?.results?.length === 0 ? (
              <p className="text-center">Not found notification</p>
            ) : (
              <>
                {notifications?.results?.map((notification) => {
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
                {notifications?.results?.map((notification) => {
                  if (notification.read) {
                    return (
                      <NotifyItem key={notification.id} data={notification} />
                    );
                  }
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Notification;
